---
layout: post
title: "rvm 安装"
date: 2016-03-17 16:59:00 +0800
category: ruby
tags: ruby rvm
---

## mac os
{% highlight command %}
~ bigfact$ curl -L https://get.rvm.io | bash -s stable --autolibs=enabled
{% endhighlight %}

## 安装信息
{% highlight command %}
  % Total    % Received % Xferd  Average Speed   Time    Time     Time  Current
                                 Dload  Upload   Total   Spent    Left  Speed
100   184  100   184    0     0     25      0  0:00:07  0:00:07 --:--:--    39
100 22865  100 22865    0     0   1893      0  0:00:12  0:00:12 --:--:--  4918
Downloading https://github.com/rvm/rvm/archive/1.26.11.tar.gz
Downloading https://github.com/rvm/rvm/releases/download/1.26.11/1.26.11.tar.gz.asc
Found PGP signature at: 'https://github.com/rvm/rvm/releases/download/1.26.11/1.26.11.tar.gz.asc',
but no GPG software exists to validate it, skipping.

Installing RVM to /Users/bigfact/.rvm/
    Adding rvm PATH line to /Users/bigfact/.profile /Users/bigfact/.mkshrc /Users/bigfact/.bashrc /Users/bigfact/.zshrc.
    Adding rvm loading line to /Users/bigfact/.profile /Users/bigfact/.bash_profile /Users/bigfact/.zlogin.
Installation of RVM in /Users/bigfact/.rvm/ is almost complete:

  * To start using RVM you need to run `source /Users/bigfact/.rvm/scripts/rvm`
    in all your open shell windows, in rare cases you need to reopen all shell windows.

# bigfact,
#
#   Thank you for using RVM!
#   We sincerely hope that RVM helps to make your life easier and more enjoyable!!!
#
# ~Wayne, Michal & team.

In case of problems: http://rvm.io/help and https://twitter.com/rvm_io
{% endhighlight %}

## 参考
* [github rvm](https://github.com/rvm/rvm)