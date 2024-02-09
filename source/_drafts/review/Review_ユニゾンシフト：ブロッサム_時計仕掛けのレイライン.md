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
title: 時計仕掛けのレイライン
date: 2024-01-28 20:35:48
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
  '恋爱', '白学家', '三角', '胃药', '心理描写', '细节', '写实', '校园', '职场', '成长', '坚强', '柔弱',

  # Character
  '东马', '雪菜', '小春', '千晶', '麻理',

  # Staff
  '丸户史明', '中村毅',

  # Chapter
  'IC', 'CC', 'Coda', 'Digital Novel', 'Voice Drama'
]


#########################################
#         Blog Body Data Field          #
#########################################

# Galgame Information
info:
  name:
    jp: 時計仕掛けのレイライン
    cn: 时钟机关的Ley-line
    en: A Clockwork Ley-Line
  shortname: []
  developer: ['Unison Shift: Blossom']
  publishers:
    jp: ['Unison Shift', 'Dramatic Create']
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
      date: 2017-04-27
      name: Tokeijikake no Ley Line -Kagerou ni Samayou Majo- Package Edition
      region: jp
      r18: false
      disk: false
      dl: true
      # static | dynamic | anime | 3D - r -> H-dynamic
      cg: ['static', 'H-static']
      platform: psv
      link: 
      branch: Tree
      desc: 時計仕掛けのレイライン －黄昏時の境界線－ + 	時計仕掛けのレイライン －残影の夜が明ける時－ + 時計仕掛けのレイライン －朝霧に散る花－ + 時計仕掛けのレイライン -陽炎に彷徨う魔女-
  links:
  - { title: "Anime公式", link: http://whitealbum2.jp/ }

# Classification
classification:
  series: ['A Clockwork Ley-Line']
  types: ['ADV', 'GAL']
  play: ['Text']
  playeles: []
  bgeles: ['Magic', 'School', 'Mystery', 'Recover', 'Soul']

# Play game info record
playhis:
- no: 1
  times: 1
  version_no: 1
  status: all
  speed: normal
  desc: Record (時計仕掛けのレイライン －残影の夜が明ける時－ + 時計仕掛けのレイライン －朝霧に散る花－ + 時計仕掛けのレイライン -陽炎に彷徨う魔女-) and predict 時計仕掛けのレイライン －黄昏時の境界線－ with 15h or 20h.


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
      sound: 9.5
      voice: 9.5
      bgm: 9.4
      # Control
      control_ui: 8.0
      control_auto: 9.0
      control_easy_of_use: 9.0
      # role
      protagonist_substitution: 7.0
      heroine_substitution: 9.0
      role_substitution: 7.5
      role_diversity: 7.0
      role_number: 8.0
      # play
      play_interactivity: 5.0
      play_playability: 5.0
      play_durability: 9.0
      play_diversity: 5.0
      # archive
      archive: 9.0
      archive_auto_save: 7.0
      archive_save: 9.0
      archive_num: 7.0
    r18:
      # R18 part
      r18_grand: 8.0
      # The design of game
      r18_design_breast: 8.0
      r18_design_layout: 8.0
      # The HS effect according to this position they insert
      r18_story: 9.0
      r18_story_insert: 9.0
      r18_story_develop: 9.0
      # The feel when we use this cg or game to do something let us feel great
      r18_game_used: 7.5
      # The cg effect according sub standards
      r18_cg: 7.5
      r18_cg_used: 7.0
      r18_cg_fleshy_feel: 7.0
      r18_cg_color: 6.5
      # The action of human
      r18_play_active: 8.0
      r18_play_emotion: 9.0
      r18_play_position: 6.0
      r18_play_facial_expression: 7.0
      # The feel of Jyoyu san's voice
      r18_voice: 9.0
      # The effect of sound and bgm
      r18_sound: 9.0
      r18_sound_effect: 9.0 
      r18_bgm: 9.0


3rdscore:
  vndb:
    id: v7771
    rank: 2
    grand: 9.0
    avg: 9.0
    max: 10.0
    min: 1.0
    num: 2665
    num_rank: 87
    gap: -1
    range: [1437, 624, 310, 121, 70, 38, 22, 14, 11, 18, 0]

# Record play time if we play times more than one.
playtime:
  1:
    granddays: 17
    playdays: 17
    startat: 2024-01-12 00:09:48
    finishat: 2024-01-28 20:35:48
    piecenum: 33
    minpiece: 00:29:00
    maxpiece: 12:07:00
    grandtime: 121:52:00

3rd-playtime:
  vndb:
    cover: 72h46m
    total: 73h36m
    fast: 50h
    normal: 80h
    slow: 100h2m

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
  dir: /images/galgame/ホワイトアルバム２
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
    length: long
  tips:
  - 动画版本只有IC，且是东马偏向的剧情，雪莱党会被虐死。CC + Coda是故事核心。IC主要是三角势力平衡的故事背景描述。Extended Edition 整合了 IC + CC + Coda还有收录了许多细节内容。具体设定补充有官方设定集，但不代表是正确的。当作品出名的一定程度后，其解释权不为作者所拥有。
  routes:
  - chapter: IC
    platform: all
    release_no:
    exclude_no: 
    known_no: [1]
    routes:
    - name: 
      update: false
      desc: 
  - chapter: CC
    platform: all
    release_no:
    routes:
    - name: 
      update: false
      desc: 
  - chapter: CODA
    platform: all
    release_no: all
    routes:
    - name: 
      update: false
      desc: 
  - chapter: MINI STORY
    platform: all
    release_no: all
    routes:
    - name: 
      update: false
      desc: 
  - chapter: DIGITAL NOVEL
    platform: all
    release_no: all
    routes:
    - name: 
      update: false
      desc: 
  - chapter: VOICE DRAMA
    platform: all
    release_no: all
    routes:
    - name: 
      update: false
      desc: 
  bug:
  - platform:
    release_no:
    desc: 
    patch: false
    patch_link: 
  slogan:
  - { sentence: "梦里不觉秋已深，余情岂是为他人。", writer: "冬马和纱", collection: "白色相簿2", resource: "CN-Network" }
  short: 
  - date: 2024-02-01 08:24:00
    content:
  long: 
  - date: 2024-01-28 21:19:48
    title: 白色相簿2一周目初体验
    content: 
    tags: ['初体验', 'WA2', '三角恋']

# Friend links to relative post.
links:
- { title: "VNDB - 時計仕掛けのレイライン -朝霧に散る花－", link: "https://vndb.org/v16212", icon: "" }
- { title: "2DFan - 時計仕掛けのレイライン -陽炎に彷徨う魔女-", link: "https://2dfan.org/subjects/11245", icon: "" }
---

