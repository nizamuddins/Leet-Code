var mergeTwoLists = function (list1, list2) {
    if (list1 == null && list2 == null) 
        return null
    if (list1 != null && list2 === null) 
        return list1
    let head = null;
    let s1 = list1;
    let s2 = list2;
    let prev;
    let prev2 = null;

    while (s1 != null && s2 != null) {
        if (s1.val <= s2.val) {
            prev = s1;
            s1 = s1.next;
            prev.next = head;
            head = prev;

        } else {
            prev = s2;
            s2 = s2.next;
            prev.next = head;
            head = prev;
        }
    }
    
    let s3 = 0;
    if (s1 == null && s2 != null) {
        while (s2 != null) {
            s3 = s2;
            s2 = s2.next
            s3.next = head;
            head = s3

        }
    } else if (s2 == null && s1 != null) {
        while (s1 != null) {
            s3 = s1;
            s1 = s1.next
            s3.next = head;
            head = s3

        }
    }

    while (head != null) {
        let temp = head.next;
        head.next = prev2;
        prev2 = head;
        head = temp;
    }
    return prev2
};