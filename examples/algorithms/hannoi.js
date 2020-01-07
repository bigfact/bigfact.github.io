/**
 * 汉诺伊塔问题 - 递归求解
 * @module examples/algorithms/hannoi
 * @see {@link https://baike.baidu.com/item/%E6%B1%89%E8%AF%BA%E5%A1%94%E9%97%AE%E9%A2%98/1945186}
 * @example
 * node examples/algorithms/hannoi.js
 */

/**
 * 源数组
 */
const ARR0 = [1, 2, 3];

/**
 * 目标数组
 */
const ARR1 = [];

/**
 * 辅助数组
 */
const ARR2 = [];

/**
 * 问题规模（待移动元素个数）
 */
const N = ARR0.length;

/**
 * 移动次数
 */
let Times = 0;

/**
 * 辅助打印函数
 */
function log(n = 0, times = Times, arr0 = ARR0, arr1 = ARR1, arr2 = ARR2) {
  console.log(n, times, fillArr(arr0), fillArr(arr1), fillArr(arr2));
}

/**
 * 格式化填充数组
 * @param {Array} arr 待填充数组
 * @param {Number} n 填充最大长度
 * @param {Any} el 填充元素
 * @returns {Array} 已填充数组
 */
function fillArr(arr = [], n = N, el = 0) {
  let _arr = new Array(n - arr.length);
  _arr.fill(el);
  return [...arr, ..._arr];
}

/**
 * 移动数组 0 第 0 位元素到数组 1 的第 0 位
 * @param {Array} arr0 数组 0
 * @param {Array} arr1 数组 1
 */
function move(arr0 = [], arr1 = []) {
  const val = arr0.shift();
  arr1.unshift(val);
  Times++;
  log();
}

/**
 * 递归求解主函数
 * 1、将源数组 n 个元素的上面 n-1 个元素移动到辅助数组
 * 2、将源数组的最后 1 个元素移动到目标数组
 * 3、将辅助数组的 n-1 个元素移动到目标数组
 * @param {Number} n
 * @param {Array} arr0 源数组
 * @param {Array} arr1 目标数组
 * @param {Array} arr2 辅助数组
 */
function hannoi(n, arr0 = [], arr1 = [], arr2 = []) {
  if (n > 0) {
    hannoi(n - 1, arr0, arr2, arr1);
    move(arr0, arr1);
    hannoi(n - 1, arr2, arr1, arr0);
  }
}

hannoi(N, ARR0, ARR1, ARR2);
