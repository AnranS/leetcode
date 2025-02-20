# Definition for singly-linked list.
class ListNode:
    def __init__(self, val=0, next=None):
        self.val = val
        self.next = next


from typing import Optional, Tuple


class Solution:
    def reverseList(self, head: Optional[ListNode]) -> Tuple[Optional[ListNode], int]:
        if head is None:
            return head, 0
        if head.next is None:
            return head, 1
        pre = None
        cur = head
        n = 0
        while cur:
            n += 1
            nxt = cur.next
            cur.next = pre
            pre = cur
            cur = nxt
        return [pre, n]

    def addTwoNumbers(
        self, l1: Optional[ListNode], l2: Optional[ListNode]
    ) -> Optional[ListNode]:
        l1, n1 = self.reverseList(l1)
        l2, n2 = self.reverseList(l2)
        if n2 > n1:
            l1, l2 = l2, l1
        cur1 = l1
        cur2 = l2
        carry = 0
        while cur1 or cur2:
            if cur1 and cur2:
                val = cur1.val + cur2.val + carry
                cur1.val = val % 10
                carry = val // 10
                cur1 = cur1.next
                cur2 = cur2.next
            else:
                val = cur1.val + carry
                cur1.val = val % 10
                carry = val // 10
                cur1 = cur1.next
        ans = self.reverseList(l1)[0]
        # 如果还有进位的话加一个节点
        if carry != 0:
            tmp = ListNode(val=carry)
            tmp.next = ans
            ans = tmp
        return ans
