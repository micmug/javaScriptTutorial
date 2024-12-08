// comment ...
console.log("Hello World");
// primitive data types
console.log("%cPrimitive Data Types:", "font-weight: bold; font-size: 20px;");

let firstName;
console.log(firstName);
firstName = "John";
console.log(firstName);

let lastName;
firstName = "John";
lastName = "Doe";
console.log(firstName + " " + lastName);

let interestRate = 0.3;
console.log(interestRate);
interestRate = 1;
console.log(interestRate);

const interestRate2 = 0.3;
console.log("'" + interestRate2 + "'" + " is a constant");
//interestRate2 = 1;
//console.log(interestRate2);

firstName = "Bird";
let age = 2;
console.log(firstName + " is " + age + " years old");

let person = {
  firstName: "John",
  lastName: "Doe",
  age: 50,
  eyeColor: "blue",
};
console.log(
  person.firstName +
    " " +
    person["lastName"] +
    ", Age: " +
    person.age +
    ", Eye Color: " +
    person.eyeColor
);

console.log(
  firstName +
    " is a " +
    typeof firstName +
    " | " +
    age +
    " is a " +
    typeof age +
    " | " +
    person.firstName +
    " " +
    person["lastName"] +
    ", Age: " +
    person.age +
    ", Eye Color: " +
    person.eyeColor +
    " is a " +
    typeof person
);

let stateX = true;
let stateY = undefined;
let stateZ = null;
console.log(
  stateX +
    " is a " +
    typeof stateX +
    " | " +
    stateY +
    " is a " +
    typeof stateY +
    " | " +
    stateZ +
    " is a " +
    typeof stateZ
);

// reference data types
console.log("%cReference Data Types:", "font-weight: bold; font-size: 20px;");
// objects
console.log("%cObjects:", "font-size: 16px;");

let planet = {
  plnetsName: "Earth",
  planetColor: "Blue",
  planetSize: 12756,
  planetPosition: 3,
};
console.log(planet + " is a " + typeof planet);
console.log(planet);

console.log(
  planet.planetPosition + " uses Dot Notation -> (planet.planetPosition)"
);

console.log(
  planet["planetSize"] + ' uses Brackett Notation -> (planet["planetSize"])'
);

// Arrays
console.log("%cArrays:", "font-size: 16px;");

let selectedColors = ["red", "green", "blue"];
console.log(
  selectedColors +
    " is a " +
    typeof selectedColors +
    " and has a length of " +
    selectedColors.length +
    " elements"
);

console.log(selectedColors);
console.log(
  selectedColors[0] +
    " -> Array Elements can be accessed by index -> (selectedColors[0])"
);
selectedColors[3] = "yellow";
console.log(selectedColors);
selectedColors[4] = "100";
selectedColors[5] = "can contain any data type";
selectedColors[6] = true;
selectedColors[7] = null;
selectedColors[8] = undefined;
console.log(selectedColors);
console.log(
  "selectesColors is an array and has a type of " + typeof selectedColors
);
console.log("Arrays have inheritance of properties and methods");

console.log(
  "such as -> length, concat, join, push, pop, shift, unshift, findIndex ..."
);
console.log("selectedColors.length -> " + selectedColors.length);

// Functions
console.log("%cFunctions:", "font-size: 16px;");

function sayHello() {
  console.log("Hello");
}
console.log(sayHello + " is a " + typeof sayHello);
sayHello();
console.log(sayHello);

function greet() {
  console.log("Hello World");
}
greet();

function greet(firstName) {
  console.log("Hello " + firstName);
}
greet("John");
greet("Jane");

// Operators
console.log("%cOperators:", "font-weight: bold; font-size: 20px;");

// arithmetic operators
console.log("%cArithmetic Operators", "font-size: 15px;");
console.log(
  "5 + 5 = " +
    (5 + 5) +
    " | 5 - 5 = " +
    (5 - 5) +
    " | 5 * 5 = " +
    5 * 5 +
    " | 5 / 5 = " +
    5 / 5 +
    " | 5 % 5 = " +
    (6 % 5)
);
function add(num1, num2) {
  return num1 + num2;
}
console.log(add(5, 5));
function subtract(num1, num2) {
  return num1 - num2;
}
console.log(subtract(5, 5));
function multiply(num1, num2) {
  return num1 * num2;
}
console.log(multiply(5, 5));
function divide(num1, num2) {
  return num1 / num2;
}
console.log(divide(5, 5));
function modulus(num1, num2) {
  return num1 % num2;
}
console.log(modulus(6, 5));
function exponent(num1, num2) {
  return num1 ** num2;
}
console.log(exponent(5, 5));

// increment and decrement operators
console.log("%cIncrement and Decrement Operators", "font-size: 15px;");
let count = 5;
console.log(count + " = count");
console.log(++count + " -> ++count > präfix > Ausgabe Variable mit 1 erhöht");
console.log(count + " = count");
console.log(
  count++ +
    " -> count++ > postfix > Ausgabe Variable nicht mit 1 erhöht -> erhöht danach"
);
console.log(count + " = count");
console.log(
  --count + " -> --count > präfix > Ausgabe Variable mit 1 verringert"
);
console.log(count + " = count");
console.log(
  count-- +
    " -> count--  > postfix > Ausgabe Variable nicht mit 1 verringert -> verringert danach"
);
console.log(count + " = count");

// assignment operators
console.log("%cAssignment Operators", "font-size: 15px;");
let x = 5;
console.log(x + " = x");
x += 5;
console.log(x + " = x += 5");
x -= 5;
console.log(x + " = x -= 5");
x *= 5;
console.log(x + " = x *= 5");
x /= 5;
console.log(x + " = x /= 5");
x = 6;
console.log(x + " = x");
x %= 5;
console.log(x + " = x %= 5");
x **= 5;
console.log(x + " = x **= 5");

// comparison operators
console.log("%cComparison Operators", "font-size: 15px;");
console.log("5 > 5 -> " + (5 > 5));
console.log("5 < 5 -> " + (5 < 5));
console.log("5 >= 5 -> " + (5 >= 5));
console.log("5 <= 5 -> " + (5 <= 5));
console.log("5 == 5 -> " + (5 == 5));
console.log("5 != 5 -> " + (5 != 5));

// equality operators
console.log("%cEquality Operators", "font-size: 15px;");
console.log("%c-> strict:", "font-weight: bold;");
console.log(
  "5 > 5 -> " +
    (5 === 5) +
    " | strict equality operator -> 5 === 5 -> type and value are equal"
);
console.log(
  "5 > 5 -> " +
    ("5" === 5) +
    ' |  strict equality operator -> "5" === 5 -> type and value are not equal'
);

console.log("%c-> lose:", "font-weight: bold;");
console.log(
  "5 > 5 -> " +
    (5 == 5) +
    " | lose equality operator -> 5 == 5 -> value is equal"
);
console.log(
  "5 > 5 -> " +
    ("5" == 5) +
    ' | lose equality operator -> "5" == 5 -> value is equal, but type is not equal'
);
console.log(
  "true = 1 -> " +
    (true == 1) +
    " | lose equality operator -> true == 1 -> value is equal, 1 = true | 0 = false in boolean context"
);
console.log(
  "lose operator -> (type = is converted into type of the left side !) "
);

// ternary operator
console.log("%cTernary Operator", "font-size: 15px;");
console.log("5 > 5 ? 'true' : 'false' -> " + (5 > 5 ? "true" : "false"));
console.log(
  "-> (condition ? true : false) -> if condition is true return true, else return false"
);

// logical operators
console.log("%cLogical Operators -> && and ||", "font-size: 15px;");
console.log("5 > 5 && 5 > 5 -> " + (5 > 5 && 5 > 5));
console.log("5 > 5 || 5 > 5 -> " + (5 > 5 || 5 > 5));
console.log("10 > 5 || 5 > 5 -> " + (10 > 5 || 5 > 5));
console.log("5 == 5 && 5 == 5 -> " + (5 == 5 && 5 == 5));
console.log("5 == 5 || 5 > 5 -> " + (5 == 5 || 5 > 5));
console.log(
  " -> for comparing conditions -> (var a = true && var b = true) = (var c = true)"
);
console.log(
  " -> for comparing conditions -> (var a = true && var b = false) = (var c = false)"
);

// falsy and truthy values
console.log("%cFalsy and Truthy values", "font-size: 15px;");
console.log("false == 0 -> " + (false == 0));
console.log("false == '' -> " + (false == ""));
console.log("false == undefined -> " + (false == undefined));
console.log("false == null -> " + (false == null));
console.log("false == NaN -> " + (false == NaN));
console.log("false == false -> " + (false == false));
console.log("true == 1 -> " + (true == 1));
console.log("true == '' -> " + (true == ""));
console.log("true == undefined -> " + (true == undefined));
console.log("true == null -> " + (true == null));
console.log("true == NaN -> " + (true == NaN));
console.log("true == true -> " + (true == true));

// bitwise operators
console.log("%cBitwise Operators", "font-size: 15px;");
console.log(
  "5 & 5 -> " + (5 & 5) + " & -> bitwise AND -> 0101 & 0101 = 0101 > 1 & 1 = 1"
);
console.log(
  "5 | 5 -> " + (5 | 5) + " | -> bitwise OR -> 0101 | 0101 = 0111 > 1 | 0 = 1"
);
console.log(
  "5 ^ 5 -> " +
    (5 ^ 5) +
    " ^ -> bitwise XOR -> 0101 ^ 0101 = 0000 > 1 ^ 1 = 0 / 1 ^ 0 = 1"
);
console.log(
  "~5 -> " +
    ~5 +
    " ~ -> bitwise NOT -> ~0101 = 1010 > invertiert > 1 -> 0 / 0 -> 1"
);
console.log(
  "5 << 5 -> " +
    (5 << 5) +
    " | -> bitwise LEFT SHIFT -> 0101 << 5 = 01010000 / 1 << 5 = 100000 > verschiebt um 5 nach links"
);
console.log(
  "5 >> 5 -> " +
    (5 >> 5) +
    " | -> bitwise RIGHT SHIFT -> 0101 >> 5 = 0000 / 1 >> 5 = 0 > verschiebt um 5 nach rechts"
);
console.log(
  "5 >>> 5 -> " +
    (5 >>> 5) +
    " | -> bitwise ZERO FILL RIGHT SHIFT -> 0101 >>> 5 = 0000 / 1 >>> 5 = 0 > verschiebt um 5 nach rechts und füllt mit 0"
);

// precedence operators
console.log("%cPrecedence Operators", "font-size: 15px;");
console.log("2 + 2 * 2 -> " + (2 + 2 * 2));
console.log("2 + 2 * 2 / 2 -> " + (2 + (2 * 2) / 2));
console.log("2 + 2 * 2 / 2 * 2 -> " + (2 + ((2 * 2) / 2) * 2));
console.log("2 + 2 * 2 / 2 * 2 - 2 -> " + (2 + ((2 * 2) / 2) * 2 - 2));
console.log("Bracket before Point before line !");
