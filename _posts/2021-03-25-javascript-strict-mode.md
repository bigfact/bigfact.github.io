---
layout: post
title: "JavaScript 严格模式"
date: 2021-03-25 03:33:38 +0800
category: frontend
tags: js
---

严格模式（strict mode），于 [ECMAScript 5](https://www.ecma-international.org/publications-and-standards/standards/ecma-262/) 中提出

## 区别于正常模式（sloppy mode/马虎模式/稀松模式/懒散模式）

- 消除语法上不合理、不严谨之处，减少怪异行为（通过抛出错误来消除了一些原有静默错误）
- 消除代码运行的不安全之处，保证代码运行的安全
- 提高编译器效率，增加运行速度
- 为未来新版本做好铺垫

## 注意

- 严格模式代码和正常模式代码可以共存
- 严格模式文件和正常模式文件的合并可能会产生问题

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
  return "这里是严格模式" + nested();
}

function nonStrict() {
  return "这里不是严格模式";
}
```

## 具体的变化

### 将语法上的怪异行为转成报错处理

- 未声明变量赋值报错

```js
!(function () {
  a = "hello";
  console.log(a); // "hello"
})();
// 未声明变量默认为全局变量
console.log(a); // "hello"

!(function () {
  "use strict";
  a = "hello"; // Uncaught ReferenceError: a is not defined
})();
```

- 只读变量、属性赋值报错

```js
!(function () {
  "use strict";
  var undefined = 1; // Uncaught TypeError: Cannot assign to read only property 'undefined' of object '#<Window>'s
  var NaN = 1; // Uncaught TypeError: Cannot assign to read only property 'NaN' of object '#<Window>'
})();
```

```js
"use strict";
// 赋值只读属性报错
var obj0 = {};
Object.defineProperty(obj0, "a", { value: 1, writable: false });
obj0.a = 2; // Uncaught TypeError: Cannot assign to read only property 'a' of object '#<Object>'
```

```js
"use strict";
// 赋值只读属性报错
var obj1 = {
  get a() {
    return 1;
  }
};
obj1.a = 2; // Uncaught TypeError: Cannot set property a of #<Object> which has only a getter
```

- 不可扩展对象添加新属性报错

```js
"use strict";
var obj2 = { a: 1 };
Object.preventExtensions(obj2);
obj2.a = 2;
obj2.b = 1; // Uncaught TypeError: Cannot add property b, object is not extensible
```

- 删除不可删除对象报错

```js
"use strict";
delete Object.property; // Uncaught TypeError: Cannot delete property 'prototype' of function Object() { [native code] }
```

- 对象声明重名属性报错，正常模式中，允许重名属性，其值为最后一个重名属性的值
  - 注意，这个操作在[ECMAScript6](https://bugzilla.mozilla.org/show_bug.cgi?id=1041128)中又被允许了

```js
"use strict";
var obj = { a: 1, a: 2 }; // 此段代码在支持 ECMAScript6 的环境中并不会报错
```

- 函数的参数名不唯一报错

```js
!(function () {
  function test(a, a, b, c) {
    console.log(arguments[0], arguments[1], arguments[2], arguments[3]); // 需用 arguments 拿到正确的参数值
    console.log(a, a, b, c);
  }
  test(1, 2, 3, 4);
  // 1 2 3 4
  // 2 2 3 4
})();

!(function () {
  "use strict";
  function test(a, a, b, c) {
    console.log(arguments[0], arguments[1], arguments[2], arguments[3]);
    console.log(a, a, b, c);
  } // Uncaught SyntaxError: Duplicate parameter name not allowed in this context
  test(1, 2, 3, 4);
})();
```

- 禁止使用 8 进制数字语法

```js
!(function () {
  var a = 010;
  console.log(a); // 8
})();

!(function () {
  "use strict";
  var a = 010; // Uncaught SyntaxError: Octal literals are not allowed in strict mode.
  console.log(a);
})();

// 补充：ECMAScript6 表示 8 进制
!(function () {
  "use strict";
  var a = 0o10;
  console.log(a); // 8
  var b = a.toString(8);
  console.log(b); // "10"
})();

// 补充：ECMAScript5 表示 8 进制
!(function () {
  "use strict";
  var a = parseInt("10", 8);
  console.log(a); // 8
  var b = a.toString(8);
  console.log(b); // "10"
})();
```

- 禁止设置原始数据类型的属性
  - `string`, `number`, `bigint`, `boolean`, `null`, `undefined`, `symbol`

```js
!(function () {
  var a = "a";
  a.b = "b"; // 不报错，也不新增属性
  a.toString = function () {
    console.log("1");
  }; // 不报错，也不修改属性
  console.log(a.b); // undefined
  console.log(a.toString()); // "a"
})();

!(function () {
  "use strict";
  var a = "a";
  a.b = "b"; // Uncaught TypeError: Cannot create property 'b' on string 'a'
  a.toString = function () {
    console.log("1");
  }; // Uncaught TypeError: Cannot create property 'toString' on string 'a'
})();
```

### 优化变量使用

- 禁止使用 with 语句

```js
!(function () {
  var obj = { a: 1, b: 2 };
  var a = 3;
  var c = 4;
  with (obj) {
    console.log(a); // 1
    console.log(b); // 2
    console.log(c); // 4
    console.log(d); // Uncaught ReferenceError: d is not defined
  }
})();

!(function () {
  "use strict";
  var obj = { a: 1, b: 2 };
  with (obj) {
    console.log(a);
  } // Uncaught SyntaxError: Strict mode code may not include a with statement
})();

// 补充：with 语句效率比较

!(function () {
  var now = Date.now();
  var obj = { a: 1 };
  var c = 0;
  with (obj) {
    for (var i = 100000; i > 0; i--) {
      c += a;
    }
  }
  console.log("耗时", Date.now() - now, "ms"); // 耗时 55 ms
})();

!(function () {
  var now = Date.now();
  var obj = { a: 1 };
  var c = 0;
  for (var i = 100000; i > 0; i--) {
    c += obj.a;
  }
  console.log("耗时", Date.now() - now, "ms"); // 耗时 1 ms
})();
```

- 创建 `eval` 作用域

```js
!(function () {
  var a = 1;
  eval("var b = 2; console.log(a, b);"); // 1, 2
  console.log(a, b); // 1, 2
})();

!(function () {
  "use strict";
  var a = 1;
  eval("var b = 2; console.log(a, b);"); // 1, 2
  console.log(a, b); // Uncaught ReferenceError: b is not defined
})();

!(function () {
  var a = 1;
  eval('"use strict"; var b = 2; console.log(a, b);'); // 1, 2
  console.log(a, b); // Uncaught ReferenceError: b is not defined
})();
```

- 禁止删除声明变量

```js
!(function () {
  var a = 1;
  console.log(a); // 1
  delete a;
  console.log(a); // 1
})();

!(function () {
  "use strict";
  var a = 1;
  console.log(a); // 1
  delete a; // Uncaught SyntaxError: Delete of an unqualified identifier in strict mode.
  console.log(a);
})();
```

- 禁止更改 `eval`, `arguments`

```js
!(function () {
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

!(function () {
  function arguments() {
    console.log("arguments function");
  }
  arguments(); // "arguments function"
})();

!(function () {
  function eval() {
    console.log("eval function");
  }
  eval(); // "eval function"
})();

!(function () {
  var f = new Function("arguments", "return 1;");
  console.log(f()); // 1
})();

!(function () {
  "use strict";
  eval = 1; // Uncaught SyntaxError: Unexpected eval or arguments in strict mode
  console.log(eval);
})();

!(function () {
  "use strict";
  function arguments() {
    console.log("arguments function");
  } // Uncaught SyntaxError: Unexpected eval or arguments in strict mode
  arguments();
})();

!(function () {
  "use strict";
  function eval() {
    console.log("eval function");
  } // Uncaught SyntaxError: Unexpected eval or arguments in strict mode
  eval();
})();

!(function () {
  "use strict";
  var f = new Function("arguments", "return 1;");
  console.log(f()); // 1
})();

!(function () {
  var f = new Function("arguments", '"use strict"; return 1;'); // Uncaught SyntaxError: Unexpected eval or arguments in strict mode
  console.log(f());
})();
```

## 参考

- https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Strict_mode
- https://www.ruanyifeng.com/blog/2013/01/javascript_strict_mode.html
