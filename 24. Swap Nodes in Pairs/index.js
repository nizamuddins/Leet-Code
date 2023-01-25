var swapPairs = function (head) {
    if(head == null) return null
    if(head.next == null) return head

    let length = 0;
    let l = head;
    let lastNode = 0
    while (l != null) {
        lastNode = l;
        l = l.next;
        length++
    }
    let s = head;
    let f = head.next;
    let prev = null;

    while (s != null && f != null) {
        let temp1 = s;
        s = s.next.next;
        temp1.next = null;
        let temp2 = f;
        if(f.next == null){
            f = null;
        }else{
            f = f.next.next;

        }
        temp2.next = temp1;
        if (prev == null) {
            prev = temp2;
        } else {
            let prev2 = prev
            while (prev2.next != null) {
                prev2 = prev2.next;
            }
            prev2.next = temp2;
        }

    }
    if(length%2 != 0){
        let prev3 = prev
        while(prev3.next != null){
            prev3 = prev3.next
        }
        prev3.next = lastNode
    }
    return prev
};