# Definition for a binary tree node.
from typing import List, Optional


class TreeNode:
    def __init__(self, val=0, left=None, right=None):
        self.val = val
        self.left = left
        self.right = right


class Solution:
    def leafSimilar(self, root1: Optional[TreeNode], root2: Optional[TreeNode]) -> bool:
        def traverse(node: TreeNode, nodes: List):
            if node:
                if not node.left and not node.right:
                    nodes.append(node.val)
                traverse(node.left, nodes)
                traverse(node.right, nodes)

        left = []
        right = []
        traverse(root1, left)
        traverse(root2, right)
        return left == right
