const {analyze} = require("./arrayAnalyzer");;

describe("Working with string or undefined error", ()=>{
    test("It should throw error if one of elements is string, or undefined", ()=>{
        expect(() =>(analyze(2,"4")).toThrowError('Error working with string or undefined!'));
    });
})

describe("Array must have numbers", ()=>{
    test("It should throw error if called with string or undefined", ()=>{
        expect(() =>(analyze(9,0,"error")).toThrowError("Error working with string or undefined!"))
    });
})



describe("Array must have numbers", ()=>{
    test("It should be correct", ()=>{
        expect(() =>(analyze(9,0,4,6,35)).toThrowError("Error working with string or undefined!"))
    });
})



describe("Array must have numbers", ()=>{
    test("It should return error because of an empty array", ()=>{
        expect(() =>(analyze()).toThrowError("Error working with string or undefined!"))
    });
})