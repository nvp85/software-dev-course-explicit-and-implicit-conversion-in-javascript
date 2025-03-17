/*

Part 1: Debugging Challenge
The JavaScript code below contains intentional bugs related to type conversion.
Please do the following:
  - Run the script to observe unexpected outputs.
  - Debug and fix the errors using explicit type conversion methods like  Number() ,  String() , or    Boolean()  where necessary.
  - Annotate the code with comments explaining why the fix works.

Part 2: Write Your Own Examples
Write their own code that demonstrates:
  - One example of implicit type conversion.
  - One example of explicit type conversion.

  *We encourage you to:
Include at least one edge case, like NaN, undefined, or null .
Use console.log() to clearly show the before-and-after type conversions.

*/

// JavaScript converts "5" into a number so the result is correct. But better to convert it explicitely for clarity:
let result = Number("5") - 2;
console.log("The result is: " + result);

let isValid = "false"; // Boolean() converts the string "false" into true because it is not empty
// fix: remove Boolean(), compare to the string "true" instead
if (isValid === "true") {
    console.log("This is valid!");
}

let age = "25";
let totalAge = Number(age) + 5; // JavaScript converts 5 into a string and concatinates two strings. 
// Fix: use Number() to convert age into a number.
console.log("Total Age: " + totalAge);

//  - One example of implicit type conversion.
let implicitStrToNum = "2" * 2; // string "2" is converted into a number 
console.log(implicitStrToNum); // Output: 4

console.log("Hi" * 5); // Output: NaN. "Hi" cannot be converted into a number
console.log(null + 5); // Output: 5. Null is converted into 0

//  - One example of explicit type conversion.
let explicitNullToBool = Boolean(null);
console.log(explicitNullToBool); // Output: false
// explicit null to string:
console.log(String(null) + "Hi"); // Output: "nullHi". null is converted into a string "null"