package main

import "fmt"

type ListNode struct {
	Val  int
	Next *ListNode
}

func main() {
	node1 := new(ListNode)
	node1.Val = 2
	node2 := new(ListNode)
	node2.Val = 4
	node3 := new(ListNode)
	node3.Val = 3

	node1.Next = node2
	node2.Next = node3

	tmp:=node1
	for tmp != nil {
		fmt.Println(tmp.Val)
		tmp=tmp.Next
	}
}
