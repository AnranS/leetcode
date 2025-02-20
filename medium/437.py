# Definition for a binary tree node.
class TreeNode:
    def __init__(self, val=0, left=None, right=None):
        self.val = val
        self.left = left
        self.right = right


from typing import Optional


class Solution:
    ans = 0

    def dfs(self, root: Optional[TreeNode], targetSum: int):
        if not root:
            return
        if targetSum == root.val:
            self.ans += 1
        self.dfs(root.left, targetSum - root.val)
        self.dfs(root.right, targetSum - root.val)

    def pathSum(self, root: Optional[TreeNode], targetSum: int) -> int:
        if root:
            self.dfs(root, targetSum)
            self.pathSum(root.left, targetSum)
            self.pathSum(root.right, targetSum)
        return self.ans
