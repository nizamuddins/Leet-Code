let x1 = 121;
var isPalindrome = function (x) {
    let x2 = String(x);
    for (let i = 0; i < x2.length; i++) {
        if (x2[0] == '-') {
            return 'false'
        } else if (x2[i] != x2[x2.length - i - 1]) {
            return 'false';
        }

    }
    return 'true';
};

const result = isPalindrome(x1);
console.log(result);
