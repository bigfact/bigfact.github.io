---
layout: post
title: "网页生命周期事件"
date: 2016.04.14 19:27:00 +0800
category: frontend
tags: html
---

> ## 2016.04.14 19:27 更新

### 关于 JS 执行

#### 问题
  在 APP 中退出 H5 页面之后， H5 执行的 JS 依然会执行下去

#### 例子
  一个 10 秒的定时器，在执行到一半时退出 H5 回到 APP ，定时器依然在工作，定时完成之后的代码依然会执行

#### 解决
  JS 监听 unload 或者 beforeunload 事件，在监听函数中写需要执行的代码

{% highlight js %}
  window.addEventListener("beforeunload", function(e) {
    var confirmationMessage = "hello！";
    (e || window.event).returnValue = confirmationMessage;     //Gecko + IE
    return confirmationMessage;                                //Webkit, Safari, Chrome etc.
  });
{% endhighlight %}


### 关于 unload 和 beforeunload 事件

#### 问题
* Android 中，关闭或者返回都会触发 unload 和 beforeunload 事件（也存在部分机型不会触发的情况，主要是一些比较配置较低的旧机型）
* IOS 中，如果当前关闭的页面是载入的第一个页面（历史为 1 ），关闭则不会触发 unload 和 beforeunload 事件，点击页面上的链接进入其他页面会触发 unload 和 beforeunload 事件，之后的页面（历史大于 1）也会触发

#### 解决
  1. IOS 退出 webview 时，使用一个空的 URL 来替代当前关闭页面，从而触发 unload 和 beforeunload 事件
  2. 比较重要的操作（例如与服务器的交互），需要用户的主动参与（按钮点击触发或者其他）

## 参考
* [MDN - 事件 - beforeunload](https://developer.mozilla.org/zh-CN/docs/Web/Events/beforeunload)

<script>
  window.addEventListener("beforeunload", function(e) {
    var confirmationMessage = "hello！这是一个 beforeunload 例子！";
    (e || window.event).returnValue = confirmationMessage;     //Gecko + IE
    return confirmationMessage;                                //Webkit, Safari, Chrome etc.
  });
</script>