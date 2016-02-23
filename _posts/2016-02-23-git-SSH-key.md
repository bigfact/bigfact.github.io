---
layout: post
title: "git - 生成SSH key"
date: 2016-02-23 16:13:00 +0800
category: git
---

## mac
* 检查
{% highlight command %}
    ls -al ~/.ssh
{% endhighlight %}
* 生成
{% highlight command %}
    ssh-keygen -t rsa -b 4096 -C "your_email@example.com"
{% endhighlight %}
* Adding your SSH key to the ssh-agent
{% highlight command %}
    # start the ssh-agent in the background
    eval "$(ssh-agent -s)"
    # Agent pid 5956
    # Add your SSH key to the ssh-agent
    ssh-add ~/.ssh/id_rsa
{% endhighlight %}
* 复制
{% highlight command %}
    pbcopy < ~/.ssh/id_rsa.pub
{% endhighlight %}

## 参考
* [github help ssh](https://help.github.com/categories/ssh/)
