class Solution:
    def equalSubstring(self, s: str, t: str, maxCost: int) -> int:
        ans = left = 0
        n = len(s)
        cost = 0
        for right in range(n):
            tmp = abs(ord(s[right]) - ord(t[right]))
            cost += tmp
            if cost <= maxCost:
                ans = max(ans, right - left + 1)
            else:
                while cost > maxCost:
                    cost -= abs(ord(s[left]) - ord(t[left]))
                    left += 1
        return ans


ans = Solution().equalSubstring("krrgw", "zjxss", 19)
print(ans)
