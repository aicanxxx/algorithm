/*
 * @lc app=leetcode.cn id=748 lang=javascript
 *
 * [748] 最短补全词
 */

// @lc code=start
/**
 * @param {string} licensePlate
 * @param {string[]} words
 * @return {string}
 */
var shortestCompletingWord = function(licensePlate, words) {
  const plateObj = {};
  for(let i = 0; i < licensePlate.length; i++) {
    const plateStr = licensePlate[i].toLowerCase();
    if (/[a-zA-Z]/.test(plateStr)) {
      const plateNum = plateObj[plateStr];
      if (plateNum) {
        plateObj[plateStr] = plateNum + 1;
      } else {
        plateObj[plateStr] = 1;
      }
    }
  }
  
  let result = '';
  for(let i = 0; i< words.length; i++){
    const obj = {};
    const word = words[i];
    for(let j = 0; j < word.length; j++){
      const charNum = obj[word[j]];
      if (charNum) {
        obj[word[j]] = charNum + 1;
      } else {
        obj[word[j]] = 1
      }
    }

    const plateArray = Object.keys(plateObj);
    let flag = false;
    for (let k = 0; k < plateArray.length; k++) {
      if (!obj[plateArray[k]] || obj[plateArray[k]] - plateObj[plateArray[k]] < 0) {
        flag = true;
        break;
      }
    }

    if (!flag && (!result || result.length > word.length)) {
      result = word;
    }
  }

  return result;
};
// 思路一样，为啥官方速度快这么多
// var shortestCompletingWord = function(licensePlate, words) {
//     const cnt = new Array(26).fill(0);
//     for (const ch of licensePlate) {
//         if (/^[a-zA-Z]+$/.test(ch)) {
//             ++cnt[ch.toLowerCase().charCodeAt() - 'a'.charCodeAt()];
//         }
//     }
//     let idx = -1;
//     for (let i = 0; i < words.length; ++i) {
//         const c = Array(26).fill(0);
//         for (let j = 0; j < words[i].length; ++j) {
//             const ch = words[i][j];
//             ++c[ch.charCodeAt() - 'a'.charCodeAt()];
//         }
//         let ok = true;
//         for (let j = 0; j < 26; ++j) {
//             if (c[j] < cnt[j]) {
//                 ok = false;
//                 break;
//             }
//         }
//         if (ok && (idx < 0 || words[i].length < words[idx].length)) {
//             idx = i;
//         }
//     }
//     return words[idx];
// };

// @lc code=end

