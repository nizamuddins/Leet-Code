// length of substring

const string = 'bbbbb';
let array = [];
for (let i = 0; i < string.length; i++) {
    array.push(string[i])
}
let set = new Set(array);
let length = 0;
for (let arr of set) {
    length++;
}
console.log(length)

