class Solution:
    def hasAllCodes(self, s: str, k: int) -> bool:
        ss = set()

        for i in range(len(s) - k + 1):
            sub_s = s[i : i + k]
            ss.add(sub_s)
        return len(ss) == 2**k
