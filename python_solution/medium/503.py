from typing import List


class Solution:
    def nextGreaterElements(self, nums: List[int]) -> List[int]:
        n_len = len(nums)
        ans = [-1] * n_len
        m_stack = []
        for i in range(n_len * 2):
            index = i % n_len
            while m_stack and nums[m_stack[-1]] < nums[index]:  # 当前元素大于栈顶
                ans[m_stack.pop()] = nums[index]
            m_stack.append(index)
        return ans
