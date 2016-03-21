---
layout: post
title: "gem error"
date: 2016-03-17 18:05:00 +0800
category: ruby
tags: ruby gem bundle
---


> rvm osx-ssl-certs update

* Get the CURL Certificate Authority (CA) bundle. You can do this with:

> sudo port install curl-ca-bundle [if you are using MacPorts]

* Execute the ruby code that is trying to verify the SSL certification: 

> SSL_CERT_FILE=/opt/local/etc/certs/cacert.pem

* gem 安装没有问题，但 bundle 安装报错，可以尝试更新 bundle
    
> gem install bundle

## 参考
* [stackoverflow - certificate verify failed](http://stackoverflow.com/questions/4528101/ssl-connect-returned-1-errno-0-state-sslv3-read-server-certificate-b-certificat)
* [OpenSSL Errors and Rails – Certificate Verify Failed](http://railsapps.github.io/openssl-certificate-verify-failed.html)