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
    if (!head || !head.next) {
        return null;
    }
    let fast = head.next, slow = head
    while (fast !== slow) {
        if (!fast || !fast.next) return null;
        fast = fast.next.next;
        slow = slow.next;
    }
    let nextSlow = head;
    let current = 0;
    slow = slow.next;
    while (slow !== nextSlow) {
        current++;
        slow = slow.next;
        nextSlow = nextSlow.next;
    }
    return nextSlow;
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
