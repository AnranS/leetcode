from collections import defaultdict
from typing import List


class Solution:
    def longestEqualSubarray(self, nums: List[int], k: int) -> int:
        pos_lists = defaultdict(list)
        for i, x in enumerate(nums):
            pos_lists[x].append(i)

        ans = 0
        for pos in pos_lists.values():
            if len(pos) <= ans:
                continue  # 无法让 ans 变得更大
            left = 0
            for right, p in enumerate(pos):
                while p - pos[left] - (right - left) > k:  # 要删除的数太多了
                    left += 1
                ans = max(ans, right - left + 1)
        return ans
