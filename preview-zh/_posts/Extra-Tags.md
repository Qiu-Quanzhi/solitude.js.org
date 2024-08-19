---
title: 主题外置：外挂标签
categories:
  - 教程
tags:
  - 额外标签
cover: 'https://s3.qjqq.cn/47/66c2aecd02cea.png!color'
abbrlink: 6f2c8cc8
date: 2024-07-30 13:34:49
update: 2024-07-30 13:34:49
---

## 安装

```bash
npm install hexo-solitude-tag
```

## 使用

### Note（Bootstrap）

{% tabs note %}
<!-- tab 语法 -->

```markdown
{% note class='className' icon='icon' %}
任何内容（也支持内联标签）。
{% endnote %}
```

<!-- endtab -->

<!-- tab 参数 -->

1. 'className'：类名
2. 'icon'：图标名称（完整名称，例如 "fas fa-github"）。

<!-- endtab -->

<!-- tab 预览 -->

> 默认

{% note 'default' %}

默认note事项。

{% endnote %}

{% note 'primary' 'fas fa-circle-minus' %}
带图标的主要note事项。
{% endnote %}

{% note 'success' 'fas fa-circle-check' %}
带图标的成功note事项。
{% endnote %}

{% note 'info' 'fas fa-circle-info' %}
带图标的信息note事项。
{% endnote %}

{% note 'warning' 'fas fa-circle-xmark' %}
带图标的警告note事项。
{% endnote %}

{% note 'danger' 'fas fa-circle-exclamation' %}
带图标的危险note事项。
{% endnote %}

> 平面

{% note 'default flat' %}
默认note事项。

{% endnote %}

{% note 'primary flat' 'fas fa-circle-minus' %}
带图标的主要note事项。
{% endnote %}

{% note 'success flat' 'fas fa-circle-check' %}
带图标的成功note事项。
{% endnote %}

{% note 'info flat' 'fas fa-circle-info' %}
带图标的信息note事项。
{% endnote %}

{% note 'warning flat' 'fas fa-circle-xmark' %}
带图标的警告note事项。
{% endnote %}

{% note 'danger flat' 'fas fa-circle-exclamation' %}
带图标的危险note事项。
{% endnote %}

> 简洁

{% note 'default simple' %}
默认note事项。

{% endnote %}

{% note 'primary simple' 'fas fa-circle-minus' %}
带图标的主要note事项。
{% endnote %}

{% note 'success simple' 'fas fa-circle-check' %}
带图标的成功note事项。
{% endnote %}

{% note 'info simple' 'fas fa-circle-info' %}
带图标的信息note事项。
{% endnote %}

{% note 'warning simple' 'fas fa-circle-xmark' %}
带图标的警告note事项。
{% endnote %}

{% note 'danger simple' 'fas fa-circle-exclamation' %}
带图标的危险note事项。
{% endnote %}

> 现代

{% note 'default modern' %}
默认note事项。

{% endnote %}

{% note 'primary modern' 'fas fa-circle-minus' %}
带图标的主要note事项。
{% endnote %}

{% note 'success modern' 'fas fa-circle-check' %}
带图标的成功note事项。
{% endnote %}

{% note 'info modern' 'fas fa-circle-info' %}
带图标的信息note事项。
{% endnote %}

{% note 'warning modern' 'fas fa-circle-xmark' %}
带图标的警告note事项。
{% endnote %}

{% note 'danger modern' 'fas fa-circle-exclamation' %}
带图标的危险note事项。
{% endnote %}

<!-- endtab -->

<!-- tab 源码 -->

```markdown
> 默认

{% note 'default' %}

默认note事项。

{% endnote %}

{% note 'primary' 'fas fa-circle-minus' %}
带图标的主要note事项。
{% endnote %}

{% note 'success' 'fas fa-circle-check' %}
带图标的成功note事项。
{% endnote %}

{% note 'info' 'fas fa-circle-info' %}
带图标的信息note事项。
{% endnote %}

{% note 'warning' 'fas fa-circle-xmark' %}
带图标的警告note事项。
{% endnote %}

{% note 'danger' 'fas fa-circle-exclamation' %}
带图标的危险note事项。
{% endnote %}

> 平面

{% note 'default flat' %}
默认note事项。

{% endnote %}

{% note 'primary flat' 'fas fa-circle-minus' %}
带图标的主要note事项。
{% endnote %}

{% note 'success flat' 'fas fa-circle-check' %}
带图标的成功note事项。
{% endnote %}

{% note 'info flat' 'fas fa-circle-info' %}
带图标的信息note事项。
{% endnote %}

{% note 'warning flat' 'fas fa-circle-xmark' %}
带图标的警告note事项。
{% endnote %}

{% note 'danger flat' 'fas fa-circle-exclamation' %}
带图标的危险note事项。
{% endnote %}

> 简洁

{% note 'default simple' %}
默认note事项。

{% endnote %}

{% note 'primary simple' 'fas fa-circle-minus' %}
带图标的主要note事项。
{% endnote %}

{% note 'success simple' 'fas fa-circle-check' %}
带图标的成功note事项。
{% endnote %}

{% note 'info simple' 'fas fa-circle-info' %}
带图标的信息note事项。
{% endnote %}

{% note 'warning simple' 'fas fa-circle-xmark' %}
带图标的警告note事项。
{% endnote %}

{% note 'danger simple' 'fas fa-circle-exclamation' %}
带图标的危险note事项。
{% endnote %}

> 现代

{% note 'default modern' %}
默认note事项。

{% endnote %}

{% note 'primary modern' 'fas fa-circle-minus' %}
带图标的主要note事项。
{% endnote %}

{% note 'success modern' 'fas fa-circle-check' %}
带图标的成功note事项。
{% endnote %}

{% note 'info modern' 'fas fa-circle-info' %}
带图标的信息note事项。
{% endnote %}

{% note 'warning modern' 'fas fa-circle-xmark' %}
带图标的警告note事项。
{% endnote %}

{% note 'danger modern' 'fas fa-circle-exclamation' %}
带图标的危险note事项。
{% endnote %}
```

<!-- endtab -->

{% endtabs %}
