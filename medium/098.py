# Definition for a binary tree node.
from cmath import inf
from typing import Optional


class TreeNode:
    def __init__(self, val=0, left=None, right=None):
        self.val = val
        self.left = left
        self.right = right
class Solution:
    def dfs(self, root: Optional[TreeNode], left: int, right: int) -> bool:
        if root is None:
            return True
        x = root.val
        return (
            left < x < right
            and self.dfs(root.left, left, x)
            and self.dfs(root.right, x, right)
        )

    def isValidBST(self, root: Optional[TreeNode]) -> bool:
        return self.dfs(root, -inf, inf)
