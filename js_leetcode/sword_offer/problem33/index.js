var verifyPostorder = function (postorder) {
    let len = postorder.length;
    if (len < 2) return true;
    // 确定根节点
    let root = postorder[len - 1];
    let leftEnd = 0;
    for (let i = 0; i < len - 1; i++) {
        if (postorder[i] > root) break;
        leftEnd = i;
    }
    // 判断右子树是否合理
    for (let i = leftEnd + 1; i < len; i++) {
        if (postorder[i] < root) return false;
    }

    return verifyPostorder(postorder.slice(0, leftEnd + 1)) && verifyPostorder(postorder.slice(leftEnd, -1));
};

let arr = [1, 2, 5, 10, 6, 9, 4, 3];

console.log(verifyPostorder(arr));