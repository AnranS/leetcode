package problem0001

func twoSum(nums []int, target int) []int {
	// 值做为map的键，index做为map的键
	index := make(map[int]int, len(nums))
	for i, b := range nums {
		if j, ok := index[target-b]; ok {
			return []int{j, i}
		}
		index[b] = i
	}
	return nil
}
