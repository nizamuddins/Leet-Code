//  Plus one(LC-66)

let digits = [1,9,9,9];
 var plusOne = function(digits) {
    let n = digits.length;
    let index = digits.length-1
    while(index>0 && digits[index]==9){
        digits[index--] = 0;
    }
    if(digits[index] == 9){
        let ind = 0;
        for(let i=0;i<=n;i++){
            if(i==0){
                digits[ind++] = 1;
            }else{
                digits[ind++] = 0;
            }
        }
        return digits;

    }
    
    digits[index]++;
    return digits;
};

console.log(plusOne(digits))