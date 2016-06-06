---
layout: post
title: "windows - 清理右键菜单"
date: 2016-05-02 20:52:00 +0800
category: windows
tags: windows
---

## 运行注册表编辑器
* 快捷键 `win + R`
* 键入 `regedit` 并确定，运行注册表编辑器

## 清理文件夹的右键菜单 

* 注册表的 `HKEY_CLASSES_ROOT\Directory\Shell` 和 `HKEY_CLASSES_ROOT\Directory\Shellex\ContextMenuHandlers]` 下，寻找对应的名称并删除

* 如果找不到，可以在 `HKEY_CLASSES_ROOT\Folder\shell` 和 `HKEY_CLASSES_ROOT\Folder\shellex\ContextMenuHandlers` 分支里找到，然后删除掉

## 清理右键的“新建”菜单 

* 注册中的 `HKEY_CLASSES_ROOT` 根键下存放着所有文件类型的信息，如 `[HKEY_CLASSES_ROOT\*.doc]` 就是 Word 文档的相关信息，在右键菜单的“新建”菜单中发现了“新建Word文档”的选项，那么在这个键值下删除“Shellnew”后，右键的“新建”菜单中就没有了“新建Word文档”的选项，其它类型的文件我们也可以这样操作

## 清理 IE 右键菜单 

* 注册表的 `HKEY_CURRENT_USERSoftware\MicrosoftInternet Explorer\MenuExt` 下都有，删除掉不想用的项目即可
