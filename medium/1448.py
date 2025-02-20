# Definition for a binary tree node.
from cmath import inf


class TreeNode:
    def __init__(self, val=0, left=None, right=None):
        self.val = val
        self.left = left
        self.right = right


class Solution:
    def goodNodes(self, root: TreeNode, mx=-inf) -> int:
        if not root:
            return 0
        else:
            left = self.goodNodes(root.left, max(mx, root.val))
            right = self.goodNodes(root.right, max(mx, root.val))
            return left + right + (mx <= root.val)
