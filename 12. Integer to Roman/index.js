var intToRoman = function(num) {
    let map1 = new Map([["M",1000],["CM",900],["D",500],["CD",400],["C",100],["XC",90],["L",50],["XL",40],["X",10],["IX",9],["V",5],["IV",4],["I",1]])
    let symbol = "";
    for(let i of map1){
        while(i[1]<=num){
            symbol += i[0];
            num -= i[1];
        }
    }
    return symbol
}