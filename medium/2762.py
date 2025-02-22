class Solution:
    def continuousSubarrays(self, nums: List[int]) -> int:
        ans = left = 0
        cnt = defaultdict(int)
        for right, c in enumerate(nums):
            cnt[c] += 1
            while max(cnt) - min(cnt) > 2:
                out = nums[left]
                cnt[out] -= 1
                if cnt[out] == 0:  # 避免最小值错误计算为0
                    del cnt[out]
                left += 1
            ans += right - left + 1
        return ans
