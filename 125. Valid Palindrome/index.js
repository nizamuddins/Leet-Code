let s = "Marge, let's \"[went].\" I await {news} telegram.";
var isPalindrome = function(s) {
let char = ",.+-:@#$%^&*'`[]_()``{}\?=!;";
let char2 = '""';
let char3 = char2.split("");
let char4 = char.split("");
let s2 = s.split("");
for(let k = 0;k<s.length;k++){
    if(char4.includes(s2[k]) || char3.includes(s2[k])){
        s2.splice(k,1);
        k = k-1
    }
}
let s3 = s2.join("").split(" ").join("").toLowerCase()
for(let i = 0;i<s3.length;i++){
        for(let j=s3.length-i-1;j>=0;j--){
            if(s3[i] != s3[j]){
                return false
            }else{
                break;
            }
        }
};
return true
}
console.log(isPalindrome(s))