var deleteDuplicates = function (head) {
    let array = [];
    while (head != null) {
        array.push(head.val);
        head = head.next;
    }
    for (let i = 0; i < array.length; i++) {
        let val = array[i];
        let count = 0;
        let flag = 0;
        for (let j = 0; j < array.length; j++) {
            if (val == array[j]) {
                count++;
                if (count > 1) {
                    array.splice(j, 1);
                    flag = 1;
                    j = j - 1;
                }
            }
        }
        if (flag == 1) {
            array.splice(i, 1);
            i = i - 1;
            count = 0;
            flag = 0;
        } else {count = 0;}
    }
    array.sort((a, b) => {
        return a - b;
    })
    class Node {
        constructor(val) {
            this.val = val;
            this.next = null
        }
    }

    let s = 0;
    let h1 = null;
    let prev = null;
    while (s < array.length) {
        if (h1 === null) {
            h1 = new Node(array[s]);
            prev = h1
        } else {
            prev.next = new Node(array[s]);
            prev = prev.next;
        }
        s++
    }
    return h1
};