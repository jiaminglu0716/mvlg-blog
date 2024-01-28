---
# Template Display Config(Use to judge the display status of post)
config:
  # default is select default post template to display post content, and these data will no be displayed with spcial format.
  type: data
  format: yml 

# Blog Basic Information
title: ホワイトアルバム２
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
    - ['1', 'IC', '00:00:00', '13:22:00', '13:22:00', '00:00:00', '00:00:00', '13:22:00']
    - ['2', 'CC.小春 END', '23:32:00', '33:41:00', '10:09:00', '20:19:00', '10:12:00', '33:41:00']
    - ['3', 'CC.Normal END', '33:41:00', '34:22:00', '00:41:00', '10:51:00', '00:44:00', '24:13:00']
    - ['4', 'IC x2', '34:22:00', '35:14:00', '00:52:00', '00:00:00', '00:00:00', '00:52:00']
    - ['5', 'CC.千晶.Normal END', '35:14:00', '38:31:00', '03:17:00', '13:24:00', '06:43:00', '26:46:00']
    - ['6', 'CC.麻理 END', '38:31:00', '50:09:00', '11:38:00', '18:19:00', '13:24:00', '31:41:00']
    - ['7', 'CC.千晶 END', '50:09:00', '58:40:00', '08:31:00', '10:15:00', '10:15:00', '23:37:00']
    - ['8', 'IC x3', '58:40:00', '59:09:00', '00:29:00', '00:00:00', '00:00:00', '00:29:00']
    - ['9', 'CC.雪菜 END', '59:09:00', '68:32:00', '09:23:00', '14:18:00', '12:34:00', '27:40:00']
    - ['10', 'CODA.雪菜 TE', '70:29:00', '87:55:00', '17:26:00', '33:41:00', '19:23:00', '47:03:00']
    - ['11', 'CODA.かずさ TE', '87:55:00', '97:28:00', '09:33:00', '25:48:00', '11:30:00', '39:10:00']
    - ['12', 'CODA.浮气 END', '97:53:00', '106:17:00', '08:24:00', '25:04:00', '08:49:00', '38:26:00']
    - ['13', 'CODA.腰斩 END', '106:17:00', '106:30:00', '00:13:00', '16:53:00', '00:38:00', '30:15:00']
    - ['14', 'Novel.本篇.かずさ.雪が解け、そして雪が降るまで', '106:30:00', '107:42:00', '01:12:00', '00:00:00', '00:00:00', '01:12:00']
    - ['15', 'Novel.本篇.雪菜.歌を忘れたアイドル', '107:42:00', '108:29:00', '00:47:00', '00:00:00', '00:00:00', '00:47:00']
    - ['16', 'AS.雪菜.不戴共天 END', '108:29:00', '113:09:00', '04:40:00', '29:44:00', '13:29:00', '43:06:00']
    - ['17', 'AS.雪菜 END', '113:09:00', '114:27:00', '01:18:00', '34:59:00', '20:41:00', '48:21:00']
    - ['18', 'AS.かずさ END', '114:27:00', '115:53:00', '01:26:00', '27:14:00', '12:56:00', '40:36:00']
    - ['19', 'Voice.祭りの前~ふたりの二十四時間~', '115:53:00', '116:55:00', '01:02:00', '00:00:00', '00:00:00', '01:02:00']
    - ['20', 'Voice.祭りの日~舞台の下の物語~', '116:55:00', '117:46:00', '00:51:00', '00:00:00', '00:00:00', '00:51:00']
    - ['21', 'Voice.一泊二日の凱旋', '117:46:00', '118:23:00', '00:37:00', '00:00:00', '00:00:00', '00:37:00']
    - ['22', 'Voice.再会と贖罪のニューイヤー', '118:23:00', '118:46:00', '00:23:00', '00:00:00', '00:00:00', '00:23:00']
    - ['23', 'Voice.2016年の大晦日(みそか)', '118:46:00', '119:13:00', '00:27:00', '00:00:00', '00:00:00', '00:27:00']
    - ['24', 'Voice.幸せの日~ベッドの上の物語~', '119:13:00', '119:53:00', '00:40:00', '00:00:00', '00:00:00', '00:40:00']
    - ['25', 'Novel.雪菜.彼の神様、あいつの救世主', '119:53:00', '119:57:00', '00:04:00', '00:00:00', '00:00:00', '00:04:00']
    - ['26', 'Novel.雪菜.祭りの後~雪菜の三十分~', '119:57:00', '120:10:00', '00:13:00', '00:00:00', '00:00:00', '00:13:00']
    - ['27', 'Novel.春希.Twinkle Snow~夢想~', '120:10:00', '120:57:00', '00:47:00', '00:00:00', '00:00:00', '00:47:00']
    - ['28', 'Novel.かずさ.届かない恋、届いた', '120:57:00', '121:11:00', '00:14:00', '00:00:00', '00:00:00', '00:14:00']
    - ['29', 'Novel.雪菜.雪菜姫の受難と大臣の悪巧み', '121:11:00', '121:28:00', '00:17:00', '00:00:00', '00:00:00', '00:17:00']
    - ['30', 'Novel.小春.台風一過の小春日和', '121:28:00', '121:38:00', '00:10:00', '00:00:00', '00:00:00', '00:10:00']
    - ['31', 'Novel.かずさ.もう、ホワイトアルバムの季節じゃない', '121:38:00', '121:52:00', '00:14:00', '00:00:00', '00:00:00', '00:14:00']

eventGroupList:
  title:
    cn: ['索引', '事件组', '组事件时长', '相关事件组']
    jp: ['インデックス', 'イベントグループ', 'グループイベント期間', '関連イベントグループ']
    en: ['Index', 'Event Group', 'Group Time', 'Sub Event&Group']
  his:
    1:
    - ['1', 'DigitalNovel', '03:58:00', '-']
    - ['2', 'VoiceDrama', '04:00:00', '-']
    - ['3', 'AfterStory(AS)', '07:24:00', '-']
    - ['4', 'Savedata', '12:32:00', '-']
    - ['5', 'END:IC', '13:22:00', '-']
    - ['6', 'END:CC', '43:39:00', '-']
    - ['7', 'END:CODA', '35:36:00', '-']
    - ['8', 'IC', '14:43:00', '-']
    - ['9', 'CC', '53:49:00', '-']
    - ['10', 'CODA', '37:58:00', '-']
    - ['11', 'ホワイトアルバム２', '106:30:00', 'IC、CC、CODA']
    - ['12', 'ホワイトアルバム２SpecialContent', '15:22:00', 'DigitalNovel、VoiceDrama、AfterStory(AS)']

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
  - src: cg-2.jpg
    alt: 
  - src: cg-3.jpg
    alt: 
  - src: cg-4.jpg
    alt: 
  - src: cg-5.jpg
    alt: 
  - src: cg-6.jpg
    alt: 
  - src: cg-7.jpg
    alt: 
  - src: cg-8.jpg
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
  - date: 2024-01-28 21:19:48
    content: 整体来说就是慢性胃药。药效没有动漫版本的IC急性胃疼，但是看的过程就是胃疼。对应的东T没有想象的虐，但是过程中胃部有不少疼痛麻痹症状发生。结局主体偏向是雪菜。个人属于雪菜党，主要还是这TV版本不当人，虐菜太狠。还有就是雪菜也是乌丸认定的亲女儿，相对的在人物塑造方面较为饱满，至于东马，那个只能用大明星视角看。游戏本体的话可以从行为上分析雪菜，分析不出来的部分可以借助小说补全的细节来分析。有些人是因为小说而变成雪菜党。个人雪菜党的原因是首先是TV版本最喜欢的角色，其次是这人物在游戏中的性格特性有所共鸣，最后就是她的爱很纯粹，遇上春希这种渣男把雪菜折磨成另一个样子，但自始自终都是一致的心意。不求什么，只要在身边就好。显得爱很卑微。另一方面是东马，爱却不表达，IC猛烈放手，CODA却反插一脚。IC可以说是竞争，但CODA的雪菜都是关系确立的，这显然成为另一个风暴漩涡，拆散雪菜。结尾来说，浮气线很cool，但最终还是看不共戴天。东马的抛弃让春希不成样，甚至抛弃雪菜，无法面对现实，这里的抛弃是伦理上无法接受这种现实。后面还是看开，加上雪菜自始至终的爱，最后彻底放下东马。至于东T就是无视身边的一切看法，私奔去欧洲发展。但是。。。最终结果就是有一方愿意放下手。春希有点渣，但顾及两方情感幸福，时不时在嘴上进行言语妥协，导致最终始终无法脱钩的恋爱三角。这部目前是心目的至高神之一。准备看看白学1的社会胃疼剧情。

# Friend links to relative post.
links:
- { title: "VNDB", link: "https://vndb.org/v7771", icon: "" }
---

