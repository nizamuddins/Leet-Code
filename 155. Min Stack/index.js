let s;
var MinStack = function() {
   s = []
};

/** 
 * @param {number} val
 * @return {void}
 */
MinStack.prototype.push = function(val) {
   return s.push(val)
};

/**
 * @return {void}
 */
MinStack.prototype.pop = function() {
    return s.pop()
};

/**
 * @return {number}
 */
MinStack.prototype.top = function() {
    return  s[s.length-1];
};

/**
 * @return {number}
 */
MinStack.prototype.getMin = function() {
  let min = 9999999999;
  for(let i of s){
      if(min>i){
          min = i
      }
  }
  return min  
};

