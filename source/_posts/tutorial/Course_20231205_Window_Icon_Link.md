---
title: 【教程】Window - Icon link
date: 2023-10-29 18:10:00
description: vscode快捷键列表
categories:
- Course
- Vscode
tags:
- 教程
- course
- window
- icon
- link
---

## Right click menu
### Regist Path
- Single File: HKEY_CLASSES_ROOT > * > shell
- Directory: HKEY_CLASSES_ROOT > Directory > shell
- Current Directory: ...
### Icon Menu Item
- item: create app dir below shell dir
- icon: select app dir and create a value with extend string format. Set key as "Icon" and set data with app exe path
- item name: as above, but we only set default data with the info we want to see on menu
- exec: create "command" dir below app dir, then select this dir and set default data with "<app exe file path>" "%1"
### Basic Format Sample
```
VisualCode (default:open with directory, icon: ".../Code.exe")
 L command (default: ".../Code.exe" "%1")
```

