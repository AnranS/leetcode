from collections import defaultdict


class Solution:
    def maximumLengthSubstring(self, s: str) -> int:
        cnt = defaultdict(int)
        ans = left = 0
        n = len(s)
        for right in range(n):
            cnt[s[right]] += 1
            if cnt[s[right]] <= 2:
                ans = max(ans, right - left + 1)
            else:
                while cnt[s[right]] > 2:
                    cnt[s[left]] -= 1
                    left += 1
        return ans


res = Solution().maximumLengthSubstring("bcbbbcba")
print(res)
