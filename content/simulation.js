/* =========================================================
   THE DETECTIVE ARCHIVE v59.7.3 — SIMULATION I18N COMPLETE
   Game terminology is intentionally preserved in English.
   Explanatory prose and status text are localized for all 9 languages.
========================================================= */

const simulationData = [
    {
        id: "embers-and-flame",
        name: "Embers and Flame",
        type: "Implement Set",
        observedStatus: {
            en: "Observed 4/4 in Dichotomy CBT2",
            vi: "Đã quan sát đủ 4/4 trong Dichotomy CBT2",
            th: "พบชุดครบ 4/4 ใน Dichotomy CBT2",
            ja: "Dichotomy CBT2で4/4セットを確認",
            "zh-CN": "已在 Dichotomy CBT2 中观察到 4/4 完整套装",
            ko: "Dichotomy CBT2에서 4/4 세트 확인",
            fr: "Ensemble 4/4 observé dans Dichotomy CBT2",
            es: "Conjunto 4/4 observado en Dichotomy CBT2",
            ru: "Комплект 4/4 подтверждён в Dichotomy CBT2"
        },
        observedOn: "Bentham",
        fullSetObserved: true,
        sourceLabel: "SilverPalaceMeta — Equipment & Gear System (Dichotomy CBT2)",
        slots: [
            {
                slot: "Head",
                name: "Death Is Now the Phoenix' Nest",
                verified: true,
                levelObserved: 60,
                knownStats: {
                    greenLv60: [
                        { label: "ATK%", value: "≈ 3.09%" },
                        { label: "DMG Bonus", value: "≈ 1.93%" }
                    ],
                    purpleLv60: [
                        { label: "ATK%", value: "≈ 6.18%" },
                        { label: "DMG Bonus", value: "≈ 3.86%" }
                    ]
                },
                additionalObservedStatLabels: ["DEF", "HP", "HP%"],
                note: {
                    en: "The source screenshot also shows DEF, HP and HP% stat lines on the purple Lv.60 piece, but their exact values are not transcribed in the current archive.",
                    vi: "Ảnh nguồn cũng cho thấy các dòng DEF, HP và HP% trên món tím Lv.60, nhưng giá trị chính xác hiện chưa được chép vào kho dữ liệu.",
                    th: "ภาพต้นฉบับยังแสดงบรรทัดค่าสถานะ DEF, HP และ HP% บนชิ้นระดับ Purple Lv.60 แต่ค่าที่แน่นอนยังไม่ได้ถอดข้อมูลลงในคลังปัจจุบัน",
                    ja: "元のスクリーンショットではPurple Lv.60のパーツにDEF、HP、HP%のステータス行も確認できますが、正確な数値は現在のアーカイブにはまだ転記されていません。",
                    "zh-CN": "来源截图还显示了 Purple Lv.60 部件上的 DEF、HP 和 HP% 属性行，但当前档案尚未录入其准确数值。",
                    ko: "원본 스크린샷에는 Purple Lv.60 부위의 DEF, HP, HP% 스탯 줄도 보이지만 정확한 수치는 현재 아카이브에 아직 전사되지 않았습니다.",
                    fr: "La capture source montre également des lignes de statistiques DEF, HP et HP% sur la pièce Purple niv.60, mais leurs valeurs exactes n'ont pas encore été transcrites dans l'archive.",
                    es: "La captura de origen también muestra líneas de estadísticas DEF, HP y HP% en la pieza Purple Nv.60, pero sus valores exactos aún no se han transcrito en el archivo.",
                    ru: "На исходном скриншоте также видны строки DEF, HP и HP% на предмете Purple ур.60, но их точные значения пока не перенесены в архив."
                }
            },
            { slot: "Neck", name: "", verified: false },
            { slot: "Secondary Weapon", name: "", verified: false },
            { slot: "Accessory", name: "", verified: false }
        ],
        setEffect: "",
        setEffectStatus: {
            en: "Observed active at 4/4, exact text not yet transcribed",
            vi: "Đã quan sát hiệu ứng kích hoạt ở 4/4, nội dung chính xác chưa được chép lại",
            th: "พบว่าเอฟเฟกต์ทำงานเมื่อครบ 4/4 แต่ยังไม่ได้ถอดข้อความที่แน่นอน",
            ja: "4/4で効果の発動を確認済み。正確なテキストはまだ転記されていません。",
            "zh-CN": "已确认 4/4 时效果生效，但准确文本尚未录入",
            ko: "4/4에서 효과 활성화를 확인했지만 정확한 문구는 아직 전사되지 않았습니다.",
            fr: "Effet observé actif à 4/4, texte exact pas encore transcrit",
            es: "Efecto observado activo con 4/4; el texto exacto aún no se ha transcrito",
            ru: "Эффект подтверждён при 4/4; точный текст пока не перенесён"
        },
        description: {
            en: "A complete Embers and Flame four-piece Implement set was observed on Bentham in the Dichotomy beta. Death Is Now the Phoenix' Nest is a verified Head piece. The exact names of the other three pieces and the full set-effect wording remain unpublished until they can be transcribed reliably.",
            vi: "Bộ Implement Embers and Flame đủ 4 món đã được quan sát trên Bentham trong Dichotomy beta. Death Is Now the Phoenix' Nest là món Head đã xác minh. Tên chính xác của ba món còn lại và toàn bộ nội dung hiệu ứng bộ vẫn để trống cho đến khi được chép lại đủ tin cậy.",
            th: "พบชุด Implement Embers and Flame ครบ 4 ชิ้นบน Bentham ใน Dichotomy beta โดย Death Is Now the Phoenix' Nest ได้รับการยืนยันว่าเป็นชิ้น Head ส่วนชื่อที่แน่นอนของอีกสามชิ้นและข้อความเอฟเฟกต์ชุดฉบับเต็มจะยังไม่เผยแพร่จนกว่าจะถอดข้อมูลได้อย่างน่าเชื่อถือ",
            ja: "Dichotomy betaでBenthamがEmbers and Flameの4ピースImplementセットを装備していることを確認しました。Death Is Now the Phoenix' Nestは検証済みのHeadです。残り3パーツの正確な名称とセット効果全文は、信頼できる形で転記できるまで公開しません。",
            "zh-CN": "在 Dichotomy beta 中已观察到 Bentham 装备完整的 Embers and Flame 四件 Implement 套装。Death Is Now the Phoenix' Nest 已确认是 Head 部件。其余三件的准确名称和完整套装效果文本将在可靠录入后再公布。",
            ko: "Dichotomy beta에서 Bentham이 Embers and Flame 4피스 Implement 세트를 완성한 상태가 확인되었습니다. Death Is Now the Phoenix' Nest는 검증된 Head 부위입니다. 나머지 세 부위의 정확한 이름과 전체 세트 효과 문구는 신뢰성 있게 전사될 때까지 공개하지 않습니다.",
            fr: "Un ensemble complet de quatre Implements Embers and Flame a été observé sur Bentham dans la bêta Dichotomy. Death Is Now the Phoenix' Nest est une pièce Head vérifiée. Les noms exacts des trois autres pièces et le texte complet de l'effet de set resteront non publiés jusqu'à ce qu'ils puissent être transcrits de façon fiable.",
            es: "Se observó en Bentham un conjunto completo de cuatro Implements Embers and Flame durante la beta Dichotomy. Death Is Now the Phoenix' Nest es una pieza Head verificada. Los nombres exactos de las otras tres piezas y el texto completo del efecto del conjunto no se publicarán hasta que puedan transcribirse de forma fiable.",
            ru: "В бете Dichotomy у Bentham был подтверждён полный комплект из четырёх Implements Embers and Flame. Death Is Now the Phoenix' Nest — проверенный предмет слота Head. Точные названия остальных трёх предметов и полный текст эффекта комплекта не публикуются до надёжной расшифровки."
        }
    },
    {
        id: "elitism",
        name: "Elitism",
        type: "Implement Set",
        observedStatus: {
            en: "Observed 4/4 in Dichotomy CBT2",
            vi: "Đã quan sát đủ 4/4 trong Dichotomy CBT2",
            th: "พบชุดครบ 4/4 ใน Dichotomy CBT2",
            ja: "Dichotomy CBT2で4/4セットを確認",
            "zh-CN": "已在 Dichotomy CBT2 中观察到 4/4 完整套装",
            ko: "Dichotomy CBT2에서 4/4 세트 확인",
            fr: "Ensemble 4/4 observé dans Dichotomy CBT2",
            es: "Conjunto 4/4 observado en Dichotomy CBT2",
            ru: "Комплект 4/4 подтверждён в Dichotomy CBT2"
        },
        observedOn: "Lorin",
        fullSetObserved: true,
        sourceLabel: "SilverPalaceMeta — Equipment & Gear System (Dichotomy CBT2)",
        slots: [
            { slot: "Head", name: "", verified: false },
            { slot: "Neck", name: "", verified: false },
            { slot: "Secondary Weapon", name: "", verified: false },
            { slot: "Accessory", name: "", verified: false }
        ],
        setEffect: "",
        setEffectStatus: {
            en: "Observed active at 4/4, exact text not yet transcribed",
            vi: "Đã quan sát hiệu ứng kích hoạt ở 4/4, nội dung chính xác chưa được chép lại",
            th: "พบว่าเอฟเฟกต์ทำงานเมื่อครบ 4/4 แต่ยังไม่ได้ถอดข้อความที่แน่นอน",
            ja: "4/4で効果の発動を確認済み。正確なテキストはまだ転記されていません。",
            "zh-CN": "已确认 4/4 时效果生效，但准确文本尚未录入",
            ko: "4/4에서 효과 활성화를 확인했지만 정확한 문구는 아직 전사되지 않았습니다.",
            fr: "Effet observé actif à 4/4, texte exact pas encore transcrit",
            es: "Efecto observado activo con 4/4; el texto exacto aún no se ha transcrito",
            ru: "Эффект подтверждён при 4/4; точный текст пока не перенесён"
        },
        description: {
            en: "A complete 4/4 Elitism Implement set was observed on Lorin in the Dichotomy beta. The set name and full-set state are verified from the Character Simulation screen, while the individual piece names, exact stat lines and full set-effect wording remain untranscribed.",
            vi: "Bộ Implement Elitism đủ 4/4 đã được quan sát trên Lorin trong Dichotomy beta. Tên bộ và trạng thái đủ bộ được xác nhận từ màn hình Character Simulation; tên từng món, chỉ số chính xác và nội dung hiệu ứng bộ đầy đủ hiện vẫn chưa được chép lại.",
            th: "พบ Lorin ใช้ชุด Implement Elitism ครบ 4/4 ใน Dichotomy beta ชื่อชุดและสถานะชุดครบได้รับการยืนยันจากหน้าจอ Character Simulation แต่ชื่อแต่ละชิ้น บรรทัดค่าสถานะที่แน่นอน และข้อความเอฟเฟกต์ชุดฉบับเต็มยังไม่ได้ถอดข้อมูล",
            ja: "Dichotomy betaでLorinがElitism Implementセットを4/4で装備していることを確認しました。セット名とフルセット状態はCharacter Simulation画面から確認済みですが、各パーツ名、正確なステータス行、セット効果全文はまだ転記されていません。",
            "zh-CN": "在 Dichotomy beta 中已观察到 Lorin 装备 4/4 完整 Elitism Implement 套装。套装名称和完整套装状态已从 Character Simulation 界面确认，但各部件名称、准确属性行以及完整套装效果文本仍未录入。",
            ko: "Dichotomy beta에서 Lorin의 Elitism Implement 세트 4/4 착용이 확인되었습니다. 세트 이름과 완성 상태는 Character Simulation 화면에서 검증되었지만, 개별 부위 이름과 정확한 스탯 줄, 전체 세트 효과 문구는 아직 전사되지 않았습니다.",
            fr: "Un ensemble Elitism Implement complet 4/4 a été observé sur Lorin dans la bêta Dichotomy. Le nom du set et son état complet sont vérifiés depuis l'écran Character Simulation, tandis que les noms des pièces, les lignes de statistiques exactes et le texte complet de l'effet du set n'ont pas encore été transcrits.",
            es: "Se observó en Lorin un conjunto Elitism Implement completo 4/4 durante la beta Dichotomy. El nombre del conjunto y el estado de conjunto completo están verificados en la pantalla Character Simulation, mientras que los nombres de las piezas, las líneas de estadísticas exactas y el texto completo del efecto siguen sin transcribirse.",
            ru: "В бете Dichotomy у Lorin подтверждён полный комплект Elitism Implement 4/4. Название комплекта и факт его полного набора проверены по экрану Character Simulation, а названия отдельных предметов, точные строки характеристик и полный текст эффекта пока не расшифрованы."
        }
    }
];

const simulationSystemInfo = {
    slotNames: ["Head", "Neck", "Secondary Weapon", "Accessory"],
    rarities: ["Grey", "Green", "Blue", "Purple"],
    yellowTierStatus: {
        en: "Yellow exists in beta game data but was not obtainable in the documented Dichotomy build.",
        vi: "Yellow có trong dữ liệu game beta nhưng không thể nhận được trong bản Dichotomy đã được ghi nhận.",
        th: "Yellow มีอยู่ในข้อมูลเกม beta แต่ไม่สามารถรับได้ใน build Dichotomy ที่มีการบันทึกไว้",
        ja: "Yellowはベータのゲームデータには存在しますが、記録されたDichotomyビルドでは入手できませんでした。",
        "zh-CN": "Yellow 存在于 beta 游戏数据中，但在已记录的 Dichotomy 版本里无法获得。",
        ko: "Yellow는 beta 게임 데이터에는 존재하지만 기록된 Dichotomy 빌드에서는 획득할 수 없었습니다.",
        fr: "Yellow existe dans les données de la bêta, mais n'était pas obtenable dans la version Dichotomy documentée.",
        es: "Yellow existe en los datos de la beta, pero no se podía obtener en la versión Dichotomy documentada.",
        ru: "Yellow присутствует в данных беты, но в задокументированной сборке Dichotomy получить его было нельзя."
    },
    fixedStats: true,
    randomSubstats: false,
    autoMaxLevelOnAcquire: true,
    levelRequirement: {
        en: "Character level must be at least the equipment level.",
        vi: "Cấp nhân vật phải ít nhất bằng cấp yêu cầu của trang bị.",
        th: "เลเวลตัวละครต้องไม่น้อยกว่าเลเวลที่อุปกรณ์กำหนด",
        ja: "キャラクターのレベルは装備レベル以上である必要があります。",
        "zh-CN": "角色等级必须至少达到装备等级要求。",
        ko: "캐릭터 레벨이 장비 레벨 이상이어야 합니다.",
        fr: "Le niveau du personnage doit être au moins égal au niveau requis par l'équipement.",
        es: "El nivel del personaje debe ser al menos igual al nivel requerido por el equipo.",
        ru: "Уровень персонажа должен быть не ниже уровня, требуемого экипировкой."
    },
    epiphanySeparate: true,
    conditionalSetBonuses: true,
    observedCompletedSetValue: {
        en: "A completed set was described as worth roughly 24% ATK in the documented CBT2 build; this is a general build-scale reference, not the exact effect text of Embers and Flame or Elitism.",
        vi: "Trong bản CBT2 đã ghi nhận, một bộ hoàn chỉnh được mô tả có giá trị khoảng 24% ATK; đây chỉ là mốc tham chiếu chung cho quy mô build, không phải nội dung hiệu ứng chính xác của Embers and Flame hay Elitism.",
        th: "ใน build CBT2 ที่บันทึกไว้ ชุดที่ครบถูกอธิบายว่ามีมูลค่าราว 24% ATK ค่านี้เป็นเพียงตัวอ้างอิงระดับผลต่อ build โดยรวม ไม่ใช่ข้อความเอฟเฟกต์ที่แน่นอนของ Embers and Flame หรือ Elitism",
        ja: "記録されたCBT2ビルドでは、完成セットはおよそ24% ATK相当と説明されています。これはビルド規模の一般的な参考値であり、Embers and FlameやElitismの正確な効果文ではありません。",
        "zh-CN": "在已记录的 CBT2 版本中，完整套装被描述为大约相当于 24% ATK；这只是构筑收益规模的通用参考，并非 Embers and Flame 或 Elitism 的准确效果文本。",
        ko: "기록된 CBT2 빌드에서 완성 세트는 대략 24% ATK 가치로 설명되었습니다. 이는 빌드 규모를 가늠하는 일반 참고치이며 Embers and Flame 또는 Elitism의 정확한 효과 문구가 아닙니다.",
        fr: "Dans la version CBT2 documentée, un set complet a été décrit comme représentant environ 24 % d'ATK. Il s'agit d'un repère général pour l'échelle d'un build, et non du texte exact de l'effet d'Embers and Flame ou d'Elitism.",
        es: "En la versión CBT2 documentada, se describió un conjunto completo como equivalente aproximadamente a un 24 % de ATK. Es solo una referencia general de escala del build, no el texto exacto del efecto de Embers and Flame o Elitism.",
        ru: "В задокументированной сборке CBT2 полный комплект оценивался примерно как 24% ATK. Это лишь общий ориентир масштаба билда, а не точный текст эффекта Embers and Flame или Elitism."
    },
    statGlossary: [
        {
            name: "Ultimate Charge Efficiency",
            description: {
                en: "Multiplies how quickly an Ultimate charges; functionally the game's Energy Recharge-style stat.",
                vi: "Nhân tốc độ nạp Ultimate; về chức năng tương tự chỉ số Hồi Năng lượng.",
                th: "เพิ่มอัตราการชาร์จ Ultimate โดยในเชิงการทำงานคล้ายค่าสถานะฟื้นฟูพลังงานของเกม",
                ja: "Ultimateのチャージ速度に倍率をかけるステータスで、機能的にはゲーム内のEnergy Recharge系ステータスに相当します。",
                "zh-CN": "提高 Ultimate 的充能速度；功能上相当于游戏中的能量恢复类属性。",
                ko: "Ultimate 충전 속도에 배율을 적용하며, 기능적으로는 게임의 Energy Recharge 계열 스탯에 해당합니다.",
                fr: "Multiplie la vitesse de charge de l'Ultimate ; son rôle correspond à une statistique de type récupération d'énergie.",
                es: "Multiplica la velocidad de carga del Ultimate; funcionalmente equivale a una estadística de recuperación de energía.",
                ru: "Увеличивает скорость зарядки Ultimate; по функции это аналог характеристики восстановления энергии."
            }
        },
        {
            name: "Amplitude Coefficient",
            description: {
                en: "Chance for a Resonance Effect's damage to be multiplied — effectively CRIT Rate for Resonance Effects.",
                vi: "Xác suất sát thương Resonance Effect được nhân lên — tương tự CRIT Rate dành cho Resonance Effect.",
                th: "โอกาสที่ความเสียหายของ Resonance Effect จะถูกคูณเพิ่ม โดยทำหน้าที่คล้าย CRIT Rate สำหรับ Resonance Effect",
                ja: "Resonance Effectのダメージに倍率がかかる確率で、実質的にはResonance Effect用のCRIT Rateに相当します。",
                "zh-CN": "Resonance Effect 的伤害获得倍率提升的概率——实际上相当于 Resonance Effect 的 CRIT Rate。",
                ko: "Resonance Effect의 피해에 배율이 적용될 확률로, 사실상 Resonance Effect 전용 CRIT Rate입니다.",
                fr: "Probabilité que les dégâts d'un Resonance Effect soient multipliés — l'équivalent du CRIT Rate pour les Resonance Effects.",
                es: "Probabilidad de que el daño de un Resonance Effect se multiplique; equivale al CRIT Rate de los Resonance Effects.",
                ru: "Шанс умножения урона Resonance Effect — фактически аналог CRIT Rate для Resonance Effects."
            }
        },
        {
            name: "Amplitude Multiplier",
            description: {
                en: "The multiplier applied when an Amplitude proc occurs — effectively CRIT DMG for Resonance Effects.",
                vi: "Hệ số nhân khi Amplitude kích hoạt — tương tự CRIT DMG dành cho Resonance Effect.",
                th: "ตัวคูณที่ใช้เมื่อ Amplitude ทำงาน โดยทำหน้าที่คล้าย CRIT DMG สำหรับ Resonance Effect",
                ja: "Amplitudeが発動した際に適用される倍率で、実質的にはResonance Effect用のCRIT DMGに相当します。",
                "zh-CN": "Amplitude 触发时应用的倍率——实际上相当于 Resonance Effect 的 CRIT DMG。",
                ko: "Amplitude 발동 시 적용되는 배율로, 사실상 Resonance Effect 전용 CRIT DMG입니다.",
                fr: "Multiplicateur appliqué lorsqu'Amplitude se déclenche — l'équivalent du CRIT DMG pour les Resonance Effects.",
                es: "Multiplicador aplicado cuando se activa Amplitude; equivale al CRIT DMG de los Resonance Effects.",
                ru: "Множитель, применяемый при срабатывании Amplitude — фактически аналог CRIT DMG для Resonance Effects."
            }
        },
        {
            name: "Stun Buildup Bonus",
            description: {
                en: "Increases the Stun applied by attacks, helping reach an Execution sooner.",
                vi: "Tăng lượng Stun do đòn đánh gây ra, giúp đạt trạng thái Execution sớm hơn.",
                th: "เพิ่มปริมาณ Stun ที่การโจมตีสร้าง ทำให้เข้าสู่สถานะ Execution ได้เร็วขึ้น",
                ja: "攻撃で蓄積するStun量を増やし、より早くExecutionへ到達しやすくします。",
                "zh-CN": "提高攻击施加的 Stun 值，从而更快进入 Execution。",
                ko: "공격으로 누적되는 Stun 수치를 높여 Execution에 더 빨리 도달하도록 돕습니다.",
                fr: "Augmente le Stun appliqué par les attaques, ce qui permet d'atteindre Execution plus rapidement.",
                es: "Aumenta el Stun aplicado por los ataques, ayudando a alcanzar Execution antes.",
                ru: "Повышает накопление Stun от атак, помогая быстрее достичь Execution."
            }
        },
        {
            name: "Break Exploit",
            description: {
                en: "Speeds up Defense Reduction and Resonance Accumulation.",
                vi: "Tăng tốc tích lũy Defense Reduction và Resonance.",
                th: "เร่งการสะสม Defense Reduction และ Resonance",
                ja: "Defense ReductionとResonance Accumulationの蓄積を速めます。",
                "zh-CN": "加快 Defense Reduction 和 Resonance Accumulation 的积累。",
                ko: "Defense Reduction과 Resonance Accumulation의 누적 속도를 높입니다.",
                fr: "Accélère l'accumulation de Defense Reduction et de Resonance Accumulation.",
                es: "Acelera la acumulación de Defense Reduction y Resonance Accumulation.",
                ru: "Ускоряет накопление Defense Reduction и Resonance Accumulation."
            }
        },
        {
            name: "DMG%",
            description: {
                en: "Damage Bonus can appear as universal DMG%, Reactor Attribute DMG%, or ability-specific DMG%.",
                vi: "Tăng sát thương có thể xuất hiện dưới dạng DMG% chung, DMG% thuộc tính Reactor hoặc DMG% theo loại kỹ năng.",
                th: "โบนัสความเสียหายอาจอยู่ในรูป DMG% ทั่วไป, DMG% ของ Reactor Attribute หรือ DMG% เฉพาะประเภทสกิล",
                ja: "Damage Bonusには、汎用DMG%、Reactor Attribute DMG%、または特定アビリティ向けDMG%があります。",
                "zh-CN": "Damage Bonus 可以表现为通用 DMG%、Reactor Attribute DMG% 或特定技能类型的 DMG%。",
                ko: "Damage Bonus는 범용 DMG%, Reactor Attribute DMG%, 또는 특정 능력 유형의 DMG% 형태로 나타날 수 있습니다.",
                fr: "Le Damage Bonus peut apparaître sous forme de DMG% universel, de Reactor Attribute DMG% ou de DMG% propre à une capacité.",
                es: "El Damage Bonus puede aparecer como DMG% universal, Reactor Attribute DMG% o DMG% específico de una habilidad.",
                ru: "Damage Bonus может быть универсальным DMG%, Reactor Attribute DMG% или DMG% для конкретного типа способности."
            }
        }
    ]
};
