/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[]}
 */
// 递归版本
// var inorderTraversal = function (root) {
//     let res = [];
//     function help(root) {
//         if(!root) return;
//         help(root.left);
//         res.push(root.val);
//         help(root.right);
//     }
//     help(root);
//     return res;
// };

/**
 * @description 迭代版本
 * @param {*} root 
 */
var inorderTraversal = function (root) {
    if(!root) return [];
    let res = [], stack = [];
    while(root) {
        stack.push(root);
        root = root.left;
    }
    while(stack.length) {
        let node = stack.pop();
        res.push(node.val);
        node = node.right;
        while(node) {
            stack.push(node);
            node = node.left;
        }
    }
    return res;
};

function TreeNode(val, left, right) {
    this.val = (val === undefined ? 0 : val)
    this.left = (left === undefined ? null : left)
    this.right = (right === undefined ? null : right)
}

let node1 = new TreeNode(1);
let node2 = new TreeNode(2);
let node3 = new TreeNode(3);
node1.right = node2;
node2.left = node3;

console.log(inorderTraversal(node1));