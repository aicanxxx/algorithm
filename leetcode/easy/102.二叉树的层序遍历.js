/*
 * @lc app=leetcode.cn id=102 lang=javascript
 *
 * [102] 二叉树的层序遍历
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
 * @return {number[][]}
 */
// var levelOrder = function(root) {
//   const result = [];
//   if (root === null) return result;

//   const traverse = function (currentLevel) {
//     if (currentLevel.length === 0) return;
//     const nextLevel = []
//     const currentLevelResult = currentLevel.map(item => {
//       if (item.left) {
//         nextLevel.push(item.left)
//       }
//       if (item.right) {
//         nextLevel.push(item.right)
//       }
//       return item.val;
//     });
//     result.push(currentLevelResult);
//     traverse(nextLevel);
//   }
//   traverse([root]);
//   return result;
// };
var levelOrder = function(root) {
  const result = [];
  if (root === null) return result;
  let currentLevel = [root];

  while(currentLevel.length > 0) {
    const nextLevel = []
    const currentLevelResult = currentLevel.map(item => {
      if (item.left) {
        nextLevel.push(item.left)
      }
      if (item.right) {
        nextLevel.push(item.right)
      }
      return item.val;
    });
    result.push(currentLevelResult);
    currentLevel = nextLevel;
  }
  return result;
};
// @lc code=end

