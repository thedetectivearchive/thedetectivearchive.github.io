/* The Detective Archive Content Manager 3.0 — non-blocking content validation.
   This file reports maintenance mistakes only. It never invents or changes game data. */
(function () {
    "use strict";

    const diagnostics = {
        version: "3.0",
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

    function validateIds(sectionName, list) {
        if (!Array.isArray(list)) {
            diagnostics.errors.push(`${sectionName}: data is not an array.`);
            diagnostics.sections[sectionName] = { count: 0, duplicateIds: [] };
            return;
        }

        const seen = new Set();
        const duplicates = new Set();

        list.forEach((item, index) => {
            if (!item || !valueExists(item.id)) {
                diagnostics.errors.push(`${sectionName}: item #${index + 1} has no id.`);
                return;
            }
            if (!/^[a-z0-9][a-z0-9-]*$/.test(String(item.id))) {
                diagnostics.warnings.push(`${sectionName}: id "${item.id}" is not lowercase kebab-case.`);
            }
            if (seen.has(item.id)) duplicates.add(item.id);
            seen.add(item.id);
        });

        duplicates.forEach(id => diagnostics.errors.push(`${sectionName}: duplicate id "${id}".`));
        diagnostics.sections[sectionName] = {
            count: list.length,
            duplicateIds: Array.from(duplicates)
        };
    }

    function validateImage(label, path, folder) {
        if (!path) return;
        if (!/^https?:\/\//i.test(path) && folder && !String(path).startsWith(folder)) {
            diagnostics.warnings.push(`${label}: recommended image folder is ${folder}`);
        }
        if (/\s/.test(String(path))) {
            diagnostics.warnings.push(`${label}: image path contains spaces.`);
        }
    }

    function validateNews(list, sectionName) {
        if (!Array.isArray(list)) return;
        const featured = [];

        list.forEach((entry, index) => {
            const label = `${sectionName} #${index + 1}${entry && entry.id ? ` (${entry.id})` : ""}`;
            if (!entry || !localizedExists(entry.title)) diagnostics.errors.push(`${label}: title is missing.`);
            if (!entry || !valueExists(entry.date)) diagnostics.warnings.push(`${label}: date is blank.`);
            if (!entry || !localizedExists(entry.description)) diagnostics.warnings.push(`${label}: description is blank.`);
            if (entry && entry.featured) featured.push(entry.id);
            validateImage(label, entry && entry.image, "images/news/");
        });

        if (sectionName === "News" && featured.length > 1) {
            diagnostics.warnings.push(`News: ${featured.length} records are marked featured (${featured.join(", ")}). Prefer one pinned Featured News.`);
        }
    }

    function validateCharacters(list) {
        if (!Array.isArray(list)) return;
        const allowedReactors = new Set(["Ignis", "Glacies", "Fulmen", "Gravitas", "Radiatio", "Ferrugo", "Alba", ""]);

        list.forEach((entry, index) => {
            const label = `Characters #${index + 1}${entry && entry.id ? ` (${entry.id})` : ""}`;
            if (!entry || !localizedExists(entry.name)) diagnostics.errors.push(`${label}: name is missing.`);
            if (entry && entry.rarity !== undefined && ![3, 4, 5].includes(Number(entry.rarity))) {
                diagnostics.warnings.push(`${label}: rarity is outside the current 3/4/5-star range.`);
            }
            if (entry && !allowedReactors.has(String(entry.reactorAttribute || ""))) {
                diagnostics.warnings.push(`${label}: unknown Reactor "${entry.reactorAttribute}".`);
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
            if (!entry || !localizedExists(entry.name)) diagnostics.errors.push(`${label}: name is missing.`);
            if (entry && entry.rarity !== undefined && ![3, 4, 5].includes(Number(entry.rarity))) {
                diagnostics.warnings.push(`${label}: rarity is outside the current 3/4/5-star range.`);
            }
            validateImage(label, entry && entry.image, "images/motive/");
        });
    }

    function validateSimulation(list) {
        if (!Array.isArray(list)) return;
        list.forEach((entry, index) => {
            const label = `Simulation #${index + 1}${entry && entry.id ? ` (${entry.id})` : ""}`;
            if (!entry || !localizedExists(entry.name)) diagnostics.errors.push(`${label}: name is missing.`);
            validateImage(label, entry && entry.image, "images/simulation/");
            if (entry && entry.slots && (!Array.isArray(entry.slots) || entry.slots.length !== 4)) {
                diagnostics.warnings.push(`${label}: Simulation Implement set normally has four slots.`);
            }
        });
    }

    function validateEpiphanies(list) {
        if (!Array.isArray(list)) return;
        list.forEach((entry, index) => {
            const label = `Epiphanies #${index + 1}${entry && entry.id ? ` (${entry.id})` : ""}`;
            if (!entry || !localizedExists(entry.name)) diagnostics.errors.push(`${label}: name is missing.`);
            validateImage(label, entry && entry.image, "images/epiphany/");
        });

        if (typeof epiphanySystemInfo !== "undefined" && epiphanySystemInfo && Number(epiphanySystemInfo.count) !== list.length) {
            diagnostics.warnings.push(`Epiphanies: epiphanySystemInfo.count is ${epiphanySystemInfo.count}, but the array contains ${list.length} record(s).`);
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
                diagnostics.warnings.push(`Character skills: "${id}" has no skills array or variant arrays.`);
            }

            groups.forEach(group => {
                if (!Array.isArray(group.list)) {
                    diagnostics.errors.push(`Character skills: ${group.label} is not an array.`);
                    return;
                }

                total += group.list.length;

                group.list.forEach((skill, index) => {
                    const label = `Character skills: ${group.label} #${index + 1}`;
                    if (!skill || !valueExists(skill.name)) diagnostics.errors.push(`${label}: name is missing.`);
                    if (!skill || !valueExists(skill.type)) diagnostics.warnings.push(`${label}: type is blank.`);
                    if (skill && skill.mechanics !== undefined && !Array.isArray(skill.mechanics)) {
                        diagnostics.warnings.push(`${label}: mechanics should be an array.`);
                    }
                    if (skill && skill.combo !== undefined && !Array.isArray(skill.combo)) {
                        diagnostics.warnings.push(`${label}: combo should be an array.`);
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
                diagnostics.errors.push(`Character Psyches: "${id}" is not an array.`);
                return;
            }

            total += list.length;

            list.forEach((psyche, index) => {
                const label = `Character Psyches: ${id} #${index + 1}`;
                if (!psyche || !valueExists(psyche.name)) diagnostics.errors.push(`${label}: name is missing.`);
                if (!psyche || !localizedExists(psyche.description)) diagnostics.warnings.push(`${label}: description is blank.`);
            });
        });

        diagnostics.sections["Psyche characters"] = {
            count: ids.length,
            totalRecords: total
        };
    }

    function validatePatchKeys(sectionName, patch) {
        if (!patch || typeof patch !== "object" || typeof charactersData === "undefined" || !Array.isArray(charactersData)) return;
        const ids = new Set(charactersData.map(item => item && item.id).filter(Boolean));
        Object.keys(patch).forEach(id => {
            if (!ids.has(id)) diagnostics.warnings.push(`${sectionName}: patch key "${id}" has no matching Character id.`);
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
    } catch (error) {
        diagnostics.errors.push(`Validator exception: ${error && error.message ? error.message : String(error)}`);
    }

    diagnostics.ok = diagnostics.errors.length === 0;
    window.TDAContentDiagnostics = diagnostics;

    if (diagnostics.errors.length) console.error("[The Detective Archive] Content validation errors:", diagnostics.errors);
    if (diagnostics.warnings.length) console.warn("[The Detective Archive] Content validation warnings:", diagnostics.warnings);
    if (!diagnostics.errors.length && !diagnostics.warnings.length) console.info("[The Detective Archive] Content validation passed.");
})();