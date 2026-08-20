/* =========================================================
   THE DETECTIVE ARCHIVE v41 — MODULAR CONTENT
   CHARACTER SKILLS — existing CBT2 skill detail patches.
   Keep IDs unique. Leave unknown/unverified values blank.
========================================================= */

const characterSkillDetailPatchV26 = {
  "the-detective": {
    "variants": {
      "female": [
        {
          "type": "basicAttack",
          "name": "Double-Edged Sword: Truth & Deceit",
          "description": {
            "en": "A five-hit Gravitas sword-and-gun combo that generates Ammunition and links directly into Raven Slayer.",
            "vi": "Chuỗi kiếm-súng Gravitas 5 đòn, tạo Ammunition và có thể nối trực tiếp sang Raven Slayer."
          },
          "resource": {
            "en": "Ammunition: hit 3 grants 1; hit 5 grants 2. Maximum Ammunition: 6.",
            "vi": "Ammunition: đòn 3 nhận 1; đòn 5 nhận 2. Tối đa 6 Ammunition."
          },
          "mechanics": [
            {
              "en": "Parrying does not break the current Basic Attack combo.",
              "vi": "Parry không làm đứt chuỗi Đánh thường hiện tại."
            },
            {
              "en": "After a Perfect Dodge, Basic Attack immediately performs hit 5 and can interrupt enemies.",
              "vi": "Sau Perfect Dodge, Đánh thường lập tức tung đòn 5 và có thể ngắt kẻ địch."
            },
            {
              "en": "Charged Attack Lv.1 is a multi-hit flurry. Lv.2 also grants 1 Ammunition and 15 Gravity Overdrive on hit.",
              "vi": "Charged Attack Lv.1 là chuỗi nhiều đòn. Lv.2 còn nhận 1 Ammunition và 15 Gravity Overdrive khi trúng."
            },
            {
              "en": "After Dodge or Dash, Basic Attack performs a Pursuit Attack.",
              "vi": "Sau Dodge hoặc Dash, Đánh thường tung Pursuit Attack."
            }
          ],
          "combo": [
            {
              "en": "Basic hit 5 → Skill: consume 1 Ammunition to jump directly into the third Raven Slayer shot.",
              "vi": "Đòn thường 5 → Skill: tiêu 1 Ammunition để nối thẳng vào phát Raven Slayer thứ 3."
            },
            {
              "en": "Raven Slayer third shot → Basic Attack: immediately use Charged Attack Lv.2.",
              "vi": "Phát Raven Slayer thứ 3 → Đánh thường: lập tức dùng Charged Attack Lv.2."
            }
          ],
          "source": {
            "en": "Kaiden.gg CBT2 transcription · updated July 29, 2026",
            "vi": "Bản chép dữ liệu CBT2 từ Kaiden.gg · cập nhật 29/07/2026"
          }
        },
        {
          "type": "skill",
          "name": "Raven Slayer",
          "description": {
            "en": "Consumes Ammunition for up to three consecutive Gravitas shots and builds Gravity Overdrive.",
            "vi": "Tiêu Ammunition để bắn tối đa 3 phát Gravitas liên tiếp và tích Gravity Overdrive."
          },
          "resource": {
            "en": "Each shot consumes 1 Ammunition. The three shots build 10 / 20 / 30 Gravity Overdrive. Maximum Gravity Overdrive: 100.",
            "vi": "Mỗi phát tiêu 1 Ammunition. Ba phát lần lượt tạo 10 / 20 / 30 Gravity Overdrive. Tối đa 100 Gravity Overdrive."
          },
          "mechanics": [
            {
              "en": "The second shot can route back into the fifth Basic Attack hit.",
              "vi": "Phát thứ 2 có thể nối trở lại đòn Đánh thường thứ 5."
            },
            {
              "en": "At full Gravity Overdrive, hold Skill to consume all Overdrive and fire a piercing Charged Shot.",
              "vi": "Khi Gravity Overdrive đầy, giữ Skill để tiêu toàn bộ và bắn Charged Shot xuyên mục tiêu."
            },
            {
              "en": "The Charged Shot temporarily strengthens the Ultimate.",
              "vi": "Charged Shot tạm thời cường hóa Ultimate."
            }
          ],
          "combo": [
            {
              "en": "Basic hit 5 → Raven Slayer shot 3.",
              "vi": "Đòn thường 5 → Raven Slayer phát 3."
            },
            {
              "en": "Raven Slayer shot 3 → Charged Attack Lv.2.",
              "vi": "Raven Slayer phát 3 → Charged Attack Lv.2."
            }
          ],
          "source": {
            "en": "Kaiden.gg CBT2 transcription · updated July 29, 2026",
            "vi": "Bản chép dữ liệu CBT2 từ Kaiden.gg · cập nhật 29/07/2026"
          }
        },
        {
          "type": "ultimate",
          "name": "Thus Spake the Raven",
          "description": {
            "en": "Leaps into the air for a heavy Gravitas attack and creates a Gravity Field.",
            "vi": "Nhảy lên không rồi tung đòn Gravitas mạnh và tạo Gravity Field."
          },
          "resource": "",
          "mechanics": [
            {
              "en": "The Gravity Field applies Time Dilation to enemies inside it.",
              "vi": "Gravity Field áp dụng Time Dilation lên kẻ địch bên trong."
            },
            {
              "en": "The field continues dealing Gravitas damage for 3 seconds.",
              "vi": "Khu vực tiếp tục gây sát thương Gravitas trong 3 giây."
            },
            {
              "en": "Raven Slayer Charged Shot can increase Ultimate damage by the passive effect.",
              "vi": "Charged Shot của Raven Slayer có thể tăng sát thương Ultimate nhờ nội tại."
            }
          ],
          "combo": [],
          "source": {
            "en": "Kaiden.gg CBT2 transcription · updated July 29, 2026",
            "vi": "Bản chép dữ liệu CBT2 từ Kaiden.gg · cập nhật 29/07/2026"
          }
        },
        {
          "type": "tacticalAssault",
          "name": "Half Retaliation",
          "description": {
            "en": "A switch-in Gravitas flurry that rapidly fills Gravity Overdrive.",
            "vi": "Chuỗi Gravitas khi đổi vào sân, nhanh chóng nạp Gravity Overdrive."
          },
          "resource": {
            "en": "Can grant up to 100 Gravity Overdrive.",
            "vi": "Có thể nhận tối đa 100 Gravity Overdrive."
          },
          "mechanics": [
            {
              "en": "Requires sufficient Reactor Energy to perform the Tactical Assault.",
              "vi": "Cần đủ Reactor Energy để thực hiện Tactical Assault."
            }
          ],
          "combo": [],
          "source": {
            "en": "Kaiden.gg CBT2 transcription · updated July 29, 2026",
            "vi": "Bản chép dữ liệu CBT2 từ Kaiden.gg · cập nhật 29/07/2026"
          }
        },
        {
          "type": "passive",
          "name": "Occam's Razor",
          "description": {
            "en": "Rewards Raven Slayer Charged Shots and successful parries with stronger Ultimate setup.",
            "vi": "Thưởng cho Charged Shot của Raven Slayer và parry thành công để chuẩn bị Ultimate mạnh hơn."
          },
          "resource": "",
          "mechanics": [
            {
              "en": "Raven Slayer Charged Shot increases Ultimate DMG by 10% for 6s, stacking up to 2 times.",
              "vi": "Charged Shot của Raven Slayer tăng 10% sát thương Ultimate trong 6 giây, cộng dồn tối đa 2 lần."
            },
            {
              "en": "A successful parry grants 5 Gravity Overdrive.",
              "vi": "Parry thành công nhận 5 Gravity Overdrive."
            }
          ],
          "combo": [],
          "source": {
            "en": "Kaiden.gg CBT2 transcription · updated July 29, 2026",
            "vi": "Bản chép dữ liệu CBT2 từ Kaiden.gg · cập nhật 29/07/2026"
          }
        }
      ],
      "male": [
        {
          "type": "basicAttack",
          "name": "Double-Edged Sword: Truth & Deceit",
          "description": {
            "en": "A five-hit Gravitas sword-and-gun combo that generates Ammunition and links directly into Raven Slayer.",
            "vi": "Chuỗi kiếm-súng Gravitas 5 đòn, tạo Ammunition và có thể nối trực tiếp sang Raven Slayer."
          },
          "resource": {
            "en": "Ammunition: hit 3 grants 1; hit 5 grants 2. Maximum Ammunition: 6.",
            "vi": "Ammunition: đòn 3 nhận 1; đòn 5 nhận 2. Tối đa 6 Ammunition."
          },
          "mechanics": [
            {
              "en": "Parrying does not break the current Basic Attack combo.",
              "vi": "Parry không làm đứt chuỗi Đánh thường hiện tại."
            },
            {
              "en": "After a Perfect Dodge, Basic Attack immediately performs hit 5 and can interrupt enemies.",
              "vi": "Sau Perfect Dodge, Đánh thường lập tức tung đòn 5 và có thể ngắt kẻ địch."
            },
            {
              "en": "Charged Attack Lv.1 is a multi-hit flurry. Lv.2 also grants 1 Ammunition and 15 Gravity Overdrive on hit.",
              "vi": "Charged Attack Lv.1 là chuỗi nhiều đòn. Lv.2 còn nhận 1 Ammunition và 15 Gravity Overdrive khi trúng."
            },
            {
              "en": "After Dodge or Dash, Basic Attack performs a Pursuit Attack.",
              "vi": "Sau Dodge hoặc Dash, Đánh thường tung Pursuit Attack."
            }
          ],
          "combo": [
            {
              "en": "Basic hit 5 → Skill: consume 1 Ammunition to jump directly into the third Raven Slayer shot.",
              "vi": "Đòn thường 5 → Skill: tiêu 1 Ammunition để nối thẳng vào phát Raven Slayer thứ 3."
            },
            {
              "en": "Raven Slayer third shot → Basic Attack: immediately use Charged Attack Lv.2.",
              "vi": "Phát Raven Slayer thứ 3 → Đánh thường: lập tức dùng Charged Attack Lv.2."
            }
          ],
          "source": {
            "en": "Kaiden.gg CBT2 transcription · updated July 29, 2026",
            "vi": "Bản chép dữ liệu CBT2 từ Kaiden.gg · cập nhật 29/07/2026"
          }
        },
        {
          "type": "skill",
          "name": "Raven Slayer",
          "description": {
            "en": "Consumes Ammunition for up to three consecutive Gravitas shots and builds Gravity Overdrive.",
            "vi": "Tiêu Ammunition để bắn tối đa 3 phát Gravitas liên tiếp và tích Gravity Overdrive."
          },
          "resource": {
            "en": "Each shot consumes 1 Ammunition. The three shots build 10 / 20 / 30 Gravity Overdrive. Maximum Gravity Overdrive: 100.",
            "vi": "Mỗi phát tiêu 1 Ammunition. Ba phát lần lượt tạo 10 / 20 / 30 Gravity Overdrive. Tối đa 100 Gravity Overdrive."
          },
          "mechanics": [
            {
              "en": "The second shot can route back into the fifth Basic Attack hit.",
              "vi": "Phát thứ 2 có thể nối trở lại đòn Đánh thường thứ 5."
            },
            {
              "en": "At full Gravity Overdrive, hold Skill to consume all Overdrive and fire a piercing Charged Shot.",
              "vi": "Khi Gravity Overdrive đầy, giữ Skill để tiêu toàn bộ và bắn Charged Shot xuyên mục tiêu."
            },
            {
              "en": "The Charged Shot temporarily strengthens the Ultimate.",
              "vi": "Charged Shot tạm thời cường hóa Ultimate."
            }
          ],
          "combo": [
            {
              "en": "Basic hit 5 → Raven Slayer shot 3.",
              "vi": "Đòn thường 5 → Raven Slayer phát 3."
            },
            {
              "en": "Raven Slayer shot 3 → Charged Attack Lv.2.",
              "vi": "Raven Slayer phát 3 → Charged Attack Lv.2."
            }
          ],
          "source": {
            "en": "Kaiden.gg CBT2 transcription · updated July 29, 2026",
            "vi": "Bản chép dữ liệu CBT2 từ Kaiden.gg · cập nhật 29/07/2026"
          }
        },
        {
          "type": "ultimate",
          "name": "Thus Spake the Raven",
          "description": {
            "en": "Leaps into the air for a heavy Gravitas attack and creates a Gravity Field.",
            "vi": "Nhảy lên không rồi tung đòn Gravitas mạnh và tạo Gravity Field."
          },
          "resource": "",
          "mechanics": [
            {
              "en": "The Gravity Field applies Time Dilation to enemies inside it.",
              "vi": "Gravity Field áp dụng Time Dilation lên kẻ địch bên trong."
            },
            {
              "en": "The field continues dealing Gravitas damage for 3 seconds.",
              "vi": "Khu vực tiếp tục gây sát thương Gravitas trong 3 giây."
            },
            {
              "en": "Raven Slayer Charged Shot can increase Ultimate damage by the passive effect.",
              "vi": "Charged Shot của Raven Slayer có thể tăng sát thương Ultimate nhờ nội tại."
            }
          ],
          "combo": [],
          "source": {
            "en": "Kaiden.gg CBT2 transcription · updated July 29, 2026",
            "vi": "Bản chép dữ liệu CBT2 từ Kaiden.gg · cập nhật 29/07/2026"
          }
        },
        {
          "type": "tacticalAssault",
          "name": "Half Retaliation",
          "description": {
            "en": "A switch-in Gravitas flurry that rapidly fills Gravity Overdrive.",
            "vi": "Chuỗi Gravitas khi đổi vào sân, nhanh chóng nạp Gravity Overdrive."
          },
          "resource": {
            "en": "Can grant up to 100 Gravity Overdrive.",
            "vi": "Có thể nhận tối đa 100 Gravity Overdrive."
          },
          "mechanics": [
            {
              "en": "Requires sufficient Reactor Energy to perform the Tactical Assault.",
              "vi": "Cần đủ Reactor Energy để thực hiện Tactical Assault."
            }
          ],
          "combo": [],
          "source": {
            "en": "Kaiden.gg CBT2 transcription · updated July 29, 2026",
            "vi": "Bản chép dữ liệu CBT2 từ Kaiden.gg · cập nhật 29/07/2026"
          }
        },
        {
          "type": "passive",
          "name": "Occam's Razor",
          "description": {
            "en": "Rewards Raven Slayer Charged Shots and successful parries with stronger Ultimate setup.",
            "vi": "Thưởng cho Charged Shot của Raven Slayer và parry thành công để chuẩn bị Ultimate mạnh hơn."
          },
          "resource": "",
          "mechanics": [
            {
              "en": "Raven Slayer Charged Shot increases Ultimate DMG by 10% for 6s, stacking up to 2 times.",
              "vi": "Charged Shot của Raven Slayer tăng 10% sát thương Ultimate trong 6 giây, cộng dồn tối đa 2 lần."
            },
            {
              "en": "A successful parry grants 5 Gravity Overdrive.",
              "vi": "Parry thành công nhận 5 Gravity Overdrive."
            }
          ],
          "combo": [],
          "source": {
            "en": "Kaiden.gg CBT2 transcription · updated July 29, 2026",
            "vi": "Bản chép dữ liệu CBT2 từ Kaiden.gg · cập nhật 29/07/2026"
          }
        }
      ]
    }
  },
  "cinderella": {
    "skills": [
      {
        "type": "basicAttack",
        "name": "Double-Quenched Blade",
        "description": {
          "en": "A five-hit Ignis sword combo that builds Vengeful Flame; Quenched changes it into a faster four-hit sequence built around Overheat.",
          "vi": "Chuỗi kiếm Ignis 5 đòn tích Vengeful Flame; khi Quenched, nó đổi thành chuỗi 4 đòn nhanh hơn xoay quanh Overheat."
        },
        "resource": {
          "en": "Normal hits grant 2 / 3 / 5 / 5 / 5 Vengeful Flame. In Quenched, hits grant 15 / 15 / 30 / 60 Overheat. Maximum Overheat: 120.",
          "vi": "Đòn thường nhận 2 / 3 / 5 / 5 / 5 Vengeful Flame. Khi Quenched, các đòn nhận 15 / 15 / 30 / 60 Overheat. Tối đa 120 Overheat."
        },
        "mechanics": [
          {
            "en": "Parry can route directly into Basic hit 3.",
            "vi": "Parry có thể nối trực tiếp vào đòn thường 3."
          },
          {
            "en": "After Basic hit 4, a Charged Shot can be used.",
            "vi": "Sau đòn thường 4 có thể dùng Charged Shot."
          },
          {
            "en": "Perfect Dodge triggers a long-range barrage, interrupts enemies and grants 25 Overheat.",
            "vi": "Perfect Dodge kích hoạt loạt bắn tầm xa, ngắt kẻ địch và nhận 25 Overheat."
          },
          {
            "en": "In Quenched, Basic hit 4 negates incoming damage during the attack.",
            "vi": "Khi Quenched, đòn thường 4 vô hiệu sát thương nhận vào trong lúc ra đòn."
          },
          {
            "en": "A full-Overheat Charged Attack consumes all Overheat.",
            "vi": "Charged Attack khi Overheat đầy sẽ tiêu toàn bộ Overheat."
          }
        ],
        "combo": [
          {
            "en": "Normal Basic hit 4 → Charged Shot → Re-Smelt pressure.",
            "vi": "Đòn thường 4 → Charged Shot → tiếp tục gây áp lực bằng Re-Smelt."
          }
        ],
        "source": {
          "en": "Kaiden.gg CBT2 transcription · updated July 29, 2026",
          "vi": "Bản chép dữ liệu CBT2 từ Kaiden.gg · cập nhật 29/07/2026"
        }
      },
      {
        "type": "skill",
        "name": "Re-Smelt",
        "description": {
          "en": "Turns Vengeful Flame into sustained machine-gun fire, building Overheat for Cinderella’s Quenched burst windows.",
          "vi": "Chuyển Vengeful Flame thành loạt súng máy liên tục, tích Overheat cho giai đoạn bùng nổ Quenched."
        },
        "resource": {
          "en": "Requires at least 20 Vengeful Flame. Each shot consumes 4 Vengeful Flame and grants 4.5 Overheat. Maximum Vengeful Flame: 80; while active it also regenerates over time.",
          "vi": "Cần ít nhất 20 Vengeful Flame. Mỗi phát tiêu 4 Vengeful Flame và nhận 4,5 Overheat. Tối đa 80 Vengeful Flame; khi hoạt động còn hồi dần theo thời gian."
        },
        "mechanics": [
          {
            "en": "Fire rate accelerates during sustained fire and the sequence ends with a Charged Shot.",
            "vi": "Tốc độ bắn tăng dần khi xả liên tục và chuỗi kết thúc bằng Charged Shot."
          },
          {
            "en": "During the rapid-fire window Cinderella can negate incoming damage.",
            "vi": "Trong cửa sổ xả đạn nhanh Cinderella có thể vô hiệu sát thương nhận vào."
          },
          {
            "en": "The Charged Shot after Basic hit 4 grants 25 Vengeful Flame.",
            "vi": "Charged Shot sau đòn thường 4 nhận 25 Vengeful Flame."
          },
          {
            "en": "While Quenched, Skill becomes a backward leap burst that grants 15 Overheat and negates damage.",
            "vi": "Khi Quenched, Skill trở thành cú lùi-bắn nổ, nhận 15 Overheat và vô hiệu sát thương."
          }
        ],
        "combo": [
          {
            "en": "Quenched Skill → Basic before landing: Signature Pursuit, +30 Overheat, then chains into Basic hit 4.",
            "vi": "Quenched Skill → Đánh thường trước khi chạm đất: Signature Pursuit, +30 Overheat, rồi nối vào đòn thường 4."
          }
        ],
        "source": {
          "en": "Kaiden.gg CBT2 transcription · updated July 29, 2026",
          "vi": "Bản chép dữ liệu CBT2 từ Kaiden.gg · cập nhật 29/07/2026"
        }
      },
      {
        "type": "ultimate",
        "name": "Carriage of Conflagration",
        "description": {
          "en": "Activates Quenched, transforming Cinderella’s combat loop for a 12-second burst window.",
          "vi": "Kích hoạt Quenched, biến đổi vòng chiến đấu của Cinderella trong cửa sổ bùng nổ 12 giây."
        },
        "resource": {
          "en": "Quenched lasts 12s.",
          "vi": "Quenched kéo dài 12 giây."
        },
        "mechanics": [
          {
            "en": "Enemies near Cinderella take continuous Ignis damage while Quenched is active.",
            "vi": "Kẻ địch gần Cinderella chịu sát thương Ignis liên tục khi Quenched hoạt động."
          },
          {
            "en": "Press Ultimate again to summon an explosive chariot and immediately end Quenched.",
            "vi": "Bấm Ultimate lần nữa để triệu hồi cỗ xe phát nổ và kết thúc Quenched ngay."
          },
          {
            "en": "If not manually triggered, the finishing Ultimate activates automatically when Quenched expires.",
            "vi": "Nếu không chủ động dùng, Ultimate kết thúc sẽ tự kích hoạt khi Quenched hết thời gian."
          }
        ],
        "combo": [],
        "source": {
          "en": "Kaiden.gg CBT2 transcription · updated July 29, 2026",
          "vi": "Bản chép dữ liệu CBT2 từ Kaiden.gg · cập nhật 29/07/2026"
        }
      },
      {
        "type": "tacticalAssault",
        "name": "Thermal Contact",
        "description": {
          "en": "Switches in with a flying kick that deals Ignis damage and starts her Overheat setup.",
          "vi": "Đổi vào sân bằng cú đá bay gây Ignis và bắt đầu tích Overheat."
        },
        "resource": {
          "en": "Grants 30 Overheat.",
          "vi": "Nhận 30 Overheat."
        },
        "mechanics": [
          {
            "en": "Requires sufficient Reactor Energy.",
            "vi": "Cần đủ Reactor Energy."
          }
        ],
        "combo": [],
        "source": {
          "en": "Kaiden.gg CBT2 transcription · updated July 29, 2026",
          "vi": "Bản chép dữ liệu CBT2 từ Kaiden.gg · cập nhật 29/07/2026"
        }
      },
      {
        "type": "passive",
        "name": "Thermal Rampage",
        "description": {
          "en": "Massively improves critical consistency during Quenched.",
          "vi": "Tăng mạnh độ ổn định bạo kích trong trạng thái Quenched."
        },
        "resource": "",
        "mechanics": [
          {
            "en": "While Quenched, CRIT Rate increases by 35%.",
            "vi": "Khi Quenched, Tỷ lệ Bạo kích tăng 35%."
          }
        ],
        "combo": [],
        "source": {
          "en": "Kaiden.gg CBT2 transcription · updated July 29, 2026",
          "vi": "Bản chép dữ liệu CBT2 từ Kaiden.gg · cập nhật 29/07/2026"
        }
      }
    ]
  },
  "cynthia-ii": {
    "skills": [
      {
        "type": "basicAttack",
        "name": "Plushie Vassals",
        "description": {
          "en": "A three-hit Alba combo with rolling Charged Attacks that build Sweetness and pressure enemies.",
          "vi": "Chuỗi Alba 3 đòn với Charged Attack lăn, giúp tích Sweetness và gây áp lực lên kẻ địch."
        },
        "resource": {
          "en": "Charged actions increase Sweetness buildup.",
          "vi": "Các hành động tích lực tăng khả năng tích Sweetness."
        },
        "mechanics": [
          {
            "en": "Perfect Dodge can immediately trigger a jump attack; targets under Sweetness Overload are interrupted and take extra Alba damage.",
            "vi": "Perfect Dodge có thể lập tức tung đòn nhảy; mục tiêu đang Sweetness Overload bị ngắt và chịu thêm sát thương Alba."
          },
          {
            "en": "Hold Basic to roll forward; releasing during the roll triggers a jump attack.",
            "vi": "Giữ Đánh thường để lăn tiến; thả trong lúc lăn sẽ tung đòn nhảy."
          },
          {
            "en": "A Pursuit Attack is available while dashing.",
            "vi": "Có thể dùng Pursuit Attack khi đang Dash."
          }
        ],
        "combo": [],
        "source": {
          "en": "Kaiden.gg CBT2 transcription · updated July 29, 2026",
          "vi": "Bản chép dữ liệu CBT2 từ Kaiden.gg · cập nhật 29/07/2026"
        }
      },
      {
        "type": "skill",
        "name": "Sweet Slingshot",
        "description": {
          "en": "Consumes Sweetness to launch an AoE bomb; longer charging increases area and enables Sweetness Overload.",
          "vi": "Tiêu Sweetness để ném bom AoE; tích lực lâu hơn tăng phạm vi và kích hoạt Sweetness Overload."
        },
        "resource": {
          "en": "Maximum Sweetness: 100; regenerates over time.",
          "vi": "Tối đa 100 Sweetness; hồi dần theo thời gian."
        },
        "mechanics": [
          {
            "en": "Lv.1 creates a smaller explosion. Lv.2 creates a larger persistent AoE.",
            "vi": "Lv.1 tạo vụ nổ nhỏ hơn. Lv.2 tạo AoE lớn hơn và duy trì."
          },
          {
            "en": "Sweetness Overload increases damage taken by affected enemies by 10% for 40s.",
            "vi": "Sweetness Overload tăng 10% sát thương mục tiêu phải chịu trong 40 giây."
          }
        ],
        "combo": [],
        "source": {
          "en": "Kaiden.gg CBT2 transcription · updated July 29, 2026",
          "vi": "Bản chép dữ liệu CBT2 từ Kaiden.gg · cập nhật 29/07/2026"
        }
      },
      {
        "type": "ultimate",
        "name": "Crescent Compassion",
        "description": {
          "en": "Throws a crescent boomerang with the kitty knights, pulling enemies and dealing persistent Alba damage.",
          "vi": "Ném boomerang lưỡi liềm cùng các hiệp sĩ mèo, kéo kẻ địch và gây Alba liên tục."
        },
        "resource": "",
        "mechanics": [
          {
            "en": "The persistent effect remains even after Cynthia II leaves the field.",
            "vi": "Hiệu ứng duy trì vẫn tồn tại sau khi Cynthia II rời sân."
          }
        ],
        "combo": [],
        "source": {
          "en": "Kaiden.gg CBT2 transcription · updated July 29, 2026",
          "vi": "Bản chép dữ liệu CBT2 từ Kaiden.gg · cập nhật 29/07/2026"
        }
      },
      {
        "type": "tacticalAssault",
        "name": "Cakeball's Present",
        "description": {
          "en": "A switch-in Alba attack that immediately contributes to her support rotation.",
          "vi": "Đòn Alba khi đổi vào sân, lập tức nối vào vòng hỗ trợ của cô."
        },
        "resource": "",
        "mechanics": [],
        "combo": [],
        "source": {
          "en": "Kaiden.gg CBT2 transcription · updated July 29, 2026",
          "vi": "Bản chép dữ liệu CBT2 từ Kaiden.gg · cập nhật 29/07/2026"
        }
      },
      {
        "type": "passive",
        "name": "Toast's Lament",
        "description": {
          "en": "Sir Toast periodically intercepts a hit that would have struck Cynthia II.",
          "vi": "Sir Toast định kỳ đỡ một đòn lẽ ra trúng Cynthia II."
        },
        "resource": "",
        "mechanics": [
          {
            "en": "This protection can occur once every 10 seconds.",
            "vi": "Hiệu ứng bảo vệ có thể xảy ra mỗi 10 giây một lần."
          }
        ],
        "combo": [],
        "source": {
          "en": "Kaiden.gg CBT2 transcription · updated July 29, 2026",
          "vi": "Bản chép dữ liệu CBT2 từ Kaiden.gg · cập nhật 29/07/2026"
        }
      }
    ]
  },
  "red-rose": {
    "skills": [
      {
        "type": "basicAttack",
        "name": "Akimbo Overture",
        "description": {
          "en": "A five-hit Ignis sequence that generates Rose Petals and enables charged follow-ups.",
          "vi": "Chuỗi Ignis 5 đòn tạo Rose Petals và mở các đòn tích lực nối tiếp."
        },
        "resource": {
          "en": "Hit 3 grants 1 Rose Petal; hit 5 grants 2.",
          "vi": "Đòn 3 nhận 1 Rose Petal; đòn 5 nhận 2."
        },
        "mechanics": [
          {
            "en": "Perfect Dodge immediately triggers Charged Attack Lv.2 and interrupts enemies.",
            "vi": "Perfect Dodge lập tức kích hoạt Charged Attack Lv.2 và ngắt kẻ địch."
          },
          {
            "en": "Charged Attack Lv.2 grants 1 Rose Petal.",
            "vi": "Charged Attack Lv.2 nhận 1 Rose Petal."
          },
          {
            "en": "After Dodge or Dash, Basic performs a Pursuit Attack.",
            "vi": "Sau Dodge hoặc Dash, Đánh thường tung Pursuit Attack."
          }
        ],
        "combo": [],
        "source": {
          "en": "Kaiden.gg CBT2 transcription · updated July 29, 2026",
          "vi": "Bản chép dữ liệu CBT2 từ Kaiden.gg · cập nhật 29/07/2026"
        }
      },
      {
        "type": "skill",
        "name": "War of the Roses",
        "description": {
          "en": "Consumes a full Rose Petal stock to enter Bright Rhythm and prepare a major team CRIT DMG buff.",
          "vi": "Tiêu đầy Rose Petals để vào Bright Rhythm và chuẩn bị buff CRIT DMG lớn cho đội."
        },
        "resource": {
          "en": "Maximum Rose Petals: 6. Bright Rhythm lasts 8s.",
          "vi": "Tối đa 6 Rose Petals. Bright Rhythm kéo dài 8 giây."
        },
        "mechanics": [
          {
            "en": "During Bright Rhythm, hold Basic to perform a powerful attack and create 3 Rose Blooms.",
            "vi": "Trong Bright Rhythm, giữ Đánh thường để tung đòn mạnh và tạo 3 Rose Blooms."
          },
          {
            "en": "That attack grants the team +50% CRIT DMG for 40s and immediately ends Bright Rhythm.",
            "vi": "Đòn đó cho cả đội +50% CRIT DMG trong 40 giây và kết thúc Bright Rhythm ngay."
          },
          {
            "en": "Rose Blooms explode after 5s or when struck by an Ignis attack.",
            "vi": "Rose Blooms nổ sau 5 giây hoặc khi bị đòn Ignis đánh trúng."
          }
        ],
        "combo": [],
        "source": {
          "en": "Kaiden.gg CBT2 transcription · updated July 29, 2026",
          "vi": "Bản chép dữ liệu CBT2 từ Kaiden.gg · cập nhật 29/07/2026"
        }
      },
      {
        "type": "ultimate",
        "name": "Grand Finale",
        "description": {
          "en": "Unleashes a theatrical Ignis thorn attack and leaves a field of Rose Blooms for follow-up support.",
          "vi": "Tung đòn gai Ignis mang tính trình diễn và để lại Rose Blooms cho hỗ trợ nối tiếp."
        },
        "resource": "",
        "mechanics": [
          {
            "en": "Creates 8 Rose Blooms after the Ultimate.",
            "vi": "Tạo 8 Rose Blooms sau Ultimate."
          }
        ],
        "combo": [],
        "source": {
          "en": "Kaiden.gg CBT2 transcription · updated July 29, 2026",
          "vi": "Bản chép dữ liệu CBT2 từ Kaiden.gg · cập nhật 29/07/2026"
        }
      },
      {
        "type": "tacticalAssault",
        "name": "Epic Debut",
        "description": {
          "en": "Switches in on a vine attack, dealing Ignis damage and immediately filling her Rose Petal resource.",
          "vi": "Đổi vào sân bằng đòn dây leo, gây Ignis và lập tức nạp Rose Petals."
        },
        "resource": {
          "en": "Grants 6 Rose Petals.",
          "vi": "Nhận 6 Rose Petals."
        },
        "mechanics": [],
        "combo": [],
        "source": {
          "en": "Kaiden.gg CBT2 transcription · updated July 29, 2026",
          "vi": "Bản chép dữ liệu CBT2 từ Kaiden.gg · cập nhật 29/07/2026"
        }
      },
      {
        "type": "passive",
        "name": "Onstage Preparation",
        "description": {
          "en": "Turns Rose Bloom explosions into a long-duration Ignis team buff.",
          "vi": "Biến vụ nổ Rose Bloom thành buff Ignis dài cho toàn đội."
        },
        "resource": "",
        "mechanics": [
          {
            "en": "Each Rose Bloom explosion grants the team +3% Ignis DMG for 40s, stacking up to 5 times.",
            "vi": "Mỗi Rose Bloom nổ cho đội +3% Ignis DMG trong 40 giây, cộng dồn tối đa 5 lần."
          }
        ],
        "combo": [],
        "source": {
          "en": "Kaiden.gg CBT2 transcription · updated July 29, 2026",
          "vi": "Bản chép dữ liệu CBT2 từ Kaiden.gg · cập nhật 29/07/2026"
        }
      }
    ]
  },
  "rex": {
    "skills": [
      {
        "type": "basicAttack",
        "name": "Composite Club",
        "description": {
          "en": "A four-hit Fulmen truncheon combo that generates Rage and changes after Adaptive Rule.",
          "vi": "Chuỗi côn Fulmen 4 đòn tạo Rage và thay đổi sau Adaptive Rule."
        },
        "resource": {
          "en": "Hits grant 4 / 12 / 14 / 20 Rage. Maximum Rage: 120; Rage also regenerates over time.",
          "vi": "Các đòn nhận 4 / 12 / 14 / 20 Rage. Tối đa 120 Rage; Rage còn hồi dần theo thời gian."
        },
        "mechanics": [
          {
            "en": "Parry does not break the Basic Attack combo.",
            "vi": "Parry không làm đứt chuỗi Đánh thường."
          },
          {
            "en": "Perfect Dodge counter grants 10 Rage and chains into hit 3.",
            "vi": "Perfect Dodge Counter nhận 10 Rage và nối vào đòn 3."
          },
          {
            "en": "After Dual Truncheons, Basic becomes a two-hit Signature Move; each hit grants 15 Rage and reduces incoming damage by 20% during the move.",
            "vi": "Sau Dual Truncheons, Đánh thường thành Signature Move 2 đòn; mỗi đòn nhận 15 Rage và giảm 20% sát thương nhận vào trong lúc ra đòn."
          },
          {
            "en": "Holding Basic after Dual Truncheons performs a Charged Signature Move, grants 20 Rage and reduces incoming damage by 20%.",
            "vi": "Giữ Đánh thường sau Dual Truncheons tung Charged Signature Move, nhận 20 Rage và giảm 20% sát thương nhận vào."
          }
        ],
        "combo": [],
        "source": {
          "en": "Kaiden.gg CBT2 transcription · updated July 29, 2026",
          "vi": "Bản chép dữ liệu CBT2 từ Kaiden.gg · cập nhật 29/07/2026"
        }
      },
      {
        "type": "skill",
        "name": "Adaptive Rule",
        "description": {
          "en": "Cycles Rex through multiple Composite Club forms by spending Rage and building Volt Charge.",
          "vi": "Luân chuyển nhiều dạng Composite Club bằng cách tiêu Rage và tích Volt Charge."
        },
        "resource": {
          "en": "Dual Truncheons and Extended Truncheon each consume 60 Rage and grant 1 Volt Charge.",
          "vi": "Dual Truncheons và Extended Truncheon mỗi lần tiêu 60 Rage và nhận 1 Volt Charge."
        },
        "mechanics": [
          {
            "en": "Dual Truncheons grants damage immunity during activation and can link into Signature Moves, Charged Signature, or another Skill.",
            "vi": "Dual Truncheons cho miễn nhiễm sát thương khi kích hoạt và có thể nối Signature Move, Charged Signature hoặc Skill tiếp."
          },
          {
            "en": "Extended Truncheon follows Dual Truncheons with a flurry, also grants immunity, and can chain into Basic hit 4.",
            "vi": "Extended Truncheon nối sau Dual Truncheons bằng chuỗi đánh, cũng cho miễn nhiễm và có thể nối vào đòn thường 4."
          },
          {
            "en": "At full Volt Charge, Nunchucks Law unleashes a storm of attacks and lightning.",
            "vi": "Khi Volt Charge đầy, Nunchucks Law tung bão đòn đánh và sét."
          }
        ],
        "combo": [],
        "source": {
          "en": "Kaiden.gg CBT2 transcription · updated July 29, 2026",
          "vi": "Bản chép dữ liệu CBT2 từ Kaiden.gg · cập nhật 29/07/2026"
        }
      },
      {
        "type": "ultimate",
        "name": "Thunderous Judgement",
        "description": {
          "en": "Calls Rex’s police dogs before delivering a major Fulmen lightning strike.",
          "vi": "Triệu hồi chó nghiệp vụ rồi tung đòn sét Fulmen lớn."
        },
        "resource": {
          "en": "Grants 120 Rage.",
          "vi": "Nhận 120 Rage."
        },
        "mechanics": [],
        "combo": [],
        "source": {
          "en": "Kaiden.gg CBT2 transcription · updated July 29, 2026",
          "vi": "Bản chép dữ liệu CBT2 từ Kaiden.gg · cập nhật 29/07/2026"
        }
      },
      {
        "type": "tacticalAssault",
        "name": "Exemplar Enforcer",
        "description": {
          "en": "A switch-in attack that calls down Fulmen truncheon strikes together with the police dogs.",
          "vi": "Đòn đổi vào sân gọi các cú đánh côn Fulmen cùng chó nghiệp vụ."
        },
        "resource": "",
        "mechanics": [],
        "combo": [],
        "source": {
          "en": "Kaiden.gg CBT2 transcription · updated July 29, 2026",
          "vi": "Bản chép dữ liệu CBT2 từ Kaiden.gg · cập nhật 29/07/2026"
        }
      },
      {
        "type": "passive",
        "name": "Righteous Spirit",
        "description": {
          "en": "Signature Move hits build a temporary ATK buff and Fulmen Resonance gains extra hits.",
          "vi": "Các đòn Signature Move tích buff ATK tạm thời và Fulmen Resonance nhận thêm hit."
        },
        "resource": "",
        "mechanics": [
          {
            "en": "Signature Move damage grants +7% ATK for 16s, stacking up to 4 times; new stacks refresh duration.",
            "vi": "Sát thương Signature Move cho +7% ATK trong 16 giây, cộng dồn tối đa 4; cộng dồn mới làm mới thời gian."
          },
          {
            "en": "Fulmen Resonance effects deal 2 additional instances of Fulmen damage.",
            "vi": "Hiệu ứng Fulmen Resonance gây thêm 2 lần sát thương Fulmen."
          }
        ],
        "combo": [],
        "source": {
          "en": "Kaiden.gg CBT2 transcription · updated July 29, 2026",
          "vi": "Bản chép dữ liệu CBT2 từ Kaiden.gg · cập nhật 29/07/2026"
        }
      }
    ]
  },
  "bentham": {
    "skills": [
      {
        "type": "basicAttack",
        "name": "Hidden Blade",
        "description": {
          "en": "A four-hit Glacies whip-and-blade combo built around Funds, Liquid Assets, and Contractual Circle.",
          "vi": "Chuỗi Glacies 4 đòn bằng roi/lưỡi dao xoay quanh Funds, Liquid Assets và Contractual Circle."
        },
        "resource": {
          "en": "Hits grant 1.5 / 3.2 / 6 / 10 Funds. Maximum Funds: 80; Funds also regenerate over time. Maximum Liquid Assets: 6.",
          "vi": "Các đòn nhận 1,5 / 3,2 / 6 / 10 Funds. Tối đa 80 Funds và hồi dần theo thời gian. Tối đa 6 Liquid Assets."
        },
        "mechanics": [
          {
            "en": "Parry can route into Basic hit 2; Perfect Dodge performs a heavy counter, grants 4 Funds and chains into hit 3.",
            "vi": "Parry có thể nối vào đòn thường 2; Perfect Dodge tung phản đòn nặng, nhận 4 Funds và nối vào đòn 3."
          },
          {
            "en": "Hold Dodge or Basic to draw a Contractual Circle.",
            "vi": "Giữ Dodge hoặc Đánh thường để vẽ Contractual Circle."
          },
          {
            "en": "Inside the circle, holding Basic performs a multi-hit Signature Move. Each hit grants Funds and can consume Liquid Assets for bonus damage.",
            "vi": "Trong vòng tròn, giữ Đánh thường tung Signature Move nhiều hit. Mỗi hit nhận Funds và có thể tiêu Liquid Assets để tăng sát thương."
          },
          {
            "en": "Sequentially consuming 6 Liquid Assets triggers an additional attack.",
            "vi": "Tiêu liên tiếp đủ 6 Liquid Assets sẽ kích hoạt đòn bổ sung."
          },
          {
            "en": "Inside the circle, parry can become a multi-hit Signature counter that consumes Liquid Assets and negates incoming damage.",
            "vi": "Trong vòng tròn, parry có thể thành Signature counter nhiều hit, tiêu Liquid Assets và vô hiệu sát thương nhận vào."
          }
        ],
        "combo": [],
        "source": {
          "en": "Kaiden.gg CBT2 transcription · updated July 29, 2026",
          "vi": "Bản chép dữ liệu CBT2 từ Kaiden.gg · cập nhật 29/07/2026"
        }
      },
      {
        "type": "skill",
        "name": "Spot Check",
        "description": {
          "en": "Spends Funds to dash through enemies and converts the action into Liquid Assets for Contractual Circle attacks.",
          "vi": "Tiêu Funds để lướt qua kẻ địch và chuyển hành động thành Liquid Assets cho các đòn trong Contractual Circle."
        },
        "resource": {
          "en": "Consumes 40 Funds and grants 2 Liquid Assets. If another 40 Funds remain, Skill can be pressed again for a follow-up and 2 more Liquid Assets.",
          "vi": "Tiêu 40 Funds và nhận 2 Liquid Assets. Nếu còn thêm 40 Funds, có thể bấm Skill lần nữa để đánh nối và nhận thêm 2 Liquid Assets."
        },
        "mechanics": [
          {
            "en": "The sequence can chain into Basic hit 3.",
            "vi": "Chuỗi có thể nối vào đòn thường 3."
          }
        ],
        "combo": [],
        "source": {
          "en": "Kaiden.gg CBT2 transcription · updated July 29, 2026",
          "vi": "Bản chép dữ liệu CBT2 từ Kaiden.gg · cập nhật 29/07/2026"
        }
      },
      {
        "type": "ultimate",
        "name": "Unflinching Order",
        "description": {
          "en": "Calls security personnel for a coordinated barrage that deals Glacies damage.",
          "vi": "Gọi lực lượng an ninh phối hợp tấn công, gây sát thương Glacies."
        },
        "resource": "",
        "mechanics": [],
        "combo": [],
        "source": {
          "en": "Kaiden.gg CBT2 transcription · updated July 29, 2026",
          "vi": "Bản chép dữ liệu CBT2 từ Kaiden.gg · cập nhật 29/07/2026"
        }
      },
      {
        "type": "tacticalAssault",
        "name": "Emergency Meeting",
        "description": {
          "en": "Switches in with a fast blade flurry that deals Glacies damage.",
          "vi": "Đổi vào sân bằng chuỗi lưỡi dao nhanh gây Glacies."
        },
        "resource": "",
        "mechanics": [],
        "combo": [],
        "source": {
          "en": "Kaiden.gg CBT2 transcription · updated July 29, 2026",
          "vi": "Bản chép dữ liệu CBT2 từ Kaiden.gg · cập nhật 29/07/2026"
        }
      },
      {
        "type": "passive",
        "name": "Set Schedule",
        "description": {
          "en": "Creates a short Amplitude Multiplier window from Bentham’s Tactical Assault and Skill, while Glacies Resonance gains additional hits.",
          "vi": "Tạo cửa sổ Amplitude Multiplier ngắn từ Tactical Assault và Skill của Bentham, đồng thời Glacies Resonance nhận thêm hit."
        },
        "resource": "",
        "mechanics": [
          {
            "en": "Current CBT2 transcription lists a 6s Amplitude Multiplier window, but its +40% / +10% / maximum wording is internally inconsistent; the archive does not assert the disputed cap yet.",
            "vi": "Bản chép CBT2 hiện ghi cửa sổ Amplitude Multiplier 6 giây, nhưng cách ghi +40% / +10% / giới hạn tối đa mâu thuẫn nội bộ; kho dữ liệu chưa khẳng định con số trần gây tranh cãi."
          },
          {
            "en": "Glacies Resonance effects deal 2 additional instances of Glacies damage.",
            "vi": "Hiệu ứng Glacies Resonance gây thêm 2 lần sát thương Glacies."
          }
        ],
        "combo": [],
        "source": {
          "en": "Kaiden.gg CBT2 transcription · updated July 29, 2026",
          "vi": "Bản chép dữ liệu CBT2 từ Kaiden.gg · cập nhật 29/07/2026"
        }
      }
    ]
  },
  "grimm": {
    "skills": [
      {
        "type": "basicAttack",
        "name": "Compact Handgun",
        "description": {
          "en": "A five-hit Fulmen handgun combo that charges Camera Battery and marks enemies as News Targets.",
          "vi": "Chuỗi súng Fulmen 5 đòn nạp Camera Battery và đánh dấu kẻ địch thành News Target."
        },
        "resource": {
          "en": "Hits grant 2 / 2 / 2 / 5 / 5 Camera Battery. Maximum Camera Battery: 40; regenerates over time.",
          "vi": "Các đòn nhận 2 / 2 / 2 / 5 / 5 Camera Battery. Tối đa 40 Camera Battery; hồi dần theo thời gian."
        },
        "mechanics": [
          {
            "en": "Hit 5 applies News Target. Opening Move and Perfect Dodge can route directly to hit 5; Perfect Dodge also interrupts.",
            "vi": "Đòn 5 áp dụng News Target. Opening Move và Perfect Dodge có thể nối thẳng vào đòn 5; Perfect Dodge còn ngắt kẻ địch."
          },
          {
            "en": "Parry can route into Basic hit 3.",
            "vi": "Parry có thể nối vào đòn thường 3."
          },
          {
            "en": "Charged Attack Lv.1 grants 5 Battery; Lv.2 grants 6 and applies News Target.",
            "vi": "Charged Attack Lv.1 nhận 5 Battery; Lv.2 nhận 6 và áp dụng News Target."
          },
          {
            "en": "Pursuit Attack grants 2 Battery.",
            "vi": "Pursuit Attack nhận 2 Battery."
          }
        ],
        "combo": [],
        "source": {
          "en": "Kaiden.gg CBT2 transcription · updated July 29, 2026",
          "vi": "Bản chép dữ liệu CBT2 từ Kaiden.gg · cập nhật 29/07/2026"
        }
      },
      {
        "type": "skill",
        "name": "Photographic Proof",
        "description": {
          "en": "Spends Camera Battery to photograph enemies and apply Fulmen resistance debuffs.",
          "vi": "Tiêu Camera Battery để chụp kẻ địch và áp dụng debuff kháng Fulmen."
        },
        "resource": {
          "en": "At full Battery, tap consumes 20 for rapid photos; hold/release consumes all Battery for the stronger evidence shot.",
          "vi": "Khi Battery đầy, bấm nhanh tiêu 20 để chụp liên tục; giữ/thả tiêu toàn bộ Battery cho phát Evidence mạnh hơn."
        },
        "mechanics": [
          {
            "en": "The aimed shot applies Photo Evidence for 15s; if the target is a News Target it instead applies Full Exposé for 15s.",
            "vi": "Phát ngắm áp dụng Photo Evidence trong 15 giây; nếu mục tiêu là News Target thì thay bằng Full Exposé trong 15 giây."
          },
          {
            "en": "Photo Evidence reduces Fulmen RES by 5%; Full Exposé reduces Fulmen RES by 15%.",
            "vi": "Photo Evidence giảm 5% Fulmen RES; Full Exposé giảm 15% Fulmen RES."
          }
        ],
        "combo": [],
        "source": {
          "en": "Kaiden.gg CBT2 transcription · updated July 29, 2026",
          "vi": "Bản chép dữ liệu CBT2 từ Kaiden.gg · cập nhật 29/07/2026"
        }
      },
      {
        "type": "ultimate",
        "name": "Airborne Scoop",
        "description": {
          "en": "Takes a dramatic snapshot that deals Fulmen damage and extends Grimm’s evidence debuffs.",
          "vi": "Chụp ảnh trên không gây Fulmen và kéo dài các debuff Evidence của Grimm."
        },
        "resource": "",
        "mechanics": [
          {
            "en": "Refreshes Photo Evidence or Full Exposé duration to 40s.",
            "vi": "Làm mới thời gian Photo Evidence hoặc Full Exposé thành 40 giây."
          }
        ],
        "combo": [],
        "source": {
          "en": "Kaiden.gg CBT2 transcription · updated July 29, 2026",
          "vi": "Bản chép dữ liệu CBT2 từ Kaiden.gg · cập nhật 29/07/2026"
        }
      },
      {
        "type": "tacticalAssault",
        "name": "Undercover Inquiry",
        "description": {
          "en": "Switches in with a camera-based move; being attacked during it triggers a counter and rapidly charges the camera.",
          "vi": "Đổi vào sân bằng động tác máy ảnh; nếu bị tấn công trong lúc đó sẽ phản đòn và nạp nhanh máy ảnh."
        },
        "resource": {
          "en": "The counter grants 40 Camera Battery.",
          "vi": "Phản đòn nhận 40 Camera Battery."
        },
        "mechanics": [
          {
            "en": "The counter can interrupt the attacking enemy.",
            "vi": "Phản đòn có thể ngắt kẻ địch đang tấn công."
          }
        ],
        "combo": [],
        "source": {
          "en": "Kaiden.gg CBT2 transcription · updated July 29, 2026",
          "vi": "Bản chép dữ liệu CBT2 từ Kaiden.gg · cập nhật 29/07/2026"
        }
      },
      {
        "type": "passive",
        "name": "Live Recording",
        "description": {
          "en": "Converts a successful Full Exposé application into a long team Fulmen damage buff.",
          "vi": "Chuyển việc áp dụng Full Exposé thành buff Fulmen dài cho đội."
        },
        "resource": "",
        "mechanics": [
          {
            "en": "Applying Full Exposé with Skill grants the team +5% Fulmen DMG for 40s.",
            "vi": "Áp dụng Full Exposé bằng Skill cho đội +5% Fulmen DMG trong 40 giây."
          }
        ],
        "combo": [],
        "source": {
          "en": "Kaiden.gg CBT2 transcription · updated July 29, 2026",
          "vi": "Bản chép dữ liệu CBT2 từ Kaiden.gg · cập nhật 29/07/2026"
        }
      }
    ]
  },
  "captain-kaboom": {
    "skills": [
      {
        "type": "basicAttack",
        "name": "Maintenance Calliper",
        "description": {
          "en": "A four-hit Radiatio wrench combo that builds Pressure for Charged Coup de Grâce attacks.",
          "vi": "Chuỗi cờ lê Radiatio 4 đòn tích Pressure cho Charged Coup de Grâce."
        },
        "resource": {
          "en": "Hits grant 5 / 10 / 10 / 40 Pressure. Maximum Pressure: 90.",
          "vi": "Các đòn nhận 5 / 10 / 10 / 40 Pressure. Tối đa 90 Pressure."
        },
        "mechanics": [
          {
            "en": "Perfect Dodge immediately performs Charged Coup de Grâce Lv.2 and interrupts enemies.",
            "vi": "Perfect Dodge lập tức tung Charged Coup de Grâce Lv.2 và ngắt kẻ địch."
          },
          {
            "en": "Parry can route into Basic hit 3.",
            "vi": "Parry có thể nối vào đòn thường 3."
          },
          {
            "en": "Below 30 Pressure, Charged Attack is a heavy strike that grants 5 Pressure.",
            "vi": "Dưới 30 Pressure, Charged Attack là đòn nặng nhận 5 Pressure."
          },
          {
            "en": "Above 30 Pressure, holding Basic consumes Pressure in 30-point steps for Charged Coup de Grâce Lv.1–3; during the spin, incoming damage is reduced by 50%.",
            "vi": "Trên 30 Pressure, giữ Đánh thường tiêu Pressure theo từng mốc 30 để dùng Charged Coup de Grâce Lv.1–3; khi xoay giảm 50% sát thương nhận vào."
          },
          {
            "en": "Pursuit Attack grants 5 Pressure.",
            "vi": "Pursuit Attack nhận 5 Pressure."
          }
        ],
        "combo": [],
        "source": {
          "en": "Kaiden.gg CBT2 transcription · updated July 29, 2026",
          "vi": "Bản chép dữ liệu CBT2 từ Kaiden.gg · cập nhật 29/07/2026"
        }
      },
      {
        "type": "skill",
        "name": "Captain's Ambush",
        "description": {
          "en": "At full Maximum Current, spends the resource to launch a balloon-based Radiatio attack and refill Pressure.",
          "vi": "Khi Maximum Current đầy, tiêu tài nguyên để tung đòn bóng bay Radiatio và nạp Pressure."
        },
        "resource": {
          "en": "Maximum Current: 60 and regenerates over time. Consuming it grants 45 Pressure.",
          "vi": "Tối đa 60 Maximum Current và hồi dần theo thời gian. Tiêu hết sẽ nhận 45 Pressure."
        },
        "mechanics": [],
        "combo": [],
        "source": {
          "en": "Kaiden.gg CBT2 transcription · updated July 29, 2026",
          "vi": "Bản chép dữ liệu CBT2 từ Kaiden.gg · cập nhật 29/07/2026"
        }
      },
      {
        "type": "ultimate",
        "name": "Explosive Bear",
        "description": {
          "en": "Deploys a clockwork bear that detonates for a large Radiatio explosion.",
          "vi": "Triển khai gấu máy rồi phát nổ gây Radiatio diện rộng."
        },
        "resource": "",
        "mechanics": [],
        "combo": [],
        "source": {
          "en": "Kaiden.gg CBT2 transcription · updated July 29, 2026",
          "vi": "Bản chép dữ liệu CBT2 từ Kaiden.gg · cập nhật 29/07/2026"
        }
      },
      {
        "type": "tacticalAssault",
        "name": "Maintenance Support",
        "description": {
          "en": "Switches in by balloon; the balloon explodes and deals Radiatio damage.",
          "vi": "Đổi vào sân bằng bóng bay; bóng phát nổ gây sát thương Radiatio."
        },
        "resource": "",
        "mechanics": [],
        "combo": [],
        "source": {
          "en": "Kaiden.gg CBT2 transcription · updated July 29, 2026",
          "vi": "Bản chép dữ liệu CBT2 từ Kaiden.gg · cập nhật 29/07/2026"
        }
      },
      {
        "type": "passive",
        "name": "Repair Toolbox",
        "description": {
          "en": "Rewards Pressure expenditure with a short ATK buff.",
          "vi": "Thưởng việc tiêu Pressure bằng buff ATK ngắn."
        },
        "resource": "",
        "mechanics": [
          {
            "en": "Each time Pressure is consumed, ATK increases by 15% for 4s, stacking up to 2 times.",
            "vi": "Mỗi lần tiêu Pressure, ATK tăng 15% trong 4 giây, cộng dồn tối đa 2 lần."
          }
        ],
        "combo": [],
        "source": {
          "en": "Kaiden.gg CBT2 transcription · updated July 29, 2026",
          "vi": "Bản chép dữ liệu CBT2 từ Kaiden.gg · cập nhật 29/07/2026"
        }
      }
    ]
  },
  "firtho": {
    "skills": [
      {
        "type": "basicAttack",
        "name": "Amputation Saw",
        "description": {
          "en": "A four-hit Radiatio saw combo with two Charged Attack levels and a Perfect Dodge conversion.",
          "vi": "Chuỗi cưa Radiatio 4 đòn với 2 cấp Charged Attack và chuyển đổi từ Perfect Dodge."
        },
        "resource": "",
        "mechanics": [
          {
            "en": "Perfect Dodge immediately performs Charged Attack Lv.2 and can interrupt enemies.",
            "vi": "Perfect Dodge lập tức tung Charged Attack Lv.2 và có thể ngắt kẻ địch."
          },
          {
            "en": "Charged Attack has Lv.1 and Lv.2 versions.",
            "vi": "Charged Attack có phiên bản Lv.1 và Lv.2."
          },
          {
            "en": "After Dodge or Dash, Basic performs a Pursuit Attack.",
            "vi": "Sau Dodge hoặc Dash, Đánh thường tung Pursuit Attack."
          }
        ],
        "combo": [],
        "source": {
          "en": "Kaiden.gg CBT2 transcription · updated July 29, 2026",
          "vi": "Bản chép dữ liệu CBT2 từ Kaiden.gg · cập nhật 29/07/2026"
        }
      },
      {
        "type": "skill",
        "name": "Second Heart",
        "description": {
          "en": "Uses Special Serum and Firtho’s own HP to combine Radiatio damage, healing, and a stacking team ATK buff.",
          "vi": "Dùng Special Serum và chính HP của Firtho để kết hợp sát thương Radiatio, hồi máu và buff ATK cộng dồn cho đội."
        },
        "resource": {
          "en": "Tap consumes 2.5 Special Serum. Hold consumes 10 and repeatedly drains Firtho’s HP. Maximum Special Serum: 10; regenerates over time.",
          "vi": "Bấm nhanh tiêu 2,5 Special Serum. Giữ tiêu 10 và liên tục rút HP của Firtho. Tối đa 10 Special Serum; hồi dần theo thời gian."
        },
        "mechanics": [
          {
            "en": "Releasing the held Skill attacks and grants the team +1.5% ATK per stack, up to 8 stacks, lasting 40s.",
            "vi": "Thả Skill sau khi giữ sẽ tấn công và cho đội +1,5% ATK mỗi tầng, tối đa 8 tầng, kéo dài 40 giây."
          },
          {
            "en": "While holding, the team is healed over time; teammates other than Firtho also receive an immediate heal.",
            "vi": "Trong lúc giữ, cả đội được hồi máu theo thời gian; đồng đội ngoài Firtho còn nhận một lần hồi ngay."
          },
          {
            "en": "Parrying while holding and losing HP can immediately trigger the fully charged Skill, consuming all Serum.",
            "vi": "Parry trong lúc đang giữ và mất HP có thể lập tức kích hoạt Skill tích lực đầy, tiêu toàn bộ Serum."
          }
        ],
        "combo": [],
        "source": {
          "en": "Kaiden.gg CBT2 transcription · updated July 29, 2026",
          "vi": "Bản chép dữ liệu CBT2 từ Kaiden.gg · cập nhật 29/07/2026"
        }
      },
      {
        "type": "ultimate",
        "name": "Visage of Death",
        "description": {
          "en": "A heavy amputation-saw finisher that deals Radiatio damage.",
          "vi": "Đòn kết liễu bằng cưa phẫu thuật gây sát thương Radiatio mạnh."
        },
        "resource": "",
        "mechanics": [],
        "combo": [],
        "source": {
          "en": "Kaiden.gg CBT2 transcription · updated July 29, 2026",
          "vi": "Bản chép dữ liệu CBT2 từ Kaiden.gg · cập nhật 29/07/2026"
        }
      },
      {
        "type": "tacticalAssault",
        "name": "Law of Exchange",
        "description": {
          "en": "A switch-in Radiatio attack powered by Reactor Energy.",
          "vi": "Đòn Radiatio khi đổi vào sân bằng Reactor Energy."
        },
        "resource": "",
        "mechanics": [],
        "combo": [],
        "source": {
          "en": "Kaiden.gg CBT2 transcription · updated July 29, 2026",
          "vi": "Bản chép dữ liệu CBT2 từ Kaiden.gg · cập nhật 29/07/2026"
        }
      },
      {
        "type": "passive",
        "name": "Pain Management",
        "description": {
          "en": "Adds teamwide mitigation while Second Heart’s buff is active.",
          "vi": "Thêm giảm sát thương cho toàn đội khi buff của Second Heart đang hoạt động."
        },
        "resource": "",
        "mechanics": [
          {
            "en": "While the Second Heart buff is active, team damage taken is reduced by 20%.",
            "vi": "Khi buff Second Heart hoạt động, sát thương cả đội phải chịu giảm 20%."
          }
        ],
        "combo": [],
        "source": {
          "en": "Kaiden.gg CBT2 transcription · updated July 29, 2026",
          "vi": "Bản chép dữ liệu CBT2 từ Kaiden.gg · cập nhật 29/07/2026"
        }
      }
    ]
  },
  "gucia": {
    "skills": [
      {
        "type": "basicAttack",
        "name": "Specimen Extraction Light",
        "description": {
          "en": "A four-hit Alba lantern combo and charged sequence that rapidly builds Erudition.",
          "vi": "Chuỗi đèn lồng Alba 4 đòn và các đòn tích lực giúp tích Erudition rất nhanh."
        },
        "resource": {
          "en": "Basic hits grant 10 / 20 / 10 / 20 Erudition. Charged Lv.1 grants 5; Lv.2 grants 60.",
          "vi": "Các đòn thường nhận 10 / 20 / 10 / 20 Erudition. Charged Lv.1 nhận 5; Lv.2 nhận 60."
        },
        "mechanics": [
          {
            "en": "Before Basic hit 4 ends, pressing Skill, Parry, or Dodge grants 40 Erudition.",
            "vi": "Trước khi đòn thường 4 kết thúc, bấm Skill, Parry hoặc Dodge nhận 40 Erudition."
          },
          {
            "en": "Perfect Dodge immediately triggers Charged Attack Lv.2 and can interrupt enemies.",
            "vi": "Perfect Dodge lập tức kích hoạt Charged Attack Lv.2 và có thể ngắt kẻ địch."
          },
          {
            "en": "Before Charged Attack Lv.2 ends, pressing Skill, Parry, or Dodge grants another 40 Erudition.",
            "vi": "Trước khi Charged Attack Lv.2 kết thúc, bấm Skill, Parry hoặc Dodge nhận thêm 40 Erudition."
          },
          {
            "en": "After Dodge or during Dash, Basic performs a Pursuit Attack.",
            "vi": "Sau Dodge hoặc khi Dash, Đánh thường tung Pursuit Attack."
          }
        ],
        "combo": [],
        "source": {
          "en": "Kaiden.gg CBT2 transcription · updated July 29, 2026",
          "vi": "Bản chép dữ liệu CBT2 từ Kaiden.gg · cập nhật 29/07/2026"
        }
      },
      {
        "type": "skill",
        "name": "Seek the Supernatural",
        "description": {
          "en": "Charges the lantern for up to 2 seconds, then spends all Erudition; higher thresholds produce stronger firefly attacks and Alba RES reduction.",
          "vi": "Tích lực đèn lồng tối đa 2 giây rồi tiêu toàn bộ Erudition; mốc cao hơn tạo firefly mạnh hơn và giảm Alba RES."
        },
        "resource": {
          "en": "Maximum Erudition: 300. Holding Skill can generate up to 120 Erudition before release.",
          "vi": "Tối đa 300 Erudition. Giữ Skill có thể tạo tối đa 120 Erudition trước khi thả."
        },
        "mechanics": [
          {
            "en": "Below 100 Erudition, releases the basic lantern attack.",
            "vi": "Dưới 100 Erudition, tung đòn đèn lồng cơ bản."
          },
          {
            "en": "At the middle threshold, summons a small firefly and reduces enemy Alba RES by 5% for 40s.",
            "vi": "Ở mốc giữa, triệu hồi firefly nhỏ và giảm 5% Alba RES của kẻ địch trong 40 giây."
          },
          {
            "en": "At 300 Erudition, summons a large firefly and reduces enemy Alba RES by 10% for 40s.",
            "vi": "Ở 300 Erudition, triệu hồi firefly lớn và giảm 10% Alba RES của kẻ địch trong 40 giây."
          }
        ],
        "combo": [],
        "source": {
          "en": "Kaiden.gg CBT2 transcription · updated July 29, 2026",
          "vi": "Bản chép dữ liệu CBT2 từ Kaiden.gg · cập nhật 29/07/2026"
        }
      },
      {
        "type": "ultimate",
        "name": "Unknown Species Detected",
        "description": {
          "en": "Unleashes a large Alba attack and grants a long team Amplitude Coefficient buff.",
          "vi": "Tung đòn Alba lớn và cho đội buff Amplitude Coefficient dài."
        },
        "resource": "",
        "mechanics": [
          {
            "en": "Team Amplitude Coefficient increases by 10% for 40s.",
            "vi": "Amplitude Coefficient của đội tăng 10% trong 40 giây."
          }
        ],
        "combo": [],
        "source": {
          "en": "Kaiden.gg CBT2 transcription · updated July 29, 2026",
          "vi": "Bản chép dữ liệu CBT2 từ Kaiden.gg · cập nhật 29/07/2026"
        }
      },
      {
        "type": "tacticalAssault",
        "name": "Inter-Disciplinary",
        "description": {
          "en": "Switches in with an Alba lantern flurry and gives Gucia a large Erudition injection.",
          "vi": "Đổi vào sân bằng chuỗi đèn lồng Alba và nạp lượng lớn Erudition."
        },
        "resource": {
          "en": "Grants 140 Erudition; pressing Skill, Parry, or Dodge during the sequence grants another 40.",
          "vi": "Nhận 140 Erudition; bấm Skill, Parry hoặc Dodge trong chuỗi nhận thêm 40."
        },
        "mechanics": [],
        "combo": [],
        "source": {
          "en": "Kaiden.gg CBT2 transcription · updated July 29, 2026",
          "vi": "Bản chép dữ liệu CBT2 từ Kaiden.gg · cập nhật 29/07/2026"
        }
      },
      {
        "type": "passive",
        "name": "Academite",
        "description": {
          "en": "Stores Illumination and spends it to improve the next teammate’s Tactical Assault window.",
          "vi": "Tích Illumination rồi tiêu để cường hóa cửa sổ Tactical Assault của đồng đội tiếp theo."
        },
        "resource": {
          "en": "Skill or Tactical Assault grants 1 Illumination. Maximum: 2.",
          "vi": "Skill hoặc Tactical Assault nhận 1 Illumination. Tối đa 2."
        },
        "mechanics": [
          {
            "en": "While Gucia is off-field, another character’s Tactical Assault consumes 1 Illumination and grants that character +10% Amplitude Coefficient for 16s; the buff ends if they leave the field.",
            "vi": "Khi Gucia ở ngoài sân, Tactical Assault của nhân vật khác tiêu 1 Illumination và cho nhân vật đó +10% Amplitude Coefficient trong 16 giây; buff mất khi họ rời sân."
          }
        ],
        "combo": [],
        "source": {
          "en": "Kaiden.gg CBT2 transcription · updated July 29, 2026",
          "vi": "Bản chép dữ liệu CBT2 từ Kaiden.gg · cập nhật 29/07/2026"
        }
      }
    ]
  },
  "lorin": {
    "skills": [
      {
        "type": "basicAttack",
        "name": "Reflex Fist",
        "description": {
          "en": "A five-hit Fulmen boxing combo built around Street Smarts and Lorin’s Sway movement technique.",
          "vi": "Chuỗi quyền Fulmen 5 đòn xoay quanh Street Smarts và kỹ thuật di chuyển Sway."
        },
        "resource": {
          "en": "Hits grant 5 / 5 / 20 / 10 / 20 Street Smarts.",
          "vi": "Các đòn nhận 5 / 5 / 20 / 10 / 20 Street Smarts."
        },
        "mechanics": [
          {
            "en": "Using Sway before an attack ends can route Lorin back into different parts of his combo based on the originating move.",
            "vi": "Dùng Sway trước khi đòn kết thúc có thể đưa Lorin trở lại các đoạn khác nhau của chuỗi tùy đòn xuất phát."
          },
          {
            "en": "Perfect Dodge through Sway grants Street Smarts; current transcription contains inconsistent values, so the archive does not publish a single exact amount here.",
            "vi": "Perfect Dodge bằng Sway nhận Street Smarts; bản chép hiện có con số mâu thuẫn nên kho dữ liệu chưa công bố một giá trị chính xác duy nhất."
          },
          {
            "en": "A normal Perfect Dodge can immediately trigger Charged Attack Lv.2 and interrupt enemies.",
            "vi": "Perfect Dodge thông thường có thể lập tức kích hoạt Charged Attack Lv.2 và ngắt kẻ địch."
          }
        ],
        "combo": [],
        "source": {
          "en": "Kaiden.gg CBT2 transcription · updated July 29, 2026",
          "vi": "Bản chép dữ liệu CBT2 từ Kaiden.gg · cập nhật 29/07/2026"
        }
      },
      {
        "type": "skill",
        "name": "Strategic Retreat",
        "description": {
          "en": "At full Street Smarts, consumes the resource for a powerful Fulmen uppercut.",
          "vi": "Khi Street Smarts đầy, tiêu toàn bộ để tung uppercut Fulmen mạnh."
        },
        "resource": {
          "en": "Maximum Street Smarts: 80; regenerates over time.",
          "vi": "Tối đa 80 Street Smarts; hồi dần theo thời gian."
        },
        "mechanics": [],
        "combo": [],
        "source": {
          "en": "Kaiden.gg CBT2 transcription · updated July 29, 2026",
          "vi": "Bản chép dữ liệu CBT2 từ Kaiden.gg · cập nhật 29/07/2026"
        }
      },
      {
        "type": "ultimate",
        "name": "Non-Lethal Current",
        "description": {
          "en": "Slams electrified gloves into the ground for a large Fulmen area attack.",
          "vi": "Nện găng điện xuống đất tạo đòn Fulmen diện rộng mạnh."
        },
        "resource": "",
        "mechanics": [],
        "combo": [],
        "source": {
          "en": "Kaiden.gg CBT2 transcription · updated July 29, 2026",
          "vi": "Bản chép dữ liệu CBT2 từ Kaiden.gg · cập nhật 29/07/2026"
        }
      },
      {
        "type": "tacticalAssault",
        "name": "Conflict Interception",
        "description": {
          "en": "Switches in with a charged punch and immediately restores Lorin’s core resource.",
          "vi": "Đổi vào sân bằng cú đấm tích lực và lập tức hồi tài nguyên cốt lõi của Lorin."
        },
        "resource": {
          "en": "Fully restores Street Smarts.",
          "vi": "Hồi đầy Street Smarts."
        },
        "mechanics": [],
        "combo": [],
        "source": {
          "en": "Kaiden.gg CBT2 transcription · updated July 29, 2026",
          "vi": "Bản chép dữ liệu CBT2 từ Kaiden.gg · cập nhật 29/07/2026"
        }
      },
      {
        "type": "passive",
        "name": "Judgemental Intuition",
        "description": {
          "en": "Strategic Retreat opens a short Basic Attack damage window.",
          "vi": "Strategic Retreat mở cửa sổ tăng sát thương Đánh thường ngắn."
        },
        "resource": "",
        "mechanics": [
          {
            "en": "After Strategic Retreat, Basic Attack DMG increases by 40% for 5s; triggering it again refreshes duration.",
            "vi": "Sau Strategic Retreat, sát thương Đánh thường tăng 40% trong 5 giây; kích hoạt lại sẽ làm mới thời gian."
          }
        ],
        "combo": [],
        "source": {
          "en": "Kaiden.gg CBT2 transcription · updated July 29, 2026",
          "vi": "Bản chép dữ liệu CBT2 từ Kaiden.gg · cập nhật 29/07/2026"
        }
      }
    ]
  },
  "gratia": {
    "skills": [
      {
        "type": "basicAttack",
        "name": "Blunted Blade",
        "description": {
          "en": "A five-hit Glacies sword-and-shield combo that builds Muscle Memory and supports a unique hold-parry shield stance.",
          "vi": "Chuỗi kiếm-khiên Glacies 5 đòn tích Muscle Memory và hỗ trợ tư thế giữ parry đặc biệt."
        },
        "resource": {
          "en": "Basic hits 4 and 5 rapidly build Muscle Memory. Special Block builds Stalwart Fury while consuming Stamina.",
          "vi": "Đòn thường 4 và 5 nhanh chóng tích Muscle Memory. Special Block tích Stalwart Fury trong khi tiêu Stamina."
        },
        "mechanics": [
          {
            "en": "Perfect Dodge routes directly into Basic hit 4; parry routes into hit 3.",
            "vi": "Perfect Dodge nối thẳng vào đòn thường 4; parry nối vào đòn 3."
          },
          {
            "en": "Charged Attack has Lv.1 slash and Lv.2 shield-slam versions; before Lv.2 ends, Basic can route into hit 4.",
            "vi": "Charged Attack có Lv.1 chém và Lv.2 nện khiên; trước khi Lv.2 kết thúc, Đánh thường có thể nối vào đòn 4."
          },
          {
            "en": "Hold Parry to raise the shield, reducing incoming damage by 50% while building Stalwart Fury. Taking hits accelerates Fury gain.",
            "vi": "Giữ Parry để giơ khiên, giảm 50% sát thương nhận vào và tích Stalwart Fury. Bị đánh sẽ tăng tốc tích Fury."
          },
          {
            "en": "At full Stalwart Fury, releasing Special Block performs Shield Rush and can interrupt enemies.",
            "vi": "Khi Stalwart Fury đầy, thả Special Block tung Shield Rush và có thể ngắt kẻ địch."
          }
        ],
        "combo": [],
        "source": {
          "en": "Kaiden.gg CBT2 transcription · updated July 29, 2026",
          "vi": "Bản chép dữ liệu CBT2 từ Kaiden.gg · cập nhật 29/07/2026"
        }
      },
      {
        "type": "skill",
        "name": "Flowing Shield",
        "description": {
          "en": "Consumes all Muscle Memory to slam the ground and grant the whole team a large temporary shield.",
          "vi": "Tiêu toàn bộ Muscle Memory để nện đất và cho cả đội khiên lớn tạm thời."
        },
        "resource": {
          "en": "Maximum Muscle Memory: 100; regenerates over time.",
          "vi": "Tối đa 100 Muscle Memory; hồi dần theo thời gian."
        },
        "mechanics": [
          {
            "en": "The team shield equals 40% of Gratia’s Max HP and lasts 20s.",
            "vi": "Khiên toàn đội bằng 40% HP tối đa của Gratia và kéo dài 20 giây."
          }
        ],
        "combo": [],
        "source": {
          "en": "Kaiden.gg CBT2 transcription · updated July 29, 2026",
          "vi": "Bản chép dữ liệu CBT2 từ Kaiden.gg · cập nhật 29/07/2026"
        }
      },
      {
        "type": "ultimate",
        "name": "Spear of Glory",
        "description": {
          "en": "Creates a spiraling Glacies spear that deals continuous damage before a delayed explosion.",
          "vi": "Tạo giáo Glacies xoáy gây sát thương liên tục trước khi phát nổ trễ."
        },
        "resource": "",
        "mechanics": [],
        "combo": [],
        "source": {
          "en": "Kaiden.gg CBT2 transcription · updated July 29, 2026",
          "vi": "Bản chép dữ liệu CBT2 từ Kaiden.gg · cập nhật 29/07/2026"
        }
      },
      {
        "type": "tacticalAssault",
        "name": "Severe Deterrent",
        "description": {
          "en": "Switches in with a Glacies attack; enemies that attack during the action are countered and interrupted.",
          "vi": "Đổi vào sân bằng đòn Glacies; kẻ địch tấn công trong lúc đó sẽ bị phản đòn và ngắt."
        },
        "resource": "",
        "mechanics": [],
        "combo": [],
        "source": {
          "en": "Kaiden.gg CBT2 transcription · updated July 29, 2026",
          "vi": "Bản chép dữ liệu CBT2 từ Kaiden.gg · cập nhật 29/07/2026"
        }
      },
      {
        "type": "passive",
        "name": "Silverium Blessing",
        "description": {
          "en": "Converts Glacies Resonance into a long ATK buff for the rest of the team.",
          "vi": "Chuyển Glacies Resonance thành buff ATK dài cho các đồng đội còn lại."
        },
        "resource": "",
        "mechanics": [
          {
            "en": "Triggering a Glacies Resonance Effect grants all other teammates +12% ATK for 40s.",
            "vi": "Kích hoạt Glacies Resonance cho tất cả đồng đội khác +12% ATK trong 40 giây."
          }
        ],
        "combo": [],
        "source": {
          "en": "Kaiden.gg CBT2 transcription · updated July 29, 2026",
          "vi": "Bản chép dữ liệu CBT2 từ Kaiden.gg · cập nhật 29/07/2026"
        }
      }
    ]
  },
  "argos": {
    "skills": [
      {
        "type": "basicAttack",
        "name": "Cane and Spirits",
        "description": {
          "en": "A four-hit Glacies cane-gun combo whose unsheathe attacks become stronger during Piercing Gaze.",
          "vi": "Chuỗi gậy-súng Glacies 4 đòn với các đòn rút vũ khí mạnh hơn trong Piercing Gaze."
        },
        "resource": "",
        "mechanics": [
          {
            "en": "During Piercing Gaze, Basic hit 4 automatically becomes an unsheathe attack.",
            "vi": "Trong Piercing Gaze, đòn thường 4 tự biến thành unsheathe attack."
          },
          {
            "en": "During Piercing Gaze, Basic immediately after parry performs an unsheathe attack.",
            "vi": "Trong Piercing Gaze, bấm Đánh thường ngay sau parry sẽ tung unsheathe attack."
          },
          {
            "en": "Charged Attack Lv.1 is an upward unsheathe strike with an invulnerability window; evading an attack during it allows Basic to route into Lv.2.",
            "vi": "Charged Attack Lv.1 là cú rút vũ khí hướng lên có cửa sổ bất tử; né được đòn trong lúc đó cho phép Đánh thường nối vào Lv.2."
          },
          {
            "en": "Charged Attack Lv.2 performs three unsheathe strikes; hitting during Piercing Gaze grants the team +10% DMG for 40s.",
            "vi": "Charged Attack Lv.2 tung 3 cú unsheathe; trúng trong Piercing Gaze cho đội +10% DMG trong 40 giây."
          },
          {
            "en": "Perfect Dodge can immediately trigger Charged Attack Lv.2.",
            "vi": "Perfect Dodge có thể lập tức kích hoạt Charged Attack Lv.2."
          }
        ],
        "combo": [],
        "source": {
          "en": "Kaiden.gg CBT2 transcription · updated July 29, 2026",
          "vi": "Bản chép dữ liệu CBT2 từ Kaiden.gg · cập nhật 29/07/2026"
        }
      },
      {
        "type": "skill",
        "name": "Celebratory Champagne",
        "description": {
          "en": "Consumes Confession to fire the Cane Gun and enter Piercing Gaze, enabling Argos’s stronger support attacks.",
          "vi": "Tiêu Confession để bắn Cane Gun và vào Piercing Gaze, mở các đòn hỗ trợ mạnh hơn của Argos."
        },
        "resource": {
          "en": "Maximum Confession: 12; regenerates over time. Piercing Gaze lasts 10s.",
          "vi": "Tối đa 12 Confession; hồi dần theo thời gian. Piercing Gaze kéo dài 10 giây."
        },
        "mechanics": [],
        "combo": [],
        "source": {
          "en": "Kaiden.gg CBT2 transcription · updated July 29, 2026",
          "vi": "Bản chép dữ liệu CBT2 từ Kaiden.gg · cập nhật 29/07/2026"
        }
      },
      {
        "type": "ultimate",
        "name": "The Eye of Argos",
        "description": {
          "en": "Creates an All-Seeing Domain that continuously deals Glacies damage to enemies inside.",
          "vi": "Tạo All-Seeing Domain gây sát thương Glacies liên tục lên kẻ địch bên trong."
        },
        "resource": {
          "en": "Domain duration: 6s.",
          "vi": "Thời gian Domain: 6 giây."
        },
        "mechanics": [],
        "combo": [],
        "source": {
          "en": "Kaiden.gg CBT2 transcription · updated July 29, 2026",
          "vi": "Bản chép dữ liệu CBT2 từ Kaiden.gg · cập nhật 29/07/2026"
        }
      },
      {
        "type": "tacticalAssault",
        "name": "Screwdriver",
        "description": {
          "en": "Switches in from range with a charging approach followed by a cane-gun unsheathe strike.",
          "vi": "Đổi vào sân từ xa bằng cú lao tới rồi rút gậy-súng tấn công."
        },
        "resource": "",
        "mechanics": [],
        "combo": [],
        "source": {
          "en": "Kaiden.gg CBT2 transcription · updated July 29, 2026",
          "vi": "Bản chép dữ liệu CBT2 từ Kaiden.gg · cập nhật 29/07/2026"
        }
      },
      {
        "type": "passive",
        "name": "Bartending Insight",
        "description": {
          "en": "After Ultimate, Argos grants the team an ATK buff with additional scaling from his Max HP.",
          "vi": "Sau Ultimate, Argos cho đội buff ATK có thêm scaling theo HP tối đa của anh."
        },
        "resource": "",
        "mechanics": [
          {
            "en": "The team ATK buff lasts 40s.",
            "vi": "Buff ATK toàn đội kéo dài 40 giây."
          },
          {
            "en": "The current CBT2 transcription of the exact HP-scaling numbers is ambiguous, so this archive records the HP-scaling relationship without publishing the disputed exact formula.",
            "vi": "Bản chép CBT2 hiện có con số scaling HP chưa rõ ràng, nên kho dữ liệu chỉ ghi nhận quan hệ scaling theo HP mà chưa công bố công thức chính xác gây tranh cãi."
          }
        ],
        "combo": [],
        "source": {
          "en": "Kaiden.gg CBT2 transcription · updated July 29, 2026",
          "vi": "Bản chép dữ liệu CBT2 từ Kaiden.gg · cập nhật 29/07/2026"
        }
      }
    ]
  },
  "alf": {
    "skills": [
      {
        "type": "basicAttack",
        "name": "Novice Shotgun",
        "description": {
          "en": "A three-hit Ignis shotgun combo that consumes Reserve Ammo and can convert an empty magazine into a forward reload charge.",
          "vi": "Chuỗi shotgun Ignis 3 đòn tiêu Reserve Ammo và có thể biến băng đạn trống thành cú lao nạp đạn."
        },
        "resource": {
          "en": "Basic hit 3 consumes 1 Reserve Ammo. If none is available, it becomes a forward charge and grants 3 Reserve Ammo.",
          "vi": "Đòn thường 3 tiêu 1 Reserve Ammo. Nếu hết đạn, nó thành cú lao tới và nhận 3 Reserve Ammo."
        },
        "mechanics": [
          {
            "en": "Charged Attack consumes all Reserve Ammo, steps onto the enemy and fires from the air; each ammo consumed increases bullet damage by 40%.",
            "vi": "Charged Attack tiêu toàn bộ Reserve Ammo, giẫm lên kẻ địch rồi bắn trên không; mỗi viên tiêu hao tăng 40% sát thương đạn."
          },
          {
            "en": "If no Reserve Ammo is available, Charged Attack instead reloads 3 Reserve Ammo through the forward charge.",
            "vi": "Nếu không còn Reserve Ammo, Charged Attack thay bằng cú lao nạp 3 Reserve Ammo."
          },
          {
            "en": "After Dodge or Dash, Basic performs a Pursuit Attack.",
            "vi": "Sau Dodge hoặc Dash, Đánh thường tung Pursuit Attack."
          }
        ],
        "combo": [],
        "source": {
          "en": "Kaiden.gg CBT2 transcription · updated July 29, 2026",
          "vi": "Bản chép dữ liệu CBT2 từ Kaiden.gg · cập nhật 29/07/2026"
        }
      },
      {
        "type": "skill",
        "name": "Zeroth Shell",
        "description": {
          "en": "Fires a heavy shotgun blast that spends Reserve Ammo for direct Ignis damage and break pressure.",
          "vi": "Bắn phát shotgun nặng tiêu Reserve Ammo để gây Ignis trực tiếp và tạo áp lực phá choáng."
        },
        "resource": {
          "en": "Maximum Reserve Ammo: 6; regenerates slowly over time.",
          "vi": "Tối đa 6 Reserve Ammo; hồi chậm theo thời gian."
        },
        "mechanics": [],
        "combo": [],
        "source": {
          "en": "Kaiden.gg CBT2 transcription · updated July 29, 2026",
          "vi": "Bản chép dữ liệu CBT2 từ Kaiden.gg · cập nhật 29/07/2026"
        }
      },
      {
        "type": "ultimate",
        "name": "Flare of Enlightenment",
        "description": {
          "en": "Unleashes a flamethrower AoE and fully reloads Alf for the next shotgun sequence.",
          "vi": "Phun lửa AoE và nạp đầy đạn cho chuỗi shotgun tiếp theo của Alf."
        },
        "resource": {
          "en": "Grants 6 Reserve Ammo.",
          "vi": "Nhận 6 Reserve Ammo."
        },
        "mechanics": [],
        "combo": [],
        "source": {
          "en": "Kaiden.gg CBT2 transcription · updated July 29, 2026",
          "vi": "Bản chép dữ liệu CBT2 từ Kaiden.gg · cập nhật 29/07/2026"
        }
      },
      {
        "type": "tacticalAssault",
        "name": "Dustproof Magazine",
        "description": {
          "en": "Switches in with an Ignis firearm attack and immediately reloads part of Alf’s magazine.",
          "vi": "Đổi vào sân bằng đòn súng Ignis và lập tức nạp một phần băng đạn."
        },
        "resource": {
          "en": "Grants 3 Reserve Ammo.",
          "vi": "Nhận 3 Reserve Ammo."
        },
        "mechanics": [],
        "combo": [],
        "source": {
          "en": "Kaiden.gg CBT2 transcription · updated July 29, 2026",
          "vi": "Bản chép dữ liệu CBT2 từ Kaiden.gg · cập nhật 29/07/2026"
        }
      },
      {
        "type": "passive",
        "name": "Maid in Training",
        "description": {
          "en": "Adds a shotgun follow-up after defensive actions and rewards all parts of Alf’s kit with stronger Stun buildup.",
          "vi": "Thêm phát shotgun nối sau hành động phòng thủ và thưởng mọi phần của bộ kỹ năng bằng Stun buildup mạnh hơn."
        },
        "resource": "",
        "mechanics": [
          {
            "en": "Press Dodge or Parry immediately after a shotgun attack to consume 1 Reserve Ammo and fire a follow-up shot.",
            "vi": "Bấm Dodge hoặc Parry ngay sau đòn shotgun để tiêu 1 Reserve Ammo và bắn phát nối."
          },
          {
            "en": "Hitting with melee, shotgun, or flamethrower grants 14 Stun Buildup Bonus for 16s.",
            "vi": "Đánh trúng bằng cận chiến, shotgun hoặc súng phun lửa nhận 14 Stun Buildup Bonus trong 16 giây."
          }
        ],
        "combo": [],
        "source": {
          "en": "Kaiden.gg CBT2 transcription · updated July 29, 2026",
          "vi": "Bản chép dữ liệu CBT2 từ Kaiden.gg · cập nhật 29/07/2026"
        }
      }
    ]
  }
};

(function applyCharacterSkillDetailPatchV26() {
    Object.entries(characterSkillDetailPatchV26).forEach(function ([characterId, patch]) {
        const character = charactersData.find(function (entry) {
            return entry.id === characterId;
        });
        if (!character) return;

        if (Array.isArray(patch.skills)) {
            character.skills = patch.skills;
        }

        if (patch.variants && Array.isArray(character.variants)) {
            Object.entries(patch.variants).forEach(function ([variantId, skills]) {
                const variant = character.variants.find(function (entry) {
                    return entry.id === variantId;
                });
                if (variant) variant.skills = skills;
            });
        }
    });
})();


// =========================================================
// FULL CHARACTER PSYCHE DATA — DICHOTOMY CBT2 v30
// Source family: SilverPalaceMeta character pages / glossary.
// Psyches are duplicate-copy upgrades. Each character has six.
