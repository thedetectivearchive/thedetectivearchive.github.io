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
        news: "Tin tức",
        character: "Nhân vật",
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

    const translationLanguages = [
        { code: "vi", label: "VI", name: "Tiếng Việt" },
        { code: "th", label: "TH", name: "Tiếng Thái" },
        { code: "ja", label: "JA", name: "Tiếng Nhật" },
        { code: "zh-CN", label: "ZH", name: "Tiếng Trung giản thể" },
        { code: "ko", label: "KO", name: "Tiếng Hàn" },
        { code: "fr", label: "FR", name: "Tiếng Pháp" },
        { code: "es", label: "ES", name: "Tiếng Tây Ban Nha" },
        { code: "ru", label: "RU", name: "Tiếng Nga" }
    ];

    const translationCollectionMap = {
        news: "news",
        character: "characters",
        motive: "motives",
        simulation: "simulation",
        epiphany: "epiphanies"
    };

    const translationPlainFields = {
        news: [],
        character: [],
        motive: ["effect"],
        simulation: ["setEffect", "setEffectStatus"],
        epiphany: ["category", "passive", "passiveStatus"]
    };

    function emptyTranslationStore() {
        const store = {};
        translationLanguages.forEach(function (language) {
            store[language.code] = {
                characters: {},
                motives: {},
                simulation: {},
                epiphanies: {},
                news: {}
            };
        });
        return store;
    }

    const translationSourceSnapshot = Object.assign(
        emptyTranslationStore(),
        clone(window.ArchiveContentTranslations || {}) || {}
    );
    let translationWorking = clone(translationSourceSnapshot) || emptyTranslationStore();
    let translationActiveType = "news";
    let translationActiveLanguage = "vi";
    let translationEditorFields = [];

    const SCHEDULE_TIMEZONE = "Asia/Ho_Chi_Minh";
    const SCHEDULE_OFFSET = "+07:00";
    const SCHEDULE_VERSION = 1;

    function emptyScheduleStore() {
        return {
            version: SCHEDULE_VERSION,
            timezone: SCHEDULE_TIMEZONE,
            items: []
        };
    }

    const scheduleSourceSnapshot = clone(window.ArchivePublishSchedule || emptyScheduleStore()) || emptyScheduleStore();
    let scheduleWorking = clone(scheduleSourceSnapshot) || emptyScheduleStore();
    if (!Array.isArray(scheduleWorking.items)) scheduleWorking.items = [];

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
            preview.innerHTML = `<img src="${src}" alt="Xem trước ảnh đã chọn">`;
        } else {
            preview.innerHTML = "<span>Chưa chọn ảnh</span>";
        }
        if (nameLine) {
            nameLine.textContent = label || "Chưa chọn ảnh cục bộ.";
        }
    }

    function currentDisplayName(type, item) {
        if (!item) return "";
        if (type === "news") return `${item.id || "news"} — ${localText(item.title, "en") || "Chưa đặt tên"}`;
        return `${item.id || "item"} — ${localText(item.name, "en") || item.name || "Chưa đặt tên"}`;
    }

    function refreshExistingSelect() {
        const select = document.getElementById("existingRecordSelect");
        const list = existingList(activeType);
        select.innerHTML = `<option value="">${typeLabels[activeType]} mới</option>` +
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

    function translationCollectionName(type) {
        return translationCollectionMap[type] || "";
    }

    function ensureTranslationLanguage(language) {
        if (!translationWorking[language] || typeof translationWorking[language] !== "object") {
            translationWorking[language] = {};
        }
        Object.values(translationCollectionMap).forEach(function (collection) {
            if (!translationWorking[language][collection] || typeof translationWorking[language][collection] !== "object") {
                translationWorking[language][collection] = {};
            }
        });
        return translationWorking[language];
    }

    function isLocalizedTranslationObject(value) {
        if (!value || typeof value !== "object" || Array.isArray(value)) return false;
        return Object.prototype.hasOwnProperty.call(value, "en") ||
            translationLanguages.some(function (language) {
                return Object.prototype.hasOwnProperty.call(value, language.code);
            });
    }

    function translationValueHasContent(value) {
        if (Array.isArray(value)) {
            return value.some(function (item) {
                return String(item == null ? "" : item).trim();
            });
        }
        return String(value == null ? "" : value).trim().length > 0;
    }

    function translationValueToText(value) {
        if (Array.isArray(value)) {
            return value.map(function (item) {
                return String(item == null ? "" : item).trim();
            }).filter(Boolean).join("\n\n");
        }
        return String(value == null ? "" : value);
    }

    function translationTextToValue(text, kind) {
        const value = String(text || "").trim();
        if (!value) return kind === "array" ? [] : "";
        if (kind === "array") return paragraphs(value);
        return value;
    }

    const translationFieldLabelsVi = {
        title: "Tiêu đề",
        description: "Mô tả",
        content: "Nội dung",
        archiveNote: "Ghi chú kho lưu trữ",
        effect: "Hiệu ứng",
        setEffect: "Hiệu ứng bộ",
        setEffectStatus: "Trạng thái hiệu ứng bộ",
        category: "Danh mục",
        passive: "Passive",
        passiveStatus: "Trạng thái passive",
        sourceText: "Nguồn văn học",
        authorOrigin: "Tác giả / nguồn gốc",
        mechanics: "Cơ chế",
        combo: "Combo",
        resource: "Tài nguyên",
        source: "Nguồn"
    };

    function translationFieldLabel(path) {
        return path.map(function (part) {
            if (typeof part === "number") return `#${part + 1}`;
            const key = String(part);
            if (translationFieldLabelsVi[key]) return translationFieldLabelsVi[key];
            return key
                .replace(/([a-z0-9])([A-Z])/g, "$1 $2")
                .replace(/[_-]+/g, " ")
                .replace(/^./, function (letter) { return letter.toUpperCase(); });
        }).join(" › ");
    }

    function collectTranslationFields(type, record) {
        const fields = [];

        function visit(value, path) {
            if (isLocalizedTranslationObject(value)) {
                const english = value.en;
                if (translationValueHasContent(english)) {
                    fields.push({
                        path: path.slice(),
                        label: translationFieldLabel(path),
                        kind: Array.isArray(english) ? "array" : "string",
                        english: clone(english),
                        baseLocalized: value,
                        promotedPlain: false
                    });
                }
                return;
            }

            if (Array.isArray(value)) {
                value.forEach(function (item, index) {
                    if (item && typeof item === "object") visit(item, path.concat(index));
                });
                return;
            }

            if (value && typeof value === "object") {
                Object.keys(value).forEach(function (key) {
                    visit(value[key], path.concat(key));
                });
            }
        }

        visit(record, []);

        (translationPlainFields[type] || []).forEach(function (key) {
            const value = record && record[key];
            if (
                typeof value === "string" &&
                value.trim() &&
                !fields.some(function (field) { return field.path.length === 1 && field.path[0] === key; })
            ) {
                fields.push({
                    path: [key],
                    label: translationFieldLabel([key]),
                    kind: "string",
                    english: value,
                    baseLocalized: null,
                    promotedPlain: true
                });
            }
        });

        return fields;
    }

    function readPath(root, path) {
        let value = root;
        for (const part of path) {
            if (value == null) return undefined;
            value = value[part];
        }
        return value;
    }

    function writePath(root, path, value) {
        let target = root;
        path.forEach(function (part, index) {
            const last = index === path.length - 1;
            if (last) {
                target[part] = value;
                return;
            }

            const nextPart = path[index + 1];
            if (target[part] == null || typeof target[part] !== "object") {
                target[part] = typeof nextPart === "number" ? [] : {};
            }
            target = target[part];
        });
    }

    function deletePath(root, path) {
        if (!root || !path.length) return;
        const parents = [];
        let target = root;

        for (let index = 0; index < path.length - 1; index += 1) {
            const part = path[index];
            if (target == null || typeof target !== "object") return;
            parents.push({ parent: target, key: part });
            target = target[part];
        }

        if (target == null || typeof target !== "object") return;
        const last = path[path.length - 1];
        if (Array.isArray(target) && typeof last === "number") {
            target[last] = null;
        } else {
            delete target[last];
        }

        for (let index = parents.length - 1; index >= 0; index -= 1) {
            const entry = parents[index];
            const child = entry.parent[entry.key];
            const empty = Array.isArray(child)
                ? child.every(function (item) { return item == null; })
                : child && typeof child === "object" && !Object.keys(child).length;
            if (!empty) break;
            if (Array.isArray(entry.parent) && typeof entry.key === "number") {
                entry.parent[entry.key] = null;
            } else {
                delete entry.parent[entry.key];
            }
        }
    }

    function translationOverlayRecord(language, type, recordId, create = false) {
        const collectionName = translationCollectionName(type);
        if (!collectionName || !recordId) return null;
        const locale = create ? ensureTranslationLanguage(language) : translationWorking[language];
        if (!locale || !locale[collectionName]) return null;
        if (!locale[collectionName][recordId] && create) {
            locale[collectionName][recordId] = {};
        }
        return locale[collectionName][recordId] || null;
    }

    function resolvedTranslationValue(field, language, overlayRecord) {
        const override = overlayRecord ? readPath(overlayRecord, field.path) : undefined;
        if (translationValueHasContent(override)) {
            return { value: override, source: "override" };
        }

        if (
            field.baseLocalized &&
            Object.prototype.hasOwnProperty.call(field.baseLocalized, language) &&
            translationValueHasContent(field.baseLocalized[language])
        ) {
            return { value: field.baseLocalized[language], source: "base" };
        }

        return { value: field.kind === "array" ? [] : "", source: "missing" };
    }

    function translationLanguageCoverage(type, record, language) {
        const fields = collectTranslationFields(type, record);
        if (!fields.length) return { translated: 0, total: 0, complete: true };
        const overlay = translationOverlayRecord(language, type, record.id, false);
        const translated = fields.filter(function (field) {
            return translationValueHasContent(resolvedTranslationValue(field, language, overlay).value);
        }).length;
        return {
            translated,
            total: fields.length,
            complete: translated === fields.length
        };
    }

    function translationRecordCoverage(type, record) {
        const fields = collectTranslationFields(type, record);
        if (!fields.length) {
            return { fields: 0, completeLanguages: translationLanguages.length, totalLanguages: translationLanguages.length };
        }
        const completeLanguages = translationLanguages.filter(function (language) {
            return translationLanguageCoverage(type, record, language.code).complete;
        }).length;
        return {
            fields: fields.length,
            completeLanguages,
            totalLanguages: translationLanguages.length
        };
    }

    function translationRecordList(type = translationActiveType) {
        return existingList(type);
    }

    function translationRecordById(type, id) {
        return translationRecordList(type).find(function (record) {
            return record && record.id === id;
        }) || null;
    }

    function selectedTranslationRecord() {
        const select = document.getElementById("translationRecordSelect");
        if (!select) return null;
        return translationRecordById(translationActiveType, select.value);
    }

    function showTranslationStatus(message, tone = "ok") {
        const box = document.getElementById("translationManagerStatus");
        if (!box) return;
        box.hidden = !message;
        box.className = `record-validation ${tone === "bad" ? "error" : tone === "warn" ? "warning" : "ok"}`;
        box.textContent = message || "";
    }

    function refreshTranslationRecordSelect(preferredId = "") {
        const select = document.getElementById("translationRecordSelect");
        const typeSelect = document.getElementById("translationTypeSelect");
        if (!select || !typeSelect) return;

        typeSelect.value = translationActiveType;
        const list = translationRecordList();
        select.innerHTML = list.length
            ? list.map(function (record) {
                return `<option value="${escapeHtml(record.id || "")}">${escapeHtml(currentDisplayName(translationActiveType, record))}</option>`;
            }).join("")
            : `<option value="">Không có bản ghi</option>`;

        if (preferredId && list.some(function (record) { return record.id === preferredId; })) {
            select.value = preferredId;
        }
        renderTranslationManager();
    }

    function renderTranslationLanguageTabs(record, fields) {
        const shell = document.getElementById("translationLanguageTabs");
        if (!shell) return;

        shell.innerHTML = translationLanguages.map(function (language) {
            const coverage = record
                ? translationLanguageCoverage(translationActiveType, record, language.code)
                : { translated: 0, total: 0, complete: false };
            const state = !record || !fields.length
                ? "neutral"
                : coverage.complete
                    ? "complete"
                    : coverage.translated
                        ? "partial"
                        : "missing";
            return `
                <button
                    type="button"
                    role="tab"
                    class="translation-language-tab ${state} ${language.code === translationActiveLanguage ? "active" : ""}"
                    data-translation-language="${escapeHtml(language.code)}"
                    aria-selected="${language.code === translationActiveLanguage ? "true" : "false"}"
                    title="${escapeHtml(language.name)}"
                >
                    <strong>${escapeHtml(language.label)}</strong>
                    <span>${coverage.total ? `${coverage.translated}/${coverage.total}` : "N/A"}</span>
                </button>
            `;
        }).join("");
    }

    function renderTranslationManager() {
        const editor = document.getElementById("translationEditor");
        const summary = document.getElementById("translationCoverageSummary");
        if (!editor || !summary) return;

        const record = selectedTranslationRecord();
        if (!record) {
            translationEditorFields = [];
            summary.textContent = "Chọn một bản ghi.";
            renderTranslationLanguageTabs(null, []);
            editor.innerHTML = `<div class="preview-empty">Chọn một bản ghi để chỉnh sửa bản dịch.</div>`;
            return;
        }

        const fields = collectTranslationFields(translationActiveType, record);
        translationEditorFields = fields;
        const recordCoverage = translationRecordCoverage(translationActiveType, record);
        summary.textContent = fields.length
            ? `${recordCoverage.completeLanguages}/${recordCoverage.totalLanguages} ngôn ngữ đã hoàn chỉnh · ${fields.length} trường có thể dịch`
            : "Bản ghi này hiện chưa có trường nào cần dịch.";
        renderTranslationLanguageTabs(record, fields);

        if (!fields.length) {
            editor.innerHTML = `
                <div class="translation-empty-state">
                    <strong>Không phát hiện trường văn bản nào cần dịch.</strong>
                    <p>Tên, ID và metadata hệ thống được giữ nguyên. Khi bản ghi có thêm trường mô tả/hiệu ứng cần dịch, trường đó sẽ tự xuất hiện tại đây.</p>
                </div>
            `;
            return;
        }

        const overlay = translationOverlayRecord(
            translationActiveLanguage,
            translationActiveType,
            record.id,
            false
        );
        const languageInfo = translationLanguages.find(function (language) {
            return language.code === translationActiveLanguage;
        });

        editor.innerHTML = `
            <div class="translation-editor-head">
                <div>
                    <p class="eyebrow">${escapeHtml(languageInfo ? languageInfo.name.toUpperCase() : translationActiveLanguage.toUpperCase())}</p>
                    <h3>${escapeHtml(recordTitle(translationActiveType, record))}</h3>
                </div>
                <span>${escapeHtml(record.id || "")}</span>
            </div>
            <div class="translation-field-list">
                ${fields.map(function (field, index) {
                    const resolved = resolvedTranslationValue(field, translationActiveLanguage, overlay);
                    const inherited = resolved.source === "base";
                    const sourceText = translationValueToText(field.english);
                    const translatedText = translationValueToText(resolved.value);
                    const rows = field.kind === "array"
                        ? Math.max(6, Math.min(14, sourceText.split("\n").length + 3))
                        : Math.max(3, Math.min(9, Math.ceil(sourceText.length / 85) + 2));
                    return `
                        <article class="translation-field-card ${translatedText.trim() ? "has-translation" : "is-missing"}">
                            <div class="translation-field-title">
                                <strong>${escapeHtml(field.label || "Văn bản")}</strong>
                                <span>${field.kind === "array" ? "NHIỀU ĐOẠN" : field.promotedPlain ? "VĂN BẢN HIỂN THỊ" : "VĂN BẢN ĐA NGÔN NGỮ"}</span>
                            </div>
                            <div class="translation-field-columns">
                                <label class="translation-source-field">
                                    <span>Nguồn tiếng Anh</span>
                                    <textarea rows="${rows}" readonly>${escapeHtml(sourceText)}</textarea>
                                </label>
                                <label>
                                    <span>${escapeHtml(languageInfo ? languageInfo.name : translationActiveLanguage)} ${inherited ? "· đang dùng bản dịch gốc" : ""}</span>
                                    <textarea
                                        rows="${rows}"
                                        data-translation-field-index="${index}"
                                        placeholder="Chưa có bản dịch — website sẽ tự dùng tiếng Anh."
                                    >${escapeHtml(translatedText)}</textarea>
                                </label>
                            </div>
                        </article>
                    `;
                }).join("")}
            </div>
        `;
    }

    function saveTranslationRecord() {
        const record = selectedTranslationRecord();
        if (!record || !translationEditorFields.length) {
            showTranslationStatus("Bản ghi này không có trường nào để dịch.", "warn");
            return;
        }

        const overlay = translationOverlayRecord(
            translationActiveLanguage,
            translationActiveType,
            record.id,
            true
        );

        translationEditorFields.forEach(function (field, index) {
            const textarea = document.querySelector(`[data-translation-field-index="${index}"]`);
            if (!textarea) return;
            const translated = translationTextToValue(textarea.value, field.kind);
            const baseLanguageValue = field.baseLocalized
                ? field.baseLocalized[translationActiveLanguage]
                : undefined;

            if (!translationValueHasContent(translated)) {
                deletePath(overlay, field.path);
                return;
            }

            if (
                translationValueHasContent(baseLanguageValue) &&
                translationValueToText(baseLanguageValue).trim() === translationValueToText(translated).trim()
            ) {
                deletePath(overlay, field.path);
                return;
            }

            writePath(overlay, field.path, translated);
        });

        const collection = ensureTranslationLanguage(translationActiveLanguage)[translationCollectionName(translationActiveType)];
        if (overlay && !Object.keys(overlay).length) {
            delete collection[record.id];
        }

        showTranslationStatus(`Đã lưu bản dịch ${translationActiveLanguage} cho "${record.id}" vào bản đang chỉnh.`);
        renderTranslationManager();
        renderRecordBrowser();
    }

    function clearTranslationRecord() {
        const record = selectedTranslationRecord();
        if (!record) return;
        const locale = ensureTranslationLanguage(translationActiveLanguage);
        const collection = locale[translationCollectionName(translationActiveType)];
        if (collection) delete collection[record.id];
        showTranslationStatus(`Đã xóa bản dịch ${translationActiveLanguage} đang chỉnh của "${record.id}". Bản dịch gốc (nếu có) vẫn được giữ.`);
        renderTranslationManager();
        renderRecordBrowser();
    }

    function normalizedTranslationWorking() {
        const output = emptyTranslationStore();
        translationLanguages.forEach(function (language) {
            const source = translationWorking[language.code] || {};
            Object.values(translationCollectionMap).forEach(function (collection) {
                output[language.code][collection] = clone(source[collection] || {}) || {};
            });
        });
        return output;
    }

    function translationFileText() {
        const data = JSON.stringify(normalizedTranslationWorking(), null, 4);
        return `/* =========================================================\n   THE DETECTIVE ARCHIVE — RECORD CONTENT TRANSLATIONS\n\n   Generated by Archive Content Studio.\n   English source text remains in /content/*.js.\n   Missing translations safely fall back to English.\n========================================================= */\n\nwindow.ArchiveContentTranslations = ${data};\n\n(function applyArchiveContentTranslationFile() {\n    if (typeof registerArchiveLocale !== "function") {\n        return;\n    }\n\n    Object.keys(window.ArchiveContentTranslations).forEach(function (language) {\n        registerArchiveLocale(language, {\n            content: window.ArchiveContentTranslations[language]\n        });\n    });\n})();\n`;
    }

    function resetTranslationWorking() {
        translationWorking = clone(translationSourceSnapshot) || emptyTranslationStore();
        showTranslationStatus("Đã đặt lại bản dịch đang chỉnh về file được tải khi mở Content Manager.");
        renderTranslationManager();
        renderRecordBrowser();
    }

    function syncTranslationType(type, preferredId = "") {
        if (!translationCollectionMap[type]) return;
        translationActiveType = type;
        refreshTranslationRecordSelect(preferredId);
    }

    function setEditMode(id) {
        editingId = id || "";
        const badge = document.getElementById("editModeBadge");
        badge.textContent = editingId ? `ĐANG SỬA · ${editingId}` : "MỚI";
        badge.classList.toggle("editing", Boolean(editingId));
    }

    function scheduleEscapeId(value) {
        return String(value || "record")
            .toLowerCase()
            .replace(/[^a-z0-9-]+/g, "-")
            .replace(/^-+|-+$/g, "") || "record";
    }

    function scheduleIdFor(type, recordId, publishAt) {
        const stamp = String(publishAt || "")
            .replace(/[^0-9]/g, "")
            .slice(0, 12);
        const random = Math.random().toString(36).slice(2, 7);
        return `${stamp || Date.now()}-${scheduleEscapeId(type)}-${scheduleEscapeId(recordId)}-${random}`;
    }

    function scheduleLocalToIso(value) {
        const clean = String(value || "").trim();
        if (!/^\d{4}-\d{2}-\d{2}T\d{2}:\d{2}(?::\d{2})?$/.test(clean)) return "";
        return `${clean.length === 16 ? `${clean}:00` : clean}${SCHEDULE_OFFSET}`;
    }

    function scheduleDisplayTime(value) {
        const date = new Date(value);
        if (Number.isNaN(date.getTime())) return value || "—";
        return new Intl.DateTimeFormat("vi-VN", {
            timeZone: SCHEDULE_TIMEZONE,
            year: "numeric",
            month: "2-digit",
            day: "2-digit",
            hour: "2-digit",
            minute: "2-digit",
            hour12: false
        }).format(date);
    }

    function scheduleDefaultInputValue() {
        const now = new Date();
        const vietnamMs = now.getTime() + (7 * 60 * 60 * 1000);
        const future = new Date(vietnamMs + (60 * 60 * 1000));
        future.setUTCMinutes(Math.ceil(future.getUTCMinutes() / 5) * 5, 0, 0);
        return future.toISOString().slice(0, 16);
    }

    function scheduleQueueFileText(queue = scheduleWorking) {
        const safeQueue = {
            version: SCHEDULE_VERSION,
            timezone: SCHEDULE_TIMEZONE,
            items: Array.isArray(queue && queue.items)
                ? queue.items.map(function (item) {
                    return {
                        scheduleId: item.scheduleId,
                        type: item.type,
                        recordId: item.recordId,
                        label: item.label || item.recordId,
                        publishAt: item.publishAt,
                        payloadPath: item.payloadPath,
                        enabled: item.enabled !== false,
                        createdAt: item.createdAt || ""
                    };
                })
                : []
        };

        return `/* =========================================================\n   THE DETECTIVE ARCHIVE — PUBLISH SCHEDULE\n   Public metadata only. Scheduled record payloads live in /scheduled/\n   and are excluded from the deployed GitHub Pages artifact.\n========================================================= */\n\nwindow.ArchivePublishSchedule = ${JSON.stringify(safeQueue, null, 4)};\n`;
    }

    function scheduleWorkflowText() {
        return `name: The Detective Archive — Scheduled Publishing\n\non:\n  push:\n  schedule:\n    - cron: \"*/10 * * * *\"\n      timezone: \"Asia/Ho_Chi_Minh\"\n  workflow_dispatch:\n\npermissions:\n  contents: write\n  pages: write\n  id-token: write\n\nconcurrency:\n  group: tda-pages-publish\n  cancel-in-progress: false\n\njobs:\n  publish:\n    if: github.event_name != 'push' || github.ref_name == github.event.repository.default_branch\n    runs-on: ubuntu-latest\n    environment:\n      name: github-pages\n      url: \${{ steps.deployment.outputs.page_url }}\n\n    steps:\n      - name: Checkout default branch\n        uses: actions/checkout@v6\n        with:\n          fetch-depth: 0\n\n      - name: Setup Node.js\n        uses: actions/setup-node@v6\n        with:\n          node-version: '24'\n\n      - name: Apply scheduled records that are due\n        run: node scripts/publish-scheduled.mjs\n\n      - name: Commit published records and queue cleanup\n        shell: bash\n        run: |\n          if [[ -n \"$(git status --porcelain)\" ]]; then\n            git config user.name \"github-actions[bot]\"\n            git config user.email \"41898282+github-actions[bot]@users.noreply.github.com\"\n            git add -A\n            git commit -m \"Publish scheduled archive content\"\n            git push\n          fi\n\n      - name: Build Pages artifact\n        shell: bash\n        run: |\n          rm -rf dist\n          mkdir -p dist\n          rsync -a ./ dist/ \\\n            --exclude '.git/' \\\n            --exclude '.github/' \\\n            --exclude 'scripts/' \\\n            --exclude 'scheduled/' \\\n            --exclude 'backup/' \\\n            --exclude 'dist/' \\\n            --exclude 'SCHEDULE_SETUP_VI.txt'\n\n      - name: Configure Pages\n        uses: actions/configure-pages@v5\n\n      - name: Upload Pages artifact\n        uses: actions/upload-pages-artifact@v4\n        with:\n          path: dist\n\n      - name: Deploy to GitHub Pages\n        id: deployment\n        uses: actions/deploy-pages@v4\n`;
    }

    function schedulePublisherScriptText() {
        return `import fs from \"node:fs\";\nimport path from \"node:path\";\nimport vm from \"node:vm\";\n\nconst root = process.cwd();\nconst queuePath = path.join(root, \"content/publish-schedule.js\");\nconst now = process.env.TDA_PUBLISH_NOW ? new Date(process.env.TDA_PUBLISH_NOW) : new Date();\n\nconst typeMap = {\n  news: { file: \"content/news.js\", variable: \"newsData\" },\n  character: { file: \"content/characters.js\", variable: \"charactersData\" },\n  motive: { file: \"content/motives.js\", variable: \"weaponsData\" },\n  simulation: { file: \"content/simulation.js\", variable: \"simulationData\", info: \"simulationSystemInfo\" },\n  epiphany: { file: \"content/epiphanies.js\", variable: \"epiphanyData\", info: \"epiphanySystemInfo\" }\n};\n\nconst translationCollection = {\n  news: \"news\",\n  character: \"characters\",\n  motive: \"motives\",\n  simulation: \"simulation\",\n  epiphany: \"epiphanies\"\n};\n\nfunction ensureParent(file) { fs.mkdirSync(path.dirname(file), { recursive: true }); }\n\nfunction loadQueue() {\n  if (!fs.existsSync(queuePath)) return { version: 1, timezone: \"Asia/Ho_Chi_Minh\", items: [] };\n  const source = fs.readFileSync(queuePath, \"utf8\");\n  const sandbox = { window: {} };\n  vm.runInNewContext(source, sandbox, { filename: queuePath });\n  const queue = sandbox.window.ArchivePublishSchedule || {};\n  if (!Array.isArray(queue.items)) queue.items = [];\n  return queue;\n}\n\nfunction writeQueue(queue) {\n  const text = \`/* =========================================================\n   THE DETECTIVE ARCHIVE — PUBLISH SCHEDULE\n   Public metadata only. Scheduled record payloads live in /scheduled/\n   and are excluded from the deployed GitHub Pages artifact.\n========================================================= */\n\nwindow.ArchivePublishSchedule = \${JSON.stringify(queue, null, 4)};\n\`;\n  ensureParent(queuePath);\n  fs.writeFileSync(queuePath, text);\n}\n\nfunction loadContent(type) {\n  const config = typeMap[type];\n  if (!config) throw new Error(\`Unsupported scheduled type: \${type}\`);\n  const file = path.join(root, config.file);\n  const source = fs.readFileSync(file, \"utf8\");\n  const sandbox = {};\n  const capture = [\`globalThis.__data = typeof \${config.variable} !== \\\"undefined\\\" ? \${config.variable} : [];\`];\n  if (config.info) capture.push(\`globalThis.__info = typeof \${config.info} !== \\\"undefined\\\" ? \${config.info} : null;\`);\n  vm.runInNewContext(\`\${source}\\n;\${capture.join(\"\\n\")}\`, sandbox, { filename: file });\n  return { file, config, list: JSON.parse(JSON.stringify(sandbox.__data || [])), info: sandbox.__info ? JSON.parse(JSON.stringify(sandbox.__info)) : null };\n}\n\nfunction writeContent(type, state) {\n  const { file, config, list } = state;\n  let text = \`/* The Detective Archive · Scheduled Publisher\n   Published automatically from the verified schedule queue.\n   Unknown / unverified Silver Palace values should remain blank. */\n\nconst \${config.variable} = \${JSON.stringify(list, null, 4)};\n\`;\n  if (config.info && state.info) {\n    if (type === \"epiphany\" && Object.prototype.hasOwnProperty.call(state.info, \"count\")) state.info.count = list.length;\n    text += \`\\nconst \${config.info} = \${JSON.stringify(state.info, null, 4)};\\n\`;\n  }\n  fs.writeFileSync(file, text);\n}\n\nfunction upsertRecord(type, record) {\n  if (!record || !record.id) throw new Error(\`Scheduled \${type} payload is missing record.id\`);\n  const state = loadContent(type);\n  const index = state.list.findIndex(item => item && item.id === record.id);\n  if (index >= 0) state.list[index] = record;\n  else if (type === \"news\") state.list.unshift(record);\n  else state.list.push(record);\n  writeContent(type, state);\n}\n\nfunction loadTranslations() {\n  const file = path.join(root, \"locales/archive-content-translations.js\");\n  if (!fs.existsSync(file)) return { file, store: {} };\n  const source = fs.readFileSync(file, \"utf8\");\n  const sandbox = { window: {}, registerArchiveLocale() {} };\n  vm.runInNewContext(source, sandbox, { filename: file });\n  return { file, store: JSON.parse(JSON.stringify(sandbox.window.ArchiveContentTranslations || {})) };\n}\n\nfunction writeTranslations(file, store) {\n  const text = \`/* =========================================================\n   THE DETECTIVE ARCHIVE — RECORD CONTENT TRANSLATIONS\n\n   Generated by Archive Content Studio.\n   English source text remains in /content/*.js.\n   Missing translations safely fall back to English.\n========================================================= */\n\nwindow.ArchiveContentTranslations = \${JSON.stringify(store, null, 4)};\n\n(function applyArchiveContentTranslationFile() {\n    if (typeof registerArchiveLocale !== \\\"function\\\") return;\n    Object.keys(window.ArchiveContentTranslations).forEach(function (language) {\n        registerArchiveLocale(language, { content: window.ArchiveContentTranslations[language] });\n    });\n})();\n\`;\n  ensureParent(file);\n  fs.writeFileSync(file, text);\n}\n\nfunction applyTranslations(type, recordId, translations) {\n  if (!translations || typeof translations !== \"object\") return;\n  const collection = translationCollection[type];\n  if (!collection) return;\n  const state = loadTranslations();\n  for (const [language, overlay] of Object.entries(translations)) {\n    if (!overlay || typeof overlay !== \"object\" || !Object.keys(overlay).length) continue;\n    if (!state.store[language] || typeof state.store[language] !== \"object\") state.store[language] = {};\n    if (!state.store[language][collection] || typeof state.store[language][collection] !== \"object\") state.store[language][collection] = {};\n    state.store[language][collection][recordId] = overlay;\n  }\n  writeTranslations(state.file, state.store);\n}\n\nfunction applyAssets(payload) {\n  for (const asset of Array.isArray(payload.assets) ? payload.assets : []) {\n    if (!asset || !asset.source || !asset.target) continue;\n    const source = path.join(root, asset.source);\n    const target = path.join(root, asset.target);\n    if (!fs.existsSync(source)) {\n      if (fs.existsSync(target)) continue;\n      throw new Error(\`Scheduled asset not found: \${asset.source}\`);\n    }\n    ensureParent(target);\n    fs.copyFileSync(source, target);\n    fs.rmSync(source, { force: true });\n  }\n}\n\nfunction removeEmptyParents(file, stopRelative) {\n  let current = path.dirname(file);\n  const stop = path.join(root, stopRelative);\n  while (current.startsWith(stop) && current !== stop) {\n    if (!fs.existsSync(current) || fs.readdirSync(current).length) break;\n    fs.rmdirSync(current);\n    current = path.dirname(current);\n  }\n}\n\nfunction cleanupOrphans(queue) {\n  const referencedPayloads = new Set((queue.items || []).map(item => item.payloadPath).filter(Boolean));\n  const referencedIds = new Set((queue.items || []).map(item => item.scheduleId).filter(Boolean));\n  const recordDir = path.join(root, \"scheduled/records\");\n  if (fs.existsSync(recordDir)) {\n    for (const name of fs.readdirSync(recordDir)) {\n      const rel = \`scheduled/records/\${name}\`;\n      if (!referencedPayloads.has(rel)) fs.rmSync(path.join(recordDir, name), { force: true });\n    }\n  }\n  const assetDir = path.join(root, \"scheduled/assets\");\n  if (fs.existsSync(assetDir)) {\n    for (const name of fs.readdirSync(assetDir)) {\n      if (!referencedIds.has(name)) fs.rmSync(path.join(assetDir, name), { recursive: true, force: true });\n    }\n  }\n}\n\nconst queue = loadQueue();\nconst remaining = [];\nlet published = 0;\n\nfor (const item of queue.items) {\n  const publishTime = new Date(item.publishAt);\n  const due = item.enabled !== false && !Number.isNaN(publishTime.getTime()) && publishTime.getTime() <= now.getTime();\n  if (!due) { remaining.push(item); continue; }\n\n  const payloadFile = path.join(root, item.payloadPath || \"\");\n  if (!item.payloadPath || !fs.existsSync(payloadFile)) throw new Error(\`Missing scheduled payload for \${item.scheduleId || item.recordId}\`);\n  const payload = JSON.parse(fs.readFileSync(payloadFile, \"utf8\"));\n  if (payload.type !== item.type) throw new Error(\`Type mismatch in scheduled payload \${item.scheduleId}\`);\n  if (!payload.record || payload.record.id !== item.recordId) throw new Error(\`Record ID mismatch in scheduled payload \${item.scheduleId}\`);\n\n  upsertRecord(item.type, payload.record);\n  applyTranslations(item.type, item.recordId, payload.translations);\n  applyAssets(payload);\n  fs.rmSync(payloadFile, { force: true });\n  removeEmptyParents(payloadFile, \"scheduled/records\");\n  published += 1;\n  console.log(\`[TDA] Published \${item.type}:\${item.recordId} scheduled for \${item.publishAt}\`);\n}\n\nqueue.items = remaining;\ncleanupOrphans(queue);\nwriteQueue(queue);\nconsole.log(\`[TDA] Scheduled publishing complete. Published: \${published}; Pending: \${remaining.length}.\`);\n`;
    }

    function scheduleSetupReadmeText() {
        return `THE DETECTIVE ARCHIVE — THIẾT LẬP SCHEDULED PUBLISHING\n\nLÀM MỘT LẦN:\n1. Giải nén ZIP và chép đúng cấu trúc thư mục vào repository GitHub Pages.\n2. Vào GitHub repository > Settings > Pages.\n3. Ở Build and deployment > Source, chọn GitHub Actions.\n4. Vào Settings > Actions > General > Workflow permissions. Nếu workflow không thể commit, bật Read and write permissions.\n5. Mở tab Actions và chạy workflow \"The Detective Archive — Scheduled Publishing\" bằng Run workflow một lần để kiểm tra.\n\nCÁCH LÊN LỊCH:\n1. Mở content-manager.html.\n2. Chọn/tạo bản ghi và điền dữ liệu.\n3. Nếu có bản dịch, lưu chúng trong Translation Manager trước khi tạo lịch.\n4. Chọn ngày giờ ở LỊCH XUẤT BẢN (Asia/Ho_Chi_Minh, UTC+7).\n5. Bấm \"Tạo ZIP lên lịch\".\n6. Giải nén ZIP và chép các file vào repository, rồi commit/push.\n7. GitHub Actions kiểm tra mỗi 10 phút. Khi đến giờ, workflow tự đưa record vào file public, chuyển ảnh vào đúng thư mục, cập nhật bản dịch, commit và deploy Pages.\n\nLƯU Ý:\n- GitHub scheduled workflows có thể trễ vài phút khi hệ thống bận.\n- Nội dung payload được giữ trong /scheduled/ và KHÔNG được đưa vào artifact GitHub Pages trước giờ xuất bản. Nếu repository của bạn là public, người xem repository GitHub vẫn có thể đọc file payload.\n- Không đổi ID của record sau khi đã tạo lịch.\n- Hủy lịch: hủy trong Content Manager, tải ZIP cập nhật danh sách lịch, ghi đè repository. Workflow sẽ tự dọn payload/ảnh nháp không còn tham chiếu.\n`;
    }

    function selectedScheduleTranslations(type, recordId) {
        const collection = translationCollectionMap[type];
        const result = {};
        if (!collection || !recordId) return result;
        translationLanguages.forEach(function (language) {
            const locale = translationWorking[language.code];
            const overlay = locale && locale[collection] && locale[collection][recordId];
            if (overlay && typeof overlay === "object" && Object.keys(overlay).length) {
                result[language.code] = clone(overlay);
            }
        });
        return result;
    }

    function buildScheduleRecord() {
        const generated = recordFromForm(activeType);
        const record = mergeEditedRecord(activeType, generated);
        const validation = validateRecord(activeType, record);
        showRecordValidation(validation.errors, validation.warnings);
        if (validation.errors.length) return null;
        return record;
    }

    function scheduleRecordLabel(type, record) {
        if (!record) return "";
        if (type === "news") return localText(record.title, "en") || record.id;
        return localText(record.name, "en") || record.name || record.id;
    }

    function showScheduleStatus(message, kind = "") {
        const node = document.getElementById("scheduleStatus");
        if (!node) return;
        node.className = `schedule-status${kind ? ` ${kind}` : ""}`;
        node.textContent = message || "";
    }

    function scheduleStatusFor(item) {
        if (!item || item.enabled === false) return { label: "Đã tắt", kind: "disabled" };
        const when = new Date(item.publishAt);
        if (Number.isNaN(when.getTime())) return { label: "Sai thời gian", kind: "bad" };
        if (when.getTime() <= Date.now()) return { label: "Đến giờ · chờ Actions", kind: "due" };
        return { label: "Đã lên lịch", kind: "scheduled" };
    }

    function renderScheduleQueue() {
        const body = document.getElementById("scheduleQueueBody");
        if (!body) return;
        const items = Array.isArray(scheduleWorking.items) ? scheduleWorking.items.slice() : [];
        items.sort((a, b) => String(a.publishAt || "").localeCompare(String(b.publishAt || "")));
        body.innerHTML = items.length
            ? items.map(function (item) {
                const status = scheduleStatusFor(item);
                return `<tr>\n                    <td>${escapeHtml(typeLabels[item.type] || item.type || "—")}</td>\n                    <td><strong>${escapeHtml(item.label || item.recordId || "—")}</strong><small>${escapeHtml(item.recordId || "")}</small></td>\n                    <td>${escapeHtml(scheduleDisplayTime(item.publishAt))}</td>\n                    <td><span class="schedule-state ${status.kind}">${escapeHtml(status.label)}</span></td>\n                    <td><button type="button" data-schedule-action="cancel" data-schedule-id="${escapeHtml(item.scheduleId)}">Hủy</button></td>\n                </tr>`;
            }).join("")
            : `<tr><td colspan="5" class="schedule-empty">Chưa có bản ghi nào đang chờ xuất bản.</td></tr>`;
    }

    function syncScheduleCurrentRecord() {
        const node = document.getElementById("scheduleCurrentRecord");
        if (!node) return;
        const form = formFor(activeType);
        const id = form && form.elements.id ? String(form.elements.id.value || "").trim() : "";
        node.textContent = id ? `${typeLabels[activeType]} · ${id}` : `${typeLabels[activeType]} · chưa có ID`;
    }

    function scheduleBaseEntries() {
        return [
            { name: ".github/workflows/publish-scheduled.yml", content: scheduleWorkflowText() },
            { name: "scripts/publish-scheduled.mjs", content: schedulePublisherScriptText() },
            { name: "content/publish-schedule.js", content: scheduleQueueFileText() },
            { name: "SCHEDULE_SETUP_VI.txt", content: scheduleSetupReadmeText() }
        ];
    }

    async function downloadSchedulerSetupPackage() {
        const zip = await createStoreZip(scheduleBaseEntries());
        downloadBlob("tda-scheduled-publishing-setup.zip", zip, "application/zip");
        showScheduleStatus("Đã tạo bộ cài GitHub Actions. Làm theo SCHEDULE_SETUP_VI.txt trong ZIP.", "ok");
    }

    async function downloadScheduleStatePackage() {
        const entries = scheduleBaseEntries();
        const zip = await createStoreZip(entries);
        downloadBlob(`tda-publish-schedule-${dateStamp()}.zip`, zip, "application/zip");
        showScheduleStatus("Đã tạo ZIP cập nhật danh sách lịch. Ghi đè các file này lên repository.", "ok");
    }

    async function createScheduledPackage() {
        const input = document.getElementById("schedulePublishAt");
        const publishAt = scheduleLocalToIso(input && input.value);
        if (!publishAt) {
            showScheduleStatus("Hãy chọn ngày và giờ xuất bản hợp lệ.", "bad");
            return;
        }
        const publishDate = new Date(publishAt);
        if (Number.isNaN(publishDate.getTime()) || publishDate.getTime() <= Date.now() + 60000) {
            showScheduleStatus("Thời gian lên lịch phải muộn hơn hiện tại ít nhất 1 phút.", "bad");
            return;
        }

        const record = buildScheduleRecord();
        if (!record) {
            showScheduleStatus("Bản ghi còn lỗi. Sửa lỗi ở phần kiểm tra trước khi tạo lịch.", "bad");
            return;
        }

        const scheduleId = scheduleIdFor(activeType, record.id, publishAt);
        const payloadPath = `scheduled/records/${scheduleId}.json`;
        const label = scheduleRecordLabel(activeType, record);
        const translations = selectedScheduleTranslations(activeType, record.id);
        const payload = {
            version: SCHEDULE_VERSION,
            scheduleId,
            type: activeType,
            record: clone(record),
            translations,
            assets: []
        };

        const entries = [];
        const selected = selectedFiles.get(activeType);
        const targetPath = getImagePath(activeType);
        if (selected && targetPath && !/^https?:\/\//i.test(targetPath)) {
            const fileName = cleanFileName(targetPath.split("/").pop() || selected.name);
            const sourcePath = `scheduled/assets/${scheduleId}/${fileName}`;
            payload.assets.push({ source: sourcePath, target: targetPath.replace(/^\/+/, "") });
            entries.push({ name: sourcePath, content: selected });
        }

        scheduleWorking.items.push({
            scheduleId,
            type: activeType,
            recordId: record.id,
            label,
            publishAt,
            payloadPath,
            enabled: true,
            createdAt: new Date().toISOString()
        });

        entries.unshift(...scheduleBaseEntries());
        entries.push({ name: payloadPath, content: JSON.stringify(payload, null, 2) });
        entries.push({
            name: "SCHEDULE_PACKAGE_README.txt",
            content: `The Detective Archive — Gói lên lịch\n\nBản ghi: ${activeType}:${record.id}\nXuất bản: ${publishAt} (${SCHEDULE_TIMEZONE})\n\nGiải nén và chép toàn bộ file/thư mục trong ZIP vào repository GitHub Pages, giữ nguyên cấu trúc, sau đó commit/push.\nNếu chưa thiết lập GitHub Actions, xem SCHEDULE_SETUP_VI.txt.\n`
        });

        const zip = await createStoreZip(entries);
        downloadBlob(`tda-scheduled-${scheduleEscapeId(activeType)}-${scheduleEscapeId(record.id)}-${dateStamp()}.zip`, zip, "application/zip");
        renderScheduleQueue();
        showScheduleStatus(`Đã tạo lịch cho ${record.id} lúc ${scheduleDisplayTime(publishAt)}. Hãy upload ZIP này lên repository.`, "ok");
    }

    function cancelSchedule(scheduleId) {
        const item = scheduleWorking.items.find(entry => entry && entry.scheduleId === scheduleId);
        if (!item) return;
        if (!window.confirm(`Hủy lịch xuất bản "${item.recordId}" lúc ${scheduleDisplayTime(item.publishAt)}?`)) return;
        scheduleWorking.items = scheduleWorking.items.filter(entry => entry && entry.scheduleId !== scheduleId);
        renderScheduleQueue();
        showScheduleStatus("Đã hủy trong bản đang chỉnh. Bấm 'Tải ZIP cập nhật danh sách lịch' rồi ghi đè lên repository để áp dụng.", "warn");
    }

    function resetOutput() {
        lastGenerated = null;
        lastGeneratedType = "";
        document.getElementById("studioOutput").value = "";
        document.getElementById("outputDestination").textContent = "Chọn loại nội dung và tạo một bản ghi.";
        document.getElementById("outputDestination").classList.remove("output-warning");
        document.getElementById("downloadRecord").disabled = true;
        document.getElementById("downloadFullFile").disabled = true;
        document.getElementById("downloadUpdatePackage").disabled = true;
        document.getElementById("recordPreview").innerHTML = `<div class="preview-empty">Tạo một bản ghi để xem trước.</div>`;
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

        if (!record || !record.id) errors.push("Bắt buộc phải có ID.");
        if (record && record.id && !/^[a-z0-9][a-z0-9-]*$/.test(record.id)) {
            errors.push("ID chỉ được dùng chữ thường, số và dấu gạch nối.");
        }

        const duplicate = list.find(item => item && item.id === record.id && item.id !== editingId);
        if (duplicate) errors.push(`ID "${record.id}" đã tồn tại.`);

        if (type === "news") {
            if (!localText(record.title, "en").trim()) errors.push("Bắt buộc phải có tiêu đề Tin tức tiếng Anh.");
            if (!record.date) warnings.push("Ngày đăng Tin tức đang để trống.");
            if (record.featured) {
                const otherFeatured = list.filter(item => item && item.featured && item.id !== editingId);
                if (otherFeatured.length) warnings.push(`Đã có Tin tức nổi bật khác (${otherFeatured.map(item => item.id).join(", ")}). Sau khi sắp xếp, chỉ mục nổi bật đầu tiên sẽ chiếm khung lớn.`);
            }
        } else if (!String(record.name || "").trim()) {
            errors.push(`Bắt buộc phải có tên ${typeLabels[type]}.`);
        }

        const image = type === "character" ? (record.images && record.images.card) : record.image;
        const folder = imageFolder(type);
        if (image && !String(image).startsWith(folder) && !/^https?:\/\//i.test(String(image))) {
            warnings.push(`Đường dẫn ảnh thông thường nên nằm trong ${folder}`);
        }
        if (image && /\s/.test(String(image))) warnings.push("Đường dẫn ảnh có dấu cách. Tên file kiểu kebab-case an toàn hơn trên GitHub Pages.");
        if (!image && type === "news") warnings.push("Tin tức chưa có ảnh. Điều này vẫn hợp lệ, nhưng khu ảnh Tin tức ở trang chủ sẽ để trống.");

        if (["character", "motive", "simulation", "epiphany"].includes(type)) {
            const source = record.sourceLabel || "";
            if (!String(source).trim()) warnings.push("Nguồn / nhãn xác minh đang để trống. Hãy để dữ liệu ở trạng thái chưa xác minh thay vì đoán.");
        }

        if (type === "character" && !record.reactorAttribute) warnings.push("Reactor đang để trống / chờ xác minh.");
        if (type === "simulation" && record.fullSetObserved && (!Array.isArray(record.slots) || record.slots.length !== 4)) {
            errors.push("Bản ghi Simulation đủ bộ phải giữ 4 ô Implement.");
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
            ...errors.map(item => `<li><strong>Lỗi:</strong> ${escapeHtml(item)}</li>`),
            ...warnings.map(item => `<li><strong>Cảnh báo:</strong> ${escapeHtml(item)}</li>`)
        ];
        box.innerHTML = `<strong>${errors.length} lỗi, ${warnings.length} cảnh báo</strong><ul>${items.join("")}</ul>`;
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
        if (translationActiveType === type) {
            refreshTranslationRecordSelect(record.id);
        }

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
            summary.textContent = "Tải hoặc tạo một bản ghi để so sánh thay đổi.";
            container.innerHTML = `<div class="preview-empty compare-empty">Chưa có dữ liệu để so sánh.</div>`;
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
            summary.textContent = "Không phát hiện thay đổi.";
            container.innerHTML = `<div class="compare-no-change">Bản ghi này giống với phiên bản đã tải vào trình sửa.</div>`;
            return;
        }

        summary.textContent = before ? `${changes.length} trường đã thay đổi.` : `${changes.length} trường trong bản ghi mới này.`;
        container.innerHTML = `
            <div class="compare-table-wrap">
                <table class="compare-table">
                    <thead>
                        <tr>
                            <th>Trường</th>
                            <th>Trước</th>
                            <th>Sau</th>
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
            kicker = `${record.featured ? "NỔI BẬT · " : ""}${record.category || "TIN TỨC"}`;
            meta = record.date || "";
            body = localText(record.description, "en");
        } else if (type === "character") {
            title = record.name || record.id;
            kicker = `${record.rarity || "?"}★ CHARACTER${record.limited ? " · GIỚI HẠN" : ""}`;
            meta = [record.reactorAttribute, record.combatStyle, record.identity].filter(Boolean).join(" · ");
            body = localText(record.description, "en");
        } else if (type === "motive") {
            title = record.name || record.id;
            kicker = `${record.rarity || "?"}★ MOTIVE${record.featured ? " · NỔI BẬT" : ""}`;
            meta = [record.identity, record.availability].filter(Boolean).join(" · ");
            body = localText(record.archiveNote, "en") || record.effect;
        } else if (type === "simulation") {
            title = record.name || record.id;
            kicker = "SIMULATION · BỘ IMPLEMENT";
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
            : `<span>CHƯA CÓ ẢNH</span>`;

        preview.innerHTML = `
            <article class="preview-card">
                <div class="preview-media">${media}</div>
                <div class="preview-copy">
                    <p class="preview-kicker">${escapeHtml(kicker)}</p>
                    <h3>${escapeHtml(title)}</h3>
                    <p class="preview-meta">${escapeHtml(meta)}</p>
                    <p>${escapeHtml(body || "Chưa có nội dung mô tả.")}</p>
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
            destination.textContent = "Hãy sửa các lỗi kiểm tra trước khi xuất file.";
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
            ? `Đã cập nhật bản đang chỉnh cho "${record.id}". Khi sẵn sàng, hãy xuất ${destinationMap[type]}.`
            : `Đã thêm bản ghi mới "${record.id}" vào bản đang chỉnh của ${destinationMap[type]}.`;

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
            showRecordValidation([], ["Chưa chọn ảnh cục bộ mới. Nút này không thể tải xuống ảnh đang có sẵn trên website."]);
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
        renderImagePreview(type, path, path ? `Đường dẫn hiện có: ${path}` : "Bản ghi này chưa có đường dẫn ảnh.");
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
        if (type === "news") return localText(record.title, "en") || record.id || "Chưa đặt tên";
        return localText(record.name, "en") || record.name || record.id || "Chưa đặt tên";
    }

    function recordStatus(type, record) {
        if (!record) return "";
        if (type === "news") {
            return [record.featured ? "NỔI BẬT" : "", record.category || "news", record.date || ""].filter(Boolean).join(" · ");
        }
        if (type === "character") {
            return [`${record.rarity || "?"}★`, record.limited ? "GIỚI HẠN" : "", record.reactorAttribute || ""].filter(Boolean).join(" · ");
        }
        if (type === "motive") {
            return [`${record.rarity || "?"}★`, record.limited ? "GIỚI HẠN" : "", record.featured ? "NỔI BẬT" : ""].filter(Boolean).join(" · ");
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
            ? filtered.map(record => {
                const coverage = translationRecordCoverage(activeType, record);
                const translationText = coverage.fields
                    ? `${coverage.completeLanguages}/${coverage.totalLanguages}`
                    : "N/A";
                return `
                <tr>
                    <td><code>${escapeHtml(record.id || "")}</code></td>
                    <td>${escapeHtml(recordTitle(activeType, record))}</td>
                    <td>${escapeHtml(recordStatus(activeType, record))}</td>
                    <td><span class="record-translation-status ${coverage.fields && coverage.completeLanguages === coverage.totalLanguages ? "complete" : coverage.fields && coverage.completeLanguages ? "partial" : "missing"}">${translationText}</span></td>
                    <td>
                        <div class="record-row-actions">
                            <button type="button" data-record-action="edit" data-record-id="${escapeHtml(record.id)}">Sửa</button>
                            <button type="button" data-record-action="duplicate" data-record-id="${escapeHtml(record.id)}">Nhân bản</button>
                            <button type="button" class="danger-button" data-record-action="delete" data-record-id="${escapeHtml(record.id)}">Xóa</button>
                        </div>
                    </td>
                </tr>
            `;
            }).join("")
            : `<tr><td colspan="5" class="record-table-empty">Không có bản ghi phù hợp.</td></tr>`;

        count.textContent = `Đang hiển thị ${filtered.length} · tổng ${list.length} bản ghi ${typeLabels[activeType]} trong bản đang chỉnh.`;
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
        if (translationActiveType === type) {
            refreshTranslationRecordSelect(duplicate.id);
        }

        loadRecord(type, duplicate);
        showRecordValidation([], [`Đã nhân bản "${id}" thành "${duplicate.id}" trong bản đang chỉnh. Hãy kiểm tra bản ghi trước khi xuất.`]);
    }

    function deleteWorkingRecord(type, id) {
        const list = existingList(type);
        const index = list.findIndex(item => item && item.id === id);
        if (index < 0) return;

        const title = recordTitle(type, list[index]);
        const okay = window.confirm(
            `Xóa "${title}" (${id}) khỏi bản đang chỉnh?\n\nFile trên website sẽ chưa thay đổi cho tới khi bạn tải xuống và thay thế file nội dung hoàn chỉnh.`
        );
        if (!okay) return;

        list.splice(index, 1);

        if (editingId === id) {
            newRecord();
        }

        refreshExistingSelect();
        renderRecordBrowser();
        if (translationActiveType === type) {
            refreshTranslationRecordSelect();
        }
        showRecordValidation([], [`Đã xóa "${id}" khỏi bản đang chỉnh. Hãy dùng nút Tải file đang chỉnh để xuất thay đổi này.`]);
    }

    function resetWorkingType() {
        sessionData[activeType] = clone(sourceList(activeType)) || [];
        editingBaseline = null;
        newRecord();
        refreshExistingSelect();
        renderRecordBrowser();
        if (translationActiveType === activeType) {
            refreshTranslationRecordSelect();
        }
        showRecordValidation([], [`Đã đặt lại dữ liệu ${typeLabels[activeType]} về phiên bản được tải khi mở trang này.`]);
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
            variantSelect.innerHTML = `<option value="default">Skills mặc định</option>`;
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
                `<option value="${index}">${index + 1}. ${escapeHtml(skill.type || "skill")} — ${escapeHtml(skill.name || "Chưa đặt tên")}</option>`
            ).join("")
            : `<option value="">Không có Skill trong bộ đang chỉnh</option>`;
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
        showAdvancedStatus(`Đã tải Skill ${index + 1}: ${skill.name || "Chưa đặt tên"}.`);
    }

    function saveSkillRecord() {
        const skills = activeSkillArray(true);
        const original = skillEditingIndex >= 0 && skills[skillEditingIndex]
            ? clone(skills[skillEditingIndex])
            : {};

        const name = document.getElementById("skillName").value.trim();
        if (!name) {
            showAdvancedStatus("Bắt buộc phải có tên Skill.", true);
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
        showAdvancedStatus(`Đã lưu Skill "${name}" vào file Skills đang chỉnh.`);
    }

    function deleteSkillRecord() {
        const skills = activeSkillArray(false);
        const index = Number(document.getElementById("skillRecordSelect").value);
        if (!Number.isInteger(index) || !skills[index]) return;
        if (!window.confirm(`Xóa Skill "${skills[index].name || "Chưa đặt tên"}" khỏi file Skills đang chỉnh?`)) return;
        skills.splice(index, 1);
        clearSkillForm();
        refreshSkillSelect();
        showAdvancedStatus("Đã xóa Skill khỏi file Skills đang chỉnh.");
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
                `<option value="${index}">${index + 1}. ${escapeHtml(psyche.name || "Chưa đặt tên")}</option>`
            ).join("")
            : `<option value="">Không có Psyche trong bộ đang chỉnh</option>`;
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
        showAdvancedStatus(`Đã tải Psyche ${index + 1}: ${psyche.name || "Chưa đặt tên"}.`);
    }

    function savePsycheRecord() {
        const characterId = document.getElementById("advancedCharacterSelect").value;
        const list = psycheArray(characterId, true);
        const original = psycheEditingIndex >= 0 && list[psycheEditingIndex]
            ? clone(list[psycheEditingIndex])
            : {};

        const name = document.getElementById("psycheName").value.trim();
        if (!name) {
            showAdvancedStatus("Bắt buộc phải có tên Psyche.", true);
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
        showAdvancedStatus(`Đã lưu Psyche "${name}" vào file Psyches đang chỉnh.`);
    }

    function deletePsycheRecord() {
        const characterId = document.getElementById("advancedCharacterSelect").value;
        const list = psycheArray(characterId, false);
        const index = Number(document.getElementById("psycheRecordSelect").value);
        if (!Number.isInteger(index) || !list[index]) return;
        if (!window.confirm(`Xóa Psyche "${list[index].name || "Chưa đặt tên"}" khỏi file Psyches đang chỉnh?`)) return;
        list.splice(index, 1);
        clearPsycheForm();
        refreshPsycheSelect();
        showAdvancedStatus("Đã xóa Psyche khỏi file Psyches đang chỉnh.");
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
`Gói cập nhật The Detective Archive

1. Sao lưu thư mục website hiện tại.
2. Thay ${contentPath} bằng file tương ứng trong ZIP này.
3. Nếu ZIP có file trong images/, hãy chép nó vào đúng đường dẫn tương đối.
4. Làm mới content-manager.html và chạy Kiểm tra trước khi cập nhật.
5. Mở trang public và kiểm tra lại bản ghi vừa sửa.

Tạo lúc: ${new Date().toISOString()}
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
`The Detective Archive — Gói Skills & Psyches

Chỉ thay:
- content/character-skills.js
- content/character-psyches.js

Bản sao lưu của các file được tải khi mở Content Manager nằm trong backup/.
Sau khi thay file, hãy chạy Kiểm tra trước khi cập nhật.
`
            }
        ];
        const zip = await createStoreZip(entries);
        downloadBlob(`tda-character-advanced-${dateStamp()}.zip`, zip, "application/zip");
    }

    async function downloadTranslationPackage() {
        const entries = [
            {
                name: "locales/archive-content-translations.js",
                content: translationFileText()
            },
            {
                name: "UPDATE_README.txt",
                content:
`The Detective Archive — Cập nhật bản dịch

Chỉ thay:
- locales/archive-content-translations.js

Các file nội dung chính không thay đổi.
Nếu thiếu bản dịch, website sẽ tự dùng tiếng Anh.

Sau khi thay file:
1. Làm mới website.
2. Chuyển qua các ngôn ngữ vừa chỉnh.
3. Mở các bản ghi đã sửa và kiểm tra xuống dòng/tràn chữ.
4. Giữ ID bản ghi ổn định để bản dịch luôn liên kết đúng.
`
            }
        ];
        const zip = await createStoreZip(entries);
        downloadBlob(`tda-translation-update-${dateStamp()}.zip`, zip, "application/zip");
    }

    function renderDiagnostics() {
        const diag = window.TDAContentDiagnostics || { sections: {}, errors: ["Chưa tải bộ kiểm tra."], warnings: [] };
        const counts = document.getElementById("diagnosticCounts");
        const status = document.getElementById("diagnosticStatus");
        const ordered = [
            ["News", "Tin tức"],
            ["Characters", "Nhân vật"],
            ["Motives", "Motives"],
            ["Simulation", "Simulation"],
            ["Epiphanies", "Epiphanies"],
            ["Skill characters", "Nhân vật có Skills"],
            ["Psyche characters", "Nhân vật có Psyches"],
            ["Archive updates", "Cập nhật kho lưu trữ"],
            ["Record translations", "Bản dịch bản ghi"]
        ];

        counts.innerHTML = ordered.map(item => {
            const section = diag.sections[item[0]] || { count: 0 };
            return `<article><span>${escapeHtml(item[1])}</span><strong>${Number(section.count || 0)}</strong></article>`;
        }).join("");

        const errors = diag.errors || [];
        const warnings = diag.warnings || [];
        const issues = [...errors, ...warnings];

        status.className = `diagnostic-status ${errors.length ? "bad" : warnings.length ? "warn" : "ok"}`;
        if (!issues.length) {
            status.innerHTML = "Không phát hiện lỗi cấu trúc nội dung.";
        } else {
            status.innerHTML = `<strong>${errors.length} lỗi, ${warnings.length} cảnh báo</strong><ul>${issues.slice(0, 30).map(item => `<li>${escapeHtml(item)}</li>`).join("")}</ul>`;
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
        syncTranslationType(type);
        syncAdvancedCharacterPanel();
        syncScheduleCurrentRecord();
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

    document.querySelectorAll('[data-studio-form] input[name="id"]').forEach(input => {
        input.addEventListener("input", syncScheduleCurrentRecord);
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
                renderImagePreview(type, pathInput.value.trim(), pathInput.value.trim() ? `Đường dẫn hiện có: ${pathInput.value.trim()}` : "");
                return;
            }

            selectedFiles.set(type, file);
            const safeName = cleanFileName(file.name);
            const path = `${helper.dataset.imageFolder}${safeName}`;
            pathInput.value = path;

            const url = URL.createObjectURL(file);
            objectUrls.set(type, url);
            renderImagePreview(type, url, `Sẽ tải lên dưới dạng: ${path}`);
        });

        pathInput.addEventListener("input", () => {
            if (!selectedFiles.get(type)) {
                renderImagePreview(type, pathInput.value.trim(), pathInput.value.trim() ? `Đường dẫn: ${pathInput.value.trim()}` : "");
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
            showRecordValidation(["Không thể tạo ZIP cập nhật."], []);
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
            showAdvancedStatus("Không thể tạo ZIP Skills + Psyches.", true);
        });
    });

    document.getElementById("translationTypeSelect").addEventListener("change", event => {
        translationActiveType = event.target.value;
        refreshTranslationRecordSelect();
        showTranslationStatus("");
    });

    document.getElementById("translationRecordSelect").addEventListener("change", () => {
        renderTranslationManager();
        showTranslationStatus("");
    });

    document.getElementById("translationLanguageTabs").addEventListener("click", event => {
        const button = event.target.closest("[data-translation-language]");
        if (!button) return;
        translationActiveLanguage = button.dataset.translationLanguage;
        renderTranslationManager();
        showTranslationStatus("");
    });

    document.getElementById("saveTranslationRecord").addEventListener("click", saveTranslationRecord);
    document.getElementById("clearTranslationRecord").addEventListener("click", clearTranslationRecord);
    document.getElementById("resetTranslationChanges").addEventListener("click", () => {
        if (!window.confirm("Đặt lại toàn bộ thay đổi bản dịch về file đã tải khi mở Content Manager?")) return;
        resetTranslationWorking();
    });

    document.getElementById("downloadTranslationFile").addEventListener("click", () => {
        downloadBlob("archive-content-translations.js", translationFileText());
        showTranslationStatus("Đã tải file bản dịch hoàn chỉnh đang chỉnh.");
    });

    document.getElementById("downloadTranslationPackage").addEventListener("click", () => {
        downloadTranslationPackage().catch(error => {
            console.error(error);
            showTranslationStatus("Không thể tạo ZIP bản dịch.", "bad");
        });
    });

    document.getElementById("createScheduledPackage").addEventListener("click", () => {
        createScheduledPackage().catch(error => {
            console.error(error);
            showScheduleStatus("Không thể tạo ZIP lên lịch. Hãy kiểm tra Console để xem chi tiết.", "bad");
        });
    });

    document.getElementById("downloadScheduleState").addEventListener("click", () => {
        downloadScheduleStatePackage().catch(error => {
            console.error(error);
            showScheduleStatus("Không thể tạo ZIP cập nhật lịch.", "bad");
        });
    });

    document.getElementById("downloadSchedulerSetup").addEventListener("click", () => {
        downloadSchedulerSetupPackage().catch(error => {
            console.error(error);
            showScheduleStatus("Không thể tạo bộ cài GitHub Actions.", "bad");
        });
    });

    document.getElementById("scheduleQueueBody").addEventListener("click", event => {
        const button = event.target.closest("[data-schedule-action]");
        if (!button) return;
        if (button.dataset.scheduleAction === "cancel") cancelSchedule(button.dataset.scheduleId);
    });

    document.getElementById("refreshDiagnostics").addEventListener("click", renderDiagnostics);

    const scheduleInput = document.getElementById("schedulePublishAt");
    if (scheduleInput && !scheduleInput.value) scheduleInput.value = scheduleDefaultInputValue();

    refreshExistingSelect();
    renderRecordBrowser();
    syncTranslationType(activeType);
    syncAdvancedCharacterPanel();
    syncScheduleCurrentRecord();
    renderScheduleQueue();
    renderDiagnostics();
})();