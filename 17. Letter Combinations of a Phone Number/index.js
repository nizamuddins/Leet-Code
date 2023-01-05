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