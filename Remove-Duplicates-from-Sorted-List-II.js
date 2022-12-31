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
var deleteDuplicates = function(head) {
    
    var newList = new ListNode(0);
  var current = newList;
  var data = head;
  var value = 0;
  
  while (data) {
    value  = data.val;
    if (data.next && data.next.val === value ) {
      data = data.next;
      while (data && data.val === value) {
          data = data.next;
          }
    } else {
      current.next = data;
      current = data;
      data = data.next;
      current.next = null;
    }
  }
  
  return newList.next;
};
