/* The Detective Archive Content Manager 3.0 — non-blocking content validation.
   This file reports maintenance mistakes only. It never invents or changes game data. */
(function () {
    "use strict";

    const diagnostics = {
        version: "3.1",
        checkedAt: new Date().toISOString(),
        sections: {},
        warnings: [],
        errors: []
    };

    function valueExists(value) {
        return value !== null && value !== undefined && String(value).trim() !== "";
    }

    function localizedExists(value) {
        if (typeof value === "string") return value.trim() !== "";
        if (!value || typeof value !== "object") return false;
        return Object.values(value).some(valueExists);
    }

    function validateEnglishFallback(label, value) {
        if (
            value &&
            typeof value === "object" &&
            !Array.isArray(value) &&
            !valueExists(value.en)
        ) {
            diagnostics.warnings.push(`${label}: trường đa ngôn ngữ nên có bản dự phòng tiếng Anh (en).`);
        }
    }

    function validateIds(sectionName, list) {
        if (!Array.isArray(list)) {
            diagnostics.errors.push(`${sectionName}: dữ liệu không phải dạng mảng.`);
            diagnostics.sections[sectionName] = { count: 0, duplicateIds: [] };
            return;
        }

        const seen = new Set();
        const duplicates = new Set();

        list.forEach((item, index) => {
            if (!item || !valueExists(item.id)) {
                diagnostics.errors.push(`${sectionName}: mục #${index + 1} chưa có ID.`);
                return;
            }
            if (!/^[a-z0-9][a-z0-9-]*$/.test(String(item.id))) {
                diagnostics.warnings.push(`${sectionName}: ID "${item.id}" chưa đúng dạng kebab-case chữ thường.`);
            }
            if (seen.has(item.id)) duplicates.add(item.id);
            seen.add(item.id);
        });

        duplicates.forEach(id => diagnostics.errors.push(`${sectionName}: ID "${id}" bị trùng.`));
        diagnostics.sections[sectionName] = {
            count: list.length,
            duplicateIds: Array.from(duplicates)
        };
    }

    function validateImage(label, path, folder) {
        if (!path) return;
        if (!/^https?:\/\//i.test(path) && folder && !String(path).startsWith(folder)) {
            diagnostics.warnings.push(`${label}: thư mục ảnh khuyến nghị là ${folder}`);
        }
        if (/\s/.test(String(path))) {
            diagnostics.warnings.push(`${label}: đường dẫn ảnh có dấu cách.`);
        }
    }

    function validateNews(list, sectionName) {
        if (!Array.isArray(list)) return;
        const featured = [];

        list.forEach((entry, index) => {
            const label = `${sectionName} #${index + 1}${entry && entry.id ? ` (${entry.id})` : ""}`;
            if (!entry || !localizedExists(entry.title)) diagnostics.errors.push(`${label}: thiếu tiêu đề.`);
            if (!entry || !valueExists(entry.date)) diagnostics.warnings.push(`${label}: ngày đang để trống.`);
            if (!entry || !localizedExists(entry.description)) diagnostics.warnings.push(`${label}: mô tả đang để trống.`);
            if (entry) {
                validateEnglishFallback(`${label} title`, entry.title);
                validateEnglishFallback(`${label} description`, entry.description);
                if (entry.content !== undefined) validateEnglishFallback(`${label} content`, entry.content);
            }
            if (entry && entry.featured) featured.push(entry.id);
            validateImage(label, entry && entry.image, "images/news/");
        });

        if (sectionName === "News" && featured.length > 1) {
            diagnostics.warnings.push(`Tin tức: có ${featured.length} bản ghi được đánh dấu nổi bật (${featured.join(", ")}). Nên chỉ ghim một Tin tức nổi bật.`);
        }
    }

    function validateCharacters(list) {
        if (!Array.isArray(list)) return;
        const allowedReactors = new Set(["Ignis", "Glacies", "Fulmen", "Gravitas", "Radiatio", "Ferrugo", "Alba", ""]);

        list.forEach((entry, index) => {
            const label = `Characters #${index + 1}${entry && entry.id ? ` (${entry.id})` : ""}`;
            if (!entry || !localizedExists(entry.name)) diagnostics.errors.push(`${label}: thiếu tên.`);
            if (entry) validateEnglishFallback(`${label} name`, entry.name);
            if (entry && entry.rarity !== undefined && ![3, 4, 5].includes(Number(entry.rarity))) {
                diagnostics.warnings.push(`${label}: độ hiếm nằm ngoài phạm vi 3/4/5★ hiện tại.`);
            }
            if (entry && !allowedReactors.has(String(entry.reactorAttribute || ""))) {
                diagnostics.warnings.push(`${label}: Reactor "${entry.reactorAttribute}" chưa được nhận diện.`);
            }
            const card = entry && entry.images ? entry.images.card : "";
            const splash = entry && entry.images ? entry.images.splash : "";
            validateImage(`${label} card`, card, "images/character/");
            validateImage(`${label} splash`, splash, "images/character/");
        });
    }

    function validateMotives(list) {
        if (!Array.isArray(list)) return;
        list.forEach((entry, index) => {
            const label = `Motives #${index + 1}${entry && entry.id ? ` (${entry.id})` : ""}`;
            if (!entry || !localizedExists(entry.name)) diagnostics.errors.push(`${label}: thiếu tên.`);
            if (entry) validateEnglishFallback(`${label} name`, entry.name);
            if (entry && entry.rarity !== undefined && ![3, 4, 5].includes(Number(entry.rarity))) {
                diagnostics.warnings.push(`${label}: độ hiếm nằm ngoài phạm vi 3/4/5★ hiện tại.`);
            }
            validateImage(`${label} card`, entry && entry.image, "images/motive/");
            validateImage(`${label} detail`, entry && entry.detailImage, "images/motive/detail/");
        });
    }

    function validateSimulation(list) {
        if (!Array.isArray(list)) return;
        list.forEach((entry, index) => {
            const label = `Simulation #${index + 1}${entry && entry.id ? ` (${entry.id})` : ""}`;
            if (!entry || !localizedExists(entry.name)) diagnostics.errors.push(`${label}: thiếu tên.`);
            if (entry) validateEnglishFallback(`${label} name`, entry.name);
            validateImage(`${label} card`, entry && (entry.cardImage || entry.image), "images/simulation/");
            if (entry && entry.slots && (!Array.isArray(entry.slots) || entry.slots.length !== 4)) {
                diagnostics.warnings.push(`${label}: bộ Simulation Implement thông thường phải có 4 ô.`);
            }
        });
    }

    function validateEpiphanies(list) {
        if (!Array.isArray(list)) return;
        list.forEach((entry, index) => {
            const label = `Epiphanies #${index + 1}${entry && entry.id ? ` (${entry.id})` : ""}`;
            if (!entry || !localizedExists(entry.name)) diagnostics.errors.push(`${label}: thiếu tên.`);
            if (entry) validateEnglishFallback(`${label} name`, entry.name);
            validateImage(label, entry && entry.image, "images/epiphany/");
        });

        if (typeof epiphanySystemInfo !== "undefined" && epiphanySystemInfo && Number(epiphanySystemInfo.count) !== list.length) {
            diagnostics.warnings.push(`Epiphanies: epiphanySystemInfo.count là ${epiphanySystemInfo.count}, nhưng mảng hiện có ${list.length} bản ghi.`);
        }
    }


    function validateSkillPatch(patch) {
        if (!patch || typeof patch !== "object") return;

        const ids = Object.keys(patch);
        let total = 0;

        ids.forEach(id => {
            const node = patch[id];
            const groups = [];

            if (node && Array.isArray(node.skills)) {
                groups.push({ label: `${id}.skills`, list: node.skills });
            }

            if (node && node.variants && typeof node.variants === "object") {
                Object.entries(node.variants).forEach(([variant, list]) => {
                    groups.push({ label: `${id}.variants.${variant}`, list });
                });
            }

            if (!groups.length) {
                diagnostics.warnings.push(`Skills nhân vật: "${id}" không có mảng skills hoặc mảng variants.`);
            }

            groups.forEach(group => {
                if (!Array.isArray(group.list)) {
                    diagnostics.errors.push(`Skills nhân vật: ${group.label} không phải dạng mảng.`);
                    return;
                }

                total += group.list.length;

                group.list.forEach((skill, index) => {
                    const label = `Character skills: ${group.label} #${index + 1}`;
                    if (!skill || !valueExists(skill.name)) diagnostics.errors.push(`${label}: thiếu tên.`);
                    if (!skill || !valueExists(skill.type)) diagnostics.warnings.push(`${label}: loại đang để trống.`);
                    if (skill && skill.mechanics !== undefined && !Array.isArray(skill.mechanics)) {
                        diagnostics.warnings.push(`${label}: mechanics nên là dạng mảng.`);
                    }
                    if (skill && skill.combo !== undefined && !Array.isArray(skill.combo)) {
                        diagnostics.warnings.push(`${label}: combo nên là dạng mảng.`);
                    }
                });
            });
        });

        diagnostics.sections["Skill characters"] = {
            count: ids.length,
            totalRecords: total
        };
    }

    function validatePsychePatch(patch) {
        if (!patch || typeof patch !== "object") return;

        const ids = Object.keys(patch);
        let total = 0;

        ids.forEach(id => {
            const list = patch[id];
            if (!Array.isArray(list)) {
                diagnostics.errors.push(`Psyches nhân vật: "${id}" không phải dạng mảng.`);
                return;
            }

            total += list.length;

            list.forEach((psyche, index) => {
                const label = `Character Psyches: ${id} #${index + 1}`;
                if (!psyche || !valueExists(psyche.name)) diagnostics.errors.push(`${label}: thiếu tên.`);
                if (!psyche || !localizedExists(psyche.description)) diagnostics.warnings.push(`${label}: mô tả đang để trống.`);
                if (psyche) validateEnglishFallback(`${label} description`, psyche.description);
            });
        });

        diagnostics.sections["Psyche characters"] = {
            count: ids.length,
            totalRecords: total
        };
    }


    function translationCollectionByName(name) {
        if (name === "characters") return typeof charactersData !== "undefined" ? charactersData : null;
        if (name === "motives") return typeof weaponsData !== "undefined" ? weaponsData : null;
        if (name === "simulation") return typeof simulationData !== "undefined" ? simulationData : null;
        if (name === "epiphanies") return typeof epiphanyData !== "undefined" ? epiphanyData : null;
        if (name === "news") return typeof newsData !== "undefined" ? newsData : null;
        return null;
    }

    function validateTranslationOverlayShape(label, base, overlay) {
        if (overlay === null || overlay === undefined) return;

        if (typeof overlay === "string") {
            if (!(typeof base === "string" || (base && typeof base === "object" && !Array.isArray(base)))) {
                diagnostics.warnings.push(`${label}: bản dịch đang trỏ tới một trường gốc không phải văn bản.`);
            }
            return;
        }

        if (Array.isArray(overlay)) {
            if (base && typeof base === "object" && !Array.isArray(base) && Object.prototype.hasOwnProperty.call(base, "en")) {
                return;
            }
            if (!Array.isArray(base)) {
                diagnostics.warnings.push(`${label}: mảng bản dịch không khớp cấu trúc gốc.`);
                return;
            }
            overlay.forEach((item, index) => {
                if (item == null) return;
                validateTranslationOverlayShape(`${label}[${index}]`, base[index], item);
            });
            return;
        }

        if (!overlay || typeof overlay !== "object") {
            diagnostics.warnings.push(`${label}: kiểu dữ liệu bản dịch chưa được hỗ trợ.`);
            return;
        }

        if (!base || typeof base !== "object") {
            diagnostics.warnings.push(`${label}: object bản dịch không khớp cấu trúc gốc.`);
            return;
        }

        Object.keys(overlay).forEach(key => {
            if (!Object.prototype.hasOwnProperty.call(base, key)) {
                diagnostics.warnings.push(`${label}.${key}: trường này không tồn tại trong bản ghi gốc.`);
                return;
            }
            validateTranslationOverlayShape(`${label}.${key}`, base[key], overlay[key]);
        });
    }

    function validateRecordTranslations(store) {
        if (!store || typeof store !== "object") return;

        const supported = new Set(["vi", "th", "ja", "zh-CN", "ko", "fr", "es", "ru"]);
        const collections = ["characters", "motives", "simulation", "epiphanies", "news"];
        let translatedRecords = 0;

        Object.keys(store).forEach(language => {
            if (!supported.has(language)) {
                diagnostics.warnings.push(`Bản dịch bản ghi: mã ngôn ngữ "${language}" chưa được hỗ trợ.`);
            }
            const locale = store[language];
            if (!locale || typeof locale !== "object") {
                diagnostics.errors.push(`Bản dịch bản ghi: ngôn ngữ "${language}" không phải dạng object.`);
                return;
            }

            collections.forEach(collectionName => {
                const overrides = locale[collectionName];
                if (overrides === undefined) return;
                if (!overrides || typeof overrides !== "object" || Array.isArray(overrides)) {
                    diagnostics.errors.push(`Bản dịch bản ghi: ${language}.${collectionName} phải là object được đánh khóa bằng ID bản ghi.`);
                    return;
                }

                const baseCollection = translationCollectionByName(collectionName);
                const baseById = new Map(
                    Array.isArray(baseCollection)
                        ? baseCollection.filter(Boolean).map(record => [record.id, record])
                        : []
                );

                Object.keys(overrides).forEach(recordId => {
                    translatedRecords += 1;
                    const baseRecord = baseById.get(recordId);
                    if (!baseRecord) {
                        diagnostics.warnings.push(`Bản dịch bản ghi: ${language}.${collectionName}."${recordId}" không có bản ghi gốc tương ứng.`);
                        return;
                    }
                    validateTranslationOverlayShape(
                        `Record translations: ${language}.${collectionName}.${recordId}`,
                        baseRecord,
                        overrides[recordId]
                    );
                });
            });
        });

        diagnostics.sections["Record translations"] = {
            count: translatedRecords,
            languages: Object.keys(store).length
        };
    }

    function validatePublishSchedule(schedule) {
        if (!schedule || typeof schedule !== "object") return;
        if (!Array.isArray(schedule.items)) {
            diagnostics.errors.push("Lịch xuất bản: items phải là dạng mảng.");
            return;
        }

        const supportedTypes = new Set(["news", "character", "motive", "simulation", "epiphany"]);
        const seenIds = new Set();
        let dueCount = 0;

        schedule.items.forEach((item, index) => {
            const label = `Lịch xuất bản #${index + 1}`;
            if (!item || !valueExists(item.scheduleId)) diagnostics.errors.push(`${label}: thiếu scheduleId.`);
            if (!item || !valueExists(item.recordId)) diagnostics.errors.push(`${label}: thiếu recordId.`);
            if (!item || !supportedTypes.has(String(item.type || ""))) diagnostics.errors.push(`${label}: loại nội dung không hợp lệ.`);
            if (!item || !valueExists(item.payloadPath)) diagnostics.errors.push(`${label}: thiếu payloadPath.`);
            if (item && item.payloadPath && !String(item.payloadPath).startsWith("scheduled/records/")) {
                diagnostics.warnings.push(`${label}: payloadPath nên nằm trong scheduled/records/.`);
            }
            if (item && valueExists(item.scheduleId)) {
                if (seenIds.has(item.scheduleId)) diagnostics.errors.push(`${label}: scheduleId "${item.scheduleId}" bị trùng.`);
                seenIds.add(item.scheduleId);
            }
            const publishTime = item && item.publishAt ? new Date(item.publishAt) : null;
            if (!publishTime || Number.isNaN(publishTime.getTime())) {
                diagnostics.errors.push(`${label}: publishAt không hợp lệ.`);
            } else if (item.enabled !== false && publishTime.getTime() <= Date.now()) {
                dueCount += 1;
            }
        });

        diagnostics.sections["Publish schedule"] = {
            count: schedule.items.length,
            due: dueCount,
            timezone: schedule.timezone || ""
        };

        if (dueCount) {
            diagnostics.warnings.push(`Lịch xuất bản: có ${dueCount} mục đã đến giờ nhưng vẫn còn trong queue. Kiểm tra GitHub Actions nếu trạng thái này kéo dài.`);
        }
    }

    function validatePatchKeys(sectionName, patch) {
        if (!patch || typeof patch !== "object" || typeof charactersData === "undefined" || !Array.isArray(charactersData)) return;
        const ids = new Set(charactersData.map(item => item && item.id).filter(Boolean));
        Object.keys(patch).forEach(id => {
            if (!ids.has(id)) diagnostics.warnings.push(`${sectionName}: khóa patch "${id}" không có ID Nhân vật tương ứng.`);
        });
    }

    try {
        if (typeof newsData !== "undefined") {
            validateIds("News", newsData);
            validateNews(newsData, "News");
        }
        if (typeof archiveUpdatesData !== "undefined") {
            validateIds("Archive updates", archiveUpdatesData);
            validateNews(archiveUpdatesData, "Archive updates");
        }
        if (typeof charactersData !== "undefined") {
            validateIds("Characters", charactersData);
            validateCharacters(charactersData);
        }
        if (typeof weaponsData !== "undefined") {
            validateIds("Motives", weaponsData);
            validateMotives(weaponsData);
        }
        if (typeof simulationData !== "undefined") {
            validateIds("Simulation", simulationData);
            validateSimulation(simulationData);
        }
        if (typeof epiphanyData !== "undefined") {
            validateIds("Epiphanies", epiphanyData);
            validateEpiphanies(epiphanyData);
        }
        if (typeof characterSkillDetailPatchV26 !== "undefined") {
            validatePatchKeys("Character skills", characterSkillDetailPatchV26);
            validateSkillPatch(characterSkillDetailPatchV26);
        }
        if (typeof characterPsycheDetailPatchV30 !== "undefined") {
            validatePatchKeys("Character Psyches", characterPsycheDetailPatchV30);
            validatePsychePatch(characterPsycheDetailPatchV30);
        }
        if (typeof window.ArchiveContentTranslations !== "undefined") {
            validateRecordTranslations(window.ArchiveContentTranslations);
        }
        if (typeof window.ArchivePublishSchedule !== "undefined") {
            validatePublishSchedule(window.ArchivePublishSchedule);
        }
    } catch (error) {
        diagnostics.errors.push(`Lỗi bộ kiểm tra: ${error && error.message ? error.message : String(error)}`);
    }

    if (window.ArchiveI18n && typeof window.ArchiveI18n.audit === "function") {
        diagnostics.sections.Localization = {};
        window.ArchiveI18n.languages.forEach(language => {
            const audit = window.ArchiveI18n.audit(language);
            diagnostics.sections.Localization[language] = {
                translated: audit.translated,
                total: audit.total,
                missing: audit.missing.length
            };
        });
    }

    diagnostics.ok = diagnostics.errors.length === 0;
    window.TDAContentDiagnostics = diagnostics;

    if (diagnostics.errors.length) console.error("[The Detective Archive] Content validation errors:", diagnostics.errors);
    if (diagnostics.warnings.length) console.warn("[The Detective Archive] Content validation warnings:", diagnostics.warnings);
    if (!diagnostics.errors.length && !diagnostics.warnings.length) console.info("[The Detective Archive] Content validation passed.");
})();