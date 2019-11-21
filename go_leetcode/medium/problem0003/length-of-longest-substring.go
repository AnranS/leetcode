package problem0003

/*
	题目描述：
	给定一个字符串，请你找出其中不含有重复字符的 最长子串 的长度。
	示例1：
		输入: "abcabcbb"
		输出: 3
		解释: 因为无重复字符的最长子串是 "abc"，所以其长度为 3。
	示例2：
		输入: "bbbbb"
		输出: 1
		解释: 因为无重复字符的最长子串是 "b"，所以其长度为 1。
*/

func max(a ,b int) int {
	if a>b {
		return a
	} else {
		return b
	}
}

func lengthOfLongestSubstring(s string) int {
	// 滑动窗口
	n := len(s) // 字符串长度
	tmpMap := make(map[uint8]int)
	res:=0
	for i, j := 0, 0; j < n; j++ {
		tmp,ok:=tmpMap[s[j]]
		if ok {
			i=max(tmp, i)
		}
		res = max(res, j-i+1)
		tmpMap[s[j]] = j+1
	}
	return res
}
