let s = "acb"
let t = "ahbgdc"
var isSubsequence = function (s, t) {
    if (s.length == 0 && t.length == 0) 
        return true;
    if (t.length == 0) 
        return false;
    for (let i = 0; i < s.length; i++) {
        for (let j = 0; j < t.length; j++) {
            if (t.includes(s[i])) {
                if (s[i] == t[j]) {
                    if (j == t.length - 1) {
                        t = " ";
                        break;
                    } else {
                        let x = t.slice(j + 1);
                        t = x;
                        break;
                    }
                }
            } else {

                return false;
            }
        }
    }
    return true;

};

let result = isSubsequence(s, t);
console.log(result);