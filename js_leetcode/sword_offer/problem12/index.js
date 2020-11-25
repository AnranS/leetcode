/**
 * @param {character[][]} board
 * @param {string} word
 * @return {boolean}
 */
var exist = function (board, word) {

    function dfs(i, j, index) {
        if (i < 0 || j < 0 || i > board.length - 1 || j > board[0].length - 1 || board[i][j] !== word[index]) {
            return false;
        }
        if (index === word.length - 1) return true;
        let current = board[i][j];
        board[i][j] = '#';
        let res = dfs(i - 1, j, index + 1) || dfs(i + 1, j, index + 1) || dfs(i, j - 1, index + 1) || dfs(i, j + 1, index + 1);
        board[i][j] = current;
        return res;
    }

    for (let i = 0; i < board.length; i++) {
        for (let j = 0; j < board[i].length; j++) {
            if (dfs(i, j, 0)) return true;
        }
    }

    return false;
};

let board = [["A","B","C","E"],["S","F","C","S"],["A","D","E","E"]];
let word = "ABCCED";

console.log(exist(board, word));