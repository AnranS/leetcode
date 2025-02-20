# Definition for singly-linked list.
from typing import Optional


class ListNode:
    def __init__(self, val=0, next=None):
        self.val = val
        self.next = next


class Solution:
    def deleteMiddle(self, head: Optional[ListNode]) -> Optional[ListNode]:
        slow = fast = head = ListNode(0, head)
        while fast.next and fast.next.next:
            slow, fast = slow.next, fast.next.next
        slow.next = slow.next.next
        return head.next
