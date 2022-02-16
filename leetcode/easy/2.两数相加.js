/*
 * @lc app=leetcode.cn id=2 lang=javascript
 *
 * [2] 两数相加
 */

// @lc code=start
/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function(l1, l2) {
  let decimal = 0;
  const result = new ListNode();
  if (l1 === null) {
    return l2;
  }
  if (l2 === null) {
    return l1;
  }
  let p = l1;
  let q = l2;
  let k = result
  while (p || q) {
    if (p === null) {
      p = new ListNode()
    }
    if (q === null) {
      q = new ListNode()
    }
    const val = (p.val + q.val + decimal) % 10;
    k.val = val
    
    decimal = Math.floor((p.val + q.val + decimal) / 10);

    p = p.next;
    q = q.next;

    if (p || q) {
      k.next = new ListNode();
      k = k.next;
    }
  }
  if (decimal > 0) {
    k.next = new ListNode(decimal);
  }
  return result;
};
// @lc code=end

