/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @return {number[]}
 */
var reversePrint = function (head) {
    let res = [];
    let tmp = head;
    while(tmp) {
        res.unshift(tmp.val);
        tmp = tmp.next;
    }
    return res;
};

function ListNode(val) {
    this.val = val;
    this.next = null;
}

let l1 = new ListNode(1);
let l2 = new ListNode(2);
let l3 = new ListNode(3);
let l4 = new ListNode(4);
l1.next = l2;
l2.next = l3;
l3.next = l4;

console.log(reversePrint(l1));