---
layout: post
title: "二叉树遍历"
date: 2021-04-06 10:19:09 +0800
category: data-structure
tags: binary-tree js
---

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
  if (!node) return res;
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

// 层序遍历 自定向下、自左到右按层遍历
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

// 初始化
BinaryTree.initTreeByDeep = function initTreeByDeep(deep) {
  if (!deep) return null;
  let node = new BinaryTreeNode(random(1, 10));
  node.left = initTreeByDeep(deep - 1);
  node.right = initTreeByDeep(deep - 1);
  return node;
};

function random(min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
}

const node = BinaryTree.initTreeByDeep(3);

console.log("二叉树: ");
console.log(JSON.stringify(node, "", 2));

console.log("\n");
console.log("前序遍历: ");
console.log("递归: ", BinaryTree.preTraverse(node));
console.log("循环: ", BinaryTree.preTraverseFor(node));

console.log("\n");
console.log("中序遍历: ");
console.log("递归: ", BinaryTree.midTraverse(node));
console.log("循环: ", BinaryTree.midTraverseFor(node));

console.log("\n");
console.log("后序遍历: ");
console.log("递归: ", BinaryTree.postTraverse(node));
console.log("循环: ", BinaryTree.postTraverseFor(node));

console.log("\n");
console.log("层序遍历: ");
console.log("递归: ", BinaryTree.levelTraverse([node]));
console.log("循环: ", BinaryTree.levelTraverseFor(node));
```
