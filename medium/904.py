from collections import defaultdict
from typing import List


class Solution:
    def totalFruit(self, fruits: List[int]) -> int:
        ans = left = 0
        n = len(fruits)
        cnt = defaultdict(int)
        for right in range(n):
            cnt[fruits[right]] += 1
            if len(cnt) <= 2:
                ans = max(ans, right - left + 1)
            else:
                while len(cnt) > 2:
                    out = fruits[left]
                    cnt[out] -= 1
                    if cnt[out] == 0:
                        del cnt[out]
                    left += 1
        return ans
