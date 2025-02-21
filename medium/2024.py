from collections import defaultdict


class Solution:
    def maxConsecutiveAnswers(self, answerKey: str, k: int) -> int:
        ans = left = 0
        cnt = defaultdict(int)

        for right, c in enumerate(answerKey):
            cnt[c] += 1
            while cnt["T"] > k and cnt["F"] > k:
                cnt[answerKey[left]] -= 1
                left += 1
            ans = max(ans, right - left + 1)
        return ans
