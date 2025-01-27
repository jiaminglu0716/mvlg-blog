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
title: 車輪の国、向日葵の少女
date: 2024-02-03 05:30:00
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
  '社会', '体制', '反抗', '运动', '政治', '建设', '少女', '成长', '家庭', '毅力', '恋爱', '打斗',

  # Character
  '灯花', 'さち', '夏咲', '璃々子', 'ハーレム',

  # Staff
  'るーすぼーい', '有葉',
]


#########################################
#         Blog Body Data Field          #
#########################################

# Galgame Information
info:
  name:
    jp: 車輪の国、向日葵の少女
    cn: 车轮之国，向日葵的少女
    en: 'Sharin no Kuni: The Girl Among the Sunflowers'
  shortname: ['Syarin']
  developer: [
    # 'AKABEiSOFT2', 
    'あかべぇそふとつぅ',
  ]
  publishers:
    jp: ['AKABEiSOFT2', 'Palace', 'MAGES.']
    cn: []
    en: []
  staff:
    script:
    - name: るーすぼーい
      no: [1]
      primary: true
      desc: 脚本の主役担当者
    voice:
    - name: 籐野らん
      no: [1]
      primary: false
      desc: '-'
    - name: 新城麻奈
      no: [1]
      primary: false
      desc: '-'
    - name: 芹園みや
      no: [1]
      primary: false
      desc: '-'
    - name: 紫華すみれ
      no: [1]
      primary: false
      desc: '-'
    - name: 神月あおい
      no: [1]
      primary: false
      desc: '-'
    - name: 風音
      no: [1]
      primary: false
      desc: '-'
    - name: 齋藤亮太
      no: [1]
      primary: false
      desc: '-'
    - name: 馬並硬太
      no: [1]
      primary: false
      desc: '-'
    - name: 盛啓介
      no: [1]
      primary: false
      desc: '-'
    - name: 倉田まりや
      no: [1]
      primary: false
      desc: '-'
    - name: さとう雅義
      no: [1]
      primary: false
      desc: '-'
    - name: 石本篤
      no: [1]
      primary: false
      desc: '-'
    artist:
    - name: 有葉
      no: [1]
      primary: true
      desc: 主役は原画
  release:
    1:
      date: 2005-11-25
      name: Sharin no Kuni, Himawari no Shoujo - First Press Edition
      region: jp
      r18: true
      disk: true
      dl: true
      # static | dynamic | anime | 3D - r -> H-dynamic
      cg: ['static', 'H-static']
      platform: window
      link: 
      branch: Tree
      desc: (long)Main Story[nearly one heroine one chapter and here has five chapters.] + (short)Heroine Endings x5
  links:
  - { title: "kickstarter", link: "https://www.kickstarter.com/projects/tokyootakumode/re-sharin-no-kuni-project/description" }

# Classification
classification:
  series: ['向日葵の少女']
  types: ['ADV', 'GAL']
  play: ['Text']
  playeles: []
  bgeles: ['Social', 'Mountain', 'Prison']

# Play game info record
playhis:
- no: 1
  times: 1
  version_no: 1
  status: all
  speed: normal
  desc: All endings


# score(n/10), range(10-1)
score:
  1:
    # Game Score Standard
    base:
      # Basic Standard
      # Feel
      grand: 8.5
      story: 8.5 
      persistence: 8.5
      emotion: 8.0
      # Eye
      character: 8.8
      cg: 8.2
      # Ear
      sound: 8.5
      voice: 8.5
      bgm: 8.0
      # Control
      control_ui: 7.0
      control_auto: 7.0
      control_easy_of_use: 7.0
      # role
      protagonist_substitution: 7.0
      heroine_substitution: 6.0
      role_substitution: 7.0
      role_diversity: 7.7
      role_number: 8.0
      # play
      play_interactivity: 5.0
      play_playability: 5.0
      play_durability: 5.0
      play_diversity: 5.0
      # archive
      archive: 7.0
      archive_auto_save: 7.0
      archive_save: 7.0
      archive_num: 8.0
    r18:
      # R18 part
      r18_grand: 8.5
      # The design of game
      r18_design_breast: 8.0
      r18_design_layout: 7.5
      # The HS effect according to this position they insert
      r18_story: 7.5
      r18_story_insert: 7.0
      r18_story_develop: 7.7
      # The feel when we use this cg or game to do something let us feel great
      r18_game_used: 7.8
      # The cg effect according sub standards
      r18_cg: 7.8
      r18_cg_used: 7.5
      r18_cg_fleshy_feel: 7.5
      r18_cg_color: 7.0
      # The action of human
      r18_play_active: 7.0
      r18_play_emotion: 7.0
      r18_play_position: 6.0
      r18_play_facial_expression: 7.0
      # The feel of Jyoyu san's voice
      r18_voice: 7.5
      # The effect of sound and bgm
      r18_sound: 7.0
      r18_sound_effect: 7.0 
      r18_bgm: 7.0


3rdscore:
  vndb:
    id: v57
    title: 車輪の国、向日葵の少女
    updateAt: 2024-02-03
    rank: 150
    grand: 8.17
    avg: 8.17
    max: 10.0
    min: 1.0
    num: 6330
    num_rank: 26
    gap: -1
    range: [683, 2297, 1913, 903, 296, 111, 66, 39, 13, 9, 0]

# Record play time if we play times more than one.
playtime:
  1:
    granddays: 7
    playdays: 7
    startat: 2024-01-28 04:57:00
    finishat: 2024-02-03 05:30:00
    piecenum: 11
    minpiece: 00:40:00
    maxpiece: 04:36:00
    grandtime: 32:30:00

3rd-playtime:
  vndb:
    id: v57
    title: 車輪の国、向日葵の少女
    updateAt: 2024-02-03
    cover: 30h
    total: 30h
    fast: 21h
    normal: 32h
    slow: 40h22m

# Event his, and the his number is the times of playhis.
eventList:
  title:
    cn: ['周目', '事件', '起始时间', '结束时间', '事件时长', '事件长支时长', '事件短支时长', '总时长']
    jp: ['周目', 'イベント', '開始時間', '終了時間', 'イベント期間', 'イベント長期間', 'イベント短期間', '合計期間']
    en: ['Times', 'Event', 'Start At', 'Finish At', 'Event Time', 'Long Branch Time', 'Short Branch Time', 'Grand Time']
  his:
    1:
    - ['1', 'Common Route', '26:27:00', '26:33:00', '00:06:00', '19:01:00', '03:27:00', '26:33:00']
    - ['2', '夏咲 Fin', '26:33:00', '27:15:00', '00:42:00', '19:43:00', '00:48:00', '27:15:00']
    - ['3', '璃々子 Fin', '27:15:00', '27:44:00', '00:29:00', '19:30:00', '00:35:00', '27:02:00']
    - ['4', '夏咲 BAD END', '27:44:00', '27:55:00', '00:11:00', '16:46:00', '01:12:00', '24:18:00']
    - ['5', 'ハーレム Fin', '27:55:00', '28:22:00', '00:27:00', '19:28:00', '00:33:00', '27:00:00']
    - ['6', '灯花 Fin', '28:22:00', '30:21:00', '01:59:00', '21:00:00', '02:05:00', '28:32:00']
    - ['7', '灯花 BAD END', '30:21:00', '30:36:00', '00:15:00', '06:17:00', '03:41:00', '13:49:00']
    - ['8', 'さち Fin', '30:36:00', '32:25:00', '01:49:00', '20:50:00', '01:55:00', '28:22:00']
    - ['9', 'さち BAD END', '32:25:00', '32:30:00', '00:05:00', '00:24:00', '00:24:00', '07:56:00']

eventGroupList:
  title:
    cn: ['索引', '事件组', '组事件时长', '相关事件组']
    jp: ['インデックス', 'イベントグループ', 'グループイベント期間', '関連イベントグループ']
    en: ['Index', 'Event Group', 'Group Time', 'Sub Event&Group']
  his:

# Game images(if we set dir we can get src with the format of that "dir + path" -> dir: /src and path: /cg-3.jpg || cg-3.jpg -> /src/cg-3.jpg)
images:
  dir: /images/galgame/車輪の国、向日葵の少女
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
  - 线路顺序是，认识 > Sachi > 灯花 > 夏咲 > 璃々子。
  - 每章节都有特定的进线选项，主要还是HS收集。第五章最后的选项决定结局方向。
  routes:
  bug:
  - platform:
    release_no:
    desc: 
    patch: false
    patch_link: 
  slogan:
  # - { sentence: "梦里不觉秋已深，余情岂是为他人。", writer: "冬马和纱", collection: "白色相簿2", resource: "CN-Network" }
  short: 
  - date: 2024-02-03 08:23:00
    content: 感觉主线还行，就是结局显得有点小儿科。描述不合理体制下的抵抗确实是不错的题材，写深了可能无法发布。总体来说有所感悟。用当年的观点看确实是9点。但现在还是分量不太够，不过还是值得一玩。推荐。
  long: 
  - date: 2024-02-03 08:25:48
    title: 一周目初体验
    content: 总体感觉不错，前期有种反体制斗争的感觉，类似于秽翼。但是细节部分没有其出彩。后篇相对而言有点小儿科，但是从民间观点看，这也是大事件的一部分。转则点就是法月为男主而送别。只能说法月是其社会的缩影，男主需要面对更大的敌人。有机会在FD出现，有空再补一下。同属于向日葵少女系列。CG的话，部分挺好看，大多数崩得离奇。不外乎形状，大小，脸型，类别等。虽然HS没想象中那么涩，但是那个脸和身体的光泽美感倒是保留得挺好的。感觉HCG还优于普通CG的错觉。也许并不是。至于最后，这部作品在当时属于90台点的神作。具体不展开，细节描写还是可以的。女主的话，回忆杀有点严重，但是坚定意识的过程的表现还是不错的。个人而言，各线质量有有缺，但相差不大。至于最后的end我感觉就是后日谈的小细节补充。得吐槽主线两女，都是H加情感结束。另外两个连H都省了。。。
    tags: ['社会', '体制', '反抗', '运动', '政治', '建设', '少女', '成长', '家庭', '毅力', '恋爱', '打斗']

# Friend links to relative post.
links:
- { title: "VNDB", link: "https://vndb.org/v57", icon: "" }
- { title: "2DFan", link: "https://2dfan.org/subjects/172", icon: "" }
---

