class Solution:
    def minimumLength(self, s: str) -> int:
        n = len(s)
        left = 0
        right = n - 1
        while left < right and s[left] == s[right]:
            c = s[left]
            while left <= right and s[left] == c:
                left += 1
            while right >= left and s[right] == c:
                right -= 1
        return right - left + 1

ans = Solution().minimumLength("bcb")
print(ans)  # 2