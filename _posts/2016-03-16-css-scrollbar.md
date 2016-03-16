---
layout: post
title: "滚动条样式"
date: 2016-03-16 13:54:00 +0800
category: css
tags: css
---

## chrome
{% highlight css %}
    .ex::-webkit-scrollbar {}
    .ex::-webkit-scrollbar-button {}  
    .ex::-webkit-scrollbar-track {}  
    .ex::-webkit-scrollbar-track-piece {}  
    .ex::-webkit-scrollbar-thumb {}
    .ex::-webkit-scrollbar-corner {} 
    .ex::-webkit-resizer {}
    .ex::-webkit-scrollbar-thumb:hover {}
{% endhighlight %}

## mozilla

## IE
{% highlight css %}
    .ex {
        scrollbar-face-color        :   #fff;
        scrollbar-arrow-color       :   #fff;
        scrollbar-3dlight-color     :   #fff;
        scrollbar-highlight-color   :   #fff;
        scrollbar-shadow-color      :   #fff;
        scrollbar-darkshadow-color  :   #fff;
        scrollbar-track-color       :   #fff;
    }
{% endhighlight %}
