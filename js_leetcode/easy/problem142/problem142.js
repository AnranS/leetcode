/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} head
 * @return {ListNode}
 */

function ListNode(val) {
    this.val = val;
    this.next = null;
}

var detectCycle = function (head) {
    let slowPointer = head
    let fastPointer = head
    while (fastPointer && fastPointer.next) {
        slowPointer = slowPointer.next
        fastPointer = fastPointer.next.next
        if (slowPointer === fastPointer) {
            slowPointer = head;
            while (slowPointer !== fastPointer) {
                slowPointer = slowPointer.next
                fastPointer = fastPointer.next
            }
            return slowPointer
        }
    }
    return null
};

let n1 = new ListNode(3);
let n2 = new ListNode(2);
let n3 = new ListNode(0);
let n4 = new ListNode(-4);
n1.next = n2;
n2.next = n3;
n3.next = n4;
n4.next = n2;

console.log(detectCycle(n1));
