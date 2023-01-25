var rotateRight = function (head, k) {
    if(head == null) return null;
    if(head.next == null) return head;

    let lastNode = null;
    let s = head;
    let n = 0;
    let l = head;

    while (l != null) {
        l = l.next;
        n++
    }
    k = k % n;
    
    for (let i = 0; i < k; i++) {
        while (s.next != null) {
            if(s.next != null && s.next.next === null){
                lastNode = s.next;
                s.next = null
                lastNode.next = head;
                head = lastNode;
                s = head
                break
            }
            s = s.next;
        }
    }
    return head;
};