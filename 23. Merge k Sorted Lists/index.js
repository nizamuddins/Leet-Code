var mergeKLists = function(lists) {
    let newArray = [];
    let i =0;
    while(i<lists.length){
        while(lists[i] != null){
            newArray.push(lists[i].val)
            lists[i] = lists[i].next;
        }
        i++;
    }
    newArray.sort((a,b)=>{
        return a-b;
    })
    class Node {
        constructor(val) {
            this.val = val;
            this.next = null;
        }
    }
    let k = 0;
    let head = null;
    let prev = head;
    while(k<newArray.length){
        if(head == null){
            head = new Node(newArray[k]);
            prev = head
        }else{
            prev.next = new Node(newArray[k]);
            prev = prev.next;
        }
        k++
    }
    return head
};
