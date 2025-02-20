from collections import defaultdict
from typing import Counter


class Solution:
    def maxFreq(self, s: str, maxLetters: int, minSize: int, maxSize: int) -> int:
        n = len(s)
        sub_cnt = defaultdict(int)
        for k in range(minSize, maxSize + 1):
            cnt = Counter(s[: k - 1])
            for i in range(k - 1, n):
                in_ = s[i]
                cnt[in_] += 1
                if len(cnt) <= maxLetters:
                    sub_cnt[s[i - k + 1 : i + 1]] += 1
                out_ = s[i - k + 1]
                cnt[out_] -= 1
                if cnt[out_] == 0:
                    del cnt[out_]
        v = sub_cnt.values()
        if len(v) == 0:
            return 0
        else:
            return max(v)


res = Solution().maxFreq("abcde", 2, 3, 3)
print(res)
