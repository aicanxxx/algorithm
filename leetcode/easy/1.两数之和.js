/*
 * @lc app=leetcode.cn id=1 lang=javascript
 *
 * [1] 两数之和
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
  const obj = {}
  for(let i = 0; i < nums.length; i++) {
    if (obj[target - nums[i]] !== undefined) {
      return [i, obj[target - nums[i]]];
    } else {
      obj[nums[i]] = i
    }
  }
  return [];
};
// @lc code=end

