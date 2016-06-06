---
layout: post
title: "js - IOS 中的滚动事件"
date: 2016-05-19 17:20:00 +0800
category: js
tags: js
---

## 问题描述

当 html 页面滚动时，需要实时更改某个元素的状态，所以要使用到 scroll 事件，但是在 IOS 中， scroll 事件要在页面滚动结束之后才触发，所以就满足不了实时更改的需求

## 解决

使用 touchstart 和 touchmove 模拟 scroll

## 不足

页面滚动会显得有些生硬，没有默认的那样顺滑

## 代码

{% highlight js %}
  var y = 0;
  document.addEventListener('touchstart', function(e) {
      y = e.touches[0].pageY;
  }, false);
  document.addEventListener('touchmove', scroll, false);
  function scroll(e) {
      e.preventDefault();
      window.scroll(0, y - e.touches[0].pageY + window.scrollY);
      
      // TODO ...
      
  }
{% endhighlight %}

## 参考
* [MDN - scroll 事件](https://developer.mozilla.org/zh-CN/docs/Web/Events/scroll)