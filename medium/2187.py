from typing import List


class Solution:
    def minimumTime(self, time: List[int], totalTrips: int) -> int:
        min_t = min(time)
        left = min_t - 1
        right = totalTrips * min_t

        while left + 1 < right:
            mid = (left + right) // 2
            if sum(mid // t for t in time) >= totalTrips:
                right = mid
            else:
                left = mid
        return right
