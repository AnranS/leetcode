class Solution:
    def divisorSubstrings(self, num: int, k: int) -> int:
        ans = left = 0
        s = str(num)

        for right, c in enumerate(s):
            while right - left + 1 > k:
                left += 1
            sub_s = s[left : right + 1]
            if len(sub_s) == k:
                n = int(sub_s)
                if n > 0 and num % n == 0:
                    ans += 1
        return ans


r = Solution().divisorSubstrings(430043, 2)
print("======> r", r)
