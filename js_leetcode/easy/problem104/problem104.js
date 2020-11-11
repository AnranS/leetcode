/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
var maxDepth = function (root) {
    if(!root) return 0;
    let max = 0;
    let current = 0;
    // 遍历函数
    let help = (root) => {
        if (root === null) return;
        if (!root.left && !root.right) {
            max = Math.max(max, current);
            current = 0;
        }
        current = current + 1;
        if (root.left) help(root.left);
        if (root.right) help(root.right);
    }
    help(root);
    return max + 1;
};

function TreeNode(val) {
    this.val = val;
    this.left = this.right = null;
}

let t1 = new TreeNode(3);
let t2 = new TreeNode(9);
let t3 = new TreeNode(20);
let t4 = new TreeNode(15);
let t5 = new TreeNode(17);
t1.left = t2;
t1.right = t3;
t3.left = t4;
t3.right = t5;

maxDepth(t1);