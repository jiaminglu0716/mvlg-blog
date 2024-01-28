---
# Template Display Config(Use to judge the display status of post)
config:
  # default is select default post template to display post content, and these data will no be displayed with spcial format.
  type: data
  format: yml 

# Blog Basic Information
title: ホワイトアルバム２
date: 
description: Galgame攻略感想与评价 >>> 

# Config Setting for 3rd-plugins
mermaid: true

# Archive for blog
categories:
- Gamer
- Galgame
- Review
# Tags for blog
tags:
- galgame
- acg
- ADV
- review
- 评分
- 感想
- 统计

# Element
- 恋爱
- 白学家
- 三角
- 胃药
- 心理描写
- 细节
- 写实
- 校园
- 职场
- 成长
- 坚强
- 柔弱

# Character
- 东马
- 雪莱
- 小春
- 千晶
- 麻理

# Staff
- 丸户史明
- 中村毅

# Chapter
- IC
- CC
- Coda
- DigitalNovel
- VoiceDrama

# Galgame Information
info:
  name:
    jp: ホワイトアルバム２
    cn: 白色相簿2
    en: WHITE ALBUM2
  shortname:
  - WA2
  developer: ['Leaf', 'AQUAPLUS', 'STING']
  publishers:
    jp: ['Leaf', 'AQUAPLUS']
  staff:
    script:
    - name: 丸户史明
      no: [1]
      primary: true
      desc: 脚本の主役担当者
    voice:
    - character: 
      name: 
      no: [1]
      primary: true 
    artist:
    - name: 中村毅
      no: [1]
      primary: true
      desc: 主役は原画
    - name: 桂憲一郎
      no: [1]
      primary: false
      desc: 主役はCCの原画サポート
    - name: 柳沢まさひで
      no: [1]
      primary: false
      desc: 主役はCCの原画サポート
  release:
  - no: 1
    date: 2018-02-14
    name: WHITE ALBUM2 EXTENDED EDITION
    r18: true
    disk: true
    dl: true
    platform: window
    link: 
    branch: Tree
    desc: Main Story(IC + CC + CODA) + Special Content(Mini Story + Digital Novel + Voice Drama)
  links:
  - title: IC公式
    link: https://leaf.aquaplus.jp/product/wa2ic/
  - title: CC公式
    link: https://leaf.aquaplus.jp/product/wa2cc
  - title: Extended Edition公式
    link: https://leaf.aquaplus.jp/product/wa2cc/product.html#wa2ex
  - title: Anime公式
    link: http://whitealbum2.jp/

# Classification
classification:
  series:
  - WHITE ALBUM

# Play game info record
playhis:
- no: 1
  times: 1
  version_no: 1
  status: all
  speed: normal
  desc: 本体と、Special Contentと、ボイスドラマと、ナベルビン


# score(n/10), range(10-1)
score:
  1:
    grand: 9.5
    bgm: 9.4
    story: 9.5
    character: 9.3
    cg: 9.0

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
    granddays:
    playdays:
    startat:
    finishat:
    piecenum:
    minpiece:
    maxpiece:
    grandtime:

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
    - ['-', '-', '-', '-', '-', '-', '-', '-']
    - ['-', '-', '-', '-', '-', '-', '-', '-']
    - ['-', '-', '-', '-', '-', '-', '-', '-']

eventGroupList:
  title:
    cn: ['索引', '事件组', '组事件时长', '相关事件组']
    jp: ['インデックス', 'イベントグループ', 'グループイベント期間', '関連イベントグループ']
    en: ['Index', 'Event Group', 'Group Time', 'Sub Event&Group']
  his:
    1:
    - ['-', '-', '-', '-']
    - ['-', '-', '-', '-']
    - ['-', '-', '-', '-']

# Game images(if we set dir we can get src with the format of that "dir + path" -> dir: /src and path: /cg-3.jpg || cg-3.jpg -> /src/cg-3.jpg)
images:
  dir: /images/galgame/ホワイトアルバム２
  cover: 
  - src: cover.jpg
    alt: Game Cover
  play:
  cg: 
  - src: cg-1.jpg
    alt: 
  flowchart:

# Game Review
review:
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
  - 
  short: 
  - date:
    content: 
  long: 
  - date:
    content: 

# Friend links to relative post.
links:
- { title: "", link: "", icon: "" }
---

