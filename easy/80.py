from collections import defaultdict
from typing import List


class Solution:
    def removeDuplicates(self, nums: List[int]) -> int:
        cnt = defaultdict(int)
        ans = 0
        for n in nums:
            cnt[n] += 1
            if cnt[n] <= 2:
                nums[ans] = n
                ans += 1
        return ans