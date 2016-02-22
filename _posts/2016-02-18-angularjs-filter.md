---
layout: post
title: "angularjs Filter （过滤）"
date: 2016-02-18 10:00:00 +0800
category: angularjs
---

* [示例]({{ site.baseurl }}/examples/angularjs/index.html)

* 内建的Filter
    * 格式化货币
    * 格式化日期
        * [关于“时间”表示的一篇博文](https://segmentfault.com/a/1190000004292140?from=singlemessage&isappinstalled=0#rd)
    * 数组数据过滤
    * 数组数据个数过滤
    * 数组数据排序
    * 对象格式化为标准JSON格式
    * 字母大小写转换
    * 数字过滤 

* 自定义Filter
{% highlight js %}
app.filter('filterName', function () {
    return function(input, args, ...) {        
        return '';
    }
});
{% endhighlight %}
