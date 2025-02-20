# Definition for singly-linked list.
class ListNode:
    def __init__(self, val=0, next=None):
        self.val = val
        self.next = next


from typing import Optional


class Solution:
    def swapPairs(self, head: Optional[ListNode]) -> Optional[ListNode]:
        p0 = dummy = ListNode(next=head)
        node1 = head

        while node1 and node1.next:
            node2 = node1.next
            node3 = node2.next

            p0.next = node2
            node2.next = node1
            node1.next = node3

            p0 = node1
            node1 = node3
        return dummy.next
