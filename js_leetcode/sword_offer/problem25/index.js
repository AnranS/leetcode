var mergeTwoLists = function(l1, l2) {
    let prev = new ListNode(null);
    let current = prev;
    while(l1 && l2) {
        if(l1.val>l2.val) {
            current.next = new ListNode(l2.val);
            l2 = l2.next;
        } else {
            current.next = new ListNode(l1.val);
            l1 = l1.next;
        }
        current = current.next;
    }
    current.next = l1 ? l1 : l2;
    return prev.next;
};