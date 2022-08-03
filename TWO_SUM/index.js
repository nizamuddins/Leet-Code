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
