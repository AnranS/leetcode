from collections import defaultdict
from typing import List


class Solution:
    def maximumUniqueSubarray(self, nums: List[int]) -> int:
        cnt = defaultdict(int)
        ans = left = 0
        n = len(nums)
        s = 0
        for right in range(n):
            in_ = nums[right]
            cnt[in_] += 1
            s += in_
            if cnt[in_] == 1:
                ans = max(ans, s)
            else:
                while cnt[in_] != 1:
                    out_ = nums[left]
                    cnt[out_] -= 1
                    left += 1
                    s -= out_
        return ans


r = Solution().maximumUniqueSubarray([4, 2, 4, 5, 6])

print(r)
