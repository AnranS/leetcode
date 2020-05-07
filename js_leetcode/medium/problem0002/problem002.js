/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * 给出两个 非空 的链表用来表示两个非负的整数。其中，它们各自的位数是按照 逆序 的方式存储的，并且它们的每个节点只能存储 一位 数字。
 * 输入：(2 -> 4 -> 3) + (5 -> 6 -> 4)
 * 输出：7 -> 0 -> 8
 * 原因：342 + 465 = 807
 */

function ListNode(val) {
    this.val = val;
    this.next = null;
}
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function (l1, l2) {
    let node = new ListNode('head');
    let temp = node;
    let add = 0;
    let sum = 0;

    //遍历，直到最长的都为空
    while(l1 || l2){
        sum = (l1 ? l1.val : 0) + (l2 ? l2.val : 0) + add;
        temp.next = new ListNode(sum % 10);//取余则为新链表的值
        temp = temp.next;
        add = sum >= 10 ? 1 : 0;
        l1 && (l1 = l1.next);
        l2 && (l2 = l2.next);
    }
    // 执行到最后有进位时
    add && (temp.next = new ListNode(add));
    return node.next;
};

let l1 = new ListNode(2);
let tmp = l1;
tmp.next = new ListNode(4);
tmp = tmp.next;
tmp.next = new ListNode(3);

let l2 = new ListNode(5);
tmp = l2;
tmp.next = new ListNode(6);
tmp = tmp.next;
tmp.next = new ListNode(4);

console.log(addTwoNumbers(l1, l2));
