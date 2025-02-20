# Definition for a binary tree node.
from collections import deque
from typing import List, Optional


class TreeNode:
    def __init__(self, val=0, left=None, right=None):
        self.val = val
        self.left = left
        self.right = right


class Solution:
    def zigzagLevelOrder(self, root: Optional[TreeNode]) -> List[List[int]]:
        if root is None:
            return []
        cur = deque([root])
        ans = []
        even = False
        while cur:
            tmp = []
            for _ in range(len(cur)):
                v = cur.popleft()
                tmp.append(v.val)
                if v.left:
                    cur.append(v.left)
                if v.right:
                    cur.append(v.right)
            ans.append(tmp[::-1] if even else tmp)
            even = not even
        return ans
