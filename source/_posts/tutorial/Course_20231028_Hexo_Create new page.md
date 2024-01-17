---
title: 【教程】Hexo - Create new page
date: 2023-10-28 21:56:00
categories:
- Course
- Hexo
tags:
- 教程
- course
- hexo
---

### 创建页面方式
1. 基于模板(scaffolds)创建 -> 使用者
```bat
hexo new <layout> <title>
```
2. 基于主题路由创建 -> 主题开发者

### 主题页面创建解析
#### 这里以fluid为例子
- 模板创建(fluid -> layout): 局部组件于_partials，全局页面于 layout目录下。
- 模板对外路由(fluid -> scripts -> generators -> pages.js)

```js
/**
 * 页面路由注册
  * - page 路由地址
  * - data 传递数据
  * - layout 主题布局模板
  */
hexo.extend.generator.register('_test', function(locals) {
  if (this.theme.config.pageTest.enable !== false) {
    return {
      path  : 'test/index.html', 
      data  : locals.theme,
      layout: 'test'
    };
  }
});
```

- 模板数据调用(site, page, theme): 一般而言，这里page的数据会有出入。官方默认的index、tags、archives可以获得分页后的全贴数据。如果是site的话只能获取全贴数据。

```yml
pageTest:
  enable: true
  banner_img: /img/cover-banner.png
  banner_img_height: 60
  banner_mask_alpha: 0.3
  title: Test 测试

navbar:
  menu:
    - { key: "test", link: "/test/", icon: "iconfont icon-books" }
```

- 数据调用

```ejs
<%
page.layout = "test"
page.title = theme.pageTest.title || __('test.title')
if (theme.index.slogan.enable) {
page.subtitle = theme.index.slogan.text || config.subtitle || ''
}
page.banner_img = theme.index.banner_img
page.banner_img_height = theme.index.banner_img_height
page.banner_mask_alpha = theme.index.banner_mask_alpha
%>

<h1>HHH</h1>
<%= theme.pageTest.title %>
```
#### 分页模板页面

- 引入hexo分页组件

```js
const pagination = require('hexo-pagination');
```

- 调用分页模块

```js
hexo.extend.generator.register('_test', function(locals) {
  return pagination('test/index.html', locals.posts, {
    perPage: 10,
    // 模板布局页面
    layout: 'test',
    // 模板数据，底层调用 Object.assign 进行数据合并更新，内部调用变量是 page
    data: {}
  });
});
```

- ejs 添加分页组件

```ejs
<%- partial('_partials/paginator') %>
```

#### ejs 模板数据

- 路由数据

```js
hexo.extend.generator.register('_test', function(locals) {
  return {
    path  : 'test/index.html', 
    data  : {
      txt: 'test txt'
    },
    layout: 'test'
  };
});
```

- ejs调用模板 

```ejs
<%= page.txt %>
```


### Fluid主题页面编程
#### CSS内部样式
1. source -> css -> main.styl 是入口主方法，内部多文件夹根据页面进行分类，然后使用统一函数对外进行暴露。
2. 模仿即可，在_pages内新建文件夹 _<layout>，然后写 styl 格式的css即可。

_pages.styl
```styl
@import "_base/*"
@import "_index/*"
@import "_post/*"
@import "_archive/*"
@import "_about/*"
@import "_category/*"
@import "_tag/*"
@import "_links/*"
```

_main.styl
```styl
@import "_variables/base"
for $inject_variable in hexo-config("injects.variable")
    @import $inject_variable;

@import "_functions/base"

@import "_mixins/base"
for $inject_mixin in hexo-config("injects.mixin")
    @import $inject_mixin;

@import "_pages/pages"

for $inject_style in hexo-config("injects.style")
    @import $inject_style;

```
#### 全局模板注入
参考路径: fluid -> layout -> _partials -> css.ejs
```ejs
<!-- css函数库引入 -->
<%- css_ex(theme.static_prefix.bootstrap, 'css/bootstrap.min.css') %>

<% var css_snippets = deduplicate(page.css_snippets) %>
<% for (var idx = 0; idx < css_snippets.length; idx++) { %>
  <%- css_snippets[idx] %>
<% } %>
<% page.css_snippets = [] %>

<!-- 主题依赖的图标库，不要自行修改 -->
<!-- Do not modify the link that theme dependent icons -->
<%- css('//at.alicdn.com/t/font_1749284_hj8rtnfg7um.css') %>

<%- css(theme.static_prefix.iconfont || theme.iconfont) %>

<%- css_ex(theme.static_prefix.internal_css, 'main.css') %>

<% if (theme.code.highlight.enable) { %>
  <%- css_ex(theme.static_prefix.internal_css, 'highlight.css', 'id="highlight-css"') %>
  <% if (theme.dark_mode.enable) { %>
    <%- css_ex(theme.static_prefix.internal_css, 'highlight-dark.css', 'id="highlight-css-dark"') %>
  <% } %>
<% } %>

<% if (theme.custom_css) { %>
  <%- css(theme.custom_css) %>
<% } %><!-- css函数库引入 -->
<%- css_ex(theme.static_prefix.bootstrap, 'css/bootstrap.min.css') %>

<% var css_snippets = deduplicate(page.css_snippets) %>
<% for (var idx = 0; idx < css_snippets.length; idx++) { %>
  <%- css_snippets[idx] %>
<% } %>
<% page.css_snippets = [] %>

<!-- 主题依赖的图标库，不要自行修改 -->
<!-- Do not modify the link that theme dependent icons -->
<%- css('//at.alicdn.com/t/font_1749284_hj8rtnfg7um.css') %>

<%- css(theme.static_prefix.iconfont || theme.iconfont) %>

<%- css_ex(theme.static_prefix.internal_css, 'main.css') %>

<% if (theme.code.highlight.enable) { %>
  <%- css_ex(theme.static_prefix.internal_css, 'highlight.css', 'id="highlight-css"') %>
  <% if (theme.dark_mode.enable) { %>
    <%- css_ex(theme.static_prefix.internal_css, 'highlight-dark.css', 'id="highlight-css-dark"') %>
  <% } %>
<% } %>

<% if (theme.custom_css) { %>
  <%- css(theme.custom_css) %>
<% } %>
```
ejs注入方法来源参考路径: fluid -> scripts -> helpers -> url.js
```js
/* global hexo */

'use strict';

const urlJoin = require('../utils/url-join');

hexo.extend.helper.register('css_ex', function(base, relative, ex = '') {
  return `<link ${ex} rel="stylesheet" href="${this.url_for(urlJoin(base, relative))}" />`;
});

hexo.extend.helper.register('js_ex', function(base, relative, ex = '') {
  return `<script ${ex} src="${this.url_for(urlJoin(base, relative))}" ></script>`;
});

hexo.extend.helper.register('url_join', function(base, relative) {
  return this.url_for(urlJoin(base, relative));
});

```
#### js脚本模板事件绑定

```js

```




### 后记
目前只分析了部分源码，根据逻辑梳理与实机测试。目前卡在获取分页博客阶段，后续后空会继续分析，然后进行内容更新。目前想要实现的目标有两个：一是分页博客文章列表，二是文章过滤分页列表显示。

---

目前已经尝试引入vue进行混合式开发，再搭配DTO设计概念实现基本的数据信息检索。