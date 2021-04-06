---
layout: post
title: "JavaScript 执行机制"
date: 2021-04-01 06:55:33 +0800
category: frontend
tags: js
---

```js
console.log(1);

setTimeout(() => {
  console.log(2);
});

Promise.resolve().then(() => {
  console.log(3);
});

console.log(4);

let p = new Promise((resolve, reject) => {
  console.log(5);
  resolve();
  console.log(6);
});

p.then(() => {
  console.log(7);
});

console.log(8);
```
