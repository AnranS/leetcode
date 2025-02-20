# Definition for singly-linked list.
class ListNode:
    def __init__(self, val=0, next=None):
        self.val = val
        self.next = next
from typing import Optional


class Solution:
    def pairSum(self, head: Optional[ListNode]) -> int:
        slow = fast = head
        stack = []
        ans = 0
        while fast:
            stack.append(slow.val)
            slow = slow.next
            fast = fast.next.next
        while slow:
            ans = max(stack.pop() + slow.val, ans)
            slow = slow.next
        return ans