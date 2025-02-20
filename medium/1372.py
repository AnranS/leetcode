# Definition for a binary tree node.
from typing import Optional, Tuple


class TreeNode:
    def __init__(self, val=0, left=None, right=None):
        self.val = val
        self.left = left
        self.right = right


class Solution:
    def longestZigZag(self, root: Optional[TreeNode]) -> int:
        ans = 0

        def dfs(root: Optional[TreeNode]) -> Tuple[int, int]:
            nonlocal ans
            if not root:
                return -1, -1
            else:
                _, r = dfs(root.left)
                l, _ = dfs(root.right)
                ans = max(ans, 1 + r, 1 + l)
                return 1 + r, 1 + l

        dfs(root)
        return ans
