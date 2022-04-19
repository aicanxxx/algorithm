/*
 * @lc app=leetcode.cn id=142 lang=javascript
 *
 * [142] 环形链表 II
 */

// @lc code=start
/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var detectCycle = function(head) {
    let slow = head;
    let fast = head;
    let p = head;
    let flag = false;

    while(fast !== null) {
      slow = slow.next;
      if (fast.next) {
        fast = fast.next.next
      } else {
        return null;
      }
      if (slow === fast) {
        flag = true;
      }
      if (p === slow) {
        return p;
      }
      if (flag) {
        p = p.next;
      }
    }
    return null;
};
// @lc code=end

