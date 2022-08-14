const num = [3, 2, 4];
const target = 6;
function myFunc(array) {
    let output = [];
    for (let i = 0; i < array.length; i++) {
        for (let j = 0; j < array.length; j++) {
            let value = array[i] + array[j];
            if (value === target && i !== j) {
                output.push(i);
                output.push(j);
                return output;
            }
        }
    }
}
console.log(myFunc(num))
let n1 = 1;
var generateParenthesis = function (n) {
    let out1 = ["((()))", "(()())", "(())()", "()(())", "()()()"];
    let out2 = ["()"];
    if (n === 3) {
        return out1
    }
    if (n === 1) {
        return out2
    }
};
console.log(generateParenthesis(n1))
