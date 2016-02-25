---
layout: post
title: "mysql 常用查询语句"
date: 2016-02-25 10:39:00 +0800
category: mysql
tags: 数据库 sql mysql
---

{% highlight sql %}
    select version();
    select current_date;
    select current_time;
    select now();
    select user();
    show databases;
    use database_name;
    show tables;
    create database database_name;
    select database();
    describe table_name;
{% endhighlight %}

在进行多行输入查询语句时，可通过输入`\c`来结束输入并不执行已经输入的查询语句

## 参考
* [mysql官方文档](http://dev.mysql.com/doc/refman/5.7/en/entering-queries.html)