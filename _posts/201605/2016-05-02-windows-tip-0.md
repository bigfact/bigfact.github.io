---
layout: post
title: "windows - win7 - 设置 wifi 热点"
date: 2016-05-02 20:41:00 +0800
category: windows
tags: windows
---

* 已管理员身份运行 cmd

* 设置无限网络基本信息

{% highlight command %}
> netsh wlan set hostednetwork mode=allow ssid=bfc key=cylbfc1992
{% endhighlight %}

* 进入控制面板网络适配器页面，更改共享设置

* 启动无线网络命令

{% highlight command %}
> netsh wlan start hostednetwork
{% endhighlight %}

* 显示无线网络信息命令

{% highlight command %}
> netsh wlan show hostednetwork
{% endhighlight %}

* 停止无线网络命令

{% highlight command %}
> netsh wlan stop hostednetwork
{% endhighlight %}