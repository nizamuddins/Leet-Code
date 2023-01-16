// linkedlist

var addTwoNumbers = function(l1, l2) {
    let array1 = [];
    let array2 = [];
    let list1 = l1;
    let list2 = l2;
    while(list1 != null){
        array1.push(list1.val);
        list1 = list1.next;
    }
    while(list2 != null){
        array2.push(list2.val);
        list2 = list2.next;
    }
    array1.reverse();
    array2.reverse();

    let array3 = String(BigInt(array1.join(''))+BigInt(array2.join(''))).split('').reverse();

    class Node{
        constructor(val){
            this.val = val;
            this.next = null;
        }
    }
    let l3;
    let j = array3.length-1;
    while(j>=0){
        if(l3 == null){
            l3 = new Node(Number(array3[j]));
        }else{
            let tail = new Node(Number(array3[j]));
            tail.next = l3;
            l3 = tail;
        }
        j--;
    }
return l3;
};