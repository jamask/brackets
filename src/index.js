module.exports = function check(str, bracketsConfig) {
  // check('([{}])', [['(', ')'], ['[', ']'], ['{', '}']]) // -> true
  let arr = str.split("");
  let stack = [];
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < bracketsConfig.length; j++) {
      if (arr[i] == bracketsConfig[j][0]) {
        if (stack.length == 0) {
          stack.push(arr[i]);
        } else if (stack[stack.length-1] == bracketsConfig[j][1]) {
          stack.pop();
        } else {
          stack.push(arr[i]);
        }
      } else if (arr[i] == bracketsConfig[j][1]) {
        if (stack.length > 0) {
          if (stack[stack.length-1] == bracketsConfig[j][0]) {
            stack.pop();
          } else {
            return false;
          }
        } else {
          return false;
        }
      }
    }
  }
  if (stack.length == 0) {
    return true;
  }  else {
    return false;
  }
}
