(function () {
    "use strict";

    const destinationMap = {
        news: "content/news.js",
        character: "content/characters.js",
        motive: "content/motives.js",
        simulation: "content/simulation.js",
        epiphany: "content/epiphanies.js"
    };

    const variableMap = {
        news: "newsData",
        character: "charactersData",
        motive: "weaponsData",
        simulation: "simulationData",
        epiphany: "epiphanyData"
    };

    const typeLabels = {
        news: "News",
        character: "Character",
        motive: "Motive",
        simulation: "Simulation",
        epiphany: "Epiphany"
    };

    let activeType = "news";
    let editingId = "";
    let editingBaseline = null;
    let lastGenerated = null;
    let lastGeneratedType = "";
    let skillEditingIndex = -1;
    let psycheEditingIndex = -1;

    const selectedFiles = new Map();
    const objectUrls = new Map();
    const sessionData = Object.create(null);
    const sourceSnapshots = Object.create(null);

    const skillSourceSnapshot =
        typeof characterSkillDetailPatchV26 !== "undefined"
            ? clone(characterSkillDetailPatchV26)
            : {};

    const psycheSourceSnapshot =
        typeof characterPsycheDetailPatchV30 !== "undefined"
            ? clone(characterPsycheDetailPatchV30)
            : {};

    const skillWorking = clone(skillSourceSnapshot) || {};
    const psycheWorking = clone(psycheSourceSnapshot) || {};

    function clone(value) {
        return value == null ? value : JSON.parse(JSON.stringify(value));
    }

    function sourceList(type) {
        if (type === "news") return typeof newsData !== "undefined" && Array.isArray(newsData) ? newsData : [];
        if (type === "character") return typeof charactersData !== "undefined" && Array.isArray(charactersData) ? charactersData : [];
        if (type === "motive") return typeof weaponsData !== "undefined" && Array.isArray(weaponsData) ? weaponsData : [];
        if (type === "simulation") return typeof simulationData !== "undefined" && Array.isArray(simulationData) ? simulationData : [];
        if (type === "epiphany") return typeof epiphanyData !== "undefined" && Array.isArray(epiphanyData) ? epiphanyData : [];
        return [];
    }

    function existingList(type) {
        if (!Object.prototype.hasOwnProperty.call(sessionData, type)) {
            const snapshot = clone(sourceList(type)) || [];
            sourceSnapshots[type] = clone(snapshot);
            sessionData[type] = snapshot;
        }
        return sessionData[type];
    }


    function nextNumberedId(prefix, list) {
        const max = list.reduce((highest, item) => {
            const match = String(item && item.id || "").match(new RegExp(`^${prefix}-(\\d+)$`));
            return match ? Math.max(highest, Number(match[1])) : highest;
        }, 0);
        return `${prefix}-${String(max + 1).padStart(3, "0")}`;
    }

    function slugify(value) {
        return String(value || "")
            .normalize("NFD")
            .replace(/[\u0300-\u036f]/g, "")
            .toLowerCase()
            .replace(/[^a-z0-9]+/g, "-")
            .replace(/^-+|-+$/g, "");
    }

    function cleanFileName(name) {
        const raw = String(name || "");
        const dot = raw.lastIndexOf(".");
        const ext = dot >= 0 ? raw.slice(dot).toLowerCase() : "";
        const base = dot >= 0 ? raw.slice(0, dot) : raw;
        return `${slugify(base) || "image"}${ext || ".webp"}`;
    }

    function paragraphs(value) {
        return String(value || "")
            .split(/\n\s*\n/)
            .map(item => item.trim())
            .filter(Boolean);
    }

    function joinParagraphs(value) {
        return Array.isArray(value) ? value.join("\n\n") : "";
    }

    function tags(value) {
        return String(value || "")
            .split(",")
            .map(item => item.trim())
            .filter(Boolean);
    }

    function localized(en, vi) {
        const out = { en: String(en || "").trim() };
        if (String(vi || "").trim()) out.vi = String(vi).trim();
        return out;
    }

    function localText(value, lang) {
        if (typeof value === "string") return value;
        if (!value || typeof value !== "object") return "";
        return value[lang] || value.en || Object.values(value)[0] || "";
    }

    function formFor(type = activeType) {
        return document.querySelector(`[data-studio-form="${type}"]`);
    }

    function formObject(type) {
        const form = formFor(type);
        return Object.fromEntries(new FormData(form).entries());
    }

    function setField(form, name, value) {
        const field = form.elements[name];
        if (!field) return;
        if (field.type === "checkbox") {
            field.checked = Boolean(value);
        } else {
            field.value = value == null ? "" : value;
        }
    }

    function getImagePath(type) {
        const form = formFor(type);
        const field = form.elements.imagePath;
        return field ? String(field.value || "").trim() : "";
    }

    function imageFolder(type) {
        const helper = formFor(type).querySelector(".image-helper");
        return helper ? helper.dataset.imageFolder : "";
    }

    function clearObjectUrl(type) {
        const old = objectUrls.get(type);
        if (old) {
            URL.revokeObjectURL(old);
            objectUrls.delete(type);
        }
    }

    function renderImagePreview(type, src, label) {
        const form = formFor(type);
        const preview = form.querySelector("[data-image-preview]");
        const nameLine = form.querySelector("[data-image-name]");
        if (src) {
            preview.innerHTML = `<img src="${src}" alt="Selected image preview">`;
        } else {
            preview.innerHTML = "<span>No image selected</span>";
        }
        if (nameLine) {
            nameLine.textContent = label || "No local image selected.";
        }
    }

    function currentDisplayName(type, item) {
        if (!item) return "";
        if (type === "news") return `${item.id || "news"} — ${localText(item.title, "en") || "Untitled"}`;
        return `${item.id || "item"} — ${localText(item.name, "en") || item.name || "Untitled"}`;
    }

    function refreshExistingSelect() {
        const select = document.getElementById("existingRecordSelect");
        const list = existingList(activeType);
        select.innerHTML = `<option value="">New ${typeLabels[activeType]}</option>` +
            list.map(item => `<option value="${escapeHtml(item.id)}">${escapeHtml(currentDisplayName(activeType, item))}</option>`).join("");
        if (editingId && list.some(item => item && item.id === editingId)) {
            select.value = editingId;
        }
    }

    function escapeHtml(value) {
        return String(value == null ? "" : value)
            .replace(/&/g, "&amp;")
            .replace(/</g, "&lt;")
            .replace(/>/g, "&gt;")
            .replace(/"/g, "&quot;");
    }

    function setEditMode(id) {
        editingId = id || "";
        const badge = document.getElementById("editModeBadge");
        badge.textContent = editingId ? `EDITING · ${editingId}` : "NEW";
        badge.classList.toggle("editing", Boolean(editingId));
    }

    function resetOutput() {
        lastGenerated = null;
        lastGeneratedType = "";
        document.getElementById("studioOutput").value = "";
        document.getElementById("outputDestination").textContent = "Choose a content type and generate a record.";
        document.getElementById("outputDestination").classList.remove("output-warning");
        document.getElementById("downloadRecord").disabled = true;
        document.getElementById("downloadFullFile").disabled = true;
        document.getElementById("downloadUpdatePackage").disabled = true;
        document.getElementById("recordPreview").innerHTML = `<div class="preview-empty">Generate a record to preview it.</div>`;
        renderCompare(null, null);
        showRecordValidation([], []);
    }

    function newRecord() {
        const form = formFor(activeType);
        form.reset();
        if (activeType === "simulation") setField(form, "observedStatus", "Dichotomy CBT2");
        if (activeType === "epiphany") {
            setField(form, "observedStatus", "Dichotomy CBT2");
            setField(form, "passiveStatus", "Exact passive text pending");
            setField(form, "storyAvailable", true);
        }
        setEditMode("");
        editingBaseline = null;
        document.getElementById("existingRecordSelect").value = "";
        selectedFiles.delete(activeType);
        clearObjectUrl(activeType);
        renderImagePreview(activeType, "", "");
        resetOutput();
    }

    function generateNews(data) {
        const id = String(data.id || "").trim() || nextNumberedId("news", existingList("news"));
        const record = {
            id,
            category: data.category || "news",
            title: localized(data.titleEn, data.titleVi),
            date: data.date || new Date().toISOString().slice(0, 10),
            image: getImagePath("news"),
            description: localized(data.descriptionEn, data.descriptionVi),
            content: {
                en: paragraphs(data.contentEn),
                ...(String(data.contentVi || "").trim() ? { vi: paragraphs(data.contentVi) } : {})
            },
            tags: tags(data.tags)
        };
        if (formFor("news").elements.featured.checked) record.featured = true;
        if (String(data.sourceLabel || "").trim()) record.sourceLabel = String(data.sourceLabel).trim();
        return record;
    }

    function generateCharacter(data) {
        const id = String(data.id || "").trim() || slugify(data.name);
        const image = getImagePath("character");
        const record = {
            id,
            name: String(data.name || "").trim(),
            alias: String(data.alias || "").trim(),
            title: "",
            images: { card: image, splash: image },
            rarity: Number(data.rarity || 5),
            limited: Boolean(formFor("character").elements.limited.checked),
            availability: String(data.availability || "").trim(),
            reactorAttribute: data.reactor || "",
            combatStyle: String(data.combatStyle || "").trim(),
            identity: String(data.identity || "").trim(),
            affiliation: String(data.affiliation || "").trim(),
            occupation: String(data.occupation || "").trim(),
            baseStats: {},
            build: {
                confidence: { en: "", vi: "" },
                motive: { name: "", candidates: [], note: { en: "", vi: "" } },
                simulation: { setName: "", pieces: [], note: { en: "", vi: "" } },
                epiphany: { name: "", note: { en: "", vi: "" } },
                methods: { note: { en: "", vi: "" } },
                statPriority: [],
                notes: []
            },
            skills: [],
            psyches: [],
            description: localized(data.descriptionEn, data.descriptionVi)
        };
        if (String(data.sourceLabel || "").trim()) record.sourceLabel = String(data.sourceLabel).trim();
        return record;
    }

    function generateMotive(data) {
        return {
            id: String(data.id || "").trim() || slugify(data.name),
            name: String(data.name || "").trim(),
            image: getImagePath("motive"),
            rarity: Number(data.rarity || 5),
            limited: Boolean(formFor("motive").elements.limited.checked),
            featured: Boolean(formFor("motive").elements.featured.checked),
            identity: String(data.identity || "").trim(),
            availability: String(data.availability || "").trim(),
            effect: String(data.effect || "").trim(),
            archiveNote: localized(data.noteEn, data.noteVi),
            sourceLabel: String(data.sourceLabel || "").trim()
        };
    }

    function generateSimulation(data) {
        return {
            id: String(data.id || "").trim() || slugify(data.name),
            name: String(data.name || "").trim(),
            image: getImagePath("simulation"),
            type: "Implement Set",
            observedStatus: String(data.observedStatus || "").trim(),
            observedOn: String(data.observedOn || "").trim(),
            fullSetObserved: Boolean(formFor("simulation").elements.fullSetObserved.checked),
            sourceLabel: String(data.sourceLabel || "").trim(),
            slots: [
                { slot: "Head", name: "", verified: false },
                { slot: "Neck", name: "", verified: false },
                { slot: "Secondary Weapon", name: "", verified: false },
                { slot: "Accessory", name: "", verified: false }
            ],
            setEffect: String(data.setEffect || "").trim(),
            setEffectStatus: String(data.setEffectStatus || "").trim(),
            description: localized(data.descriptionEn, data.descriptionVi)
        };
    }

    function generateEpiphany(data) {
        return {
            id: String(data.id || "").trim() || slugify(data.name),
            name: String(data.name || "").trim(),
            image: getImagePath("epiphany"),
            sourceText: String(data.sourceText || "").trim(),
            authorOrigin: String(data.authorOrigin || "").trim(),
            category: String(data.category || "").trim(),
            observedStatus: String(data.observedStatus || "").trim(),
            observedOn: String(data.observedOn || "").trim(),
            passive: String(data.passive || "").trim(),
            storyAvailable: Boolean(formFor("epiphany").elements.storyAvailable.checked),
            passiveStatus: String(data.passiveStatus || "").trim(),
            sourceLabel: String(data.sourceLabel || "").trim()
        };
    }

    function recordFromForm(type) {
        const data = formObject(type);
        if (type === "news") return generateNews(data);
        if (type === "character") return generateCharacter(data);
        if (type === "motive") return generateMotive(data);
        if (type === "simulation") return generateSimulation(data);
        if (type === "epiphany") return generateEpiphany(data);
        return null;
    }

    function mergeEditedRecord(type, generated) {
        if (!editingId) return generated;

        const original = existingList(type).find(item => item && item.id === editingId);
        if (!original) return generated;

        const merged = clone(original);

        if (type === "news") {
            Object.assign(merged, generated);
            if (!generated.featured) delete merged.featured;
            if (!generated.sourceLabel) delete merged.sourceLabel;
            return merged;
        }

        if (type === "character") {
            merged.id = generated.id;
            merged.name = generated.name;
            merged.alias = generated.alias;
            merged.rarity = generated.rarity;
            merged.limited = generated.limited;
            merged.availability = generated.availability;
            merged.reactorAttribute = generated.reactorAttribute;
            merged.combatStyle = generated.combatStyle;
            merged.identity = generated.identity;
            merged.affiliation = generated.affiliation;
            merged.occupation = generated.occupation;
            merged.description = generated.description;

            if (generated.images && (generated.images.card || generated.images.splash)) {
                merged.images = generated.images;
            } else if (!merged.images) {
                merged.images = { card: "", splash: "" };
            }

            if (generated.sourceLabel) merged.sourceLabel = generated.sourceLabel;
            else if (Object.prototype.hasOwnProperty.call(merged, "sourceLabel")) delete merged.sourceLabel;

            return merged;
        }

        if (type === "motive") {
            merged.id = generated.id;
            merged.name = generated.name;
            merged.rarity = generated.rarity;
            merged.limited = generated.limited;
            merged.featured = generated.featured;
            merged.identity = generated.identity;
            merged.availability = generated.availability;
            merged.effect = generated.effect;
            merged.archiveNote = generated.archiveNote;
            merged.sourceLabel = generated.sourceLabel;
            if (generated.image) merged.image = generated.image;
            else if (!Object.prototype.hasOwnProperty.call(merged, "image")) merged.image = "";
            return merged;
        }

        if (type === "simulation") {
            merged.id = generated.id;
            merged.name = generated.name;
            merged.type = generated.type;
            merged.observedStatus = generated.observedStatus;
            merged.observedOn = generated.observedOn;
            merged.fullSetObserved = generated.fullSetObserved;
            merged.sourceLabel = generated.sourceLabel;
            merged.setEffect = generated.setEffect;
            merged.setEffectStatus = generated.setEffectStatus;
            merged.description = generated.description;
            if (generated.image) merged.image = generated.image;
            else if (!Object.prototype.hasOwnProperty.call(merged, "image")) merged.image = "";
            if (!Array.isArray(merged.slots)) merged.slots = generated.slots;
            return merged;
        }

        if (type === "epiphany") {
            Object.assign(merged, generated);
            if (!generated.image && original.image) merged.image = original.image;
            return merged;
        }

        return generated;
    }

    function validateRecord(type, record) {
        const errors = [];
        const warnings = [];
        const list = existingList(type);

        if (!record || !record.id) errors.push("ID is required.");
        if (record && record.id && !/^[a-z0-9][a-z0-9-]*$/.test(record.id)) {
            errors.push("ID must use lowercase letters, numbers and hyphens only.");
        }

        const duplicate = list.find(item => item && item.id === record.id && item.id !== editingId);
        if (duplicate) errors.push(`ID "${record.id}" already exists.`);

        if (type === "news") {
            if (!localText(record.title, "en").trim()) errors.push("English News title is required.");
            if (!record.date) warnings.push("News date is blank.");
            if (record.featured) {
                const otherFeatured = list.filter(item => item && item.featured && item.id !== editingId);
                if (otherFeatured.length) warnings.push(`Another Featured News exists (${otherFeatured.map(item => item.id).join(", ")}). Only the first featured item after sorting will occupy the large panel.`);
            }
        } else if (!String(record.name || "").trim()) {
            errors.push(`${typeLabels[type]} name is required.`);
        }

        const image = type === "character" ? (record.images && record.images.card) : record.image;
        const folder = imageFolder(type);
        if (image && !String(image).startsWith(folder) && !/^https?:\/\//i.test(String(image))) {
            warnings.push(`Image path normally belongs in ${folder}`);
        }
        if (image && /\s/.test(String(image))) warnings.push("Image path contains spaces. Kebab-case filenames are safer on GitHub Pages.");
        if (!image && type === "news") warnings.push("News has no image. This is allowed, but the Home News media area will be empty.");

        if (["character", "motive", "simulation", "epiphany"].includes(type)) {
            const source = record.sourceLabel || "";
            if (!String(source).trim()) warnings.push("Source / verification label is blank. Leave data unverified rather than guessing.");
        }

        if (type === "character" && !record.reactorAttribute) warnings.push("Reactor is blank / pending.");
        if (type === "simulation" && record.fullSetObserved && (!Array.isArray(record.slots) || record.slots.length !== 4)) {
            errors.push("Simulation full-set records must keep the four Implement slots.");
        }

        return { errors, warnings };
    }

    function showRecordValidation(errors, warnings) {
        const box = document.getElementById("recordValidation");
        if (!errors.length && !warnings.length) {
            box.hidden = true;
            box.className = "record-validation";
            box.innerHTML = "";
            return;
        }

        box.hidden = false;
        box.className = `record-validation ${errors.length ? "error" : "warning"}`;
        const items = [
            ...errors.map(item => `<li><strong>Error:</strong> ${escapeHtml(item)}</li>`),
            ...warnings.map(item => `<li><strong>Warning:</strong> ${escapeHtml(item)}</li>`)
        ];
        box.innerHTML = `<strong>${errors.length} error(s), ${warnings.length} warning(s)</strong><ul>${items.join("")}</ul>`;
    }

    function outputRecord(record) {
        return `${JSON.stringify(record, null, 4)},`;
    }

    function applyRecordToSession(type, record) {
        const list = existingList(type);
        const targetId = editingId || record.id;
        const index = list.findIndex(item => item && item.id === targetId);

        if (index >= 0) {
            list[index] = clone(record);
        } else {
            list.push(clone(record));
        }

        editingId = record.id || "";
        refreshExistingSelect();
        renderRecordBrowser();

        const select = document.getElementById("existingRecordSelect");
        if (editingId && select) {
            select.value = editingId;
        }

        setEditMode(editingId);

        if (type === "character") {
            const advancedSelect = document.getElementById("advancedCharacterSelect");
            if (advancedSelect) {
                refreshAdvancedCharacterSelect();
                if ([...advancedSelect.options].some(option => option.value === record.id)) {
                    advancedSelect.value = record.id;
                    refreshSkillVariants();
                    refreshPsycheSelect();
                }
            }
        }
    }

    function completeFileTextFromList(type, list, headerLabel = "working data") {
        const variable = variableMap[type];
        const header = `/* The Detective Archive · Archive Content Studio 3.0
   ${headerLabel}
   Target: ${destinationMap[type]}
   Unknown / unverified Silver Palace values should remain blank. */

`;
        let text = `${header}const ${variable} = ${JSON.stringify(list, null, 4)};
`;

        if (type === "simulation" && typeof simulationSystemInfo !== "undefined") {
            text += `
const simulationSystemInfo = ${JSON.stringify(simulationSystemInfo, null, 4)};
`;
        }

        if (type === "epiphany" && typeof epiphanySystemInfo !== "undefined") {
            const info = clone(epiphanySystemInfo);
            if (info && typeof info === "object" && Object.prototype.hasOwnProperty.call(info, "count")) {
                info.count = list.length;
            }
            text += `
const epiphanySystemInfo = ${JSON.stringify(info, null, 4)};
`;
        }

        return text;
    }

    function fullFileText(type) {
        return completeFileTextFromList(
            type,
            clone(existingList(type)),
            "WORKING EXPORT — review before replacing the website file."
        );
    }

    function backupFileText(type) {
        const original = Object.prototype.hasOwnProperty.call(sourceSnapshots, type)
            ? sourceSnapshots[type]
            : clone(sourceList(type));
        return completeFileTextFromList(
            type,
            clone(original || []),
            "BACKUP OF ORIGINAL DATA LOADED WHEN THIS PAGE OPENED."
        );
    }


    function compactValue(value) {
        if (value == null) return "";
        if (typeof value === "string" || typeof value === "number" || typeof value === "boolean") {
            return String(value);
        }
        const text = JSON.stringify(value, null, 2);
        return text.length > 700 ? `${text.slice(0, 700)}\n…` : text;
    }

    function renderCompare(before, after) {
        const container = document.getElementById("changeCompare");
        const summary = document.getElementById("changeSummary");
        if (!container || !summary) return;

        if (!after) {
            summary.textContent = "Load or generate a record to compare changes.";
            container.innerHTML = `<div class="preview-empty compare-empty">No comparison yet.</div>`;
            return;
        }

        const beforeObject = before && typeof before === "object" ? before : {};
        const keys = Array.from(new Set([
            ...Object.keys(beforeObject),
            ...Object.keys(after)
        ])).sort();

        const changes = keys
            .map(key => {
                const oldValue = beforeObject[key];
                const newValue = after[key];
                const oldJson = JSON.stringify(oldValue);
                const newJson = JSON.stringify(newValue);
                if (oldJson === newJson) return null;
                return {
                    key,
                    oldValue: compactValue(oldValue),
                    newValue: compactValue(newValue),
                    kind: !Object.prototype.hasOwnProperty.call(beforeObject, key)
                        ? "added"
                        : !Object.prototype.hasOwnProperty.call(after, key)
                            ? "removed"
                            : "changed"
                };
            })
            .filter(Boolean);

        if (!changes.length) {
            summary.textContent = "No changes detected.";
            container.innerHTML = `<div class="compare-no-change">This record matches the version loaded into the editor.</div>`;
            return;
        }

        summary.textContent = before ? `${changes.length} field(s) changed.` : `${changes.length} field(s) in this new record.`;
        container.innerHTML = `
            <div class="compare-table-wrap">
                <table class="compare-table">
                    <thead>
                        <tr>
                            <th>Field</th>
                            <th>Before</th>
                            <th>After</th>
                        </tr>
                    </thead>
                    <tbody>
                        ${changes.map(change => `
                            <tr class="compare-${change.kind}">
                                <th>${escapeHtml(change.key)}</th>
                                <td><pre>${escapeHtml(change.oldValue || "—")}</pre></td>
                                <td><pre>${escapeHtml(change.newValue || "—")}</pre></td>
                            </tr>
                        `).join("")}
                    </tbody>
                </table>
            </div>
        `;
    }

    function renderPreview(type, record) {
        const preview = document.getElementById("recordPreview");
        const image = type === "character"
            ? (record.images && (record.images.card || record.images.splash))
            : record.image;
        let title = "";
        let kicker = typeLabels[type];
        let meta = "";
        let body = "";

        if (type === "news") {
            title = localText(record.title, "en") || record.id;
            kicker = `${record.featured ? "FEATURED · " : ""}${record.category || "NEWS"}`;
            meta = record.date || "";
            body = localText(record.description, "en");
        } else if (type === "character") {
            title = record.name || record.id;
            kicker = `${record.rarity || "?"}★ CHARACTER${record.limited ? " · LIMITED" : ""}`;
            meta = [record.reactorAttribute, record.combatStyle, record.identity].filter(Boolean).join(" · ");
            body = localText(record.description, "en");
        } else if (type === "motive") {
            title = record.name || record.id;
            kicker = `${record.rarity || "?"}★ MOTIVE${record.featured ? " · FEATURED" : ""}`;
            meta = [record.identity, record.availability].filter(Boolean).join(" · ");
            body = localText(record.archiveNote, "en") || record.effect;
        } else if (type === "simulation") {
            title = record.name || record.id;
            kicker = "SIMULATION · IMPLEMENT SET";
            meta = [record.observedStatus, record.observedOn].filter(Boolean).join(" · ");
            body = localText(record.description, "en") || record.setEffectStatus;
        } else {
            title = record.name || record.id;
            kicker = "EPIPHANY";
            meta = [record.sourceText, record.authorOrigin, record.category].filter(Boolean).join(" · ");
            body = record.passive || record.passiveStatus;
        }

        const media = image
            ? `<img src="${escapeHtml(image)}" alt="">`
            : `<span>NO IMAGE</span>`;

        preview.innerHTML = `
            <article class="preview-card">
                <div class="preview-media">${media}</div>
                <div class="preview-copy">
                    <p class="preview-kicker">${escapeHtml(kicker)}</p>
                    <h3>${escapeHtml(title)}</h3>
                    <p class="preview-meta">${escapeHtml(meta)}</p>
                    <p>${escapeHtml(body || "No descriptive text yet.")}</p>
                </div>
            </article>
        `;
    }

    function generate(type) {
        const generated = recordFromForm(type);
        if (!generated) return;

        const record = mergeEditedRecord(type, generated);
        const { errors, warnings } = validateRecord(type, record);
        showRecordValidation(errors, warnings);

        const destination = document.getElementById("outputDestination");
        const output = document.getElementById("studioOutput");

        if (errors.length) {
            output.value = "";
            destination.textContent = "Fix the validation errors before exporting.";
            destination.classList.add("output-warning");
            document.getElementById("downloadRecord").disabled = true;
            document.getElementById("downloadFullFile").disabled = true;
            document.getElementById("downloadUpdatePackage").disabled = true;
            renderCompare(editingBaseline, record);
            return;
        }

        lastGenerated = clone(record);
        lastGeneratedType = type;

        applyRecordToSession(type, record);

        output.value = outputRecord(record);
        destination.classList.remove("output-warning");
        destination.textContent = editingBaseline
            ? `Working copy updated for "${record.id}". Export ${destinationMap[type]} when ready.`
            : `New working record "${record.id}" added to ${destinationMap[type]}.`;

        document.getElementById("downloadRecord").disabled = false;
        document.getElementById("downloadFullFile").disabled = false;
        document.getElementById("downloadUpdatePackage").disabled = false;

        renderPreview(type, record);
        renderCompare(editingBaseline, record);
    }

    function downloadBlob(filename, content, mime = "text/javascript;charset=utf-8") {
        const blob = content instanceof Blob ? content : new Blob([content], { type: mime });
        const url = URL.createObjectURL(blob);
        const a = document.createElement("a");
        a.href = url;
        a.download = filename;
        document.body.appendChild(a);
        a.click();
        a.remove();
        setTimeout(() => URL.revokeObjectURL(url), 1000);
    }

    function downloadSelectedImage(type) {
        const file = selectedFiles.get(type);
        if (!file) {
            showRecordValidation([], ["No new local image is selected. Existing website images cannot be downloaded from this button."]);
            return;
        }
        const path = getImagePath(type);
        const filename = path.split("/").filter(Boolean).pop() || cleanFileName(file.name);
        downloadBlob(filename, file, file.type || "application/octet-stream");
    }

    function autoId(type) {
        const form = formFor(type);
        if (type === "news") {
            setField(form, "id", nextNumberedId("news", existingList("news")));
            return;
        }
        const name = String(form.elements.name && form.elements.name.value || "").trim();
        setField(form, "id", slugify(name));
    }

    function loadRecord(type, record, options = {}) {
        const asNew = Boolean(options.asNew);
        editingBaseline = asNew ? null : clone(record);
        const form = formFor(type);
        form.reset();
        selectedFiles.delete(type);
        clearObjectUrl(type);

        if (type === "news") {
            setField(form, "id", record.id);
            setField(form, "date", record.date);
            setField(form, "category", record.category || "news");
            setField(form, "featured", record.featured);
            setField(form, "titleEn", localText(record.title, "en"));
            setField(form, "titleVi", localText(record.title, "vi"));
            setField(form, "descriptionEn", localText(record.description, "en"));
            setField(form, "descriptionVi", localText(record.description, "vi"));
            setField(form, "contentEn", joinParagraphs(record.content && record.content.en));
            setField(form, "contentVi", joinParagraphs(record.content && record.content.vi));
            setField(form, "tags", Array.isArray(record.tags) ? record.tags.join(", ") : "");
            setField(form, "sourceLabel", record.sourceLabel || "");
            setField(form, "imagePath", record.image || "");
        }

        if (type === "character") {
            setField(form, "id", record.id);
            setField(form, "name", localText(record.name, "en") || record.name);
            setField(form, "alias", localText(record.alias, "en") || record.alias);
            setField(form, "rarity", record.rarity || 5);
            setField(form, "availability", record.availability || "");
            setField(form, "limited", record.limited);
            setField(form, "reactor", record.reactorAttribute || "");
            setField(form, "combatStyle", localText(record.combatStyle, "en") || record.combatStyle);
            setField(form, "identity", localText(record.identity, "en") || record.identity);
            setField(form, "affiliation", localText(record.affiliation, "en") || record.affiliation);
            setField(form, "occupation", localText(record.occupation, "en") || record.occupation);
            setField(form, "descriptionEn", localText(record.description, "en"));
            setField(form, "descriptionVi", localText(record.description, "vi"));
            setField(form, "sourceLabel", record.sourceLabel || "");
            setField(form, "imagePath", record.images && (record.images.card || record.images.splash) || "");
        }

        if (type === "motive") {
            setField(form, "id", record.id);
            setField(form, "name", record.name);
            setField(form, "rarity", record.rarity || 5);
            setField(form, "identity", record.identity || "");
            setField(form, "availability", record.availability || "");
            setField(form, "limited", record.limited);
            setField(form, "featured", record.featured);
            setField(form, "effect", record.effect || "");
            setField(form, "noteEn", localText(record.archiveNote, "en"));
            setField(form, "noteVi", localText(record.archiveNote, "vi"));
            setField(form, "sourceLabel", record.sourceLabel || "");
            setField(form, "imagePath", record.image || "");
        }

        if (type === "simulation") {
            setField(form, "id", record.id);
            setField(form, "name", record.name);
            setField(form, "observedStatus", record.observedStatus || "Dichotomy CBT2");
            setField(form, "observedOn", record.observedOn || "");
            setField(form, "fullSetObserved", record.fullSetObserved);
            setField(form, "sourceLabel", record.sourceLabel || "");
            setField(form, "setEffect", record.setEffect || "");
            setField(form, "setEffectStatus", record.setEffectStatus || "");
            setField(form, "descriptionEn", localText(record.description, "en"));
            setField(form, "descriptionVi", localText(record.description, "vi"));
            setField(form, "imagePath", record.image || "");
        }

        if (type === "epiphany") {
            setField(form, "id", record.id);
            setField(form, "name", record.name);
            setField(form, "sourceText", record.sourceText || "");
            setField(form, "authorOrigin", record.authorOrigin || "");
            setField(form, "category", record.category || "");
            setField(form, "observedStatus", record.observedStatus || "Dichotomy CBT2");
            setField(form, "observedOn", record.observedOn || "");
            setField(form, "passive", record.passive || "");
            setField(form, "storyAvailable", record.storyAvailable);
            setField(form, "passiveStatus", record.passiveStatus || "Exact passive text pending");
            setField(form, "sourceLabel", record.sourceLabel || "");
            setField(form, "imagePath", record.image || "");
        }

        const path = getImagePath(type);
        renderImagePreview(type, path, path ? `Existing path: ${path}` : "No image path on this record.");
        setEditMode(asNew ? "" : record.id);

        /*
         * v42.1:
         * Loading an existing record should immediately build its preview
         * and export-ready JavaScript. Previously resetOutput() left the
         * Preview/Output panels empty and both download buttons disabled
         * until Validate & generate was clicked manually.
         */
        resetOutput();
        generate(type);
    }


    function recordTitle(type, record) {
        if (!record) return "";
        if (type === "news") return localText(record.title, "en") || record.id || "Untitled";
        return localText(record.name, "en") || record.name || record.id || "Untitled";
    }

    function recordStatus(type, record) {
        if (!record) return "";
        if (type === "news") {
            return [record.featured ? "FEATURED" : "", record.category || "news", record.date || ""].filter(Boolean).join(" · ");
        }
        if (type === "character") {
            return [`${record.rarity || "?"}★`, record.limited ? "LIMITED" : "", record.reactorAttribute || ""].filter(Boolean).join(" · ");
        }
        if (type === "motive") {
            return [`${record.rarity || "?"}★`, record.limited ? "LIMITED" : "", record.featured ? "FEATURED" : ""].filter(Boolean).join(" · ");
        }
        if (type === "simulation") {
            return [record.observedStatus || "", record.fullSetObserved ? "4/4" : ""].filter(Boolean).join(" · ");
        }
        return [record.category || "", record.observedStatus || ""].filter(Boolean).join(" · ");
    }

    function renderRecordBrowser() {
        const body = document.getElementById("recordTableBody");
        const count = document.getElementById("recordBrowserCount");
        const search = document.getElementById("recordSearch");
        if (!body || !count) return;

        const query = String(search && search.value || "").trim().toLowerCase();
        const list = existingList(activeType);
        const filtered = list.filter(record => {
            const haystack = [
                record && record.id,
                recordTitle(activeType, record),
                recordStatus(activeType, record)
            ].join(" ").toLowerCase();
            return !query || haystack.includes(query);
        });

        body.innerHTML = filtered.length
            ? filtered.map(record => `
                <tr>
                    <td><code>${escapeHtml(record.id || "")}</code></td>
                    <td>${escapeHtml(recordTitle(activeType, record))}</td>
                    <td>${escapeHtml(recordStatus(activeType, record))}</td>
                    <td>
                        <div class="record-row-actions">
                            <button type="button" data-record-action="edit" data-record-id="${escapeHtml(record.id)}">Edit</button>
                            <button type="button" data-record-action="duplicate" data-record-id="${escapeHtml(record.id)}">Duplicate</button>
                            <button type="button" class="danger-button" data-record-action="delete" data-record-id="${escapeHtml(record.id)}">Delete</button>
                        </div>
                    </td>
                </tr>
            `).join("")
            : `<tr><td colspan="4" class="record-table-empty">No matching records.</td></tr>`;

        count.textContent = `${filtered.length} shown · ${list.length} ${typeLabels[activeType]} record(s) in the working copy.`;
    }

    function uniqueDuplicateId(type, sourceId) {
        if (type === "news") return nextNumberedId("news", existingList("news"));
        const base = slugify(`${sourceId || type}-copy`) || `${type}-copy`;
        let candidate = base;
        let number = 2;
        const ids = new Set(existingList(type).map(item => item && item.id));
        while (ids.has(candidate)) {
            candidate = `${base}-${number}`;
            number += 1;
        }
        return candidate;
    }

    function duplicateRecord(type, id) {
        const list = existingList(type);
        const original = list.find(item => item && item.id === id);
        if (!original) return;

        const duplicate = clone(original);
        duplicate.id = uniqueDuplicateId(type, id);

        if (type === "news" && duplicate.featured) {
            delete duplicate.featured;
        }

        list.push(duplicate);
        refreshExistingSelect();
        renderRecordBrowser();

        loadRecord(type, duplicate);
        showRecordValidation([], [`Duplicated "${id}" as "${duplicate.id}" in the working copy. Review the record before exporting.`]);
    }

    function deleteWorkingRecord(type, id) {
        const list = existingList(type);
        const index = list.findIndex(item => item && item.id === id);
        if (index < 0) return;

        const title = recordTitle(type, list[index]);
        const okay = window.confirm(
            `Remove "${title}" (${id}) from the working copy?\n\nThe website file is not changed until you download and replace the complete content file.`
        );
        if (!okay) return;

        list.splice(index, 1);

        if (editingId === id) {
            newRecord();
        }

        refreshExistingSelect();
        renderRecordBrowser();
        showRecordValidation([], [`"${id}" removed from the working copy. Use Download working file to export the deletion.`]);
    }

    function resetWorkingType() {
        sessionData[activeType] = clone(sourceList(activeType)) || [];
        editingBaseline = null;
        newRecord();
        refreshExistingSelect();
        renderRecordBrowser();
        showRecordValidation([], [`${typeLabels[activeType]} working data reset to the version loaded when this page opened.`]);
    }

    function downloadWorkingType() {
        const filename = destinationMap[activeType].split("/").pop();
        downloadBlob(filename, fullFileText(activeType));
    }

    function characterOptions() {
        return existingList("character")
            .map(item => ({
                id: item && item.id || "",
                name: item && (localText(item.name, "en") || item.name) || ""
            }))
            .filter(item => item.id)
            .sort((a, b) => a.name.localeCompare(b.name));
    }

    function syncAdvancedCharacterPanel() {
        const panel = document.getElementById("characterAdvancedPanel");
        if (!panel) return;
        panel.hidden = activeType !== "character";
        if (activeType === "character") {
            refreshAdvancedCharacterSelect();
        }
    }

    function refreshAdvancedCharacterSelect() {
        const select = document.getElementById("advancedCharacterSelect");
        if (!select) return;

        const previous = select.value;
        const options = characterOptions();
        select.innerHTML = options.map(item =>
            `<option value="${escapeHtml(item.id)}">${escapeHtml(item.name || item.id)} · ${escapeHtml(item.id)}</option>`
        ).join("");

        if (previous && options.some(item => item.id === previous)) {
            select.value = previous;
        } else if (editingId && options.some(item => item.id === editingId)) {
            select.value = editingId;
        }

        refreshSkillVariants();
        refreshPsycheSelect();
    }

    function skillNode(characterId, create = false) {
        if (!characterId) return null;
        if (!skillWorking[characterId] && create) {
            skillWorking[characterId] = { skills: [] };
        }
        return skillWorking[characterId] || null;
    }

    function refreshSkillVariants() {
        const characterId = document.getElementById("advancedCharacterSelect").value;
        const variantSelect = document.getElementById("skillVariantSelect");
        const node = skillNode(characterId, false);

        if (node && node.variants && typeof node.variants === "object") {
            const variants = Object.keys(node.variants);
            variantSelect.innerHTML = variants.map(name =>
                `<option value="${escapeHtml(name)}">${escapeHtml(name)}</option>`
            ).join("");
            variantSelect.disabled = false;
        } else {
            variantSelect.innerHTML = `<option value="default">Default skills</option>`;
            variantSelect.disabled = true;
        }

        skillEditingIndex = -1;
        clearSkillForm();
        refreshSkillSelect();
    }

    function activeSkillArray(create = false) {
        const characterId = document.getElementById("advancedCharacterSelect").value;
        const variant = document.getElementById("skillVariantSelect").value || "default";
        const node = skillNode(characterId, create);
        if (!node) return [];

        if (node.variants && typeof node.variants === "object") {
            if (!Array.isArray(node.variants[variant]) && create) {
                node.variants[variant] = [];
            }
            return Array.isArray(node.variants[variant]) ? node.variants[variant] : [];
        }

        if (!Array.isArray(node.skills) && create) {
            node.skills = [];
        }
        return Array.isArray(node.skills) ? node.skills : [];
    }

    function refreshSkillSelect() {
        const select = document.getElementById("skillRecordSelect");
        if (!select) return;
        const skills = activeSkillArray(false);
        select.innerHTML = skills.length
            ? skills.map((skill, index) =>
                `<option value="${index}">${index + 1}. ${escapeHtml(skill.type || "skill")} — ${escapeHtml(skill.name || "Untitled")}</option>`
            ).join("")
            : `<option value="">No skills in this working set</option>`;
    }

    function clearSkillForm() {
        skillEditingIndex = -1;
        [
            "skillName", "skillDescriptionEn", "skillDescriptionVi",
            "skillResourceEn", "skillResourceVi",
            "skillMechanicsEn", "skillMechanicsVi",
            "skillComboEn", "skillComboVi",
            "skillSourceEn", "skillSourceVi"
        ].forEach(id => {
            const field = document.getElementById(id);
            if (field) field.value = "";
        });
        const type = document.getElementById("skillType");
        if (type) type.value = "basicAttack";
    }

    function localizedArrayText(items, lang) {
        return Array.isArray(items)
            ? items.map(item => localText(item, lang)).filter(Boolean).join("\n\n")
            : "";
    }

    function pairLocalizedParagraphs(enText, viText) {
        const en = paragraphs(enText);
        const vi = paragraphs(viText);
        const length = Math.max(en.length, vi.length);
        return Array.from({ length }, (_, index) => {
            const item = { en: en[index] || "" };
            if (vi[index]) item.vi = vi[index];
            return item;
        }).filter(item => item.en || item.vi);
    }

    function loadSkillRecord() {
        const index = Number(document.getElementById("skillRecordSelect").value);
        const skills = activeSkillArray(false);
        const skill = Number.isInteger(index) ? skills[index] : null;
        if (!skill) return;

        skillEditingIndex = index;
        document.getElementById("skillType").value = skill.type || "other";
        document.getElementById("skillName").value = skill.name || "";
        document.getElementById("skillDescriptionEn").value = localText(skill.description, "en");
        document.getElementById("skillDescriptionVi").value = localText(skill.description, "vi");
        document.getElementById("skillResourceEn").value = localText(skill.resource, "en");
        document.getElementById("skillResourceVi").value = localText(skill.resource, "vi");
        document.getElementById("skillMechanicsEn").value = localizedArrayText(skill.mechanics, "en");
        document.getElementById("skillMechanicsVi").value = localizedArrayText(skill.mechanics, "vi");
        document.getElementById("skillComboEn").value = localizedArrayText(skill.combo, "en");
        document.getElementById("skillComboVi").value = localizedArrayText(skill.combo, "vi");
        document.getElementById("skillSourceEn").value = localText(skill.source, "en");
        document.getElementById("skillSourceVi").value = localText(skill.source, "vi");
        showAdvancedStatus(`Loaded skill ${index + 1}: ${skill.name || "Untitled"}.`);
    }

    function saveSkillRecord() {
        const skills = activeSkillArray(true);
        const original = skillEditingIndex >= 0 && skills[skillEditingIndex]
            ? clone(skills[skillEditingIndex])
            : {};

        const name = document.getElementById("skillName").value.trim();
        if (!name) {
            showAdvancedStatus("Skill name is required.", true);
            return;
        }

        const record = original;
        record.type = document.getElementById("skillType").value || "other";
        record.name = name;
        record.description = localized(
            document.getElementById("skillDescriptionEn").value,
            document.getElementById("skillDescriptionVi").value
        );

        const resourceEn = document.getElementById("skillResourceEn").value.trim();
        const resourceVi = document.getElementById("skillResourceVi").value.trim();
        record.resource = resourceEn || resourceVi ? localized(resourceEn, resourceVi) : "";

        record.mechanics = pairLocalizedParagraphs(
            document.getElementById("skillMechanicsEn").value,
            document.getElementById("skillMechanicsVi").value
        );

        record.combo = pairLocalizedParagraphs(
            document.getElementById("skillComboEn").value,
            document.getElementById("skillComboVi").value
        );

        const sourceEn = document.getElementById("skillSourceEn").value.trim();
        const sourceVi = document.getElementById("skillSourceVi").value.trim();
        record.source = sourceEn || sourceVi ? localized(sourceEn, sourceVi) : "";

        if (skillEditingIndex >= 0) {
            skills[skillEditingIndex] = record;
        } else {
            skills.push(record);
            skillEditingIndex = skills.length - 1;
        }

        refreshSkillSelect();
        document.getElementById("skillRecordSelect").value = String(skillEditingIndex);
        showAdvancedStatus(`Saved skill "${name}" to the working Skills file.`);
    }

    function deleteSkillRecord() {
        const skills = activeSkillArray(false);
        const index = Number(document.getElementById("skillRecordSelect").value);
        if (!Number.isInteger(index) || !skills[index]) return;
        if (!window.confirm(`Delete skill "${skills[index].name || "Untitled"}" from the working Skills file?`)) return;
        skills.splice(index, 1);
        clearSkillForm();
        refreshSkillSelect();
        showAdvancedStatus("Skill removed from the working Skills file.");
    }

    function psycheArray(characterId, create = false) {
        if (!characterId) return [];
        if (!Array.isArray(psycheWorking[characterId]) && create) {
            psycheWorking[characterId] = [];
        }
        return Array.isArray(psycheWorking[characterId]) ? psycheWorking[characterId] : [];
    }

    function refreshPsycheSelect() {
        const select = document.getElementById("psycheRecordSelect");
        if (!select) return;
        const characterId = document.getElementById("advancedCharacterSelect").value;
        const list = psycheArray(characterId, false);
        select.innerHTML = list.length
            ? list.map((psyche, index) =>
                `<option value="${index}">${index + 1}. ${escapeHtml(psyche.name || "Untitled")}</option>`
            ).join("")
            : `<option value="">No Psyches in this working set</option>`;
        psycheEditingIndex = -1;
        clearPsycheForm();
    }

    function clearPsycheForm() {
        psycheEditingIndex = -1;
        ["psycheName", "psycheDescriptionEn", "psycheDescriptionVi"].forEach(id => {
            const field = document.getElementById(id);
            if (field) field.value = "";
        });
    }

    function loadPsycheRecord() {
        const characterId = document.getElementById("advancedCharacterSelect").value;
        const list = psycheArray(characterId, false);
        const index = Number(document.getElementById("psycheRecordSelect").value);
        const psyche = Number.isInteger(index) ? list[index] : null;
        if (!psyche) return;

        psycheEditingIndex = index;
        document.getElementById("psycheName").value = psyche.name || "";
        document.getElementById("psycheDescriptionEn").value = localText(psyche.description, "en");
        document.getElementById("psycheDescriptionVi").value = localText(psyche.description, "vi");
        showAdvancedStatus(`Loaded Psyche ${index + 1}: ${psyche.name || "Untitled"}.`);
    }

    function savePsycheRecord() {
        const characterId = document.getElementById("advancedCharacterSelect").value;
        const list = psycheArray(characterId, true);
        const original = psycheEditingIndex >= 0 && list[psycheEditingIndex]
            ? clone(list[psycheEditingIndex])
            : {};

        const name = document.getElementById("psycheName").value.trim();
        if (!name) {
            showAdvancedStatus("Psyche name is required.", true);
            return;
        }

        const record = original;
        record.name = name;
        record.description = localized(
            document.getElementById("psycheDescriptionEn").value,
            document.getElementById("psycheDescriptionVi").value
        );

        if (psycheEditingIndex >= 0) {
            list[psycheEditingIndex] = record;
        } else {
            list.push(record);
            psycheEditingIndex = list.length - 1;
        }

        refreshPsycheSelect();
        document.getElementById("psycheRecordSelect").value = String(psycheEditingIndex);
        showAdvancedStatus(`Saved Psyche "${name}" to the working Psyches file.`);
    }

    function deletePsycheRecord() {
        const characterId = document.getElementById("advancedCharacterSelect").value;
        const list = psycheArray(characterId, false);
        const index = Number(document.getElementById("psycheRecordSelect").value);
        if (!Number.isInteger(index) || !list[index]) return;
        if (!window.confirm(`Delete Psyche "${list[index].name || "Untitled"}" from the working Psyches file?`)) return;
        list.splice(index, 1);
        clearPsycheForm();
        refreshPsycheSelect();
        showAdvancedStatus("Psyche removed from the working Psyches file.");
    }

    function showAdvancedStatus(message, error = false) {
        const box = document.getElementById("advancedStatus");
        if (!box) return;
        box.hidden = false;
        box.className = `record-validation ${error ? "error" : "ok"}`;
        box.textContent = message;
    }

    function skillsFileText(data = skillWorking, label = "WORKING EXPORT") {
        return `/* The Detective Archive · Archive Content Studio 3.0
   CHARACTER SKILLS — ${label}
   Preserve unknown/unverified values rather than guessing.
*/

const characterSkillDetailPatchV26 = ${JSON.stringify(data, null, 4)};
`;
    }

    function psychesFileText(data = psycheWorking, label = "WORKING EXPORT") {
        return `/* The Detective Archive · Archive Content Studio 3.0
   CHARACTER PSYCHES — ${label}
   Preserve unknown/unverified values rather than guessing.
*/

const characterPsycheDetailPatchV30 = ${JSON.stringify(data, null, 4)};
`;
    }

    function crc32(bytes) {
        let crc = 0 ^ -1;
        for (let i = 0; i < bytes.length; i += 1) {
            crc ^= bytes[i];
            for (let bit = 0; bit < 8; bit += 1) {
                crc = (crc >>> 1) ^ (0xEDB88320 & -(crc & 1));
            }
        }
        return (crc ^ -1) >>> 0;
    }

    function little16(value) {
        const out = new Uint8Array(2);
        new DataView(out.buffer).setUint16(0, value, true);
        return out;
    }

    function little32(value) {
        const out = new Uint8Array(4);
        new DataView(out.buffer).setUint32(0, value >>> 0, true);
        return out;
    }

    function concatBytes(parts) {
        const length = parts.reduce((sum, part) => sum + part.length, 0);
        const out = new Uint8Array(length);
        let offset = 0;
        parts.forEach(part => {
            out.set(part, offset);
            offset += part.length;
        });
        return out;
    }

    async function entryBytes(content) {
        if (content instanceof Blob) {
            return new Uint8Array(await content.arrayBuffer());
        }
        return new TextEncoder().encode(String(content));
    }

    async function createStoreZip(entries) {
        const encoder = new TextEncoder();
        const localParts = [];
        const centralParts = [];
        let offset = 0;

        for (const entry of entries) {
            const nameBytes = encoder.encode(entry.name.replace(/^\/+/, ""));
            const data = await entryBytes(entry.content);
            const crc = crc32(data);

            const localHeader = concatBytes([
                little32(0x04034b50),
                little16(20),
                little16(0),
                little16(0),
                little16(0),
                little16(0),
                little32(crc),
                little32(data.length),
                little32(data.length),
                little16(nameBytes.length),
                little16(0),
                nameBytes
            ]);

            const localRecord = concatBytes([localHeader, data]);
            localParts.push(localRecord);

            const centralHeader = concatBytes([
                little32(0x02014b50),
                little16(20),
                little16(20),
                little16(0),
                little16(0),
                little16(0),
                little16(0),
                little32(crc),
                little32(data.length),
                little32(data.length),
                little16(nameBytes.length),
                little16(0),
                little16(0),
                little16(0),
                little16(0),
                little32(0),
                little32(offset),
                nameBytes
            ]);

            centralParts.push(centralHeader);
            offset += localRecord.length;
        }

        const localData = concatBytes(localParts);
        const centralData = concatBytes(centralParts);

        const eocd = concatBytes([
            little32(0x06054b50),
            little16(0),
            little16(0),
            little16(entries.length),
            little16(entries.length),
            little32(centralData.length),
            little32(localData.length),
            little16(0)
        ]);

        return new Blob(
            [localData, centralData, eocd],
            { type: "application/zip" }
        );
    }

    function dateStamp() {
        return new Date().toISOString().slice(0, 10).replace(/-/g, "");
    }

    async function downloadUpdatePackage() {
        if (!lastGeneratedType) return;

        const type = lastGeneratedType;
        const contentPath = destinationMap[type];
        const baseName = contentPath.split("/").pop();
        const entries = [
            {
                name: contentPath,
                content: fullFileText(type)
            },
            {
                name: `backup/${baseName.replace(/\.js$/i, ".backup.js")}`,
                content: backupFileText(type)
            },
            {
                name: "UPDATE_README.txt",
                content:
`The Detective Archive update package

1. Back up your current site folder.
2. Replace ${contentPath} with the file in this ZIP.
3. If an images/ file is included, copy it to the same relative path.
4. Refresh content-manager.html and run Pre-update check.
5. Open the public page and verify the edited record.

Generated: ${new Date().toISOString()}
`
            }
        ];

        const selected = selectedFiles.get(type);
        const imagePath = getImagePath(type);
        if (selected && imagePath && !/^https?:\/\//i.test(imagePath)) {
            entries.push({
                name: imagePath.replace(/^\/+/, ""),
                content: selected
            });
        }

        const zip = await createStoreZip(entries);
        downloadBlob(`tda-${type}-update-${dateStamp()}.zip`, zip, "application/zip");
    }

    async function downloadAdvancedPackage() {
        const entries = [
            {
                name: "content/character-skills.js",
                content: skillsFileText(skillWorking, "WORKING EXPORT")
            },
            {
                name: "content/character-psyches.js",
                content: psychesFileText(psycheWorking, "WORKING EXPORT")
            },
            {
                name: "backup/character-skills.backup.js",
                content: skillsFileText(skillSourceSnapshot, "ORIGINAL BACKUP")
            },
            {
                name: "backup/character-psyches.backup.js",
                content: psychesFileText(psycheSourceSnapshot, "ORIGINAL BACKUP")
            },
            {
                name: "UPDATE_README.txt",
                content:
`The Detective Archive — Skills & Psyches package

Replace only:
- content/character-skills.js
- content/character-psyches.js

Backup copies of the files loaded when Content Manager opened are included in backup/.
Run Pre-update check after replacing the files.
`
            }
        ];
        const zip = await createStoreZip(entries);
        downloadBlob(`tda-character-advanced-${dateStamp()}.zip`, zip, "application/zip");
    }

    function renderDiagnostics() {
        const diag = window.TDAContentDiagnostics || { sections: {}, errors: ["Validator not loaded."], warnings: [] };
        const counts = document.getElementById("diagnosticCounts");
        const status = document.getElementById("diagnosticStatus");
        const ordered = ["News", "Characters", "Motives", "Simulation", "Epiphanies", "Skill characters", "Psyche characters", "Archive updates"];

        counts.innerHTML = ordered.map(name => {
            const section = diag.sections[name] || { count: 0 };
            return `<article><span>${escapeHtml(name)}</span><strong>${Number(section.count || 0)}</strong></article>`;
        }).join("");

        const errors = diag.errors || [];
        const warnings = diag.warnings || [];
        const issues = [...errors, ...warnings];

        status.className = `diagnostic-status ${errors.length ? "bad" : warnings.length ? "warn" : "ok"}`;
        if (!issues.length) {
            status.innerHTML = "No structural content errors detected.";
        } else {
            status.innerHTML = `<strong>${errors.length} error(s), ${warnings.length} warning(s)</strong><ul>${issues.slice(0, 30).map(item => `<li>${escapeHtml(item)}</li>`).join("")}</ul>`;
        }
    }

    function switchType(type) {
        activeType = type;
        document.querySelectorAll("[data-studio-tab]").forEach(item => item.classList.toggle("active", item.dataset.studioTab === type));
        document.querySelectorAll("[data-studio-form]").forEach(form => form.classList.toggle("active", form.dataset.studioForm === type));
        setEditMode("");
        editingBaseline = null;
        resetOutput();
        refreshExistingSelect();
        renderRecordBrowser();
        syncAdvancedCharacterPanel();
    }

    document.querySelectorAll("[data-studio-tab]").forEach(button => {
        button.addEventListener("click", () => switchType(button.dataset.studioTab));
    });

    document.querySelectorAll("[data-auto-id]").forEach(button => {
        button.addEventListener("click", () => autoId(button.dataset.autoId));
    });

    document.querySelectorAll("[data-generate]").forEach(button => {
        button.addEventListener("click", () => generate(button.dataset.generate));
    });

    document.querySelectorAll(".image-helper").forEach(helper => {
        const form = helper.closest("[data-studio-form]");
        const type = form.dataset.studioForm;
        const fileInput = helper.querySelector('input[name="imageFile"]');
        const pathInput = helper.querySelector('input[name="imagePath"]');
        const downloadButton = helper.querySelector("[data-download-image]");

        fileInput.addEventListener("change", () => {
            const file = fileInput.files && fileInput.files[0];
            clearObjectUrl(type);
            if (!file) {
                selectedFiles.delete(type);
                renderImagePreview(type, pathInput.value.trim(), pathInput.value.trim() ? `Existing path: ${pathInput.value.trim()}` : "");
                return;
            }

            selectedFiles.set(type, file);
            const safeName = cleanFileName(file.name);
            const path = `${helper.dataset.imageFolder}${safeName}`;
            pathInput.value = path;

            const url = URL.createObjectURL(file);
            objectUrls.set(type, url);
            renderImagePreview(type, url, `Upload as: ${path}`);
        });

        pathInput.addEventListener("input", () => {
            if (!selectedFiles.get(type)) {
                renderImagePreview(type, pathInput.value.trim(), pathInput.value.trim() ? `Path: ${pathInput.value.trim()}` : "");
            }
        });

        downloadButton.addEventListener("click", () => downloadSelectedImage(type));
    });

    document.getElementById("loadExisting").addEventListener("click", () => {
        const id = document.getElementById("existingRecordSelect").value;
        if (!id) {
            newRecord();
            return;
        }
        const record = existingList(activeType).find(item => item && item.id === id);
        if (record) loadRecord(activeType, record);
    });

    document.getElementById("newRecord").addEventListener("click", newRecord);

    document.getElementById("copyOutput").addEventListener("click", async () => {
        const value = document.getElementById("studioOutput").value;
        if (!value) return;
        try {
            await navigator.clipboard.writeText(value);
        } catch (_) {
            const output = document.getElementById("studioOutput");
            output.select();
            document.execCommand("copy");
        }
    });

    document.getElementById("downloadRecord").addEventListener("click", () => {
        if (!lastGenerated || !lastGeneratedType) return;
        downloadBlob(`${lastGenerated.id || lastGeneratedType}-record.js`, outputRecord(lastGenerated));
    });

    document.getElementById("downloadFullFile").addEventListener("click", () => {
        if (!lastGenerated || !lastGeneratedType) return;
        const filename = destinationMap[lastGeneratedType].split("/").pop();
        downloadBlob(filename, fullFileText(lastGeneratedType));
    });


    document.getElementById("recordSearch").addEventListener("input", renderRecordBrowser);

    document.getElementById("recordTableBody").addEventListener("click", event => {
        const button = event.target.closest("[data-record-action]");
        if (!button) return;
        const action = button.dataset.recordAction;
        const id = button.dataset.recordId;
        if (action === "edit") {
            const record = existingList(activeType).find(item => item && item.id === id);
            if (record) loadRecord(activeType, record);
        } else if (action === "duplicate") {
            duplicateRecord(activeType, id);
        } else if (action === "delete") {
            deleteWorkingRecord(activeType, id);
        }
    });

    document.getElementById("downloadWorkingFile").addEventListener("click", downloadWorkingType);
    document.getElementById("resetWorkingChanges").addEventListener("click", resetWorkingType);

    document.getElementById("downloadBackup").addEventListener("click", () => {
        const filename = destinationMap[activeType].split("/").pop().replace(/\.js$/i, ".backup.js");
        downloadBlob(filename, backupFileText(activeType));
    });

    document.getElementById("downloadUpdatePackage").addEventListener("click", () => {
        downloadUpdatePackage().catch(error => {
            console.error(error);
            showRecordValidation(["Could not create update ZIP."], []);
        });
    });

    document.getElementById("advancedCharacterSelect").addEventListener("change", () => {
        refreshSkillVariants();
        refreshPsycheSelect();
    });

    document.getElementById("skillVariantSelect").addEventListener("change", () => {
        clearSkillForm();
        refreshSkillSelect();
    });

    document.getElementById("newSkillRecord").addEventListener("click", clearSkillForm);
    document.getElementById("loadSkillRecord").addEventListener("click", loadSkillRecord);
    document.getElementById("saveSkillRecord").addEventListener("click", saveSkillRecord);
    document.getElementById("deleteSkillRecord").addEventListener("click", deleteSkillRecord);
    document.getElementById("downloadSkillsFile").addEventListener("click", () => {
        downloadBlob("character-skills.js", skillsFileText());
    });

    document.getElementById("newPsycheRecord").addEventListener("click", clearPsycheForm);
    document.getElementById("loadPsycheRecord").addEventListener("click", loadPsycheRecord);
    document.getElementById("savePsycheRecord").addEventListener("click", savePsycheRecord);
    document.getElementById("deletePsycheRecord").addEventListener("click", deletePsycheRecord);
    document.getElementById("downloadPsychesFile").addEventListener("click", () => {
        downloadBlob("character-psyches.js", psychesFileText());
    });

    document.getElementById("downloadAdvancedPackage").addEventListener("click", () => {
        downloadAdvancedPackage().catch(error => {
            console.error(error);
            showAdvancedStatus("Could not create Skills + Psyches ZIP.", true);
        });
    });

    document.getElementById("refreshDiagnostics").addEventListener("click", renderDiagnostics);

    refreshExistingSelect();
    renderRecordBrowser();
    syncAdvancedCharacterPanel();
    renderDiagnostics();
})();