var isHappy = function(n) {
    let n1 = String(n);
    let result = false 
    if(n1 == 1 || n1 == 7){
        return true
    }else if(n1.length == 1 && n1 != 1) {
        return false;
    }else{
        let val = 0
        for(let i = 0;i<n1.length;i++){
            val += Number(n1[i]) ** 2;
        }
    if(val == 1){
        return true
    }else{
        result = isHappy(val)
    }
    }
return result
};