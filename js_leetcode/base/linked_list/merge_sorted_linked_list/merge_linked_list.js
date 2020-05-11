/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
function ListNode(val) {
    this.val = val;
    this.next = null;
}
var mergeTwoLists = function (l1, l2) {
    let a = l1;
    let b = l2;
    let res = undefined;

    if (!l1) {
        return l2;
    }
    if (!l2) {
        return l1;
    }

    if (a.val < b.val) {
        res = a
        a = a.next
    } else {
        res = b
        b = b.next
    }
    let currentNode = res;
    while (a !== null && b !== null) {
        if (a.val < b.val) {
            currentNode.next = a
            a = a.next
        } else {
            currentNode.next = b
            b = b.next
        }
        currentNode = currentNode.next
    }

    if (a != null) {
        currentNode.next = a
    } else {
        currentNode.next = b
    }

    return res;
};

let l1 = new ListNode();
// let tmp = l1;
// tmp.next = new ListNode(2);
// tmp = tmp.next;
// tmp.next = new ListNode(4);

let l2 = new ListNode(0);
// tmp = l2;
// tmp.next = new ListNode(3);
// tmp = tmp.next;
// tmp.next = new ListNode(4);

let res = mergeTwoLists(l1, l2);
while (res) {
    res = res.next;
}