/*
 * @lc app=leetcode.cn id=206 lang=javascript
 *
 * [206] 反转链表
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
 * @return {ListNode}
 */
// 递归
// var reverseList = function(head) {
//   if (head === null || head.next === null) {
//     return head;
//   }
//   const node = new ListNode();
//   let temp = node;
//   var dfs = function(p) {
//     if (p.next !== null) {
      
//       dfs(p.next);
//     }
//     temp.next = new ListNode(p.val);
//     temp = temp.next;
//   }
//   dfs(head);

//   return node.next;
// };
//  非递归
var reverseList = function(head) {
  if (head === null || head.next === null) {
    return head;
  }

  let p = head;
  let q = new ListNode(head.val);
  
  while(p.next !== null) {
    const k = new ListNode(p.next.val);
    k.next = q;
    q = k
    p = p.next
  }

  return q;
};
// @lc code=end

