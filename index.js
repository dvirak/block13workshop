// IS TRUTHY
// create a testValue variable
// create if statement to test different values
// if testValue = "I am a string", console.log(true)
// if testValue = false, console.log("The boolean value false is falsy")
// if testValue = null, console.log("The null value is falsy")
// if testValue = "", console.log(The empty string is falsy (the only falsy string))

const testValue = "I am a string";

if (testValue) {
  console.log("true");
} else if (testValue === false) {
  console.log("The boolean value false is falsy");
} else if (testValue === null) {
  console.log("The null value is falsy");
} else if (testValue === undefined) {
  console.log("undefined is falsy");
} else if (testValue === 0) {
  console.log("The number 0 is falsy (the only falsy number)");
} else if (testValue === "") {
  console.log("The empty string is falsy (the only falsy string)");
}

// NUMBER LINE
// create 2 variables num1A and num2A
// create variable sum equal to sum of num1A and num2A
// create if statement
// if sum < -1000, console.log(sum + "is less than -1000")
// if sum < 0, console.log(sum + "is a negative number")
// if sum = 0, console.log(sum + "is equal to 0")
// if sum > 100, console.log(sum + "is greater than 100") put this code first to avoid getting passed through as > 0
// if sum > 0, console.log(sum + "is greater than 0") dont technically need this could just put an else statement but it makes it clear
const num1A = -1000;
const num2A = -10;
const sum = num1 + num2;

if (sum < -1000) {
  console.log(`${sum} is less than -1000`);
} else if (sum < 0) {
  console.log(`${sum} is a negative number`);
} else if (sum === 0) {
  console.log(`${sum} is equal to 0`);
} else if (sum > 100) {
  console.log(`${sum} is greater than 100`);
} else if (sum > 0) {
  console.log(`${sum} is greater than 0`);
}

// GREATER THAN 5
//  Create 2 variables, num1 and num2
// compare each variable, return true if both > 5
// else return false

let num1B = 10000;
let num2B = -1000;

if (num1B >= 5 && num2B >= 5) {
  console.log(true);
} else {
  console.log(false);
}

// PAIR AND COMPARE
// make 4 variables
// compare param1A to param1B and param2A to param2B
// if either is true print true

const param1A = 11;
const param1B = "eleven";
const param2A = "four";
const param2B = "for";

if (param1A === param1B || param2A === param2B) {
  console.log(true);
} else {
  console.log(false);
}

console.log(param1A === param1B || param2A === param2B ? true : false);
