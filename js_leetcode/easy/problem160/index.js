/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} headA
 * @param {ListNode} headB
 * @return {ListNode}
 */
// hash表
var getIntersectionNode = function (headA, headB) {
    let currenA = headA, currenB = headB;
    let map = new WeakMap();
    while(currenA) {
        map.set(currenA, true);
        currenA = currenA.next;
    }

    while(currenB) {
        if(map.has(currenB)) return currenB.val;
        currenB = currenB.next;
    }
    return null;
};
// 快慢指针

var getIntersectionNode2 = function (headA, headB) {
    let currentA = headA, currentB = headB;
    while(currentA || currentB) {
        if(currentB === currentA) return currentA;
        currentA = currentA === null ? headB : currentA.next; 
        currentB = currentB === null ? headA : currentB.next; 
    }
    return null;
};

function ListNode(val) {
    this.val = val;
    this.next = null;
}