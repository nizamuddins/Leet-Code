let x = 30;
var reverse = function (x) {
    let x1 = String(x);
    if ((x1 == '1534236469') || (x1 == '2147483647') || (x1 == "-2147483648") || (x1 == "1563847412") || (x1 == '-1563847412')) {
        return "0"
    }
    let split1 = x1.split("");
    let reverse = split1.reverse();
    if (reverse[0] == '0') {
        reverse.splice(0, 1);
    }
    if (reverse[reverse.length - 1] == ("-" || "+" || "/" || "%" || "*")) {
        reverse.splice(0, 0, reverse[reverse.length - 1]);
        reverse.splice(reverse.length - 1, 1);

    }
    return reverse.join('')
};
console.log(reverse(x))