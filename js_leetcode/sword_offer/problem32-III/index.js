/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[][]}
 */
var levelOrder = function(root) {
    if(root === null) return [];

    let queue = [root], res = [], flag = true;

    while(queue.length) {
        let len = queue.length, levelArr = [];

        for(let i = 0; i < len; i++) {
            let node = queue.shift();
            flag ? levelArr.push(node.val) : levelArr.unshift(node.val);
            node.left && queue.push(node.left);
            node.right && queue.push(node.right);
        }
        flag = !flag;
        res.push(levelArr);
        levelArr = [];
    }
    return res;
};