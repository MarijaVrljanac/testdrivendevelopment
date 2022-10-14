const { getChangeVendingMachine } = require("./vendingMachine");

describe("Paid amount must be greater than total price!", ()=>{
    test("It should return error because paid amount is less than the total price", ()=>{
        expect(() =>(getChangeVendingMachine(200, 150)).toThrowError("Error payment!"))
    });
})

describe("Paid amount must be a number!", ()=>{
    test("It should return error because paid amount is of type string", ()=>{
        expect(() =>(getChangeVendingMachine(200, "150")).toThrowError("Error paying with string!"))
    });
})
