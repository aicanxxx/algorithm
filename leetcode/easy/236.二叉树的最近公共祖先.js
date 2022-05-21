/*
 * @lc app=leetcode.cn id=236 lang=javascript
 *
 * [236] 二叉树的最近公共祖先
 */

// @lc code=start
/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {TreeNode}
 */
var lowestCommonAncestor = function (root, p, q) {
  if (root === null) {
    return null;
  }
  if (p === root || q === root) {
    return root;
  }
  const leftNode = lowestCommonAncestor(root.left, p, q);
  const rightNode = lowestCommonAncestor(root.right, p, q);

  // 如果leftNode与rightNode均有值，则返回他们的根节点
  if (leftNode !== null && rightNode !== null) {
    return root;
  }
  // 如果leftNode没有值，则p或q在右节点上，返回右节点
  if (leftNode === null) {
    return rightNode;
  }
  // 如果rightNode没有值，则p或者q在左节点上，返回左节点
  if (rightNode === null) {
    return leftNode;
  }
};
// @lc code=end

