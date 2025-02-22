from collections import defaultdict
from typing import List


class Solution:
    def removeDuplicates(self, nums: List[int]) -> int:
        cnt = defaultdict(int)
        for n in nums:
            cnt[n] += 1
            print(cnt[n])
            if cnt[n] == 1:
                nums[len(cnt) - 1] = n
        return len(cnt)

Solution().removeDuplicates([1,1,2])  # 2