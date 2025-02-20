# Definition for singly-linked list.
class ListNode:
    def __init__(self, val=0, next=None):
        self.val = val
        self.next = next
from typing import Optional


class Solution:
    def deleteDuplicates(self, head: Optional[ListNode]) -> Optional[ListNode]:
        if head is None:
            return None
        current = head

        while current.next:
            if current.next.val == current.val:
                current.next = current.next.next
            else:
                current = current.next

        return head
