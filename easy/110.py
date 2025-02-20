from typing import Optional

# Definition for a binary tree node.
class TreeNode:
    def __init__(self, val=0, left=None, right=None):
        self.val = val
        self.left = left
        self.right = right


class Solution:
    def isBalanced(self, root: Optional[TreeNode]) -> bool:
        
        def get_height(node: Optional[TreeNode]) -> int:
            if node is None:
                return 0
            lh = get_height(node.left)
            if lh == -1:
                return -1
            rh = get_height(node.right)
            if rh == - 1 or abs(rh - lh) > 1:
                return -1
            return max(lh, rh) + 1
        return get_height(root) != -1