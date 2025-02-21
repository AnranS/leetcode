from collections import defaultdict
from typing import Counter, List


class Solution:
    def countCompleteSubarrays(self, nums: List[int]) -> int:
        k = len(Counter(nums))
        ans = left = 0
        cnt = defaultdict(int)
        for n in nums:
            cnt[n] += 1

            while len(cnt) >= k:
                out = nums[left]
                cnt[out] -= 1
                if cnt[out] == 0:
                    del cnt[out]
                left += 1
            ans += left
        return ans
