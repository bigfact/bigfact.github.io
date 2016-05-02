---
layout: post
title: "linux - 文件系统错误"
date: 2016-05-02 20:31:00 +0800
category: linux
tags: linux
---

## 系统

* Ubuntu 16.04 LTS

## 错误信息

> /dev/sdb1 contains a file system with errors, check forced
> /dev/sdb1: UNEXPECTED INCONSISTENCY; RUN fsck MANUALLY
> (i.e., without -a or -p options)

## 解决

{% highlight cammand %}
> umount /dev/sdb1
> fsck.ext4 -y /dev/sdb1
> // 修复完成之后 ctrl + D 退出
{% endhighlight %}
