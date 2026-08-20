/* =========================================================
   THE DETECTIVE ARCHIVE v41 — MODULAR CONTENT
   NEWS — edit this file for game/beta news. Images: images/news/
   Keep IDs unique. Leave unknown/unverified values blank.
========================================================= */

// =========================
// SILVER PALACE NEWS
// =========================


const newsData = [

    {
        id: "news-001",
        category: "update",
        title: {
            en: "Dichotomy CBT2 Archive",
            vi: "Kho dữ liệu Dichotomy CBT2"
        },
        date: "2026-08-13",
        image: "",
        description: {
            en: "The archive is currently organized around systems and combat data observed during the Dichotomy closed beta. All beta values remain subject to change.",
            vi: "Kho dữ liệu hiện được xây dựng quanh các hệ thống và dữ liệu chiến đấu quan sát trong closed beta Dichotomy. Mọi giá trị beta vẫn có thể thay đổi."
        },
        content: {
            en: [
                "The Detective Archive currently uses Dichotomy CBT2 as its main reference point for character kits, Motives, Simulation Implements, Epiphanies and combat-system notes.",
                "Information recorded from a closed beta is not treated as final release data. Values, names, availability and system rules may change before launch.",
                "When newer verified material becomes available, the archive will update the relevant database entries while keeping beta context clearly labeled."
            ],
            vi: [
                "The Detective Archive hiện dùng Dichotomy CBT2 làm mốc tham khảo chính cho bộ kỹ năng nhân vật, Motive, Simulation Implements, Epiphany và các ghi chú về hệ thống chiến đấu.",
                "Thông tin ghi nhận từ closed beta không được xem là dữ liệu cuối cùng của bản phát hành. Chỉ số, tên gọi, khả năng sở hữu và quy tắc hệ thống đều có thể thay đổi trước khi game ra mắt.",
                "Khi có nguồn mới đáng tin cậy hơn, kho dữ liệu sẽ cập nhật từng mục liên quan nhưng vẫn giữ nhãn beta rõ ràng để người xem biết bối cảnh của dữ liệu."
            ]
        },
        tags: ["Dichotomy CBT2", "Beta Archive", "Systems"]
    },

    {
        id: "news-002",
        featured: true,
        category: "announcement",
        title: {
            en: "Cinderella — Featured 5★",
            vi: "Cinderella — 5★ giới hạn nổi bật"
        },
        date: "2026-07-23",
        image: "images/news/cinderella.jpg",
        description: {
            en: "Ashley / Cinderella was the featured 5-star on the Dichotomy CBT2 Limited-Time Repertoire, The Vengeful Ant. Cynthia II, Rex and Gratia were the standard 5-stars in that banner pool.",
            vi: "Ashley / Cinderella là nhân vật 5 sao nổi bật trong Limited-Time Repertoire The Vengeful Ant của Dichotomy CBT2. Cynthia II, Rex và Gratia là các 5 sao thường trong pool banner đó."
        },
        content: {
            en: [
                "Ashley / Cinderella is marked as a limited 5-star in the archive because she appeared as the featured 5-star of the Dichotomy CBT2 Limited-Time Repertoire, The Vengeful Ant.",
                "Cynthia II, Rex and Gratia are kept as standard 5-stars in the current CBT2 archive context. The Detective remains classified separately as the protagonist rather than as a normal banner unit.",
                "This availability label describes the observed beta banner structure and may be revised if the release version changes its gacha pool."
            ],
            vi: [
                "Ashley / Cinderella được đánh dấu là 5 sao giới hạn trong kho dữ liệu vì cô xuất hiện với vai trò 5 sao nổi bật của Limited-Time Repertoire The Vengeful Ant trong Dichotomy CBT2.",
                "Cynthia II, Rex và Gratia hiện được giữ ở nhóm 5 sao thường theo bối cảnh banner CBT2. The Detective được phân loại riêng là nhân vật chính, không xếp như một nhân vật banner thông thường.",
                "Nhãn khả năng sở hữu này mô tả cấu trúc banner đã quan sát trong beta và có thể được sửa nếu phiên bản phát hành thay đổi pool gacha."
            ]
        },
        tags: ["Cinderella", "5★ Limited", "Banner"]
    },

    {
        id: "news-003",
        category: "news",
        title: {
            en: "Archive Systems Connected",
            vi: "Các hệ thống dữ liệu đã được kết nối"
        },
        date: "2026-08-18",
        image: "",
        description: {
            en: "Characters, builds, Motives, Simulation Implements, Epiphanies and the ranking framework are now connected inside The Detective Archive.",
            vi: "Nhân vật, build, Motive, Simulation Implements, Epiphany và khung xếp hạng hiện đã được kết nối trong The Detective Archive."
        },
        content: {
            en: [
                "The core archive sections now share one data structure: character pages can reference Motives, Simulation, Epiphanies, builds and the ranking framework without duplicating the same information in multiple places.",
                "The ranking system is deliberately score-ready rather than score-filled. Numeric scores and tiers remain unpublished until a repeatable evaluation method and sufficiently reliable combat data are available.",
                "The UID player lookup remains a future-facing placeholder and will only be connected if a reliable public or official data source becomes available."
            ],
            vi: [
                "Các khu vực dữ liệu chính hiện dùng chung một cấu trúc: trang nhân vật có thể liên kết tới Motive, Simulation, Epiphany, build và khung xếp hạng mà không cần lặp cùng một dữ liệu ở nhiều nơi.",
                "Hệ thống ranking hiện được chuẩn bị sẵn để nhận điểm chứ chưa công bố điểm. Score và Tier vẫn để trống cho tới khi có phương pháp đánh giá lặp lại được và đủ dữ liệu chiến đấu đáng tin cậy.",
                "Phần tra cứu UID vẫn là tính năng dành cho tương lai và chỉ được kết nối khi có nguồn dữ liệu công khai hoặc chính thức đủ đáng tin."
            ]
        },
        tags: ["Archive", "Builds", "Rankings"]
    }

];


