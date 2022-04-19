/*
 * @lc app=leetcode.cn id=61 lang=javascript
 *
 * [61] 旋转链表
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
 * @param {ListNode} head
 * @param {number} k
 * @return {ListNode}
 */
var rotateRight = function(head, k) {
  if (head === null || k === 0) return head;

  let p = head, length = 1;
  let result = null;
  while(p.next!== null) {
    p = p.next;
    length++;
  }
  p.next = head;
  let value = length - (k - Math.floor(k/length) * length);
  while(value > 1) {
    head = head.next;
    value--
  }
  result = head.next;
  head.next = null;
  return result;
};
// @lc code=end

