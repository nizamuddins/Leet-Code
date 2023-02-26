class Solution:
    def addTwoNumbers(self, l1,l2):
        list1 = [];
        list2 = [];
        while l1 != None:
            list1.append(str(l1.val));
            l1 = l1.next;
        while l2 != None:
            list2.append(str(l2.val));
            l2 = l2.next;
        list1.reverse();
        list2.reverse();
        val = str(int("".join(list1))+int("".join(list2)));
        val2 = [char for char in val]
        class listNode:
            def __init__(self,val):
                self.val = val;
                self.next = None;
        head = None;
        prev = head;
        for i in val2:
            if head == None:
                head = listNode(i);
            else:
                prev = listNode(i);   
                prev.next = head;
                head = prev
        return head;         
                    



