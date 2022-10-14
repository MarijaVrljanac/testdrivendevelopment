//4. Using TDD implement function (you can use more private functions to separate logic) for analyze an array of numbers.

function analyze(...args) {
    let numOfElements = args.length;   
    let avgValue = args.reduce((a,b)=>a+b,0)/args.length;
    let maxValue = Math.max(...args);
    let minValue = Math.min(...args);
    let obj={length:numOfElements, average:avgValue, max:maxValue, min:minValue};

    for (let index = 0; index < args.length; index++) {
        const element = args[index];
        if(typeof element == "string" || element == undefined){
            throw new Error("Error working with string or undefined!");
        }else{
            console.log(obj);
            return obj;
        }
    }     
}

analyze(5,7);

module.exports = { analyze };
