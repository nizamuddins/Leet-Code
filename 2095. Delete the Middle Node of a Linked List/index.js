// linkedlist

var deleteMiddle = function(head) {
    if(head.next == null){
        return null
    }if(head.next != null && head.next.next == null){
        head.next = null
        return head 
      }
    let slow = head;
    let fast = head;
    let prevNode;
  while(fast.next != null && fast.next.next != null){
    fast = fast.next.next;
    prevNode = slow
    slow = slow.next;
  }
  if(fast.next != null){
    prevNode = slow
    slow = slow.next
  }
  prevNode.next = slow.next;
  return head 
}