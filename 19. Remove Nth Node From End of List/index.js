var removeNthFromEnd = function(head, n){
    let length = 0;
    let n1 = head;
    while(n1 != null){
        n1 = n1.next;
        length++;
    }
    if(length == 1)return null;
    if(length-n === 0) return head.next;
    let s = head;
    let prev = 0;
    let i = 0;
    while(i<length-n){
        prev = s;
        s = s.next;
        i++;
    }
    prev.next = s.next;
    return head
};