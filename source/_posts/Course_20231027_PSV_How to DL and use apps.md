---
title: 【教程】PSV使用文档
categories:
- Gamer
- Portable
- PSV
tags:
- 教程
- psv
- 掌机
- 工具
- 下载
---


## 前言
这里将为您介绍如何使用各种合理有效的工具对PSV的应用进行下载与安装。

方法列表
--
|No.|Method|device|
|---|---|---|
|1|黑商店 (整合下载)|PS Vita|
|2|NPS (整合下载)|Computer|
|3|TSV文件 (pkg格式不含解码)|Computer|
|4|mai版本游戏 (跑跑、翼风、老玩家.etc)|Computer|
|5|VPK【PSV安装包格式】(跑跑、翼风、老玩家.etc)|Computer|

温馨提示
--
#### 游戏
1. 如果是直接使用TSV文件的话，则需要 pkg2zip.exe 进行文件解码。
![Prime Parser File - pkg2zip.exe.PNG](https://imgconvert.csdnimg.cn/aHR0cHM6Ly91cGxvYWQtaW1hZ2VzLmppYW5zaHUuaW8vdXBsb2FkX2ltYWdlcy8xOTM1NjY0NC1lZjFhYmQyZGJjZDM2MDdiLlBORw?x-oss-process=image/format,png)
![File Parse Result.PNG](https://imgconvert.csdnimg.cn/aHR0cHM6Ly91cGxvYWQtaW1hZ2VzLmppYW5zaHUuaW8vdXBsb2FkX2ltYWdlcy8xOTM1NjY0NC01NTU1N2IwMGE5MTdmZmVkLlBORw?x-oss-process=image/format,png)
![Upload Game File to PS Vita.PNG](https://imgconvert.csdnimg.cn/aHR0cHM6Ly91cGxvYWQtaW1hZ2VzLmppYW5zaHUuaW8vdXBsb2FkX2ltYWdlcy8xOTM1NjY0NC0wNDc0NjIxM2UyNTM0MWRkLlBORw?x-oss-process=image/format,png)
2. NPS 下载游戏很容易中断或者下载失败或者点击继续无反应等等，但总体功能强大。
3. 想方便的话直接黑商店，网速不好则听天由命。（《千之涛刃.桃花染的皇姬》这个就将近3天才下载完）
4. 黑商店 和 NPS 的网速都是不稳定的，时快时慢，平时经常也就十几k而已。
5. 这里下载的游戏基本属于 nnd 破解的游戏，可连接网络。
6. mai 游戏不能联网，所以这个需要自行寻找并下载。
7. mai 游戏打开游戏文件夹时，部分文件或文件夹会带有mai的文字。

#### 下载 & 解码
8. 使用迅雷下载可以开会员。这里是资源充足或者有会员，所以速度基本是几m左右及以上（具体看自家套餐，以及资源的下载量）
![Download Game Case 1.PNG](https://imgconvert.csdnimg.cn/aHR0cHM6Ly91cGxvYWQtaW1hZ2VzLmppYW5zaHUuaW8vdXBsb2FkX2ltYWdlcy8xOTM1NjY0NC0xNWZmY2FkYmM3OTAyYzY5LlBORw?x-oss-process=image/format,png)
![Download Case 3.PNG](https://imgconvert.csdnimg.cn/aHR0cHM6Ly91cGxvYWQtaW1hZ2VzLmppYW5zaHUuaW8vdXBsb2FkX2ltYWdlcy8xOTM1NjY0NC1kMjAzMjAxMDU2MGI3NjUwLlBORw?x-oss-process=image/format,png)
![Download Game Case 2 - BIGINI.PNG](https://imgconvert.csdnimg.cn/aHR0cHM6Ly91cGxvYWQtaW1hZ2VzLmppYW5zaHUuaW8vdXBsb2FkX2ltYWdlcy8xOTM1NjY0NC04OTQ1OTI0NjFlYWQ2NmM5LlBORw?x-oss-process=image/format,png)
![Download Game Case 3.PNG](https://imgconvert.csdnimg.cn/aHR0cHM6Ly91cGxvYWQtaW1hZ2VzLmppYW5zaHUuaW8vdXBsb2FkX2ltYWdlcy8xOTM1NjY0NC03YjVhZjA3ZTY5MmY1MjlhLlBORw?x-oss-process=image/format,png)

9. PSV 的应用内容基本需要 PKG 解码。
10. 存储空间较小的应用，比如主题。则可以在黑商店下载，速度也不错。
#### 掌机
11. PSV 数据线接上电脑后，在 PSV 中打开 VitaShell，并按下 select 键。此刻便可以进行文件传输。

| 类型 | 游戏目录 | DLC目录 |
| --- | --- | --- |
| nnd/vpk | /app | /addcount |
| mai | /mai | /addcount_mai |

	1. / 为根目录
	2. 无论游戏的类型是哪种，都需要解压后，再进行游戏本体复制。
	3. mai 是通过工具进行某种操作后，再移动至 app 或 addcount 目录中。因此操作时所需容量可能是游戏本体的两倍及以上。
	4. vpk可以直接使用vita工具箱安装，或者改后缀为rar再解压到/app中

12. 本体复制到里面后，可以使用 VitaShell 和 VITA 工具箱 进行气泡刷新操作。成功后会自动显示该游戏图标。如果进度条在最后几十左右卡顿的话，很有可能是失败。原因可能主要是游戏本体不完整，或者是该本体类型是 mai，需要 MaiDumpTool 工具进行安装。

| 工具 | 操作 | 
|---|---|
| VitaShell | 三角按键  -> 刷新桌面气泡 |
|VITA Tool Box | 刷新游戏气泡 |
#### 主题
13. 破解版的主题不能直接应用，原因是开机就恢复原来的原生主题。
14. 主题的解决方案。登陆 PSN，下载一个免费的主题，应用该Theme并重启。现在再使用破解的主题就可以了。

#### PSN
15. PSN 无法登陆可能是版本问题，去设置的伪装里面查看并更改到相应的伪装系统版本。

#### 图片截图
16. 图片数据库的位置是![图片数据库](https://img-blog.csdnimg.cn/fd8361f0063049c38197a33834eaa0e0.jpg)
17. 里面的内容是
![图片数据库内容](https://img-blog.csdnimg.cn/0f49dba36a7d4210bbd98a5aff5231d9.jpg)
18.1. 可以使用代码的sqlite3进行修改与调整，这里以 python 为例子。
```python
import sqlite3


'''
PSV图片数据库，用于分类管理
ux0:/mms/Photo/AVContent.db
'''

'''
下面程序用于离散的图片整合为以特定软件为文件夹分类的图片
'''

conn = sqlite3.connect('AVContent.db')
cur = conn.cursor()

# cur.execute("select name from sqlite_master where type='table' order by name")
# print(cur.fetchall())

cur.execute("select * from tbl_VPContent")
reslist = cur.fetchall()

results = []
for res in reslist:
    results.append({
        'Imgpath': res[31],
        'Series': res[33]
    })
    
# print(results, len(results))

import pandas as pd

df = pd.DataFrame(data=results)
df.fillna('None', inplace=True)

gdfs = df.groupby(df.Series)
for gdf in gdfs:
    # 软件名称
    soft = gdf[0]
    # 对应软件的截图数据集
    sdf = gdf[1]
    print(soft, len(sdf))
```
![图片数据库采集与分类结果展示图](https://img-blog.csdnimg.cn/69d11b0ee450423f968014f67f4024ca.png)
18.2. 完整版的图片转换
```python
import os
import sqlite3
import shutil
import pandas as pd

class PSVSQLiteService:
	def __init__(self, PSVDir, savepath='./'):
		self.root = PSVDir
		self.savepath = savepath
		self.savepicpath = os.path.join(self.savepath, 'picture').replace('\\', '/')
		self.photodf = False
		self.picpath = os.path.join(self.root, 'picture').replace('\\', '/')
		self.photodb = os.path.join(self.root, 'mms/Photo/AVContent.db')

	def getPhotoDBInf(self):
		conn = sqlite3.connect(self.photodb)
		cur = conn.cursor()

		# cur.execute("select name from sqlite_master where type='table' order by name")
		# print(cur.fetchall())

		cur.execute("select * from tbl_VPContent")
		return cur.fetchall() 

	def getPhotoDBByDF(self):
		reslist = self.getPhotoDBInf()

		# class PSVImgRecordEntity:
		# 	def __init__(self, imgpath, series, type):
		# 		self.imgpath = imgpath
		# 		self.series = series
		# 		self.type = type

		results = []
		for res in reslist:
			imgTrackList = res[31].split('/')
			imgpath = '/'.join([self.picpath]+imgTrackList[1:])
			results.append({
				'imgpath': imgpath,
				'series': res[33],
				'type': imgTrackList[1]
			})
		
		self.photodf = pd.DataFrame(data=results)
		return self.photodf

	# 仅对一组特征进行分类与文件夹创建
	def photoSaverByG1(self, GroupCol='series', type='SCREENSHOT'):
		savepath = os.path.join(self.savepicpath, type).replace('\\', '/')
		curdir = os.curdir
		df = self.photodf
		df = df[df.type == type]
		gdfs = df.groupby(df[GroupCol])
		failInf = []

		if not os.path.exists(savepath): os.makedirs(savepath)
		os.chdir(savepath)
		for gdf in gdfs:
			# 软件名称, 截图DF数据集
			soft, sdf = gdf
			soft = soft.replace('/', ' ').replace(':', '-').replace('\n', ' ')
			if not os.path.exists(soft): os.mkdir(soft)
			os.chdir(soft)
			for img in sdf['imgpath'].to_list():
				imgname = img[img.rfind('/')+1:]
				try:
					shutil.copyfile(img, imgname)
				except Exception:
					failInf.append(img)
			os.chdir('../')
		os.chdir(curdir)

		return failInf
		
# 图片提取目录的PSV文件夹, 图片存储目录的文件夹，存储方式按PSV的基本构成存储。
PSS = PSVSQLiteService(f'I:\PSV Card\PicDir', './')
PSS.getPhotoDBByDF()
PSS.photoSaverByG1()
```
![对照图](https://img-blog.csdnimg.cn/2c2df0494f1849c2a9574af7def69469.png)![小插曲](https://img-blog.csdnimg.cn/135c0b0abf5d42d6a425d5d5d6b2c966.png)



#### 主题制作（基本介绍）
19. 主题的文件夹内容展示
![主题文件夹内容](https://img-blog.csdnimg.cn/a4bf0346bae7450ba2c22d1a4b47d3ec.png)
![主题文件夹可展示部分内容](https://img-blog.csdnimg.cn/3240c01db27a483195a40c6371407883.png)

20. 主题核心配置文件（也就是使用哪些图片和音乐）
![配置文件图1](https://img-blog.csdnimg.cn/a730dddef4714960aaeea25ba90b392b.png)
![配置文件图2](https://img-blog.csdnimg.cn/4df01dcbe5574fbd882cd755cd97ff53.png)
![配置文件图3](https://img-blog.csdnimg.cn/eca4ca7b40234f7d9bcd456a9fa9dc4f.png)
![配置文件图4](https://img-blog.csdnimg.cn/ae68d9004a014ec8b529d5533c4966a7.png)
21. PSV主题文件夹获取（ux0:/theme的主题都是未应用的，也就是加密文件，而应用后的解密文件在 ur0:/shell/theme中，大概范围是没错的）
22. 文件的局部设置如下，具体的图片调整可以去贴吧翻阅。
![局部信息](https://img-blog.csdnimg.cn/b20ff7b15d4f4dc38e9228d4db0aedb5.png)
23. 应用的话就下载对应的vpk以及放在自制主题的文件夹中。





 



内容补充
--
24. 同账号条件下，两台psv(破解 or 正版)可以相互间读取内存卡的内容。[至于正版psv中，账号未拥有的数字版是否正常运行则没试过]
25. vitatools 2破解的掌机可以直接应用黑商店的主题。
26. 卡套破解教程[原装卡插入 -> 格式化原装卡 -> 备份格式化后的文件 -> 然后复制到tf卡中(tf卡需要 Disk Genius  转换为 USB-FDD 启动模式，然后exfat格式化，内存单元自己选，一般选择16k或32k。) -> 打开vita的工具箱，读取成功则结束，不成功，或成为副卡则，选工具箱的 tf -> ux0 ]
27. PSN的登陆问题:
- 账号问题: 二步验证(去官网绑定，以及设备码生成)
- 机子问题: 安装 ITLS-ENSO 3.2， 默认选第一个安装全部。具体根据自身需要进行选择。链接: https://pan.baidu.com/wap/init?surl=FTm794JHpKfRGIbR9iduzw&cuid=B1ACB998B07256E60EAC79AC59FA39AE|VD5QTVS53&cuid_galaxy2=B1ACB998B07256E60EAC79AC59FA39AE|VD5QTVS53&cuid_gid=&timestamp=1662518792572&_client_version=12.26.1.0
提取码: pptx
- 其余未知
28. 黑商店目录下面有对应的tsv文件。
29. mai游戏建议养成保存习惯，据我所知，长时间不存档会无法存档，导致前功尽弃。nnd则不会，但dlc没mai整合多。具体还得看游戏以及个人想法进行衡量。
30. 投屏: 支持软件系统:[反串流插件，录制软件]、不支持软件系统:[psvtv]。
31. psvtv: tv版psv，马赛克有点大。3.60破解支持硬盘读取，而不仅仅是tf卡马甲。

TSV文件下载
--
32. TSV文件的大概样子
![TSV Exhibition.PNG](https://imgconvert.csdnimg.cn/aHR0cHM6Ly91cGxvYWQtaW1hZ2VzLmppYW5zaHUuaW8vdXBsb2FkX2ltYWdlcy8xOTM1NjY0NC1jNjJjYWY0ZmY2ZjgwNDg4LlBORw?x-oss-process=image/format,png)
![Excel后的Tsv.PNG](https://imgconvert.csdnimg.cn/aHR0cHM6Ly91cGxvYWQtaW1hZ2VzLmppYW5zaHUuaW8vdXBsb2FkX2ltYWdlcy8xOTM1NjY0NC1mM2NlNWJhMjFlY2IzZWEwLlBORw?x-oss-process=image/format,png)

33. 下载的PKG地址
![PKG Link.PNG](https://imgconvert.csdnimg.cn/aHR0cHM6Ly91cGxvYWQtaW1hZ2VzLmppYW5zaHUuaW8vdXBsb2FkX2ltYWdlcy8xOTM1NjY0NC1hNzhjYTNkODdmMDljYjc5LlBORw?x-oss-process=image/format,png)

34. 解码的zRIF
![PKG zRIF.PNG](https://imgconvert.csdnimg.cn/aHR0cHM6Ly91cGxvYWQtaW1hZ2VzLmppYW5zaHUuaW8vdXBsb2FkX2ltYWdlcy8xOTM1NjY0NC1jYjExN2IwOTJjYjA0ZmVkLlBORw?x-oss-process=image/format,png)

35. window的bat执行pkg2zip.exe解码器
```bat
@echo off
pkg2zip.exe pkg文件路径 zRIF解码的密钥
pause
```

py的工具制作
--
36. TSV 转 Excel
```python
from openpyxl import Workbook
from sys import argv

name = argv[1]
inFile = f'{name}.tsv'
outFile = f'{name}.xlsx'

wb = Workbook()
st = wb.active

with open(inFile, 'r', encoding='utf8') as fp:
    row = 0
    while True:
        temp = fp.readline()
        if not temp:
            break
        items = temp.split('\t')
        row += 1
        for (key, item) in enumerate(items):
            st.cell(row, key+1).value = item

wb.save(outFile)
```
37. 自动查找 TSV 文件的 zRIF密钥
```python
from os import system
from os.path import exists
from os.path import join
import sys

# open file stream
# gp = open(gFile, 'r', encoding='utf8')

# find zRIF in data file: link[4], zRIF[5] != MISSING
def get_zRIF(g_file):
    fp = open(dbFile, 'r', encoding='utf8')
    temp = True
    res = False

    while temp:
        temp = fp.readline()
        arr = temp.split('\t')
        if arr[3].rfind(g_file.strip()) != -1 and \
           arr[4] != 'Missing':
            res = arr[4].strip()

    fp.close()
    return res

# parse one pkg
def parser(f_path):
    g_name = gameName(f_path)
    zRIF = get_zRIF(g_name)
    # print(g_name, '\n', zRIF)
    pkg2zip(g_name, zRIF)
    

def pkg2zip(f_path, zRIF):
    if zRIF:
        system(f'pkg2zip.exe {f_path.strip()} {zRIF.strip()}')
        print(f'已经执行： {g_name}')
    else:
        print(f'执行失败： {g_name}')

def gameName(f_path):
    return f_path[f_path.rfind('/') + 1:]


def finds(game_id):
    fp = open(dbFile, 'r', encoding='utf8')
    temp = True
    res = []

    while temp:
        temp = fp.readline()
        arr = temp.split('\t')

        if arr[0] == game_id.strip() and \
           arr[3] != 'MISSING' and \
           arr[4] != 'MISSING':
            res.append([arr[3], arr[4]])

    fp.close()
    return res

def mode(num=0):
	if num == 0:
		return './PSV_GAMES_SC.tsv'
	elif num == 1:
		return './titles_psvdlcs.tsv'
	else:
		return './PSV_GAMES_SC.tsv'


if __name__ == '__main__':
    # gFile = './PSV_GAMES_PARSE_LIST.txt'
    # games = gp.readlines()
    	
    # for item in games:
    #     if item.startswith('#'):
    #         continue
    #     parser(item.strip())

    # gp.close()

    # load data file
    dbFile = mode(sys.argv[1])
    g_id = sys.argv[2]
    path = './'
    res = finds(g_id)

    if res:
	    for item in res:
	        g_name = gameName(item[0])
	        if exists(g_name):
	            pkg2zip(join(path, g_name), item[1])
	        else:
	        	print('Please download relative file before run this parser of python!')
    else:
        print('Relative file is missing in database. Please upload the latest data file.')
```
```DOS.bat
@echo off
: python	PkgsParserTsv.py 	pkg type num	pkg id num
: 0: game soft	1: game dlc soft
python PkgsParserTsv.py 0 PCSG00905
pause
```
![The file parser for PKG format.PNG](https://imgconvert.csdnimg.cn/aHR0cHM6Ly91cGxvYWQtaW1hZ2VzLmppYW5zaHUuaW8vdXBsb2FkX2ltYWdlcy8xOTM1NjY0NC1mN2Q4MjY4MDg3NjQ2NTFjLlBORw?x-oss-process=image/format,png)
![Dominant Parser Process.PNG](https://imgconvert.csdnimg.cn/aHR0cHM6Ly91cGxvYWQtaW1hZ2VzLmppYW5zaHUuaW8vdXBsb2FkX2ltYWdlcy8xOTM1NjY0NC04ZDM2ZDU4YWNmZTk2OTQ1LlBORw?x-oss-process=image/format,png) 
下载地址
--
[PSV 工具下载地址](https://download.csdn.net/download/weixin_43048639/12733344).

结束语
--
～～今を生きている～～
不足之处，敬请诸君提点，谢~
