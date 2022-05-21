/*
 * @lc app=leetcode.cn id=106 lang=javascript
 *
 * [106] 从中序与后序遍历序列构造二叉树
 */

// @lc code=start
/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {number[]} inorder
 * @param {number[]} postorder
 * @return {TreeNode}
 */
var buildTree = function(inorder, postorder) {
  const traverse = function (subInorder) {
    if (subInorder.length === 0) return null;
    const rootValue = postorder.pop();
    const root = new TreeNode(rootValue);
    const temp = subInorder.findIndex(value => rootValue === value);
    if (temp === -1) return null;
    root.right = traverse(subInorder.slice(temp + 1, subInorder.length));
    root.left = traverse(subInorder.slice(0, temp));
    return root;
  }
  const root = traverse(inorder);
  return root;
};
// @lc code=end

