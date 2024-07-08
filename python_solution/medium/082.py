# Definition for singly-linked list.
from typing import Optional


class ListNode:
    def __init__(self, val=0, next=None):
        self.val = val
        self.next = next
class Solution:
    def deleteDuplicates(self, head: Optional[ListNode]) -> Optional[ListNode]:
        dummy = ListNode(next=head)
        current = dummy

        while current.next and current.next.next:
            val = current.next.val
            if val == current.next.next.val:
                while current.next and current.next.val == val:
                    current.next = current.next.next
            else:
                current = current.next
        return dummy.next
