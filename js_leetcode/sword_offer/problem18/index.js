/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} val
 * @return {ListNode}
 */
var deleteNode = function (head, val) {
    while(head.val === val) {
        head = head.next;
    }
    let current = head;
    while (current && current.next) {
        if (current.next.val === val) {
            current.next = current.next.next;
        }
        current = current.next;
    }
    return head;
};

function ListNode(val) {
    this.val = val;
    this.next = null;
}

let l1 = new ListNode(-3);
l1.next = new ListNode(5);
l1.next.next = new ListNode(-99);

console.log(deleteNode(l1, -3));