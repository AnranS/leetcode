from collections import defaultdict
from typing import List


class Solution:
    def countGood(self, nums: List[int], k: int) -> int:
        cnt = defaultdict(int)
        ans = left = pairs = 0
        for x in nums:
            pairs += cnt[x]
            cnt[x] += 1
            while pairs >= k:
                out = nums[left]
                cnt[out] -= 1
                pairs -= cnt[out]
                left += 1
            ans += left

        return ans
