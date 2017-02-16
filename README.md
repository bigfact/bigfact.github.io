# [bigfact blog](http://blog.bigfact.cc)

## 环境
* nodejs
* git
* ruby and gem

## 安装
```
$ gem intsall bundle
$ gem install jekyll
$ bundle install
```

## 运行
```
$ bundle exec jekyll serve
```

## 更新本地开发环境
```
$ bundle update
```

## 记录

* 打开新标签的链接
  * [a 标签内容]\(链接地址){:target="_blank"}
  
* 网站根路径
  * {{ site.baseurl }}

* 使用 RVM 管理 Ruby
  * [rvm 实用指南 - Ruby China](https://ruby-china.org/topics/576)
  
* gem 安装 bundler 报错
```
  // 问题
  $ sudo gem install bundler
    ERROR:  While executing gem ... (Errno::EPERM)
      Operation not permitted - /usr/bin/bundle
  // 解决
  $ sudo gem install -n /usr/local/bin bundler
```


## 参考

* [Using Jekyll with Pages](https://help.github.com/articles/using-jekyll-as-a-static-site-generator-with-github-pages/)
* [Jekyll 中文文档](http://jekyll.bootcss.com/docs/home/)
* [Jekyll 官方文档](http://jekyllrb.com)
* [gem 国内镜像 - ruby - China](http://gems.ruby-china.org/)
* [gem 国内镜像 - taobao](https://ruby.taobao.org/)
* [rvm 管理 ruby](https://ruby-china.org/wiki/rvm-guide)