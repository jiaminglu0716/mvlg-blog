---
# Template Display Config(Use to judge the display status of post)
config:
  type: data
  format: yml 

# Blog Basic Information
title: {{ title }}
date: {{ date }}
index_img: 
banner_img: 
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

# Galgame Information
info:
  name:
    jp: 
    cn: 
    en: 
  company: 
  member:
    script:
    - name: 
      no: [1]
      primary: false
    voice:
    -  
    artist:
    - 
  release:
  - no: 1
    date:
    name:
    r18: true
    disk: true
    dl: true
    platform: window
    link: 
    branch: Tree
  links:
  - title: office
    link: 

# Classification
classification:
  series:
  - 

# Play game info record
playhis:
- no: 1
  times: 1
  version_no: 1
  status: all
  speed: normal
  desc: 


# score(n/10), range(0-10)
score:
  1:
    grand:
    bgm:
    character:
    story:
    cg:

3rdscore:
  vndb:
    id: 
    rank: 
    grand:
    avg:
    max:
    min:
    num:
    gap: 0
    range: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]


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
    total:
    fast:
    normal:
    slow:

# Event his, and the his number is the times of playhis.
eventList:
  title:
    cn: ['周目', '事件', '起始时间', '结束时间', '事件时长', '事件长支时长', '事件短支时长', '总时长']
  his:
    1:
    - ['-', '-', '-', '-', '-', '-', '-', '-']
    - ['-', '-', '-', '-', '-', '-', '-', '-']
    - ['-', '-', '-', '-', '-', '-', '-', '-']

eventGroupList:
  title:
    cn: ['索引', '事件组', '组事件时长', '相关事件组']
  his:
    1:
    - ['-', '-', '-', '-']
    - ['-', '-', '-', '-']
    - ['-', '-', '-', '-']

# Game images(if we set dir we can get src with the format of that "dir + path" -> dir: /src and path: /cg-3.jpg || cg-3.jpg -> /src/cg-3.jpg)
images:
  dir:  
  cover: 
  - src:
    alt: 
  play: 
  - src:
    alt: 
  cg: 
  - src:
    alt: 
  flowchart:
  - src:
    alt: 

# Game Review
review:
  tips:
  - 
  routes:
  - 
  bug:
  - 
  slogan:
  - 
  short: 
  long: 
---
