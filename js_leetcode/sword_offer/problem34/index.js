var pathSum = function(root, sum) {
    let res = [];
    let path = [];
    function dfs(root) {
        if(!root) return;
        path.push(root.val);
        if(!root.left && !root.right) {
            let p = path.slice();
            let pathSum = p.reduce((prev, next) => prev+next, 0);
            if(pathSum === sum) res.push(p);
        }
        dfs(root.left);
        dfs(root.right);
        path.pop();
    }
    dfs(root);
    return res;
};