//1. Calculator can do the addition of two numbers

function addCalculator(a, b) {
    if(a == undefined || typeof a != "number" || b == undefined || typeof b != "number"){
        throw new Error("Error adding two numbers!");
    }else{
        return a + b;
    }   
  }
  
//   2. Using TDD implement other functions for:
//   • Subtracting two numbers
function subtractCalculator(a, b) {
    return a - b;
  }
  
//   • Multiplication of two numbers
function multiplyCalculator(a, b) {
    if(typeof a =="string" || typeof b =="string"){
        throw new Error("Error multiplying with string!");
    }else{
        return a * b;
    }   
  }
  
//   • Dividing two numbers
function divideCalculator(a, b) {
    if(b == 0){
        throw new Error("Error dividing with 0!");
    }else{
        return a / b;
    }   
  }
  
//   • Addition a few numbers in one call (call addCalculator with more than 2 arguments and get correct result)
function addAFewNumbersCalculator(...args) {
    let sum = 0;
    
    for (let index = 0; index < args.length; index++) {
        sum+= args[index];
    }
    return sum;
  }
  
module.exports = {addCalculator, subtractCalculator, divideCalculator, multiplyCalculator, addAFewNumbersCalculator};


