# bigfact.github.io
bigfact.github.io

## 运行
> bundle exec jekyll serve

## 更新本地开发环境
> bundle update

## 小技巧
* 打开新标签的链接
  > [a 标签内容]\(链接地址){:target="_blank"}
* 网站根路径
  > {{ site.baseurl }}
* gem 安装 bundler 报错
  * 信息
```
  $ sudo gem install bundler
    ERROR:  While executing gem ... (Errno::EPERM)
      Operation not permitted - /usr/bin/bundle
```
  * 解决
```
  $ sudo gem install -n /usr/local/bin bundler
```


## 参考
* [Using Jekyll with Pages](https://help.github.com/articles/using-jekyll-as-a-static-site-generator-with-github-pages/)
* [Jekyll中文文档](http://jekyll.bootcss.com/docs/home/)
* [Jekyll官方文档](http://jekyllrb.com)
* [gem 国内镜像 - ruby - China](http://gems.ruby-china.org/)
* [gem 国内镜像 - taobao](https://ruby.taobao.org/)
* [rvm 管理 ruby](https://ruby-china.org/wiki/rvm-guide)