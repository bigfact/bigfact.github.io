---
layout: post
title: "JavaScript 严格模式"
date: 2021-03-25 03:33:38 +0800
category: frontend
tags: JavaScript
---

严格模式（strict mode），于 [ECMAScript 5](https://www.ecma-international.org/publications-and-standards/standards/ecma-262/) 中提出。区别于正常模式（sloppy mode/马虎模式/稀松模式/懒散模式）

- 消除语法上不合理、不严谨之处，减少怪异行为（通过抛出错误来消除了一些原有静默错误）
- 优化变量使用，提高编译器效率，增加运行速度
- 消除代码运行的不安全之处，保证代码运行的安全
- 为未来新版本做铺垫

## 作用级别

- 文件级别，应用整个代码文件

```js
"use strict";
var a = "全部是严格模式";
console.log(a);
```

- 函数级别，应用到某个函数

```js
function strict() {
  "use strict";
  function nested() {
    return "这里也是严格模式";
  }
  return "这里是严格模式，" + nested();
}

function nonStrict() {
  return "这里不是严格模式";
}

console.log(strict());
console.log(nonStrict());
```

- 注意
  - 严格模式代码和正常模式代码可以共存
  - 严格模式文件和正常模式文件的合并可能会产生问题

## 具体的变化

### 消除语法上不合理、不严谨之处，减少怪异行为（通过抛出错误来消除了一些原有静默错误）

- 未声明变量赋值报错

```js
a = "hello";
console.log(a); // "hello"
// 未声明变量默认为全局变量
console.log(this.a); // "hello"
console.log(window.a); // "hello"
```

```js
"use strict";
a = "hello";
```

- 只读变量、属性赋值报错

```js
"use strict";
undefined = 1;
```

```js
"use strict";
NaN = 1;
```

```js
"use strict";
var obj0 = {};
Object.defineProperty(obj0, "a", { value: 1, writable: false });
obj0.a = 2;
```

```js
"use strict";
var obj1 = {
  get a() {
    return 1;
  }
};
obj1.a = 2;
```

- 不可扩展对象添加新属性报错

```js
"use strict";
var obj2 = { a: 1 };
Object.preventExtensions(obj2);
obj2.a = 2;
obj2.b = 1;
```

- 不可删除对象删除报错

```js
"use strict";
delete Object.prototype;
```

- 对象声明重名属性报错，正常模式允许重名属性，其值为最后一个重名属性的值
  - 注意，这个操作在[ECMAScript6](https://bugzilla.mozilla.org/show_bug.cgi?id=1041128)中已被允许

```js
"use strict";
var obj = { a: 1, a: 2 }; // 此段代码在支持 ECMAScript6 的环境中并不会报错
console.log(obj);
```

- 函数的参数名不唯一报错

```js
function test(a, a, b, c) {
  console.log(arguments[0], arguments[1], arguments[2], arguments[3]); // 需用 arguments 拿到正确的参数值
  console.log(a, a, b, c);
}
test(1, 2, 3, 4);
// 1 2 3 4
// 2 2 3 4
```

```js
"use strict";
function test(a, a, b, c) {
  console.log(arguments[0], arguments[1], arguments[2], arguments[3]);
  console.log(a, a, b, c);
}
test(1, 2, 3, 4);
```

- 使用 8 进制数字语法报错

```js
var a = 010;
console.log(a);
```

```js
"use strict";
var a = 010;
console.log(a);
```

```js
// 补充：ECMAScript6 表示 8 进制
(function () {
  "use strict";
  var a = 0o10;
  console.log(a);
  var b = a.toString(8);
  console.log(b);
})();

// 补充：ECMAScript5 表示 8 进制
(function () {
  "use strict";
  var a = parseInt("10", 8);
  console.log(a);
  var b = a.toString(8);
  console.log(b);
})();
```

- 原始数据类型属性设置报错
  - `string`, `number`, `bigint`, `boolean`, `null`, `undefined`, `symbol`

```js
(function () {
  var a = "a";
  a.b = "b"; // 不报错，也不新增属性
  a.toString = function () {
    console.log("1");
  }; // 不报错，也不修改属性
  console.log(a.b); // undefined
  console.log(a.toString()); // "a"
})();

(function () {
  "use strict";
  var a = "a";
  a.b = "b";
  a.toString = function () {
    console.log("1");
  };
})();
```

### 优化变量使用，提高编译器效率，增加运行速度

- 使用 with 语句报错

```js
var obj = { a: 1, b: 2 };
var a = 3;
var c = 4;
with (obj) {
  console.log(a);
  console.log(b);
  console.log(c);
  console.log(d);
}
```

```js
"use strict";
var obj = { a: 1, b: 2 };
with (obj) {
  console.log(a);
}
```

```js
// 补充：with 语句效率比较

function a() {
  var now = Date.now();
  var obj = { a: 1 };
  var c = 0;
  with (obj) {
    for (var i = 100000; i > 0; i--) {
      c += a;
    }
  }
  console.log("耗时", Date.now() - now, "ms");
}

function b() {
  var now = Date.now();
  var obj = { a: 1 };
  var c = 0;
  for (var i = 100000; i > 0; i--) {
    c += obj.a;
  }
  console.log("耗时", Date.now() - now, "ms");
}

a();
b();
```

- 创建 `eval` 作用域

```js
var a = 1;
eval("var b = 2; console.log(a, b);");
console.log(a, b);
```

```js
"use strict";
var a = 1;
eval("var b = 2; console.log(a, b);");
console.log(a, b);
```

```js
var a = 1;
eval('"use strict"; var b = 2; console.log(a, b);');
console.log(a, b);
```

- 删除已声明变量报错

```js
var a = 1;
console.log(a);
delete a;
console.log(a);
```

```js
"use strict";
var a = 1;
console.log(a); // 1
delete a;
console.log(a);
```

- 更改 `eval`, `arguments` 报错

```js
(function () {
  eval = 1;
  console.log(eval); // 1

  arguments++;
  console.log(arguments); // NaN

  ++eval;
  console.log(eval); // 2

  var obj = {
    set p(arguments) {
      console.log(arguments);
    }
  };
  obj.p = 1; // 1

  var eval;
  console.log(eval); // 2

  try {
    test();
  } catch (arguments) {
    console.log(arguments); // ReferenceError: test is not defined
  }

  function x(eval) {
    console.log(eval);
  }
  x(1); // 1
})();

(function () {
  function arguments() {
    console.log("arguments function");
  }
  arguments(); // "arguments function"
})();

(function () {
  function eval() {
    console.log("eval function");
  }
  eval(); // "eval function"
})();

(function () {
  var f = new Function("arguments", "return 1;");
  console.log(f()); // 1
})();

(function () {
  "use strict";
  eval = 1;
  console.log(eval);
})();

(function () {
  "use strict";
  function arguments() {
    console.log("arguments function");
  }
  arguments();
})();

(function () {
  "use strict";
  function eval() {
    console.log("eval function");
  }
  eval();
})();

(function () {
  "use strict";
  var f = new Function("arguments", "return 1;");
  console.log(f()); // 1
})();

(function () {
  var f = new Function("arguments", '"use strict"; return 1;');
  console.log(f());
})();
```

### 消除代码运行的不安全之处，保证代码运行的安全

- 函数内部 `this` 不再被包装成对象

```js
function a() {
  return this;
}
var that = this;
function log(result) {
  console.log(typeof result, result, result === that);
}
log(a());
log(a.bind(null)());
log(a.bind(undefined)());
log(a.bind(1)());
log(a.call("1"));
log(a.apply(true));
```

```js
"use strict";
function a() {
  return this;
}
var that = this;
function log(result) {
  console.log(typeof result, result, result === that);
}
log(a());
log(a.bind(null)());
log(a.bind(undefined)());
log(a.bind(1)());
log(a.call("1"));
log(a.apply(true));
```

- 调用、赋值 [Function.caller](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Function/caller){:target="\_blank"} 和 [Function.arguments](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Function/arguments){:target="\_blank"} 报错

```js
function funcA(arga) {
  console.log("funcA", funcA.caller);
  console.log("funcA", Array.prototype.slice.call(funcA.arguments));
  funcA.caller = 1;
  funcA.arguments = 2;
  console.log("funcA", funcA.caller);
  console.log("funcA", Array.prototype.slice.call(funcA.arguments));
}
function funcB(argb) {
  funcA(1);
  console.log("funcB", funcB.caller);
  console.log("funcB", Array.prototype.slice.call(funcB.arguments));
}
funcB(2);
```

```js
"use strict";
function funcA(arga) {
  console.log("funcA", funcA.caller);
  console.log("funcA", Array.prototype.slice.call(funcA.arguments));
}
function funcB(argb) {
  funcA(1);
  console.log("funcB", funcB.caller);
  console.log("funcB", Array.prototype.slice.call(funcB.arguments));
}
funcB(2);
```

```js
"use strict";
function funcA(arga) {
  funcA.caller = 1;
  funcA.arguments = 2;
  console.log("funcA", funcA.caller);
  console.log("funcA", Array.prototype.slice.call(funcA.arguments));
}
funcA(2);
```

- 调用、赋值 [arguments.callee](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Functions/arguments/callee){:target="\_blank"} 和 [arguments.caller](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Functions/arguments/caller){:target="\_blank"} 报错
  - 部分环境已不支持 `arguments.caller`

```js
function funcA() {
  console.log(arguments.callee);
  arguments.callee = 1;
  console.log(arguments.callee);
}
funcA();
```

```js
"use strict";
function funcA() {
  console.log(arguments.callee);
}
funcA();
```

```js
"use strict";
function a() {
  arguments.callee = 1;
  console.log(arguments.callee);
}
a();
```

### 为未来新版本做铺垫

- 新增保留字 `implements`, `interface`, `let`, `package`, `private`, `protected`, `public`, `static`, `yield`

```js
var implements = 1;
console.log(implements);
```

```js
"use strict";
var implements = 1;
console.log(implements);
```

- 考虑未来新版中的 `块级作用域`，规定只能在 `全局作用域` 和 `函数作用域` 的顶层声明函数
  - 注意，在 `ECMAScript6` 中函数允许被声明在 `块级作用域` 中

```js
"use strict";
function funcA(arg) {
  if (arg) {
    function funcB() {
      console.log("funcB");
    }
    funcB();
  } else {
    function funcC() {
      console.log("funcC");
    }
    funcC();
  }
}
funcA();
funcA(1);
```

## 参考

- [https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Strict_mode](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Strict_mode){:target="\_blank"}
- [https://www.ruanyifeng.com/blog/2013/01/javascript_strict_mode.html](https://www.ruanyifeng.com/blog/2013/01/javascript_strict_mode.html){:target="\_blank"}
