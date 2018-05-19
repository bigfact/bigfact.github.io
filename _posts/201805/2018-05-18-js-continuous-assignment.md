---
layout: post
title: "JavaScript 连续赋值问题"
date: 2018-5-18 22:16:00 +0800
category: frontend
tags: js
---

今天被同事问了一个 js 的基础问题 —— 连续赋值，例如：

```js
/* example0 */
var a = 0,
  b = 1,
  c = 2; // 声明变量并分别赋值
a = b = c = 3; // 连续赋值
console.log(a, b, c); // 3 3 3
```

按照通常的理解（以往的经验），连续赋值之后 a b c 都等于 3 ，通常情况是没问题，但是，下面这个例子就颠覆了以往的理解：

```js
/* example1 */
var a = { n: 0 },
  b = a; // 声明变量并分别赋值
a.x = a = { n: 2 }; // 连续赋值
console.log(a, b); // { n: 2 } { n: 0, x: { n: 2 } }
```

按照以往的理解根据执行顺序的不同拆分连续赋值，当时考虑了以下几种情况来解释这个结果：

```js
/* case0 */
a = { n: 2 };
a.x = { n: 2 };
// a { n: 2, x: { n: 2 } }
// b { n: 0 }

/* case1 */
a = { n: 2 };
a.x = a;
// a { n: 2, x: [Circular] } 循环引用
// b { n: 0 }

/* case2 */
a.x = a;
a = { n: 2 };
// a { n: 2}
// b { n: 0, x: { n: 0 } }

/* case3 */
a.x = { n: 2 };
a = { n: 2 };
// a { n: 2 }
// b { n: 0, x: { n: 2 } }
```

从结果上来看，只有 case3 是对的，可是，如果在 example1 和 case3 后面分别加上一句 `console.log(a === b.x)` ，会发现 example1 的结果为 `true` ，case3 的结果为 `false`，所以 case3 也不正确。

当然，还能列举出其他情况，`穷尽猜想来证实某个结果`。不过，既然已经关系到最基本的 `=` 操作符的处理逻辑，为何不查询一下标准文档的解释呢？

`ecma-262` 关于 `=` 操作符的执行顺序描述如下：

> The production AssignmentExpression : LeftHandSideExpression = AssignmentExpression is evaluated as follows:
>
> 1.  Let lref be the result of evaluating LeftHandSideExpression.
> 2.  Let rref be the result of evaluating AssignmentExpression.
> 3.  Let rval be GetValue(rref).
> 4.  Throw a SyntaxError exception if the following conditions are all true:
>
> * Type(lref) is Reference is true
> * IsStrictReference(lref) is true
> * Type(GetBase(lref)) is Environment Record
> * GetReferencedName(lref) is either "eval" or "arguments"
>
> 5.  Call PutValue(lref, rval).
> 6.  Return rval.

试着翻译：

语句 LeftHandSideExpression = AssignmentExpression 将会按照如下顺序进行计算：

1.  用 lref 代表 LeftHandSideExpression 的计算结果
2.  用 rref 代表 AssignmentExpression 的计算结果
3.  用 rval 代表 rref 的值
4.  检查如果如下条件全部满足时，则抛出语法错误：

* lref 为引用类型
* lref 为严格引用类型
* lref 为引用类型类型时，lref 的基础值的类型为 Environment Record
* lref 为引用类型类型时的引用名为 "eval" 或者 "arguments"

5.  将 lref 代表的表达式的左边赋值为 rval
6.  返回 rval

按照标准里的执行顺序来解释 example1 中的连续赋值：

1.  定义 lref 为 a.x (a 指向的实际对象的属性 x)
2.  计算 a = { n: 2 }

    (1). 定义 lref1 为 a

    (2). 定义 rref1 为 { n: 2 } 的引用

    (3). 定义 rval1 为 rref1 的值

    (4). 检查通过

    (5). a 赋值为 rval1

    (6). 返回 rval1

3.  定义 rref 为 rval1
4.  定义 rval 为 rref 的值
5.  检查通过
6.  lref (a 指向的实际对象的属性 x) 赋值为 rval
7.  返回 rval

`b` 始终指向原来的实际对象，所以 `b` 为 `{ n: 0, x: { n: 2 } }` ，`a` 为 `{ n: 2 }`。

关于 `b.x === a` 的结果，按照现在的理解来看应该是 `false` ，实际结果是 `true`。显然，不论是理论上还是实际上，结果都应该是 `true`，不然，按照这个理解，总不能让 `var a = {}; var b = a; console.log(a === b);` 打印出 `false` 吧。所以应该是对如下的内容理解有误，导致有的步骤理解错误。

* GetValue
* Type
* IsStrictReference
* Environment Record
* GetBase
* GetReferencedName
* PutValue

关于这些内容的说明已经完完全全“超纲”！确实也没有能完全理解。希望有高人指点，或者再继续专研，寻求更深层次的理解！

自此，停笔，休息，待续~~~

## 参考

* [MDN JavaScript 内存管理](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Memory_Management)
* [ecma-262 sec-11.13 Assignment Operators](https://www.ecma-international.org/ecma-262/5.1/#sec-11.13)
