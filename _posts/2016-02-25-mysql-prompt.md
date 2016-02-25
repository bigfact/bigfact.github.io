---
layout: post
title: "mysql 提示符"
date: 2016-02-25 10:58:00 +0800
category: mysql
tags: 数据库 mysql
---

* `mysql>`
    * Ready for new query
* `->`
    * Waiting for next line of multiple-line query
* `'>`
    * Waiting for next line, waiting for completion of a string that began with a single quote (“'”)
* `">`
    * Waiting for next line, waiting for completion of a string that began with a double quote (“"”)
* \`>
    * Waiting for next line, waiting for completion of an identifier that began with a backtick (“\`”)
* `/*`
    * Waiting for next line, waiting for completion of a comment that began with /*