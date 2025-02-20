from typing import List
from sortedcontainers import SortedList  # 有序数据结构


class Solution:
    def getSubarrayBeauty(self, nums: List[int], k: int, x: int) -> List[int]:
        sl = SortedList(nums[: k - 1])
        ans = []
        for in_, out_ in zip(nums[k - 1 :], nums):
            sl.add(in_)
            ans.append(min(sl[x - 1], 0))
            sl.discard(out_)
        return ans


class Solution2:
    def getSubarrayBeauty(self, nums: List[int], k: int, x: int) -> List[int]:
        cnt = [0] * 101
        for num in nums[: k - 1]:
            cnt[num] += 1

        ans = [0] * (len(nums) - k + 1)
        for i, (in_, out) in enumerate(zip(nums[k - 1 :], nums)):
            cnt[in_] += 1
            left = x
            for j in range(-50, 0):
                left -= cnt[j]
                if left <= 0:
                    ans[i] = j
                    break
            cnt[out] -= 1
        return ans
