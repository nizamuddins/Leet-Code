nums = [3,1,2,10,1];
var runningSum = function (num) {
    let num1 = []
    for (let i = 0; i < num.length; i++) {
        if (i === 0) {
            num1.unshift(num[i])
        } else {
            let num2 = num[i] + num1[i-1];
            num1.push(num2);
        }

    }

    return num1

};

let result = runningSum(nums);
console.log(result)