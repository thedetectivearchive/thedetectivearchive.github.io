/* =========================================================
   THE DETECTIVE ARCHIVE — BUILD DATA FOUNDATION
   v59.4

   Purpose:
   - Canonical player-build record schema.
   - Build scan history (in-memory until a persistent backend is connected).
   - Verification states and leaderboard eligibility checks.
   - Explicit scoring-version compatibility.

   IMPORTANT:
   - No Silver Palace scoring formula is defined here.
   - currentScoreVersion stays null until a verified scoring model exists.
   - No fabricated player/build records should be added.
========================================================= */

(function () {
    "use strict";

    const VERIFICATION_STATUS = Object.freeze({
        PENDING: "pending",
        VERIFIED: "verified",
        INCOMPLETE_DATA: "incomplete_data",
        OUTDATED: "outdated",
        SCORE_VERSION_OLD: "score_version_old",
        SUSPICIOUS: "suspicious",
        NOT_ELIGIBLE: "not_eligible"
    });

    const ELIGIBILITY_REASON = Object.freeze({
        SCORE_SYSTEM_NOT_READY: "score_system_not_ready",
        MISSING_UID: "missing_uid",
        MISSING_PROFILE_ID: "missing_profile_id",
        MISSING_SCORE: "missing_score",
        SCORE_NOT_VERIFIED: "score_not_verified",
        MISSING_SCORE_VERSION: "missing_score_version",
        SCORE_VERSION_MISMATCH: "score_version_mismatch",
        LOW_CONFIDENCE: "low_confidence",
        VERIFICATION_NOT_PASSED: "verification_not_passed",
        INACTIVE: "inactive"
    });

    const DEFAULT_STORE = {
        schemaVersion: "1.0",
        currentScoreVersion: null,
        minimumDataConfidence: 90,
        maximumBuildAgeDays: null,
        activeRecords: [],
        history: []
    };

    const store = window.SILVER_PALACE_BUILD_DATA && typeof window.SILVER_PALACE_BUILD_DATA === "object"
        ? window.SILVER_PALACE_BUILD_DATA
        : DEFAULT_STORE;

    store.schemaVersion = store.schemaVersion || "1.0";
    store.currentScoreVersion = store.currentScoreVersion || null;
    store.minimumDataConfidence = Number.isFinite(Number(store.minimumDataConfidence))
        ? Number(store.minimumDataConfidence)
        : 90;
    store.maximumBuildAgeDays = Number.isFinite(Number(store.maximumBuildAgeDays))
        ? Number(store.maximumBuildAgeDays)
        : null;
    store.activeRecords = Array.isArray(store.activeRecords) ? store.activeRecords : [];
    store.history = Array.isArray(store.history) ? store.history : [];

    window.SILVER_PALACE_BUILD_DATA = store;

    function cleanText(value) {
        return String(value === null || value === undefined ? "" : value).trim();
    }

    function parseTimestamp(value) {
        const parsed = Date.parse(value || "");
        return Number.isFinite(parsed) ? parsed : 0;
    }

    function makeBuildKey(uid, profileId) {
        return `${cleanText(uid)}::${cleanText(profileId)}`;
    }

    function makeScanId(record) {
        const stamp = parseTimestamp(record.checkedAt || record.updatedAt || record.scoredAt) || Date.now();
        return `${makeBuildKey(record.uid, record.profileId)}::${stamp}`;
    }

    function normalizeVerificationStatus(raw) {
        const explicit = cleanText(
            raw && raw.verification && raw.verification.status !== undefined
                ? raw.verification.status
                : raw && raw.verificationStatus
        );

        if (Object.values(VERIFICATION_STATUS).includes(explicit)) {
            return explicit;
        }

        /* Backward compatibility with early v59.3 records. */
        if (raw && raw.scoringVerified === true) {
            return VERIFICATION_STATUS.VERIFIED;
        }

        return VERIFICATION_STATUS.PENDING;
    }

    function normalizeBuildRecord(raw) {
        const source = raw && typeof raw === "object" ? raw : {};
        const verification = source.verification && typeof source.verification === "object"
            ? source.verification
            : {};
        const checkedAt = cleanText(source.checkedAt || source.updatedAt || source.scoredAt || "");
        const updatedAt = cleanText(source.updatedAt || source.checkedAt || source.scoredAt || "");
        const score = Number(source.score ?? source.buildScore);
        const equipmentScore = Number(source.equipmentScore ?? source.relicScore);
        const breakpointScore = Number(source.breakpointScore);
        const dataConfidence = Number(
            source.dataConfidence !== undefined
                ? source.dataConfidence
                : verification.dataConfidence
        );
        const verificationStatus = normalizeVerificationStatus(source);
        const verificationReasons = Array.isArray(verification.reasons)
            ? verification.reasons.map(cleanText).filter(Boolean)
            : (Array.isArray(source.verificationReasons)
                ? source.verificationReasons.map(cleanText).filter(Boolean)
                : []);

        const normalized = {
            ...source,
            uid: cleanText(source.uid),
            playerName: cleanText(source.playerName || source.name),
            profileId: cleanText(source.profileId),
            characterId: cleanText(source.characterId),
            score: Number.isFinite(score) ? score : null,
            grade: cleanText(source.grade),
            equipmentScore: Number.isFinite(equipmentScore) ? equipmentScore : null,
            breakpointScore: Number.isFinite(breakpointScore) ? breakpointScore : null,
            dataConfidence: Number.isFinite(dataConfidence) ? dataConfidence : null,
            scoreVersion: cleanText(source.scoreVersion),
            scoringVerified: source.scoringVerified === true,
            verificationStatus: verificationStatus,
            verificationReasons: verificationReasons,
            source: cleanText(source.source || verification.source),
            checkedAt: checkedAt,
            updatedAt: updatedAt,
            isActive: source.isActive !== false,
            stats: source.stats && typeof source.stats === "object" ? source.stats : {},
            equipment: source.equipment && typeof source.equipment === "object" ? source.equipment : {},
            breakpoints: source.breakpoints && typeof source.breakpoints === "object" ? source.breakpoints : {},
            build: source.build && typeof source.build === "object" ? source.build : null
        };

        normalized.scanId = cleanText(source.scanId) || makeScanId(normalized);
        normalized.buildKey = makeBuildKey(normalized.uid, normalized.profileId);
        normalized._timestamp = parseTimestamp(updatedAt || checkedAt);

        return normalized;
    }

    function validateBuildRecord(raw) {
        const record = normalizeBuildRecord(raw);
        const issues = [];

        if (!record.uid) {
            issues.push(ELIGIBILITY_REASON.MISSING_UID);
        }
        if (!record.profileId) {
            issues.push(ELIGIBILITY_REASON.MISSING_PROFILE_ID);
        }

        return {
            valid: issues.length === 0,
            issues: issues,
            record: record
        };
    }

    function evaluateEligibility(raw, options) {
        const record = normalizeBuildRecord(raw);
        const opts = options && typeof options === "object" ? options : {};
        const currentScoreVersion = cleanText(
            opts.currentScoreVersion !== undefined
                ? opts.currentScoreVersion
                : store.currentScoreVersion
        );
        const minimumDataConfidence = Number.isFinite(Number(opts.minimumDataConfidence))
            ? Number(opts.minimumDataConfidence)
            : store.minimumDataConfidence;
        const reasons = [];

        if (!record.isActive) {
            reasons.push(ELIGIBILITY_REASON.INACTIVE);
        }
        if (!record.uid) {
            reasons.push(ELIGIBILITY_REASON.MISSING_UID);
        }
        if (!record.profileId) {
            reasons.push(ELIGIBILITY_REASON.MISSING_PROFILE_ID);
        }
        if (!Number.isFinite(Number(record.score))) {
            reasons.push(ELIGIBILITY_REASON.MISSING_SCORE);
        }
        if (record.scoringVerified !== true) {
            reasons.push(ELIGIBILITY_REASON.SCORE_NOT_VERIFIED);
        }
        if (!record.scoreVersion) {
            reasons.push(ELIGIBILITY_REASON.MISSING_SCORE_VERSION);
        }

        /* Production leaderboard remains disabled until a current scoring version is declared. */
        if (!currentScoreVersion) {
            reasons.push(ELIGIBILITY_REASON.SCORE_SYSTEM_NOT_READY);
        } else if (record.scoreVersion && record.scoreVersion !== currentScoreVersion) {
            reasons.push(ELIGIBILITY_REASON.SCORE_VERSION_MISMATCH);
        }

        if (!Number.isFinite(Number(record.dataConfidence)) || Number(record.dataConfidence) < minimumDataConfidence) {
            reasons.push(ELIGIBILITY_REASON.LOW_CONFIDENCE);
        }

        if (record.verificationStatus !== VERIFICATION_STATUS.VERIFIED) {
            reasons.push(ELIGIBILITY_REASON.VERIFICATION_NOT_PASSED);
        }

        return {
            eligible: reasons.length === 0,
            reasons: Array.from(new Set(reasons)),
            record: record,
            currentScoreVersion: currentScoreVersion || null,
            minimumDataConfidence: minimumDataConfidence
        };
    }

    function chooseNewestRecord(a, b) {
        const timeA = Number(a && a._timestamp) || 0;
        const timeB = Number(b && b._timestamp) || 0;
        return timeB >= timeA ? b : a;
    }

    function rebuildActiveRecordsFromHistory() {
        const latest = new Map();

        store.history
            .map(normalizeBuildRecord)
            .forEach(function (record) {
                if (!record.uid || !record.profileId) {
                    return;
                }
                const existing = latest.get(record.buildKey);
                latest.set(record.buildKey, existing ? chooseNewestRecord(existing, record) : record);
            });

        store.activeRecords = Array.from(latest.values()).filter(function (record) {
            return record.isActive !== false;
        });

        return store.activeRecords.slice();
    }

    function registerBuildScan(raw, options) {
        const result = validateBuildRecord(raw);
        if (!result.valid) {
            return {
                accepted: false,
                issues: result.issues,
                record: result.record,
                eligibility: evaluateEligibility(result.record, options)
            };
        }

        const record = result.record;
        const existingScanIndex = store.history.findIndex(function (entry) {
            return cleanText(entry && entry.scanId) === record.scanId;
        });

        if (existingScanIndex >= 0) {
            store.history[existingScanIndex] = record;
        } else {
            store.history.push(record);
        }

        const activeIndex = store.activeRecords.findIndex(function (entry) {
            return makeBuildKey(entry && entry.uid, entry && entry.profileId) === record.buildKey;
        });

        if (activeIndex < 0) {
            if (record.isActive !== false) {
                store.activeRecords.push(record);
            }
        } else {
            const current = normalizeBuildRecord(store.activeRecords[activeIndex]);
            const newest = chooseNewestRecord(current, record);
            if (newest === record) {
                if (record.isActive === false) {
                    store.activeRecords.splice(activeIndex, 1);
                } else {
                    store.activeRecords[activeIndex] = record;
                }
            }
        }

        return {
            accepted: true,
            issues: [],
            record: record,
            eligibility: evaluateEligibility(record, options)
        };
    }

    function getBuildHistory(uid, profileId) {
        const wantedUid = cleanText(uid);
        const wantedProfileId = cleanText(profileId);

        return store.history
            .map(normalizeBuildRecord)
            .filter(function (record) {
                return (
                    (!wantedUid || record.uid === wantedUid) &&
                    (!wantedProfileId || record.profileId === wantedProfileId)
                );
            })
            .sort(function (a, b) {
                return b._timestamp - a._timestamp;
            });
    }

    function getStoreSnapshot() {
        return {
            schemaVersion: store.schemaVersion,
            currentScoreVersion: store.currentScoreVersion || null,
            scoreVersion: store.currentScoreVersion || null,
            minimumDataConfidence: store.minimumDataConfidence,
            maximumBuildAgeDays: store.maximumBuildAgeDays,
            activeRecords: store.activeRecords.map(normalizeBuildRecord),
            history: store.history.map(normalizeBuildRecord)
        };
    }

    function setCurrentScoreVersion(version) {
        store.currentScoreVersion = cleanText(version) || null;
        return store.currentScoreVersion;
    }

    window.TheDetectiveBuildData = Object.freeze({
        VERIFICATION_STATUS: VERIFICATION_STATUS,
        ELIGIBILITY_REASON: ELIGIBILITY_REASON,
        normalizeBuildRecord: normalizeBuildRecord,
        validateBuildRecord: validateBuildRecord,
        evaluateEligibility: evaluateEligibility,
        registerBuildScan: registerBuildScan,
        rebuildActiveRecordsFromHistory: rebuildActiveRecordsFromHistory,
        getBuildHistory: getBuildHistory,
        getStoreSnapshot: getStoreSnapshot,
        setCurrentScoreVersion: setCurrentScoreVersion,
        makeBuildKey: makeBuildKey
    });

})();
