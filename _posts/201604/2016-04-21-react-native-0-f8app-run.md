---
layout: post
title: "React Native - 0 - f8app - 本地运行"
date: 2016.04.21 18:55:00 +0800
category: frontend
tags: React-Native
---

## 开始

* 根据 f8app 项目中的安装步骤进行安装，有的步骤需要科学上网

## mongo 启动

{% highlight cammand %}
  $ mongod --dbpath mongodata/db/
{% endhighlight %}

## 出现的问题

### IOS

* CocoaPods 安装问题
  ERROR:  While executing gem ... (Errno::EPERM) Operation not permitted - /usr/bin/fuzzy_match
  
{% highlight cammand %}
  $ sudo gem install -n /usr/local/bin cocoapods
{% endhighlight %}

### Android

* 常用命令行
{% highlight cammand %}
  // Android tools
  $ android       // 打开 Android SDK Manager
  $ android avd   // 打开 Android Virtual Device (AVD) 管理器
  // Android Debug Bridge
  $ adb device    // 查看连接的 Android 设备
  $ adb reverse tcp:8081 tcp:8081   // 需 Android 5.0 以上
  $ adb reverse tcp:8080 tcp:8080
  $ adb shell input keyevent 82
{% endhighlight %}

* Android SDK location not found

  > java.lang.RuntimeException: SDK location not found. Define location with sdk.dir in the local.properties file or with an ANDROID_HOME environment variable.

{% highlight cammand %}
  // If you installed the SDK via Homebrew, otherwise ~/Library/Android/sdk
  $ export ANDROID_HOME=/usr/local/opt/android-sdk
{% endhighlight %}

* 启动 Android Virtual Device 报错，信息如下，简单粗暴关掉 VirtualBox 虚拟机解决问题

  > Starting emulator for AVD 'reactnative'
  > emulator: WARNING: VM heap size set below hardware specified minimum of 256MB
  > emulator: WARNING: Setting VM heap size to 512MB
  > Hax is enabled
  > Hax ram_size 0x80000000
  > HAX is working and emulator runs in fast virt mode.
  > console on port 5554, ADB on port 5555
  > coreaudio: Could not initialize input - Unknown Audiodevice
  > emulator: ERROR: Unfortunately, there's an incompatibility between HAXM hypervisor and VirtualBox 4.3.30+ which doesn't allow multiple hypervisors to co-exist.  It is being actively worked on; you can find out more about the issue at http://b.android.com/197915 (Android) and   https://www.virtualbox.org/ticket/14294 (VirtualBox)
  > coreaudio: Could not initialize input - Unknown Audiodevice
  > audio: Failed to create voice `goldfish_audio_in'
  > qemu-system-x86_64: warning: opening audio input failed
  > Failed to sync vcpu reg
  > Failed to sync vcpu reg
  > Failed to sync vcpu reg
  > Internal error: initial hax sync failed

* build 报错，信息如下，打开 Android SDK Manager 安装 google repository 和 google play services

  > JS server already running.
  > Building and installing the app on the device (cd android && ./gradlew installDebug...
  > 
  > FAILURE: Build failed with an exception.
  > 
  > * What went wrong:
  > A problem occurred configuring project ':app'.
  > > A problem occurred configuring project ':react-native-push-notification'.
  >    > Could not resolve all dependencies for configuration ':react-native-push-notification:_debugCompile'.
  >       > Could not find com.google.android.gms:play-services-gcm:8.3.0.
  >         Searched in the following locations:
  >             file:/Users/bigfact/.m2/repository/com/google/android/gms/play-services-gcm/8.3.0/play-services-gcm-8.3.0.pom
  >             file:/Users/bigfact/.m2/repository/com/google/android/gms/play-services-gcm/8.3.0/play-services-gcm-8.3.0.jar
  >             https://jcenter.bintray.com/com/google/android/gms/play-services-gcm/8.3.0/play-services-gcm-8.3.0.pom
  >             https://jcenter.bintray.com/com/google/android/gms/play-services-gcm/8.3.0/play-services-gcm-8.3.0.jar
  >             file:/Users/bigfact/github/f8app/node_modules/node_modules/react-native/android/com/google/android/gms/play-services-gcm/8.3.0/play-services-gcm-8.3.0.pom
  >             file:/Users/bigfact/github/f8app/node_modules/node_modules/react-native/android/com/google/android/gms/play-services-gcm/8.3.0/play-services-gcm-8.3.0.jar
  >             file:/usr/local/opt/android-sdk/extras/android/m2repository/com/google/android/gms/play-services-gcm/8.3.0/play-services-gcm-8.3.0.pom
  >             file:/usr/local/opt/android-sdk/extras/android/m2repository/com/google/android/gms/play-services-gcm/8.3.0/play-services-gcm-8.3.0.jar
  >         Required by:
  >             F8v2:react-native-push-notification:unspecified
  > 
  > * Try:
  > Run with --stacktrace option to get the stack trace. Run with --info or --debug option to get more log output.
  > 
  > BUILD FAILED
  > 
  > Total time: 8.536 secs
  > Could not install the app on the device, read the error above for details.
  > Make sure you have an Android emulator running or a device connected and have
  > set up your Android development environment:
  > https://facebook.github.io/react-native/docs/android-setup.html

## 参考

* [react](http://facebook.github.io/react/)
* [react - China](http://reactjs.cn/react/index.html)
* [react native - 官网](http://facebook.github.io/react-native/)
* [github - f8app](https://github.com/fbsamples/f8app)
* [f8app - 官网](http://makeitopen.com/) - 需科学上网
* [f8app - 中文翻译](http://f8-app.liaohuqiu.net/)
* [mongo - 官网](https://docs.mongodb.org/manual/tutorial/install-mongodb-on-os-x/)
* [Android 开发工具](http://androiddevtools.cn/)
* [关于 Cocoapods 安装的小细节错误](http://blog.sina.com.cn/s/blog_aac63dce0102w9q9.html)
* [react native - 中文文档 - 极客学院](http://wiki.jikexueyuan.com/project/react-native/GettingStarted.html)
* [React Native 中文网](http://reactnative.cn/)
* [react native - 初始化问题 - segmentfault](https://segmentfault.com/q/1010000004033633?_ea=505621)