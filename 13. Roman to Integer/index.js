var romanToInt = function(s) {
    let map = new Map([["I",1],["V",5],["X",10],["L",50],["C",100],["D",500],["M",1000]])
    let sum = 0;
    s =  s.split("")
    for(let i= 0;i<s.length;i++){
        for(let j = i+1;j<s.length;j++){
            if(map.get(s[i])<map.get(s[j])){
                let value =  map.get(s[j])-map.get(s[i]);
                sum += value;
                s.shift();
                s.shift();
                i = i-1;
                break;
            }else{
                let val = map.get(s[i]);
                s.shift();
                sum += val;
                i = i-1;
                break
            }
        }
    }
    if(s.length != 0){
        sum += map.get(s[0])
    }
    return sum;
};