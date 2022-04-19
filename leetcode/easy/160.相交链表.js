/*
 * @lc app=leetcode.cn id=160 lang=javascript
 *
 * [160] 相交链表
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
 * @param {ListNode} headA
 * @param {ListNode} headB
 * @return {ListNode}
 */
var getIntersectionNode = function(headA, headB) {
    let p = headA, q = headB;
    while(p !== null || q !== null) {
      if (p === q) {
        break;
      }
      if (p!== null) {
        p = p.next;
      } else {
        p = headB;
      }
      if (q!== null) {
        q = q.next;
      } else {
        q = headA;
      }
    }
    return p;
};
// @lc code=end

