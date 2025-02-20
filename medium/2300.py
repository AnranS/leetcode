from bisect import bisect_right
from typing import List


class Solution:
    def successfulPairs(
        self, spells: List[int], potions: List[int], success: int
    ) -> List[int]:
        pairs = []
        potions.sort()
        p_len = len(potions)
        success -= 1
        for i in spells:
            count = p_len - bisect_right(potions, success // i)
            pairs.append(count)
        return pairs

