/*
 * @lc app=leetcode.cn id=105 lang=javascript
 *
 * [105] 从前序与中序遍历序列构造二叉树
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
 * @param {number[]} preorder
 * @param {number[]} inorder
 * @return {TreeNode}
 */

var buildTree = function (preorder, inorder) {
  const traverse = function (subInorder) {
    if (subInorder.length === 0) {
      return null
    }
    const rootValue = preorder.shift();
    const root = new TreeNode(rootValue);
    const temp = subInorder.findIndex(value => value === rootValue);
    if (temp === -1) {
      return null;
    }
    
    root.left = traverse(subInorder.slice(0, temp));
    root.right = traverse(subInorder.slice(temp + 1, subInorder.length));
    return root;
  }
  const root = traverse(inorder);
  return root;
};
// @lc code=end

