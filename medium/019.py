# Definition for singly-linked list.
class ListNode:
    def __init__(self, val=0, next=None):
        self.val = val
        self.next = next
from typing import Optional


class Solution:
    def removeNthFromEnd(self, head: Optional[ListNode], n: int) -> Optional[ListNode]:
        # 初始化哨兵节点及左'右'指针
        dummy = left = right = ListNode(next=head)
        # right先走n部
        for _ in range(n):
            right = right.next
        while right.next:
            right = right.next
            left = left.next
        # 由于left和right之间的差值一直为n所此时left为倒数第n+1个节点
        left.next = left.next.next    
        return dummy.next
        