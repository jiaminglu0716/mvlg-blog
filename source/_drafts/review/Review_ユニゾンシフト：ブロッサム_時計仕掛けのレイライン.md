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
      cg: ['static']
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
  desc: Record (時計仕掛けのレイライン －残影の夜が明ける時－ + 時計仕掛けのレイライン －朝霧に散る花－ + 時計仕掛けのレイライン -陽炎に彷徨う魔女-) and predict 時計仕掛けのレイライン －黄昏時の境界線－ with 18h.


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
  - id: v16212
    title: 時計仕掛けのレイライン －朝霧に散る花－
    rank: 148
    grand: 8.17
    avg: 8.17
    max: 10.0
    min: 3.0
    num: 702
    num_rank: 360
    gap: -1
    range: [83, 191, 284, 105, 23, 11, 4, 1, 0, 0, 0]
    updateAt: 2024-02-11
  - id: v11093
    title: 時計仕掛けのレイライン －残影の夜が明ける時－
    rank: 275
    grand: 7.97
    avg: 7.97
    max: 10.0
    min: 3.0
    num: 837
    num_rank: 304
    gap: -1
    range: [49, 222, 356, 153, 35, 13, 6, 2, 0, 0, 0]
    updateAt: 2024-02-11
  - id: v10016
    title: 時計仕掛けのレイライン －黄昏時の境界線－
    rank: 2866
    grand: 7.15
    avg: 7.15
    max: 10.0
    min: 1.0
    num: 1549
    num_rank: 164
    gap: -1
    range: [48, 150, 460, 535, 204, 85, 40, 15, 9, 3, 0]
    updateAt: 2024-02-11

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
  - id: v16212
    title: 時計仕掛けのレイライン －朝霧に散る花－
    cover: 16h54m
    total: 15h28m
    fast: 12h
    normal: 18h32m
    slow: 30h
    updateAt: 2024-02-11
  - id: v11093
    title: 時計仕掛けのレイライン －残影の夜が明ける時－
    cover: 18h
    total: 17h49m
    fast: 13h42m
    normal: 18h46m
    slow: 31h30m
    updateAt: 2024-02-11
  - id: v10016
    title: 時計仕掛けのレイライン －黄昏時の境界線－
    cover: 17h
    total: 16h17m
    fast: 11h6m
    normal: 17h
    slow: 32h
    updateAt: 2024-02-11

# Event his, and the his number is the times of playhis.
eventList:
  title:
    cn: ['周目', '事件', '起始时间', '结束时间', '事件时长', '事件长支时长', '事件短支时长', '总时长']
    jp: ['周目', 'イベント', '開始時間', '終了時間', 'イベント期間', 'イベント長期間', 'イベント短期間', '合計期間']
    en: ['Times', 'Event', 'Start At', 'Finish At', 'Event Time', 'Long Branch Time', 'Short Branch Time', 'Grand Time']
  his:
    1:
    - ['1', 'ハイト Fin', '08:17:00', '10:55:00', '02:38:00', '10:55:00', '05:37:00', '10:55:00']
    - ['2', '二人 Fin', '13:46:00', '16:16:00', '02:30:00', '13:38:00', '05:21:00', '13:38:00']
    - ['3', 'Fin 2nd:D rank CG', '16:16:00', '24:55:00', '08:39:00', '19:47:00', '11:30:00', '19:47:00']
    - ['4', 'Fin 2nd:SSS rank CG:skip', '24:55:00', '25:48:00', '00:53:00', '06:11:00', '06:11:00', '06:11:00']
    - ['5', 'True Fin 3rd:SSS rank CG', '35:58:00', '43:33:00', '07:35:00', '23:56:00', '10:14:00', '23:56:00']
    - ['6', 'True Fin 3rd:SS rank CG:skip', '43:33:00', '43:45:00', '00:12:00', '16:33:00', '02:51:00', '16:33:00']
    - ['7', 'True Fin 3rd:S rank CG:skip', '43:45:00', '43:56:00', '00:11:00', '13:53:00', '00:25:00', '13:53:00']
    - ['8', 'True Fin 3rd:A rank CG:skip', '43:56:00', '44:10:00', '00:14:00', '13:42:00', '06:12:00', '13:42:00']
    - ['9', 'True Fin 3rd:E rank CG:skip', '44:27:00', '44:36:00', '00:09:00', '07:56:00', '00:12:00', '07:56:00']
    - ['10', 'True Fin 3rd:B rank CG:skip', '44:36:00', '44:52:00', '00:16:00', '07:59:00', '00:29:00', '07:59:00']
    - ['11', 'True Fin 3rd:C rank CG:skip', '44:52:00', '45:07:00', '00:15:00', '07:59:00', '00:16:00', '07:59:00']
    - ['12', 'True Fin 3rd:D rank CG:skip', '45:07:00', '45:17:00', '00:10:00', '07:57:00', '00:13:00', '07:57:00']
    - ['13', 'シグマ Fin', '45:17:00', '50:23:00', '05:06:00', '29:02:00', '15:20:00', '29:02:00']
    - ['14', 'IF:リト Fin', '50:23:00', '52:23:00', '02:00:00', '00:00:00', '00:00:00', '02:00:00']
    - ['15', 'Mini Story: 再びの夢物語', '52:23:00', '53:11:00', '00:48:00', '00:00:00', '00:00:00', '00:48:00']
    - ['16', 'Mini Story: 初めてのお料理チャレンジ', '53:11:00', '53:40:00', '00:29:00', '00:00:00', '00:00:00', '00:29:00']

eventGroupList:
  title:
    cn: ['索引', '事件组', '组事件时长', '相关事件组']
    jp: ['インデックス', 'イベントグループ', 'グループイベント期間', '関連イベントグループ']
    en: ['Index', 'Event Group', 'Group Time', 'Sub Event&Group']
  his:
    1:
    - ['1', '2nd:save', '11:08:00', '-']
    - ['2', '3rd:save', '10:27:00', '-']
    - ['3', '2nd:end', '14:40:00', '-']
    - ['4', '3rd:end', '09:02:00', '-']
    - ['5', '4th:end', '05:06:00', '-']
    - ['6', 'Another_Story', '03:17:00', '-']
    - ['7', 'Story_2nd', '25:48:00', '2nd:save、2nd:end']
    - ['8', 'Story_3rd', '19:29:00', '3rd:save、3rd:end']
    - ['9', 'Story_4th', '05:06:00', '4th:end']

# Game images(if we set dir we can get src with the format of that "dir + path" -> dir: /src and path: /cg-3.jpg || cg-3.jpg -> /src/cg-3.jpg)
images:
  dir: /images/galgame/時計仕掛けのレイライン
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
  - 第一、二部有两个评级CG，第三部有8个评级CG，第四部属于单线后日谈。
  routes:
  bug:
  slogan:
  short: 
  - date: 2024-02-11 22:53:00
    content: 跟动漫的魔法学院题材风格相似，基本上可以当番剧看。除了一开始，后面基本上眼球都离不开文本，太精彩了。某种意义上可以算神作，另一方面，这个游戏是从二手魔法恋爱日记的实体盒上找到的游戏推荐卡，后面感觉这波不亏。另外共通的BGM不少，尤其是回忆场景片段。
  long: 
  - date: 2024-02-11 22:50:00
    title: 一周目初体验
    content: 世界是魔法的世界。魔法则是实现特定目的的道具。魔法不是愿望的容器，它不能实现所有，但魔法可以带来无法想象的一切。开始可能有点无聊，但当设定得到深入了解后，那个夜与真相便是游戏觉醒的转折点。后面看得热血沸腾。这里特指氛围感。这一切都是无硝烟的斗争，而斗争源于解决方法的负面效果。但感觉核心还是没有理解自己到底是什么。也就是全部都是基于方案一不可行的条件下执行。而第一部就是方案一。这里的每个人都有自己的生存理由与始末。这令我十分感动。我看到的一切不是路人，而是有自己背景故事充实的人。这里的人都很善良，只是。。。有点难以描述，即使看完，内心依旧无限激动。每天晚上都会梦回到剧情，内心无限激动与惆怅。总体来说，moko傲娇赛高，莉塔风味的告白更是一大观赏点。两大绝世美人如果能够攻略就好了。好了，有钱后再补回游戏实体，包括PC和游戏机版本。
    tags: ['魔法', '学院', '人偶', '灵魂', '悬疑', '夜之魔法', '魔法阵', '灵魂', '魔女', '时停', '异世界', '同心异体', '同化', '拯救', '救赎', '独特画风', '战斗', '热血']

# Friend links to relative post.
links:
- { title: "[VNDB] 時計仕掛けのレイライン －朝霧に散る花－", link: "https://vndb.org/v16212", icon: "" }
- { title: "[VNDB] 時計仕掛けのレイライン －残影の夜が明ける時－", link: "https://vndb.org/v11093", icon: "" }
- { title: "[VNDB] 時計仕掛けのレイライン －黄昏時の境界線－", link: "https://vndb.org/v10016", icon: "" }
- { title: "[2DFan] 時計仕掛けのレイライン -陽炎に彷徨う魔女-", link: "https://2dfan.org/subjects/11245", icon: "" }
---

