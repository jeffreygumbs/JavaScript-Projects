// Create variables of different types
let number = 42;
let text = "Hello, World!";
let boolean = true;
let array = [1, 2, 3];
let object = { name: "John", age: 30 };
let undefinedVar;
let nullVar = null;

// Type Coercion Examples
document.write("<h2>Type Coercion Examples:</h2>");

// Number + String coercion
document.write("5 + '10' = " + (5 + "10") + "<br>");
document.write("Type of (5 + '10'): " + typeof (5 + "10") + "<br><br>");

// Boolean + String coercion
document.write("true + ' is the answer' = " + (true + " is the answer") + "<br>");
document.write("Type of (true + ' is the answer'): " + typeof (true + " is the answer") + "<br><br>");

// Number + Boolean coercion
document.write("5 + true = " + (5 + true) + "<br>");
document.write("Type of (5 + true): " + typeof (5 + true) + "<br><br>");

// String to Number coercion
document.write("'10' - 5 = " + ("10" - 5) + "<br>");
document.write("Type of ('10' - 5): " + typeof ("10" - 5) + "<br><br>");

// Automatic type coercion in comparisons
document.write("'10' == 10: " + ("10" == 10) + "<br>");
document.write("'10' === 10: " + ("10" === 10) + "<br><br>");

// Original typeof examples
document.write("<h2>Original Type Examples:</h2>");

document.write("Variable: number = " + number + "<br>");
document.write("Type of number: " + typeof number + "<br><br>");

document.write("Variable: text = " + text + "<br>");
document.write("Type of text: " + typeof text + "<br><br>");

document.write("Variable: boolean = " + boolean + "<br>");
document.write("Type of boolean: " + typeof boolean + "<br><br>");

document.write("Variable: array = " + array + "<br>");
document.write("Type of array: " + typeof array + "<br><br>");

document.write("Variable: object = " + JSON.stringify(object) + "<br>");
document.write("Type of object: " + typeof object + "<br><br>");

document.write("Variable: undefinedVar = " + undefinedVar + "<br>");
document.write("Type of undefinedVar: " + typeof undefinedVar + "<br><br>");

document.write("Variable: nullVar = " + nullVar + "<br>");
document.write("Type of nullVar: " + typeof nullVar + "<br>");

// Strict Equality (===) Examples
document.write("<h2>Strict Equality (===) Examples:</h2>");

// Same type and value - returns true
let strictEqual1 = 100 === 100;
document.write("100 === 100: " + strictEqual1 + "<br>");

// Different type and different value - returns false
let strictEqual2 = "50" === 25;
document.write("'50' === 25: " + strictEqual2 + "<br>");

// Different type but same value - returns false
let strictEqual3 = "100" === 100;
document.write("'100' === 100: " + strictEqual3 + "<br>");

// Same type but different value - returns false
let strictEqual4 = 75 === 25;
document.write("75 === 25: " + strictEqual4 + "<br>");

// Logical AND (&&) and OR (||) Examples
document.write("<h2>Logical AND (&&) and OR (||) Examples:</h2>");

// AND operator examples
document.write("<h3>AND (&&) Operator:</h3>");
document.write("true && true = " + (true && true) + "<br>");  // Returns true
document.write("true && false = " + (true && false) + "<br>"); // Returns false

// OR operator examples
document.write("<h3>OR (||) Operator:</h3>");
document.write("true || false = " + (true || false) + "<br>");  // Returns true
document.write("false || false = " + (false || false) + "<br>"); // Returns false

// Logical NOT (!) Examples
document.write("<h2>Logical NOT (!) Operator Examples:</h2>");

// NOT operator with false - returns true
document.write("!false = " + (!false) + "<br>");  // Returns true because NOT false is true

// NOT operator with true - returns false
document.write("!true = " + (!true) + "<br>");  // Returns false because NOT true is false

// Double NOT operator example
document.write("!!true = " + (!!true) + "<br>");  // Returns true because NOT NOT true is true

// Greater than and Less than Examples
document.write("<h2>Greater Than and Less Than Examples:</h2>");

// Greater than operator
document.write("50 > 25: " + (50 > 25) + "<br>");  // Returns true because 50 is greater than 25

// Less than operator
document.write("10 < 20: " + (10 < 20) + "<br>");  // Returns true because 10 is less than 20

// Math operation with console.log()
console.log("Math Operation Result: ", 25 * 5 + 10 / 2);
