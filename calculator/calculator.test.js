const {addCalculator,subtractCalculator, multiplyCalculator, divideCalculator, addAFewNumbersCalculator} = require("./calculator");

test('Jest is working', () => {
    expect(1).toBe(1);
 });

 describe('First group of tests', () => {
    test('Jest is working', () => {
       expect(1).toBe(1);
    });
 });
 
 describe('Second group of tests', () => {
    test('Second test is working also', () => {
       expect(1).toBe(1);
    });
 });

// 3. Write new tests that use already implemented functions, but also handle edge cases and possible issues:
// • Add handling error that will occur when function is called with only 1 parameter, or without any parameters (all currently existing functions)
 describe("String or one argument error", ()=>{
    test("It should throw error if called with non number or 1 argument", ()=>{
        expect(() =>addCalculator(9)).toThrowError('Error adding two numbers!');
    });
})

// • Add handling error that will occur when function for dividing is called with second parameter 0 (when you try to divide by 0)
describe("Dividing with second parameter 0 error", ()=>{
    test("It should throw error if called with second parameter 0", ()=>{
        expect(() =>divideCalculator(2,0)).toThrowError('Error dividing with 0!');
    });
})

// • Add handling error that will occur when one of multiplication parameters is string
describe("Multiplying with string error", ()=>{
    test("It should throw error if one of multiplication parameters is string", ()=>{
        expect(() =>multiplyCalculator(2,"4")).toThrowError('Error multiplying with string!');
    });
})

test("addition of 2 and 3 to equal 5", () => {
  expect(addCalculator(2, 3)).toBe(5);
});


test("subtraction of 5 and 3 to equal 2", () => {
  expect(subtractCalculator(5, 3)).toBe(2);
});


test("multiplication of 2 and 3 to equal 6", () => {
  expect(multiplyCalculator(2, 3)).toBe(6);
});


test("division of 6 and 3 to equal 2", () => {
  expect(divideCalculator(6, 3)).toBe(2);
});


test("addition of 2 and 3 and 4 to equal 9", () => {
  expect(addAFewNumbersCalculator(2, 3, 4)).toBe(9);
});



