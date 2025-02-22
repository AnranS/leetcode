from collections import defaultdict


class Solution:
    def countKConstraintSubstrings(self, s: str, k: int) -> int:
        ans = left = 0
        cnt = defaultdict(int)
        for i, c in enumerate(s):
            cnt[c] += 1
            while cnt["0"] > k and cnt["1"] > k:
                cnt[s[left]] -= 1
                left += 1
            ans += i - left + 1
        return ans