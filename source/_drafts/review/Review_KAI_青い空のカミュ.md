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
title: 青い空のカミュ
date: 2024-02-13 15:53:00
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
  'galgame', 'acg', 'ADV', 'review', '评分', '感想', '统计',

  # Element
  '魔法', '学院', '人偶', '灵魂', '悬疑', '夜之魔法', '魔法阵', '灵魂', '魔女', '时停', '异世界', '同心异体', '同化', '拯救', '救赎', '独特画风', '战斗', '热血'
]


#########################################
#         Blog Body Data Field          #
#########################################

# Galgame Information
info:
  name:
    jp: 青い空のカミュ
    cn: 青空下的加缪
    en: Camus in The Blue Sky
  shortname: ['	BSC']
  developer: ['KAI']
  publishers:
    jp: ['KAI']
    cn: []
    en: []
  staff:
    script:
    - name: 風間ぼなんざ
      no: [1]
      primary: false
      desc: ''
    - name: 西ノ宮勇希
      no: [1]
      primary: false
      desc: ''
    - name: 南愛恵
      no: [1]
      primary: false
      desc: ''
    - name: 市川環
      no: [1]
      primary: false
      desc: ''
    voice:
    artist:
    - name: うらび 
      no: [1]
      primary: true
      desc: ''
    - name: Pero
      no: [1]
      primary: false
      desc: ''
  release:
    1:
      date: 2019-03-29
      name: Aoi Sora no Camus
      region: jp
      r18: true
      disk: true
      dl: true
      # static | dynamic | anime | 3D - r -> H-dynamic
      cg: ['static', 'H-static']
      platform: window
      link: 
      branch: Tree
      desc: Choose buttons have nexttick(memory | history) button and traditional click button.
  links:
  - { title: "Hau~ Omochikaeri~!", link: https://omochikaeri.wordpress.com/2019/03/30/march-2019-eroge-releases/ }

# Classification
classification:
  series: []
  types: ['ADV', 'GAL', 'Philosophy', '電波タイプ', 'LOLI']
  play: ['Text']
  playeles: []
  bgeles: ['Monster', 'Subway', 'Village', 'Mountain', 'Sea', 'School']

# Play game info record
playhis:
- no: 1
  times: 1
  version_no: 1
  status: all
  speed: normal
  desc: Auto play main story and CTRL BEs and HCGs.


# score(n/10), range(10-1)
score:
  1:
    # Game Score Standard
    base:
      # Basic Standard
      # Feel
      grand: 9.5
      story: 9.5 
      persistence: 9.5
      emotion: 9.5
      # Eye
      character: 9.3
      cg: 9.0
      # Ear
      sound: 9.0
      voice: 9.2
      bgm: 9.2
      # Control
      control_ui: 9.0
      control_auto: 8.0
      control_easy_of_use: 9.0
      # role
      protagonist_substitution: 8.0
      heroine_substitution: 8.0
      role_substitution: 8.0
      role_diversity: 8.0
      role_number: 8.5
      # play
      play_interactivity: 5.0
      play_playability: 5.0
      play_durability: 9.0
      play_diversity: 5.0
      # archive
      archive: 9.0
      archive_auto_save: 7.0
      archive_save: 8.0
      archive_num: 6.0


3rdscore:
  vndb:
  - id: v23863
    title: 青い空のカミュ
    rank: 1801
    grand: 7.36
    avg: 7.36
    max: 10.0
    min: 2.0
    num: 217
    num_rank: 1132
    gap: -1
    range: [18, 29, 53, 72, 30, 5, 5, 4, 1, 0, 0]
    updateAt: 2024-02-14

# Record play time if we play times more than one.
playtime:
  1:
    granddays: 7
    playdays: 7
    startat:  2024-02-03 16:07:00
    finishat: 2024-02-09 15:53:00
    piecenum: 18
    minpiece: 00:04:00
    maxpiece: 05:49:00
    grandtime: 53:40:00

3rd-playtime:
  vndb:
  - id: v23863
    title: 青い空のカミュ
    cover: 7h38m
    total: 6h25m
    fast: 6h5m    
    normal: 8h34m
    slow: 12h
    updateAt: 2024-02-14

# Event his, and the his number is the times of playhis.
eventList:
  title:
    cn: ['周目', '事件', '起始时间', '结束时间', '事件时长', '事件长支时长', '事件短支时长', '总时长']
    jp: ['周目', 'イベント', '開始時間', '終了時間', 'イベント期間', 'イベント長期間', 'イベント短期間', '合計期間']
    en: ['Times', 'Event', 'Start At', 'Finish At', 'Event Time', 'Long Branch Time', 'Short Branch Time', 'Grand Time']
  his:
    1:

eventGroupList:
  title:
    cn: ['索引', '事件组', '组事件时长', '相关事件组']
    jp: ['インデックス', 'イベントグループ', 'グループイベント期間', '関連イベントグループ']
    en: ['Index', 'Event Group', 'Group Time', 'Sub Event&Group']
  his:
    1:

# Game images(if we set dir we can get src with the format of that "dir + path" -> dir: /src and path: /cg-3.jpg || cg-3.jpg -> /src/cg-3.jpg)
images:
  dir: /images/galgame/青い空のカミュ
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
  - { src: "cg-9.jpg", alt: "" }
  flowchart:

# Game Review
review:
  story:
    # Normal Speed :: <15: short; <35: normal; <50: long; 
    length: short
  tips:
  - 第一、二部有两个评级CG，第三部有8个评级CG，第四部属于单线后日谈。
  routes:
  bug:
  slogan:
  short: 
  - date: 2024-02-14 16:26:00
    content: 看着更像百合作品，但结局并不完美。另一方面，一周目只能说是平庸作品。但是加入思考反思故事后便是对人的探讨，那么此时的作品就是另一种形式的哲学电波作品，可以是优秀的作品。
  long: 
  - date: 2024-02-11 22:50:00
    title: 一周目初体验
    content: 
    tags: ['魔法', '学院', '人偶', '灵魂', '悬疑', '夜之魔法', '魔法阵', '灵魂', '魔女', '时停', '异世界', '同心异体', '同化', '拯救', '救赎', '独特画风', '战斗', '热血']
  3rd:
  - date:
    source:
    link:
    type:
    local: false
    locallink: 
    content:


# Friend links to relative post.
links:
- { title: "[VNDB] 時計仕掛けのレイライン －朝霧に散る花－", link: "https://vndb.org/v16212", icon: "" }
- { title: "[VNDB] 時計仕掛けのレイライン －残影の夜が明ける時－", link: "https://vndb.org/v11093", icon: "" }
- { title: "[VNDB] 時計仕掛けのレイライン －黄昏時の境界線－", link: "https://vndb.org/v10016", icon: "" }
- { title: "[2DFan] 時計仕掛けのレイライン -陽炎に彷徨う魔女-", link: "https://2dfan.org/subjects/11245", icon: "" }
---

