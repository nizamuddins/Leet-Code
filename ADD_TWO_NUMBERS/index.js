const l11 = [
    9,
    9,
    9,
    9,
    9,
    9,
    9
];
const l22 = [9, 9, 9, 9];
var addTwoNumbers = function (l1, l2) {
    let val1 = ' ';
    let val2 = ' ';
    for (let i = 0; i < l1.length; i++) {
        val1 += String(l1[i]);
    }
    for (let j = 0; j < l2.length; j++) {
        val2 += String(l2[j])
    }
    let value = Number(val1) + Number(val2);
    let number = String(value);
    let array = [];
    for (let i = 0; i < number.length; i++) {
        array.push(Number(number[i]))
    }
    array.reverse();
    return array;
};
const output2 = addTwoNumbers(l11, l22);
console.log(output2)


