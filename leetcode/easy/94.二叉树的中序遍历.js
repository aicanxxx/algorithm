/*
 * @lc app=leetcode.cn id=94 lang=javascript
 *
 * [94] 二叉树的中序遍历
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
 * @param {TreeNode} root
 * @return {number[]}
 */
var inorderTraversal = function (root) {
  const result = []
  if (root === null) return result;
  function traverse(root) {
    if (root.left !== null) {
      traverse(root.left)
    }
    result.push(root.val);
    if (root.right !== null) {
      traverse(root.right);
    }
  }
  traverse(root);
  return result;
};
// var inorderTraversal = function (root) {
//   const result = []
//   if (root === null) return result;
//   const queue = [];
//   let p = root;
//   while (p || queue.length > 0) {
//     if (p !== null) {
//       queue.push(p);
//       p = p.left;
//       continue;
//     } 
//     p = queue.pop();
//     result.push(p.val);
//     p = p.right;
//   }
//   return result;
// };
// @lc code=end

