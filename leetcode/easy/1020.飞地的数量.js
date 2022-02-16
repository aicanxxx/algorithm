/*
 * @lc app=leetcode.cn id=1020 lang=javascript
 *
 * [1020] 飞地的数量
 */

// @lc code=start
/**
 * @param {number[][]} grid
 * @return {number}
 */

var dfs = function(grid, i, j) {
  const m = grid.length;
  const n = grid[i].length;
  grid[i][j] = 0;
  if (i - 1 >= 0 && grid[i - 1][j] === 1) {
    dfs(grid, i - 1, j);
  }

  if (i + 1 < m && grid[i + 1][j] === 1) {
    dfs(grid, i + 1, j);
  }

  if (j - 1 >= 0 && grid[i][j - 1] === 1) {
    dfs(grid, i, j - 1);
  }

  if (j + 1 < n && grid[i][j + 1] === 1) {
    dfs(grid, i, j + 1);
  }
}

var numEnclaves = function(grid) {
  const m = grid.length;
  const n = grid[0].length;
  const row = [0, m - 1];
  const col = [0, n - 1];
  let result = 0;
  for(let i = 0; i < 2; i++) {
    for(let j = 0; j < n; j++) {
      if (grid[row[i]][j] === 1){
        dfs(grid, row[i], j);
      }
    }
  }
  for(let i = 0; i < 2; i++) {
    for(let j = 1; j < m-1; j++) {
      if (grid[j][col[i]] === 1){
        dfs(grid, j, col[i]);
      }
    }
  }

  for(let i = 0; i < m; i++) {
    for(let j = 0; j < n; j++) {
      if (grid[i][j] === 1) {
        result ++;
      }
    }
  }
  return result;
};
// @lc code=end

