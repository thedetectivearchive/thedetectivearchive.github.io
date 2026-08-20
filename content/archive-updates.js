/* =========================================================
   THE DETECTIVE ARCHIVE v41 — MODULAR CONTENT
   ARCHIVE CHANGELOG — edit this file for website/update-log entries.
   Keep IDs unique. Leave unknown/unverified values blank.
========================================================= */

// =========================
// THE DETECTIVE ARCHIVE CHANGELOG
// =========================

const archiveUpdatesData = [
    {
        id: "archive-006",
        category: "archive",
        title: {
            en: "Direct Feedback Added",
            vi: "Đã thêm hệ thống gửi phản hồi trực tiếp"
        },
        date: "2026-08-19",
        description: {
            en: "Feedback can now be sent directly from The Detective Archive without opening an email application.",
            vi: "Phản hồi giờ có thể được gửi trực tiếp từ The Detective Archive mà không cần mở ứng dụng email."
        },
        content: {
            en: [
                "The feedback workflow has been simplified so visitors can choose a feedback type, write a message and send it directly from the website.",
                "The form automatically includes the current page, the open database entry when available, and the selected site language.",
                "No player account is required to submit feedback."
            ],
            vi: [
                "Quy trình góp ý đã được đơn giản hóa: người dùng chỉ cần chọn loại phản hồi, nhập nội dung và gửi trực tiếp ngay trên website.",
                "Form tự đính kèm trang hiện tại, mục dữ liệu đang mở nếu có và ngôn ngữ đang sử dụng.",
                "Người dùng không cần tài khoản để gửi phản hồi."
            ]
        },
        tags: ["Archive", "Feedback", "Website"]
    },
    {
        id: "archive-005",
        category: "archive",
        title: {
            en: "Help Center Moved to a Dedicated Page",
            vi: "Trung tâm trợ giúp đã được tách thành trang riêng"
        },
        date: "2026-08-19",
        description: {
            en: "Source notes, missing-data policy, Ranking status, UID Lookup status and FAQ are now centralized in Help.",
            vi: "Chú thích nguồn, chính sách dữ liệu trống, trạng thái Ranking, UID Lookup và FAQ giờ được tập trung trong trang Trợ giúp."
        },
        content: {
            en: [
                "The Help Center is now a dedicated page instead of a large section on the homepage.",
                "Source notes are centralized there so individual skill and database entries remain cleaner.",
                "The page also explains why some beta values remain blank, why ranking scores are unpublished, and why UID Lookup is still a placeholder."
            ],
            vi: [
                "Trung tâm trợ giúp giờ là một trang riêng thay vì một khối lớn trên homepage.",
                "Chú thích nguồn được tập trung tại đó để phần kỹ năng và các mục database gọn hơn.",
                "Trang này cũng giải thích vì sao một số giá trị beta để trống, vì sao Ranking chưa công bố điểm và vì sao UID Lookup vẫn là placeholder."
            ]
        },
        tags: ["Archive", "Help", "Sources"]
    },
    {
        id: "archive-004",
        category: "archive",
        title: {
            en: "Full Psyche Tracks Added",
            vi: "Đã bổ sung đầy đủ hệ Psyche"
        },
        date: "2026-08-19",
        description: {
            en: "The current CBT2 archive now records P1–P6 Psyches across the complete character-card roster.",
            vi: "Kho CBT2 hiện đã ghi P1–P6 Psyche cho toàn bộ roster card nhân vật."
        },
        content: {
            en: [
                "Each character detail page now has a completed six-step Psyche track based on the current CBT2 archive.",
                "Psyche descriptions are presented as beta data and may change before release.",
                "The Detective's current variants share the same recorded Psyche track in the archive."
            ],
            vi: [
                "Trang chi tiết của mỗi nhân vật giờ có đầy đủ sáu mốc Psyche dựa trên dữ liệu CBT2 hiện tại.",
                "Mô tả Psyche được ghi rõ là dữ liệu beta và có thể thay đổi trước khi phát hành.",
                "Các biến thể hiện tại của The Detective dùng chung track Psyche đã ghi nhận trong kho dữ liệu."
            ]
        },
        tags: ["Characters", "Psyches", "CBT2"]
    },
    {
        id: "archive-003",
        category: "archive",
        title: {
            en: "Epiphany Database Expanded",
            vi: "Đã mở rộng cơ sở dữ liệu Epiphany"
        },
        date: "2026-08-19",
        description: {
            en: "Thirty CBT2 Epiphany entries now have dedicated detail views for literary source, passive status, substats and archive notes.",
            vi: "30 Epiphany CBT2 giờ có trang chi tiết riêng cho nguồn văn học, trạng thái passive, substat và ghi chú kho dữ liệu."
        },
        content: {
            en: [
                "Epiphany detail pages now separate gameplay passive information from literary-source mapping.",
                "The archive records the separate book-slot role and rollable-substat behavior observed in CBT2.",
                "Exact passive text remains unpublished when it cannot be transcribed reliably."
            ],
            vi: [
                "Trang chi tiết Epiphany giờ tách thông tin passive gameplay khỏi đối chiếu nguồn văn học.",
                "Kho dữ liệu ghi nhận vai trò ô sách riêng và cơ chế substat có thể roll đã quan sát trong CBT2.",
                "Nội dung passive chính xác vẫn để trống nếu chưa thể chép lại đủ tin cậy."
            ]
        },
        tags: ["Epiphany", "Database", "CBT2"]
    },
    {
        id: "archive-002",
        category: "archive",
        title: {
            en: "Simulation Database Expanded",
            vi: "Đã mở rộng cơ sở dữ liệu Simulation"
        },
        date: "2026-08-19",
        description: {
            en: "Simulation detail pages now separate Implements, set bonus evidence, system rules and observed stats.",
            vi: "Trang chi tiết Simulation giờ tách Implements, bằng chứng set bonus, quy tắc hệ thống và chỉ số đã quan sát."
        },
        content: {
            en: [
                "The Simulation database now documents four Implement slots and currently observed set information.",
                "Known piece values are published only when they have been transcribed reliably.",
                "Unknown set-effect wording remains clearly marked as pending instead of being reconstructed."
            ],
            vi: [
                "Cơ sở dữ liệu Simulation giờ ghi rõ bốn ô Implement và thông tin set đã được quan sát.",
                "Giá trị từng món chỉ được công bố khi có bản chép đủ tin cậy.",
                "Nội dung set effect chưa biết được đánh dấu pending thay vì tự dựng lại."
            ]
        },
        tags: ["Simulation", "Database", "CBT2"]
    },
    {
        id: "archive-001",
        category: "archive",
        title: {
            en: "Motive Detail and CBT2 Stats Added",
            vi: "Đã bổ sung Motive Detail và thông số CBT2"
        },
        date: "2026-08-19",
        description: {
            en: "Motive pages now use a Character-style detail layout with verified CBT2 stat and upgrade coverage where available.",
            vi: "Trang Motive giờ dùng bố cục chi tiết kiểu Character và hiển thị thông số/nâng cấp CBT2 đã xác minh khi có."
        },
        content: {
            en: [
                "Motive detail pages now separate Overview, Effects, Scaling, Users and Notes.",
                "Verified CBT2 refine modifiers and upgrade listings are shown where the archive has sufficient evidence.",
                "Missing passive text and unknown values remain unpublished."
            ],
            vi: [
                "Trang Motive giờ tách Overview, Effects, Scaling, Users và Notes.",
                "Các modifier tinh luyện và dòng nâng cấp CBT2 đã xác minh được hiển thị khi có đủ bằng chứng.",
                "Passive và giá trị chưa biết tiếp tục để trống."
            ]
        },
        tags: ["Motives", "Database", "CBT2"]
    }
];
