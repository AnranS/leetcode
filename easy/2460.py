from typing import List


class Solution:
    def applyOperations(self, nums: List[int]) -> List[int]:
        n = len(nums)
        i = 0
        while i < n - 1:
            if nums[i] == nums[i + 1]:
                nums[i] = nums[i] * 2
                nums[i + 1] = 0
                i += 2
            else:
                i += 1
        i = 0
        for x in nums:
            if x != 0:
                nums[i] = x
                i += 1
        # 剩余元素变0
        for j in range(i, n):
            nums[j] = 0
        return nums
