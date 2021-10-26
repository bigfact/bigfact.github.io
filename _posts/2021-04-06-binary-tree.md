---
layout: post
title: "二叉树"
date: 2021-04-06 10:19:09 +0800
category: data-structure
tags: 数据结构 JavaScript
---

理解二叉树、二叉树遍历（前序遍历、中序遍历、后序遍历、层序遍历）和其衍生数据结构

## [条件](http://data.biancheng.net/view/192.html){:target="\_blank"}

- 本身是[有序树](http://data.biancheng.net/view/23.html){:target="\_blank"}（如果树中结点的子树从左到右看，谁在左边，谁在右边，是有规定的，这棵树称为有序树；反之称为无序树）
- 每个结点最多有 `2` 个子结点（结点的`度`最多为 2）

```
      4
    /   \
  5       2
 /       / \
6       1   3
```

## 遍历

```js
function BinaryTreeNode(value) {
  this.left = null;
  this.right = null;
  this.value = value;
}

function BinaryTree() {}

// 前序遍历 根左右/右左根 DLR/RLD
BinaryTree.preTraverse = function preTraverse(node) {
  let res = [];
  if (!node) {
    // res.push(null);
    return res;
  }
  res.push(node.value);
  res = res.concat(preTraverse(node.left));
  res = res.concat(preTraverse(node.right));
  return res;
};
BinaryTree.preTraverseFor = function preTraverseFor(node) {
  const stack = [];
  const res = [];
  while (node || stack.length) {
    if (node) {
      stack.push(node);
      res.push(node.value);
      node = node.left;
    } else {
      // res.push(null);
      node = stack.pop();
      node = node.right;
    }
  }
  return res;
};

// 中序遍历 左根右/右根左 LDR/RDL
BinaryTree.midTraverse = function midTraverse(node) {
  let res = [];
  if (!node) return res;
  res = res.concat(midTraverse(node.left));
  res.push(node.value);
  res = res.concat(midTraverse(node.right));
  return res;
};
BinaryTree.midTraverseFor = function midTraverseFor(node) {
  const stack = [];
  const res = [];
  while (node || stack.length) {
    if (node) {
      stack.push(node);
      node = node.left;
    } else {
      node = stack.pop();
      res.push(node.value);
      node = node.right;
    }
  }
  return res;
};

// 后序遍历 左右根/根右左 LRD/DRL
BinaryTree.postTraverse = function postTraverse(node) {
  let res = [];
  if (!node) return res;
  res = res.concat(postTraverse(node.left));
  res = res.concat(postTraverse(node.right));
  res.push(node.value);
  return res;
};
BinaryTree.postTraverseFor = function postTraverseFor(node) {
  let stack = [];
  let res = [];
  while (node || stack.length) {
    if (node) {
      stack.push(node);
      res.unshift(node.value);
      node = node.right;
    } else {
      node = stack.pop();
      node = node.left;
    }
  }
  return res;
};

// 层序遍历 自顶向下、自左到右按层遍历
BinaryTree.levelTraverse = function levelTraverse(nodes) {
  let res = [];
  let tmp = [];
  for (let i = 0; i < nodes.length; i++) {
    let node = nodes[i];
    if (node) {
      res.push(node.value);
      tmp.push(node.left);
      tmp.push(node.right);
    }
  }
  if (tmp.length > 0) res = res.concat(levelTraverse(tmp));
  return res;
};
BinaryTree.levelTraverseFor = function levelTraverseFor(node) {
  let res = [];
  let stack = [node];
  while (stack.length) {
    node = stack.shift();
    res.push(node.value);
    if (node.left) stack.push(node.left);
    if (node.right) stack.push(node.right);
  }
  return res;
};

// 层序遍历（分层） 自顶向下、自左到右按层遍历
BinaryTree.levelTraverse2 = function levelTraverse(nodes) {
  let res = [];
  let level = [];
  let tmp = [];
  for (let i = 0; i < nodes.length; i++) {
    let node = nodes[i];
    if (node) {
      level.push(node.value);
      tmp.push(node.left);
      tmp.push(node.right);
    }
  }
  if (level.length) res.push(level);
  if (tmp.length > 0) res = res.concat(levelTraverse(tmp));
  return res;
};
BinaryTree.levelTraverseFor2 = function levelTraverseFor(node) {
  let res = [];
  let quque = [node];
  while (quque.length) {
    let len = quque.length;
    let level = [];
    for (let i = 0; i < len; i++) {
      node = quque.shift();
      if (node) {
        level.push(node.value);
        if (node.left) quque.push(node.left);
        if (node.right) quque.push(node.right);
      }
    }
    if (level.length) res.push(level);
  }
  return res;
};

// 根据前序遍历数组初始化二叉树
BinaryTree.initTreeByDLRArr = function initTreeByDLRArr(arr) {
  if (!arr.length) return null;
  let val = arr.shift();
  if (!val) return null;
  const node = new BinaryTreeNode(val);
  node.left = initTreeByDLRArr(arr);
  node.right = initTreeByDLRArr(arr);
  return node;
};

const arr = [8, 2, 7, null, null, 6, null, null, 5, 3, null, null, 3];
const root = BinaryTree.initTreeByDLRArr(arr);

console.log("二叉树: ");
console.log(root);
console.log("\n");

console.log("前序遍历: ");
console.log("递归: ", BinaryTree.preTraverse(root));
console.log("循环: ", BinaryTree.preTraverseFor(root));
console.log("\n");

console.log("中序遍历: ");
console.log("递归: ", BinaryTree.midTraverse(root));
console.log("循环: ", BinaryTree.midTraverseFor(root));
console.log("\n");

console.log("后序遍历: ");
console.log("递归: ", BinaryTree.postTraverse(root));
console.log("循环: ", BinaryTree.postTraverseFor(root));
console.log("\n");

console.log("层序遍历: ");
console.log("递归: ", BinaryTree.levelTraverse([root]));
console.log("循环: ", BinaryTree.levelTraverseFor(root));
console.log("\n");

console.log("层序遍历（分层）: ");
console.log("递归: ", BinaryTree.levelTraverse2([root]));
console.log("循环: ", BinaryTree.levelTraverseFor2(root));
```

## 衍生数据结构

### 满二叉树

二叉树中除叶子结点和最后一层子结点外，每个结点都有`2`个子结点（度都为 2）

```
      4
    /   \
  5       2
 / \     / \
6   7   1   3
```

```js
const root = {
  left: {
    left: { left: null, right: null, value: 6 },
    right: { left: null, right: null, value: 7 },
    value: 5
  },
  right: {
    left: { left: null, right: null, value: 1 },
    right: { left: null, right: null, value: 3 },
    value: 2
  },
  value: 4
};

// 判断二叉树是否为满二叉树
function isFullBinaryTree(root) {
  // @todo
}
```

### 完全二叉树

二叉树中除去最后一层结点为满二叉树，且最后一层的结点依次从左到右分布

```
      4
    /   \
  5       2
 / \     / \
6   7   1
```
