---
title: 【教程】Hexo - Create new page
date: 2023-10-28 21:56:00
categories:
- Default
tags:
- 教程
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
1. 模板创建(fluid -> layout): 局部组件于_partials，全局页面于 layout目录下。
2. 模板对外路由(fluid -> scripts -> generators -> pages.js)
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
3. 模板数据调用(site, page, theme): 一般而言，这里page的数据会有出入。官方默认的index、tags、archives可以获得分页后的全贴数据。如果是site的话只能获取全贴数据。
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
    数据调用
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

### 后记
目前只分析了部分源码，根据逻辑梳理与实机测试。目前卡在获取分页博客阶段，后续后空会继续分析，然后进行内容更新。目前想要实现的目标有两个：一是分页博客文章列表，二是文章过滤分页列表显示。