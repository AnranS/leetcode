struct Solution;

// Definition for singly-linked list.
#[derive(PartialEq, Eq, Clone, Debug)]
pub struct ListNode {
    pub val: i32,
    pub next: Option<Box<ListNode>>,
}

impl ListNode {
    #[inline]
    fn new(val: i32) -> Self {
        ListNode { next: None, val }
    }
}
impl Solution {
    pub fn add_two_numbers(
        l1: Option<Box<ListNode>>,
        l2: Option<Box<ListNode>>,
    ) -> Option<Box<ListNode>> {
        let (mut l1, mut l2) = (l1, l2);
        let mut res = Some(Box::new(ListNode::new(0)));
        let mut tail = &mut res;
        let mut overflow = false;
        while l1.is_some() || l2.is_some() || overflow {
            let l1_v = match l1 {
                Some(node) => {
                    l1 = node.next;
                    node.val
                }
                None => 0,
            };
            let l2_v = match l2 {
                Some(node) => {
                    l2 = node.next;
                    node.val
                }
                None => 0,
            };
            let sum = l1_v + l2_v + if overflow { 1 } else { 0 };
            let sum = if sum >= 10 {
                overflow = true;
                sum - 10
            } else {
                overflow = false;
                sum
            };
            tail.as_mut().unwrap().next = Some(Box::new(ListNode::new(sum)));
            tail = &mut tail.as_mut().unwrap().next;
        }
        res.unwrap().next
    }
}
