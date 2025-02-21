from collections import defaultdict


class Solution:
    def numberOfSubstrings(self, s: str, k: int) -> int:
        ans = left = 0
        cnt = defaultdict(int)
        for c in s:
            cnt[c] += 1
            while cnt[c] >= k:
                cnt[s[left]] -= 1
                left += 1
            ans += left
        return ans
