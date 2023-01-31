var reverseBetween = function(head, left, right) {
    if(left === right) return head;
    left = left-1;
    right = right-1;
    let array = [];
    while(head != null){
        array.push(head.val);
        head = head.next;
    }
    let j = left;
    for(let i = right;i>=0;i--){
        if(j == i || j == i+1) break; 
        while(j<array.length){
            let temp = array[i];
            array[i] = array[j];
            array[j] = temp;
            j++;
            break;
        }
    }
    class Node{
        constructor(val){
            this.val = val;
            this.next = null;
        }
    }
    let h1 = null;
    let prev = null;
    let i = 0;
    while(i<array.length){
        if(h1 === null){
            h1 = new Node(array[i]);
            prev = h1;
        }else{
            prev.next = new Node(array[i]);
            prev = prev.next;
        }
        i++;
    }
    return h1;

};