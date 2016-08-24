---
layout: post
title: "mysql 重置用户密码"
date: 2016-02-24 17:39:00 +0800
category: database
tags: 数据库 mysql
---

* 登录 mysql
{% highlight command %}
    mysql -u root -p
{% endhighlight %}
* 重置用户密码0
{% highlight command %}
    mysql> SET PASSWORD FOR 'root'@'localhost' = PASSWORD('newpass');
{% endhighlight %}
* 重置用户密码1
{% highlight command %}
    mysql> use mysql;
    mysql> UPDATE user SET Password = PASSWORD('newpass') WHERE user = 'root';
    mysql> FLUSH PRIVILEGES;
{% endhighlight %}
* 重置用户密码2
{% highlight command %}
    mysqladmin -u root password newpassword
{% endhighlight %}
* 重置用户密码3——忘记root密码
{% highlight command %}
    mysqld_safe --skip-grant-tables&
    mysql -u root mysql
    mysql> UPDATE user SET password=PASSWORD("new password") WHERE user='root';
    mysql> FLUSH PRIVILEGES;
{% endhighlight %}
