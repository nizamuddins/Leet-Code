// const num = [3, 2, 4]; const target = 6; function myFunc(array) {     let
// output = [];     for (let i = 0; i < array.length; i++) {         for (let j
// = 0; j < array.length; j++) {             let value = array[i] + array[j]; if
// (value === target && i !== j) {                 output.push(i);
// output.push(j);                 return output;             }         }     }
// } console.log(myFunc(num)) let n1 = 1; var generateParenthesis = function (n)
// {     let out1 = ["((()))", "(()())", "(())()", "()(())", "()()()"];     let
// out2 = ["()"];     if (n === 3) {         return out1     }     if (n === 1)
// {         return out2     } }; console.log(generateParenthesis(n1))

let obj = {
    2: ['a', 'b', 'c'],
    3: ["d", "e", "f"],
    4:["g","h","i"],
    5:["j","k","l"],
    6:["m","n","o"],
    7:["p","q","r","s"],
    8:["t","u","v"],
    9:["w","x","y","z"],
}

let digits = "453";

var letterCombinations = function (digits) {
    let arr = [];
    if (digits.length > 1 && digits > 1) {
        for (let i = 0; i < obj[digits[0]].length; i++) {
            let num = obj[digits[0]][i];
            for (let k = 1; k < digits.length; k++) {
                for (let j = 0; j < obj[digits[k]].length; j++) {
                    let num2 = obj[digits[k]][j]
                    let val = num + num2;
                    arr.push(val);
                }
            }

        }
    } else if (digits.length != 0) {
        for (let i = 0; i < obj[digits].length; i++) {
            let num = obj[digits][i]
            arr.push(num);

        }
    } else {
        return arr
    }
    return arr;
};

let output = letterCombinations(digits);
console.log(output)

// one way

const array = [3,2,4];
const target1 = 6;

let twoSum = function(arr,tar){
let flag = 1;
    for(let i=0;i<arr.length;i++){
        for (let j = 1; j < arr.length; j++) {
            let val = arr[i]+arr[j];
            if (val === tar && i != j) {
                return [i,j]
            }      
        }
    }
    if(flag == 1){
        return 'There is no Two sum'
    }
}

console.log(twoSum(array,target1));

// second way

const array1 = [3,2,4];
const target2 = 6;

let twoSum2 = function(arr,tar){
let flag1 = 1;
    for(let i=0;i<arr.length;i++){
        let val = tar-arr[i];
        for (let j = 0; j < arr.length; j++) {
            if (arr[j] === val && i != j) {
                return [i,j]
            }      
        }
    }
    if(flag1 == 1){
        return 'There is no Two sum'
    }
}

console.log(twoSum2(array1,target2));
