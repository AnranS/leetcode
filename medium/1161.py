# Definition for a binary tree node.
class TreeNode:
    def __init__(self, val=0, left=None, right=None):
        self.val = val
        self.left = left
        self.right = right
from cmath import inf
from typing import Optional


class Solution:
    def maxLevelSum(self, root: Optional[TreeNode]) -> int:
        stack = [root]
        level = 1
        ans = 1
        pre_sum = -inf
        while stack:
            size = len(stack)
            level_sum = 0
            while size != 0:
                node = stack.pop(0)
                level_sum += node.val
                if node.left:
                    stack.append(node.left)
                if node.right:
                    stack.append(node.right)
                size -= 1
            if level_sum > pre_sum:
                ans = level
                pre_sum = level_sum
            level += 1
        return ans
