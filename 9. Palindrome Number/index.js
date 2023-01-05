let x = 121;
var isPalindrome = function(x) {
    let x1 = String(x);
    for(let i = 0;i<x1.length;i++){
        if(x1[i] != x1[x1.length-i-1]){
            return false;
        }
    }
    return true;
};

console.log(isPalindrome(x))