let a = "blue";
let b = "red";

console.log(a + " = variable a und " + b + " = variable b");

let c = a;
a = b;
b = c;
console.log("new let c -> c = a -> a = b -> b = c");
console.log(a + " = variable a und " + b + " = variable b");
// IF - ELSE If - ELSE
console.log(" --- If - Else ---");
let hour = 10;

if (hour >= 6 && hour <= 12) console.log("Good morning!");
else if (hour > 12 && hour <= 18) console.log("Good afternoon!");
else console.log("Good evening!");

// SWITCH CASE
console.log(" --- Switch Case ---");
let day = 4;
switch (day) {
  case 1:
    console.log("Monday");
    break;
  case 2:
    console.log("Tuesday");
    break;
  case 3:
    console.log("Wednesday");
    break;
  case 4:
    console.log("Thursday");
    break;
  case 5:
    console.log("Friday");
    break;
  case 6:
    console.log("Saturday");
    break;
  case 7:
    console.log("Sunday");
    break;
  default:
    console.log("Invalid day");
    break;
}

// FOR LOOP
console.log(" --- For Loop ---", { size: "large" });
for (let i = 0; i < 5; i++) {
  console.log(i);
}
console.log("... to the power of ...");
let binaryExpo = 0;
for (let i = 0; i < 10; i++) {
  binaryExpo = Math.pow(2, i);
  console.log(`2^${i} = ${binaryExpo}`);
}
console.log("... fibonacci ...");
let num1 = 0;
let num2 = 1;
for (let i = 0; i < 10; i++) {
  let num3 = num1 + num2;
  console.log(num3);
  num1 = num2;
  num2 = num3;
}
console.log("... even or odd ...");
for (let i = 0; i < 10; i++) {
  if (i % 2 === 0) {
    console.log(`${i} is even`);
  } else {
    console.log(`${i} is odd`);
  }
}

// WHILE LOOP
console.log(" --- While Loop ---");
let u = 0;
while (u <= 5) {
  console.log(u);
  u++;
}
let v = 0;
while (v <= 5) {
  let char = String.fromCharCode(97 + v);
  console.log(char);
  v++;
}

// DO WHILE LOOP
console.log(" --- Do While Loop ---");
let w = 0;
console.log("w = " + w);

do {
  for (let i = 0; i < w; i++) {
    console.log("i = " + i);
    console.log("w = " + w);
  }
  w++;
} while (w <= 5);

w = 0;
console.log("w = " + w);

do {
  let line = "";
  for (let i = 0; i < w; i++) {
    line += "X";
  }
  if (line.length > 0) console.log(line);
  w++;
} while (w <= 5);

w = 0;
console.log("w = " + w);

do {
  let line = "";
  for (let i = 0; i < w; i++) {
    line += `(i=${i}, w=${w}) `;
  }
  if (line) {
    console.log(line.trim()); // Entfernt das letzte Leerzeichen
  }
  w++;
} while (w <= 5);

// FOR IN LOOP
console.log(" --- For In Loop ---");
console.log("Objects: ");
let person = {
  name: "Bird",
  age: 2,
  food: "birds",
};
for (let key in person) {
  console.log(`${key}: ${person[key]}`);
}
console.log("Arrays: ");
let colors = ["red", "green", "blue"];
for (let index in colors) {
  console.log(`Index: [${index}] = Color -> ${colors[index]}`);
}

// FOR OF LOOP
console.log(" --- For Of Loop ---");
console.log("Objects: ");
let person2 = {
  name: "Bird",
  age: 2,
  food: "birds",
};
for (let key of Object.keys(person2)) {
  console.log(`${key}: ${person2[key]}`);
}
console.log("Arrays: ");
let colors2 = ["redish", "greenish", "blueish"];
for (let color of colors2) {
  console.log(`Color -> ${color}`);
}
console.log("Strings: ");
let string = " Hello World ! ";
for (let char of string) {
  // console.log(`Char -> ${char}`);
  console.log(char);
}

// Break and Continue
console.log(" --- Break and Continue ---");
let l = 0;
for (l; l < 10; l++) {
  if (l === 3) {
    console.log("Skipping 3");
    continue;
  }
  if (l === 5) {
    console.log("Stopping at 5");
    break;
  }
  console.log(l);
}
console.log(l + " = l außerhalb der for-Schleife");

// max and min
console.log(" --- Max and Min ---");

let line = "";
for (let i = 0; i < 10; i++) {
  line += Math.floor(Math.random() * 100) + " ";
}
console.log("String: " + line);

let numbers = line.split(" ");
console.log(
  'Array aus String durch stringName.split("delimiter"): [' + numbers + "]"
);
console.log(numbers);
console.log("Array numbers length: " + numbers.length);

for (let index in numbers) {
  console.log(`Index: [${index}] = ${numbers[index]} `);
}
console.log(
  'Löschen der leeren Elemente mit arrayName.filter(Boolean) > entfernt "", null, false, undefined Elemente '
);
numbers = numbers.filter(Boolean);
for (let index in numbers) {
  console.log(`Index: [${index}] = ${numbers[index]} `);
}

// MIN und MAX FUNKTIONEN
function findMax(numbers) {
  let max = numbers[0];
  for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] > max) {
      max = numbers[i];
    }
  }
  return max;
}
function findMin(numbers) {
  let min = numbers[0];
  for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] < min) {
      min = numbers[i];
    }
  }
  return min;
}
let max = findMax(numbers);
let min = findMin(numbers);

console.log(`Max: ${max}, Min: ${min}`);

// FUNKTION LANDSCAPE OR PORTRAIT

let width = 0;
let height = 0;

function isLandscape(width, height) {
  return width > height ? console.log("Landscape") : console.log("Portrait");
}
isLandscape(800, 600);
isLandscape(600, 800);

// FIZZBUZZ
console.log(" --- FizzBuzz ---");

fizzBuzz(4);
fizzBuzz(12);
fizzBuzz(15);
fizzBuzz(25);
fizzBuzz("quark");

function fizzBuzz(input) {
  if (typeof input !== "number") {
    console.log("invalid input !" + " -> " + input + " is a " + typeof input);
    return;
  } else if (input % 3 === 0 && input % 5 === 0) {
    console.log("fizzbuzz");
  } else if (input % 3 === 0) {
    console.log("fizz");
  } else if (input % 5 === 0) {
    console.log("buzz");
  } else {
    console.log(input);
  }
}

// DEMERIT POINTS
console.log(" --- Demerit Points ---");

checkSpeed(54);
checkSpeed(55);
checkSpeed(90);
checkSpeed(175);

function checkSpeed(speed) {
  const speedLimit = 50;
  const kmPerPoint = 5;
  if (speed < speedLimit + kmPerPoint) {
    console.log("Ok" + " -> " + speed);
    return;
  }
  const points = Math.floor((speed - speedLimit) / kmPerPoint);
  if (points >= 12) {
    console.log("Licence Suspended");
  } else {
    console.log("Points: " + points);
  }
}

// EVEN OR ODD
console.log(" --- Even or Odd ---");

for (let i = 0; i < 10; i++) {
  if (i % 2 === 0) {
    console.log(i + " is even");
  } else {
    console.log(i + " is odd");
  }
}

// TRUTHY OR FALSY
console.log(" --- Truthy or Falsy ---");

const twoBeChecked = [
  NaN,
  "",
  "apple",
  null,
  "stone",
  37,
  0.3141,
  undefined,
  false,
  true,
  {},
  ["1", "2", "3"],
];
function checkTruthyOrFalsy(input) {
  let truthy = 0;
  let falsy = 0;
  for (let element of input) {
    if (element) {
      truthy++;
    } else {
      falsy++;
    }
  }
  return [truthy, falsy];
}
console.log("Array: ", twoBeChecked);
console.log("Array-Ausgabe als String: " + twoBeChecked);
console.log("Length of Array: " + twoBeChecked.length);
const [truthy, falsy] = checkTruthyOrFalsy(twoBeChecked);
console.log("Truthy-Elements: " + truthy);
console.log("Falsy-Elements: " + falsy);

// STRING PROPERTIES
console.log(" --- String Properties ---");

const movie = {
  title: "2001: A Space Odyssey",
  year: 1968,
  director: "Stanley Kubrick",
  rating: 8.5,
};

function ShowProperties(obj) {
  for (let key in obj) {
    if (typeof obj[key] === "string" || typeof obj[key] === "number") {
      console.log(key + ": " + obj[key]);
    }
  }
}
ShowProperties(movie);

// SUM OF MULTIPLES
console.log(" --- Sum of Multiples ---");
console.log("lists all multiples of 3 and 5 of a specific Number (... -> 17)");

let number = 57;
let multiples = [6, 9];

function listMultiples(number, multiples) {
  console.log("The Number to check: " + number);
  console.log("First Number of Mulitples: " + multiples[0]);
  console.log("Second Number of Mulitples: " + multiples[1]);

  let output = "Multiples of " + multiples[0] + ": ";
  for (let i = 1; i * multiples[0] <= number; i++) {
    output += i * multiples[0] + " ";
  }
  console.log(output);

  output = "Multiples of " + multiples[1] + ": ";
  for (let i = 1; i * multiples[1] <= number; i++) {
    output += i * multiples[1] + " ";
  }
  console.log(output);

  let sum = 0;

  for (let i = 1; i <= number; i++) {
    if (i % multiples[0] === 0 || i % multiples[1] === 0) {
      sum += i;
    }
  }
  console.log(number);
  console.log("Sum of all the multiples: " + sum);
}

listMultiples(number, multiples);

// CALCULATING AVERAGE GRADE
console.log(" --- Calc average grade --- ");

let marks = [3.4, 5.1, 2.7, 1.8, 3.1];

console.log("All the marks: > " + marks.join(" <> ") + " <");

function calcGrade(marks) {
  let sum = 0;

  for (let i = 0; i < marks.length; i++) {
    sum += marks[i];
  }

  let average = sum / marks.length;

  console.log("Mark count: " + marks.length + " marks");
  console.log("Sum of marks: " + sum);
  console.log("Average mark: " + average.toFixed(2));

  switch (true) {
    case average <= 1.49:
      console.log("1 -> Super !");
      break;
    case average <= 2.49:
      console.log("2 -> Good !");
      break;
    case average <= 3.49:
      console.log("3 -> Ok.");
      break;
    case average <= 4.49:
      console.log("4 -> Just enough ...");
      break;
    case average <= 5.49:
      console.log("5 -> Not passed !");
      break;
    case average > 5.49:
      console.log("6 -> ... no words !");
      break;
    default:
      console.log("Something went wrong!");
      break;
  }
}

calcGrade(marks);
marks = [1.4, 1.1, 1.7, 1.8, 1.1];
calcGrade(marks);

// PAINTING STARS
console.log(" --- Painting with stars ---");

let base = 31;

function pyramide(base) {
  console.log("Input base = " + base);

  let halfBase = 0;
  let line = "";

  base % 2 === 0
    ? (base++,
      console.log("Added 1 to base to get a center! Base is now: " + base))
    : console.log("Base is " + base);

  if (base % 2 === 0) {
    halfBase = base / 2;
  } else {
    halfBase = --base / 2;
  }
  console.log("Halfbase = " + halfBase);
  line = " ".repeat(halfBase);

  for (let i = 0; i <= halfBase; i++) {
    if (i !== 0) {
      line += "XX";
    } else {
      line += "X";
    }

    console.log(line);
    line = line.replace(/^\s/, "");
  }
}
pyramide(base);

// PRIME NUMBERS
console.log(" --- PRIME NUMBERS --- ");

let primeNumbers = [];
function showPrimes(limit) {
  for (let number = 2; number <= limit; number++) {
    let isPrime = true;

    for (let factor = 2; factor < number; factor++) {
      if (number % factor === 0) {
        isPrime = false;
        break;
      }
    }
    if (isPrime) {
      primeNumbers.push(number);
    }
  }
}

showPrimes(100);
console.log(primeNumbers);
