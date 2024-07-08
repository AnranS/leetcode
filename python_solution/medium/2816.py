# Definition for singly-linked list.
class ListNode:
    def __init__(self, val=0, next=None):
        self.val = val
        self.next = next
from typing import Optional


class Solution:
    def reverseList(self, head: Optional[ListNode]) -> Optional[ListNode]:
        if head is None or head.next is None:
            return head
        pre = None
        cur = head
        while cur:
            nxt = cur.next
            cur.next = pre
            pre = cur
            cur = nxt
        return pre

    def doubleIt(self, head: Optional[ListNode]) -> Optional[ListNode]:
        head = self.reverseList(head)

        cur = head
        carry = 0
        while cur:
            val = cur.val * 2 + carry
            cur.val = val % 10
            carry = val // 10
            cur = cur.next
        head = self.reverseList(head)
        if carry != 0:
            tmp = ListNode(val=carry)
            tmp.next = head
            head = tmp
        return head
