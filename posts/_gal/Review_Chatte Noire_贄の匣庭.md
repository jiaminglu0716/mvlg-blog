---
# Template Display Config(Use to judge the display status of post)
config:
  # default is select default post template to display post content, and these data will no be displayed with spcial format.
  # content type
  ctype: galgame
  # game type
  gtype: story
  # record type
  type: data
  # record format
  format: yml

#########################################
#   Hexo System Default Configuration   #
#########################################

# Blog Basic Information
title: 贄の匣庭
date: 2024-02-09 15:53:00
description: Galgame攻略感想与评价 >>>

# Config Setting for 3rd-plugins
mermaid: true

# Archive for blog
categories:
  - Gamer
  - Galgame
  - Review
# Tags for blog
tags: [
    # Basic
    "galgame",

    "acg",
    "ADV",
    "review",
    "评分",
    "感想",
    "统计",
    # Element
    "和服",
    "奇幻",
    "民俗",
    "恐怖",
    "悬疑",
    "猎奇",
    "重口",
    "全灭",
    "匣子",
    "复仇",
    "子宫",
    "生育",
  ]

#########################################
#         Blog Body Data Field          #
#########################################

# Galgame Information
info:
  name:
    jp: 贄の匣庭
    cn: 贄之匣庭
    en: Nie No Hakoniwa - Dollhouse of Offerings
  shortname: []
  developer: ["Chatte Noire"]
  publishers:
    jp: ["Sekai Project", "Chatte Noire", "Denpasoft"]
    cn: ["Sekai Project", "Chatte Noire", "Denpasoft"]
    en: ["Sekai Project", "Chatte Noire", "Denpasoft"]
  staff:
    script:
      - name: 科
        no: [1]
        primary: false
        desc: ""
    voice:
      - name: 四葉ヨウ
        no: [1]
        primary: true
        desc: ""
      - name: 星リルカ
        no: [1]
        primary: true
        desc: ""
      - name: 水無月ひなん
        no: [1]
        primary: true
        desc: ""
    artist:
      - name: カグユヅ
        no: [1]
        primary: true
        desc: ""
  release:
    1:
      date: 2024-02-16
      name: Nie no Hakoniwa
      region: jp
      r18: true
      disk: false
      dl: true
      # static | dynamic | anime | 3D - r -> H-dynamic
      cg: ["static", "H-dynamic"]
      platform: window
      link:
      branch: Tree
      desc: Released on Steam + DLsite, and the work is the first project for this company.
  links:
    - { title: "公式", link: "" }

# Classification
classification:
  series: [""]
  types: ["ADV", "GAL"]
  play: ["Text"]
  playeles: []
  bgeles: ["Panic", "Wafu", "Revenge", "Born", "Hakoniwa", "Box"]

# Play game info record
playhis:
  - no: 1
    times: 1
    version_no: 1
    status: all
    speed: fast
    desc: Auto play the most of the main story, and skip lots of HS and the redundent story.

# score(n/10), range(10-1)
score:
  1:
    # Game Score Standard
    base:
      # Basic Standard
      # Feel
      grand: 8.5
      story: 8.5
      persistence: 7
      emotion: 7.5
      # Eye
      character: 9.3
      cg: 9.3
      # Ear
      sound: 9.0
      voice: 9.0
      bgm: 9.0
      # Control
      control_ui: 9.0
      control_auto: 8.0
      control_easy_of_use: 9.0
      # role
      protagonist_substitution: 7.0
      heroine_substitution: 7.0
      role_substitution: 7.0
      role_diversity: 8.0
      role_number: 7.0
      # play
      play_interactivity: 5.0
      play_playability: 5.0
      play_durability: 7.0
      play_diversity: 5.0
      # archive
      archive: 9.0
      archive_auto_save: 7.0
      archive_save: 8.0
      archive_num: 6.0

3rdscore:
  vndb:
    - id: v26344
      title: 贄の匣庭
      rank: 4229
      grand: 6.99
      avg: 6.99
      max: 10.0
      min: 1.0
      num: 60
      num_rank: 3544
      gap: -1
      range: [3, 5, 19, 14, 11, 3, 4, 0, 0, 1, 0]
      updateAt: 2024-02-24

# Record play time if we play times more than one.
playtime:
  1:
    granddays: 7
    playdays: 7
    startat: 2024-02-03 16:07:00
    finishat: 2024-02-09 15:53:00
    piecenum: 18
    minpiece: 00:04:00
    maxpiece: 05:49:00
    grandtime: 53:40:00

3rd-playtime:
  vndb:
    - id: v26344
      title: 贄の匣庭
      cover: 17h3m
      total: 13h39m
      fast: 13h13m
      normal: 22h23m
      slow: 22h23m
      updateAt: 2024-02-24

# Event his, and the his number is the times of playhis.
eventList:
  title:
    cn:
      [
        "周目",
        "事件",
        "起始时间",
        "结束时间",
        "事件时长",
        "事件长支时长",
        "事件短支时长",
        "总时长",
      ]
    jp:
      [
        "周目",
        "イベント",
        "開始時間",
        "終了時間",
        "イベント期間",
        "イベント長期間",
        "イベント短期間",
        "合計期間",
      ]
    en:
      [
        "Times",
        "Event",
        "Start At",
        "Finish At",
        "Event Time",
        "Long Branch Time",
        "Short Branch Time",
        "Grand Time",
      ]
  his:
    1:

eventGroupList:
  title:
    cn: ["索引", "事件组", "组事件时长", "相关事件组"]
    jp:
      [
        "インデックス",
        "イベントグループ",
        "グループイベント期間",
        "関連イベントグループ",
      ]
    en: ["Index", "Event Group", "Group Time", "Sub Event&Group"]
  his:

# Game images(if we set dir we can get src with the format of that "dir + path" -> dir: /src and path: /cg-3.jpg || cg-3.jpg -> /src/cg-3.jpg)
images:
  dir: /images/galgame/贄の匣庭
  cover: { src: "cover.jpg", alt: "Game Cover" }
  banner: { src: "cg-1.jpg", alt: "Game Cover" }
  play:
  cg:
    - { src: "cg-1.jpg", alt: "" }
    - { src: "cg-2.jpg", alt: "" }
    - { src: "cg-3.jpg", alt: "" }
    - { src: "cg-4.jpg", alt: "" }
    - { src: "cg-5.jpg", alt: "" }
    - { src: "cg-6.jpg", alt: "" }
    - { src: "cg-7.jpg", alt: "" }
    - { src: "cg-8.jpg", alt: "" }
  flowchart:

# Game Review
review:
  story:
    # Normal Speed :: <15: short; <35: normal; <50: long;
    length: normal
  tips:
    - 第一、二部有两个评级CG，第三部有8个评级CG，第四部属于单线后日谈。
  routes:
  bug:
  slogan:
    - {
        sentence: "天生万物以养人，人无一物以报天！",
        writer: "夢君",
        collection: "",
        resource: "2DFan",
      }
  short:
    - date: 2024-02-11 22:53:00
      content: 跟动漫的魔法学院题材风格相似，基本上可以当番剧看。除了一开始，后面基本上眼球都离不开文本，太精彩了。某种意义上可以算神作，另一方面，这个游戏是从二手魔法恋爱日记的实体盒上找到的游戏推荐卡，后面感觉这波不亏。另外共通的BGM不少，尤其是回忆场景片段。
  long:
    - date: 2024-02-11 22:50:00
      title: 一周目初体验
      content:
      tags:
        [
          "和服",
          "奇幻",
          "民俗",
          "恐怖",
          "悬疑",
          "猎奇",
          "重口",
          "全灭",
          "匣子",
          "复仇",
          "子宫",
          "生育",
        ]

# Friend links to relative post.
links:
  - { title: "[VNDB] 贄の匣庭", link: "https://vndb.org/v26344", icon: "" }
  - {
      title: "[2DFan] 贄の匣庭",
      link: "https://2dfan.org/subjects/8487",
      icon: "",
    }
---
