from typing import List


class Solution:
    def maximumTastiness(self, price: List[int], k: int) -> int:
        price.sort()

        def check(d: int) -> int:
            cnt, pre = 1, price[0]
            for p in price:
                if p >= pre + d:
                    cnt += 1
                    pre = p
            return cnt

        left, right = 0, (price[-1] - price[0]) // (k - 1) + 1
        while left + 1 < right:
            mid = (left + right) // 2
            if check(mid) >= k:
                left = mid
            else:
                right = mid
        return left
