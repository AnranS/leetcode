from bisect import bisect_right
from typing import List


class Solution:
    def maxNumberOfAlloys(
        self,
        n: int,
        k: int,
        budget: int,
        composition: List[List[int]],
        stock: List[int],
        cost: List[int],
    ) -> int:
        ans = 0
        mx = min(stock) + budget
        for comp in composition:

            def f(num: int) -> int:
                money = 0
                for s, base, c in zip(stock, comp, cost):
                    if s < base * num:
                        money += (base * num - s) * c
                        if money > budget:
                            break
                return money

            ans += bisect_right(range(ans + 1, mx + 1), budget, key=f)
        return ans
