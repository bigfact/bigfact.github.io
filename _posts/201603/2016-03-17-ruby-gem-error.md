---
layout: post
title: "gem error"
date: 2016-03-17 18:05:00 +0800
category: ruby
tags: ruby gem bundle
---

## mac os
```
$ rvm osx-ssl-certs update
```

* Get the CURL Certificate Authority (CA) bundle. You can do this with:

```
$ sudo port install curl-ca-bundle [if you are using MacPorts]
```

* Execute the ruby code that is trying to verify the SSL certification: 

```
$ SSL_CERT_FILE=/opt/local/etc/certs/cacert.pem
```

* gem 安装没有问题，但 bundle 安装报错，可以尝试更新 bundle
    
> gem install bundle

## Windows
```
$ gem install compass
// SSL_connect returned=1 errno=0 state=SSLv3 read server certificate B: certificate verify failed
```

* 下载 http://curl.haxx.se/ca/cacert.pem 文件到本地，路径为 C:\Ruby23-x64\cacert.pem
* 新建系统环境变量 SSL_CERT_FILE ， 值为 C:\Ruby23-x64\cacert.pem
* 重新打开命令行工具

## 参考
* [stackoverflow - certificate verify failed](http://stackoverflow.com/questions/4528101/ssl-connect-returned-1-errno-0-state-sslv3-read-server-certificate-b-certificat)
* [OpenSSL Errors and Rails – Certificate Verify Failed](http://railsapps.github.io/openssl-certificate-verify-failed.html)
* [stackoverflow - certificate-verify-failed-on-windows](http://stackoverflow.com/questions/5720484/how-to-solve-certificate-verify-failed-on-windows)
