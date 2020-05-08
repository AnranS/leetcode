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

var reverseList = function (head) {
    if(head === null) {
        return null;
    }
    let tmpStack = [];
    while(head) {
        tmpStack.push(head.val);
        head = head.next;
    }
    let res = new ListNode(tmpStack.pop());
    let tmpPoint = res;
    while(tmpStack.length !== 0) {
        tmpPoint.next = new ListNode(tmpStack.pop());
        tmpPoint = tmpPoint.next;
    }
    return res;
};

var reverseList2 = function (head) {
    var list = head;
    var p = list;
    var q = null;
   
   if(p == null)
       return null;

   while(p.next !== null) {
       q = p.next;
       p.next = q.next;
       q.next = list;
       list = q;     
   }
   return list;
};

let head = new ListNode(1);
let tmp = head;
tmp.next = new ListNode(2);
tmp = tmp.next;
tmp.next = new ListNode(3);
tmp = tmp.next;
tmp.next = new ListNode(4);
tmp = tmp.next;
tmp.next = new ListNode(5);

console.log(reverseList2(head));