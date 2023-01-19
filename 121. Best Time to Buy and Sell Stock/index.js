let prices = [7,1,5,3,6,4];
var maxProfit = function(prices) {
    let max = 0;
    let i = 0;
    let j = 1;
    for(;j<prices.length;j++){
        if(prices[i]<prices[j]){
            if(max<prices[j]-prices[i]){
                max = prices[j]-prices[i]
            }
        }else{
            i = j
        }
    }
    return max;
};
console.log(maxProfit(prices))