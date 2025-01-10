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
title: SaDistic BlooD
date: 2024-02-01 16:18:27
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
  '凌辱', '重口', '恶堕', '百合', '猎奇', '社保',
  
  # H
  '插眼', '开膛', '刺穿', '怪人', '针刺', '断头', '多P', '触手', '吸血鬼', '十二始祖', '金瞳', '反叛', '战斗', '逃亡',

  # Staff
  '和泉万夜'

]


#########################################
#         Blog Body Data Field          #
#########################################

# Galgame Information
info:
  name:
    jp: サドブラ
    cn: 狂嗜之血
    en: SaDistic BlooD
  shortname: ['SDB']
  developer: ['Black Cyc']
  publishers:
    jp: ['Black Cyc']
    cn: ['JAST USA']
    en: ['JAST USA']
  staff:
    script:
    - name: 和泉万夜
      no: [1]
      primary: true
      desc: 脚本の主役担当者
    voice:
    - name: いねむりすやこ
      no: [1]
      primary: false
      desc: '-'
    - name: 柏木逢花
      no: [1]
      primary: false
      desc: '-'
    - name: 羽真ちい
      no: [1]
      primary: false
      desc: '-'
    artist:
    - name: 上田メタヲ
      no: [1]
      primary: true
      desc: 主役は原画
  release:
    1:
      date: 2019-12-20
      name: SaDistic BlooD
      region: jp
      r18: true
      disk: true
      dl: true
      # static | dynamic | anime | 3D - r -> H-dynamic
      cg: ['static', 'H-static']
      platform: window
      link: 
      branch: Tree
      desc:
  links:
  - { title: "JAST USA", link: "https://jastusa.com/sadistic-blood" }

# Classification
classification:
  series: ['和泉万夜']
  types: ['ADV', 'GAL']
  play: ['Text']
  playeles: []
  bgeles: []

# Play game info record
playhis:
- no: 1
  times: 1
  version_no: 1
  status: all
  speed: fast
  desc: According to the feel, the ends can be splited into 3 branchs. Distinct branch can collect diff cgs.


# score(n/10), range(10-1)
score:
  1:
    # Game Score Standard
    base:
      # Basic Standard
      # Feel
      grand: 7.0
      story: 7.0 
      persistence: 5.0
      emotion: 5.0
      # Eye
      character: 9.3
      cg: 9.2
      # Ear
      sound: 8.0
      voice: 8.0
      bgm: 7.0
      # Control
      control_ui: 6.0
      control_auto: 7.0
      control_easy_of_use: 6.0
      # role
      protagonist_substitution: 5.0
      heroine_substitution: 5.0
      role_substitution: 5.0
      role_diversity: 5.0
      role_number: 5.0
      # play
      play_interactivity: 5.0
      play_playability: 5.0
      play_durability: 5.0
      play_diversity: 5.0
      # archive
      archive: 7.7
      archive_auto_save: 7.0
      archive_save: 7.7
      archive_num: 8.0
    r18:
      # R18 part
      r18_grand: 8.5
      # The design of game
      r18_design_breast: 7.0
      r18_design_layout: 7.0
      # The HS effect according to this position they insert
      r18_story: 7.5
      r18_story_insert: 6.5
      r18_story_develop: 8.0
      # The feel when we use this cg or game to do something let us feel great
      r18_game_used: 8.0
      # The cg effect according sub standards
      r18_cg: 8.8
      r18_cg_used: 8.0
      r18_cg_fleshy_feel: 8.0
      r18_cg_color: 9.0
      # The action of human
      r18_play_active: 5.0
      r18_play_emotion: 5.0
      r18_play_position: 6.0
      r18_play_facial_expression: 7.7
      # The feel of Jyoyu san's voice
      r18_voice: 8.0
      # The effect of sound and bgm
      r18_sound: 6.0
      r18_sound_effect: 7.0 
      r18_bgm: 6.0


3rdscore:
  vndb:
    id: v26721
    title: SaDistic BlooD
    updateAt: 2024-02-01
    rank: 10981
    grand: 6.22
    avg: 6.22
    max: 10.0
    min: 1.0
    num: 492
    num_rank: 545
    gap: -1
    range: [13, 23, 68, 135, 134, 51, 24, 18, 12, 14, 0]

# Record play time if we play times more than one.
playtime:
  1:
    granddays: 5
    playdays: 2
    startat: 2024-01-28 22:55:27
    finishat: 2024-02-01 16:18:27
    piecenum: 2
    minpiece: 00:17:00
    maxpiece: 01:46:00
    grandtime: 02:03:00

3rd-playtime:
  vndb:
    id: v26721
    title: SaDistic BlooD
    updateAt: 2024-02-01
    cover: 4h
    total: 4h
    fast: 3h
    normal: 4h23m
    slow: 4h

# Event his, and the his number is the times of playhis.
eventList:
  title:
    cn: ['周目', '事件', '起始时间', '结束时间', '事件时长', '事件长支时长', '事件短支时长', '总时长']
    jp: ['周目', 'イベント', '開始時間', '終了時間', 'イベント期間', 'イベント長期間', 'イベント短期間', '合計期間']
    en: ['Times', 'Event', 'Start At', 'Finish At', 'Event Time', 'Long Branch Time', 'Short Branch Time', 'Grand Time']
  his:
    1:
    - ['1', 'True Escape End + Against End + Escape End + Bad End x n', '00:00:00', '02:03:00', '02:03:00', '00:00:00', '00:00:00', '02:03:00']

eventGroupList:
  title:
    cn: ['索引', '事件组', '组事件时长', '相关事件组']
    jp: ['インデックス', 'イベントグループ', 'グループイベント期間', '関連イベントグループ']
    en: ['Index', 'Event Group', 'Group Time', 'Sub Event&Group']
  his:

# Game images(if we set dir we can get src with the format of that "dir + path" -> dir: /src and path: /cg-3.jpg || cg-3.jpg -> /src/cg-3.jpg)
images:
  dir: /images/galgame/SaDistic%20BlooD
  cover: { src: "cover.jpg", alt: "Game Cover" }
  banner: { src: "cg-3.jpg", alt: "Game Cover" }
  play:
  cg: 
  - { src: "cg-1.jpg", alt: "" }
  - { src: "cg-2.jpg", alt: "" }
  - { src: "cg-3.jpg", alt: "" }
  flowchart:
  - { src: "flowchart-1.jpg", alt: "CN-Flowchart" }

# Game Review
review:
  story:
    # Normal Speed :: <15: short; <35: normal; <50: long; 
    length: short
  tips:
  - According to the feel, the ends can be splited into 3 branchs. Distinct branchs can collect diff CGs.
  routes:
  bug:
  - platform:
    release_no:
    desc: 
    patch: false
    patch_link: 
  slogan:
  short: 
  - date: 2024-02-03 05:54:00
    content: 只能说凌辱部分有点多，看着头皮发麻。还有差分CG收集要注意点始祖大人的情感值。总体来说，画风不错，就是观感有点那个血腥。
  long: 
  - date: 2024-02-03 06:09:00
    title: 一周目快速体验
    content: 初体验完毕，血腥程度完全不亚于死馆，甚至有更严重的凌辱情节。比如说死亡方面的砍头，断手，人体穿插致死(也就是从穴开始到口结束，由起点至终点的人体穿插和内脏扰动。)，虐待方面的人体四肢切断，甚至身体也被移除，只剩下头和心脏以及器官受应器的感知神经，然后用平时的yy设备来刺激对应的神经细胞来看头部的刺激反应表现。基本上被抓住就是人体标本和死，唯一的解决方法就是让始祖觉醒。玩得有点蛋疼，一开始就BE。打了3次后终于打出逃亡End，但这是缺失版本。真正的版本是C分支的主与仆人。这个就要两次吸血都选中间吸。除了这个结局必须C分支，其他基本都可以在其他分支回收。喜欢这类型凌辱倾向的可以玩，一般人就不推荐了。还有一件要吐槽的就是，剧情贼TM短。这有点对不起这画风，这边大爱这类型的画风。
    tags: ['插眼', '开膛', '刺穿', '怪人', '针刺', '断头', '多P', '触手', '吸血鬼', '十二始祖', '金瞳', '反叛', '战斗', '逃亡']

# Friend links to relative post.
links:
- { title: "VNDB", link: "https://vndb.org/v26721", icon: "" }
- { title: "2DFan", link: "https://2dfan.org/subjects/8560", icon: "" }
---

