# Definition for a binary tree node.
class TreeNode:
    def __init__(self, val=0, left=None, right=None):
        self.val = val
        self.left = left
        self.right = right
from typing import Optional


class Solution:
    def searchBST(self, root: Optional[TreeNode], val: int) -> Optional[TreeNode]:
        if not root:
            return None
        stack = [root]
        while stack:
            size = len(stack)
            while size != 0:
                node = stack.pop(0)
                if node.val == val:
                    return node
                if val <= node.val and node.left:
                    stack.append(node.left)
                elif node.right:
                    stack.append(node.right)
                size -= 1
        return None
