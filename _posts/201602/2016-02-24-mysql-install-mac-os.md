---
layout: post
title: "mac os mysql 安装"
date: 2016-02-24 16:29:00 +0800
category: database
tags: mac 数据库 mysql
---

* 下载地址：[http://dev.mysql.com/downloads/mysql/](http://dev.mysql.com/downloads/mysql/)
* 安装包选择：mysql-5.7.11-osx10.10-x86_64.dmg
* 安装：双击镜像文件，安装镜像文件中的安装包，安装完成后的弹窗提示中有root密码
* 启动mysql：系统偏好设置－其他－MySQL
* 路径配置（如有需要）
{% highlight command %}
    # 查看路径配置
    echo $PATH
    # 添加路径
    PATH="$PATH":/usr/local/mysql/bin
{% endhighlight %}
* 安装信息：2016-02-24T08:26:47.950234Z 1 [Note] A temporary password is generated for root@localhost: 6!C6t9BWL3Id, If you lose this password, please consult the section How to Reset the Root Password in the MySQL reference manual.

## 参考

* [MacOSX中设置和改变$PATH变量](http://www.tuicool.com/articles/uQnaMnY)