/*
 * @lc app=leetcode.cn id=92 lang=javascript
 *
 * [92] 反转链表 II
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
 * @param {number} left
 * @param {number} right
 * @return {ListNode}
 */
// 第一种方法：递归
// var reverseBetween = function(head, left, right) {
//   let revertHeader = null;
//   let revertTail = null;
//   let residualTailHeader = null;
//   let flag = false;

//   const traverse = (node, level = 1) => {
//     if (node === null) {
//       return
//     }
//     if (level <= right) {
//       traverse(node.next, level + 1);
//     } else if (level === right + 1) {
//       residualTailHeader = node;
//     }

//     if (level === right) {
//       revertHeader = new ListNode(node.val)
//       revertTail = revertHeader;
//     } else if (level >= left && level < right) {
//       revertTail.next = new ListNode(node.val);
//       revertTail = revertTail.next
//     } else if (level < left && !flag) {
//       node.next = revertHeader;
//       revertHeader = head;
//       flag = true;
//     }
//   }

//   traverse(head);
//   revertTail.next = residualTailHeader

//   return revertHeader;

// };
// 第二种方法：循环
var reverseBetween = function(head, left, right) {
  let revertHeader = null;
  let revertTail = null;
  let residualHeaderTail = null;

  let p = head;
  let level = 1;

  while (p !== null) {
    if (level === left - 1) {
      residualHeaderTail = p;
    }
    if (level === left) {
      revertHeader = new ListNode(p.val);
      revertTail = revertHeader;
    }
    if (level > left && level <= right) {
      const q = new ListNode(p.val);
      q.next = revertHeader;
      revertHeader = q;
    }
    if (level > right) {
      revertTail.next = p;
      break;
    }
    level ++;
    p = p.next;
  }
  if (residualHeaderTail) {
    residualHeaderTail.next = revertHeader;
    revertHeader = head;
  }

  return revertHeader;

};
// @lc code=end

