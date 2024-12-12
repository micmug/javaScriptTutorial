function t(count) {
  return "\t".repeat(count);
}

console.log();
console.log(t(3) + " --- World of Arrays --- ");
console.log();

// 1 adding
console.log(t(4) + "1 adding elements\n");

const numbers1 = [3, 4];
console.log(numbers1);
console.log("... to the End --> .push ");
numbers1.push(5, 6);
console.log(numbers1);
console.log("... to the Beginning --> .unshift ");
numbers1.unshift(1, 2);
console.log(numbers1);
console.log("... to the Middle --> .splice ");
console.log(
  "... numbers1.splice( 2 (add after {index]), 0 (elements to delete), 'a', 'b' (elements to add)"
);
numbers1.splice(2, 0, "a", "b");
console.log(numbers1);
numbers1.splice(2, 2);
console.log(numbers1);

// 2 finding elements > primitive types
console.log();
console.log(t(4) + "2 finding elements > primitive types\n");

const numbers2 = [1, 2, 3, 4];
console.log(numbers2);
console.log();
console.log("finding> 1 " + t(2) + "Array Index [" + numbers2.indexOf(1) + "]");
console.log(
  "finding> 'a' " + t(2) + "Array Index [" + numbers2.indexOf("a") + "]"
);
console.log("finding> 3 " + t(2) + "Array Index [" + numbers2.indexOf(3) + "]");
console.log(
  "finding> '3' " + t(2) + "Array Index [" + numbers2.indexOf("3") + "]"
);

numbers2.splice(3, 0, 1);
console.log(numbers2);
console.log(
  "finding last> 1 " + t(2) + "Array Index [" + numbers2.lastIndexOf(1) + "]"
);
console.log("> .lastIndexOf(element)");
console.log();
console.log(
  "finding with start index> 1 " +
    t(2) +
    "Array Index [" +
    numbers2.indexOf(1, 2) +
    "]"
);
console.log(numbers2);

console.log("> numbers2.indexOf(1, 2)");

console.log("... if element exist in the array");
console.log(numbers2.indexOf(1) !== -1);
console.log(numbers2.includes(1));

// 4 finding elements > reference type
console.log();
console.log(t(4) + "3 finding elements > reference type\n");

const person = [
  { id: 1, surName: "Jim" },
  { id: 2, surName: "Bim" },
];
console.log(person.includes({ id: 1, surName: "Jim" }));

const personNameA = person.find(function (personNameA) {
  return personNameA.surName === "Jim";
});
console.log(personNameA);

const personNameB = person.find(function (personNameB) {
  return personNameB.surName === "JimBim";
});
console.log(personNameB);

// 4 Arrow Functions
console.log();
console.log(t(4) + "4 Arrow Functions\n");

console.log(
  "const hasJimA = person.some((p) => p.id === 1 && p.surName === 'Jim');"
);
const hasJimA = person.some((p) => p.id === 1 && p.surName === "Jim");
console.log(hasJimA); // true
console.log("const hasJimB = person.some((p) => p.surName ===  'Jim');");
const hasJimB = person.some((p) => p.surName === "Jim");
console.log(hasJimB); // true

// 5 Removing Elements
console.log();
console.log(t(4) + "5 Removing Elements\n");

const numbers5 = [1, 2, 3, 4];
console.log(numbers5);
console.log();

// Last
const last = numbers5.pop();
console.log(numbers5);
console.log(last);

// Beginning
const first5 = numbers5.shift();
console.log(numbers5);
console.log(first5);

// Middle
const spliced = numbers5.splice(0, 2);
console.log(numbers5);
console.log(spliced);

// 6 Emptying an Array
console.log();
console.log(t(4) + "6 Emptying an Array\n");

let numbers6 = [1, 2, 3, 4];
let another = numbers6;

console.log(numbers6);
console.log();

// solution 1, if thers are no other references to the array
console.log("Solution 1");

console.log("numbers6");
console.log(numbers6);

console.log("another");
console.log(another);

console.log("with: numbers6 = [];");
numbers6 = [];

console.log("numbers6");
console.log(numbers6);

console.log("another");
console.log(another);

// solution 2
console.log("Solution 2");

numbers6 = another;
console.log("numbers6");
console.log(numbers6);

console.log("another");
console.log(another);

console.log("with: numbers6.length = 0;");
numbers6.length = 0;

console.log("numbers6");
console.log(numbers6);

console.log("another");
console.log(another);

// solution 2
console.log("Solution 3");

another = numbers1;
numbers6 = numbers1;
console.log("numbers6");
console.log(numbers6);

console.log("another");
console.log(another);

console.log("with: numbers6.splice(0, numbers6.length);");
numbers6.splice(0, numbers6.length);

console.log(numbers6);
console.log(another);

// solution 4
console.log("Solution 4");

another = numbers2;
numbers6 = numbers2;
console.log("numbers6");
console.log(numbers6);
console.log("another");
console.log(another);

console.log("with: while loop and pop");
console.log("numbers6 in the loop");

while (numbers6.length > 0) {
  numbers6.pop();
  console.log(numbers6);
}
console.log("another");
console.log(another);

// 7 Combining and Slicing Arrays
console.log();
console.log(t(4) + "7 Combining and Slicing Arrays\n");

const first = [1, 2, 3, 4];
const second = first;
const third = [{ id: 1, value: 23 }];

console.log("first");
console.log(first);
console.log("second");
console.log(second);

console.log("... concating");

const combined = first.concat(second);
console.log("combined");
console.log(combined);

console.log("... slicing");

const sliceD = combined.slice(0, 4);
console.log("combined");
console.log(combined);
console.log("sliceD");
console.log(sliceD);

console.log(`id: ${third[0].id} and value: ${third[0].value}`);
third[0].id = 23;
third[0].value = 1;
console.log(`id: ${third[0].id} and value: ${third[0].value}`);
console.log("Objects are copied/ sliced by their reference");
const combinedObj = first.concat(third, second);
console.log("combinedObj");
console.log(combinedObj);

// 8 The Spread Operator ...
console.log();
console.log(t(4) + "8 The Spread Operator ...\n");

const first8 = [1, 2, 3, 4];
const second8 = first8;
const third8 = [{ id: 1, value: 23 }];

console.log("combine8");
const combined8 = [...first8, ...second8];
console.log(combined8);

console.log("copy8");
const copy8 = [...combined8];
console.log(combined8);

// 9 Iterating an Array
console.log();
console.log(t(4) + "9 Iterating an Array\n");

console.log(combined8);
console.log(
  `combined8 iterated\nwith>${t(
    3
  )} for (let element of combined8) { console.log(element) };`
);
for (let element of combined8) console.log(element);

console.log(
  `combined8 iterated\nwith>\ncombined8.forEach((element, index) => {console.log("[" + index + "]", element);});`
);
combined8.forEach((element, index) => {
  console.log("[" + index + "]", element);
});

// 10 Joining Arrays
console.log();
console.log(t(4) + "10 Joining Arrays\n");

const num10 = [1, 2, 3, 4];
console.log("Join -> Array to String ");
console.log(num10);
const joined1 = num10.join("");
console.log(joined1);
const joined2 = num10.join(" - ");
console.log(joined2);

console.log("Split -> String to Array");
const message = "This is a massage to split";
console.log(message);
const splited = message.split(" ");
console.log('Split with -> const splited = message.split(" ");');
console.log(splited);

console.log('Join with -> const splited = message.split(" ");');
const combined10 = splited.join("--");
console.log(combined10);

// 11 Sorting Arrays
console.log();
console.log(t(4) + "11 Sorting Arrays\n");

const numbers = [4, 3, 5, 1, 2];
console.log(numbers);

numbers.sort();
console.log(numbers);

numbers.reverse();
console.log(numbers);
console.log();

const planets = [
  { id: 1, named: "MarsB" },
  { id: 2, named: "earth" },
  { id: 3, named: "earthx" },
  { id: 4, named: "Marsa" },
];
planets.forEach((obj) => {
  console.log(`ID: ${obj.id}, Name: ${obj.named}`);
});
console.log();

let count = 0;
planets.sort(function (a, b) {
  // a < b => -1
  // a > b =>  1
  // a === b => 0
  count++;
  console.log(count + ". Durchlauf");

  const nameA = a.named.toLocaleUpperCase();
  const nameB = b.named.toLocaleUpperCase();

  console.log(nameA);
  console.log(nameB);

  if (nameA < nameB) return -1;
  if (nameA > nameB) return 1;
  return 0;
});
planets.forEach((obj) => {
  console.log(`ID: ${obj.id}, Name: ${obj.named}`);
});

// 12 Testing the Elements of an Array
console.log();
console.log(t(4) + "12 Testing the Elements of an Array\n");

const numbers12 = [4, 3, 5, 1, 2];
console.log(numbers);
const numbers12X = numbers12.sort();
numbers12X[2] = numbers12X[2] * -1;
console.log(numbers12X);

let allPositive = numbers.every(function (value) {
  return value >= 0;
});
console.log(allPositive);

allPositive = numbers12X.every(function (value) {
  return value >= 0;
});
console.log(allPositive);

let atLeatOnePositive = numbers.some(function (value) {
  return value >= 0;
});
console.log(atLeatOnePositive);

atLeatOnePositive = numbers12X.some(function (value) {
  return value >= 0;
});
console.log(atLeatOnePositive);

// 13 Filtering an Array
console.log();
console.log(t(4) + "13 Filtering an Array\n");

const numbers13 = [4, -3, 5, -1, 2];
console.log(numbers13);

// const filtered = numbers13.filter(function(value) {
//   return value >= 0;
// });

const filtered = numbers13.filter((n) => n >= 0);
console.log(filtered);

// 14 Mapping an Array
console.log();
console.log(t(4) + "14 Mapping an Array\n");

console.log(numbers13);
console.log(filtered);

// Array mapping > primitive
const itemsP = filtered.map((n) => " <li>" + n + "</li> ");
console.log(itemsP);

const itemsJoined = itemsP.join("");
console.log(itemsJoined);

const html = "<ul> " + itemsJoined + " </ul>";
console.log(html);
console.log();

// Array mapping > objects
const num14 = [1, 2, 3, 4];
console.log(num14);

const itemsO = num14.map((n) => {
  return { value: n };
  //const obj = { value: n };
  //return obj;
});
console.log("itemsO");
console.log(itemsO);
const itemsOx = num14.map((n) => {
  value: n;
});
console.log("itemsOx");
console.log(itemsOx);

const itemsOxx = num14.map((n) => ({
  value: n,
}));
console.log("itemsOxx");
console.log(itemsOxx);

// chained Filter Map
const chainedFilterMap = num14
  .filter((n) => n >= 0)
  .map((n) => ({
    value: n,
  }));

console.log("chainedFilterMap");
console.log(chainedFilterMap);
const chainedFilterMapFilterMap = num14
  .filter((n) => n >= 0)
  .map((n) => ({
    value: n,
  }))
  .filter((obj) => obj.value > 1)
  .map((obj) => obj.value);
console.log("chainedFilterMapFilterMap");
console.log(chainedFilterMapFilterMap);

// 15 Reducing an Array
console.log();
console.log(t(4) + "15 Reducing an Array\n");

const num15 = [1, -1, 2, 3];
console.log(num15);

let sum1 = 0;
for (let n of num15) sum1 += n;

console.log("sum1");
console.log(sum1);
console.log();

console.log("accumulator");
const sum2 = num15.reduce((accumulator, currentValue) => {
  console.log(accumulator);
  console.log(
    currentValue + " < currentValue + " + accumulator + " < accumulator"
  );
  return accumulator + currentValue;
}, 0); // initializing accumulator

console.log(sum2);

console.log();
console.log("accumulator without ini");
const sum3 = num15.reduce((accumulator, currentValue) => {
  console.log(accumulator);
  console.log(
    currentValue + " < currentValue + " + accumulator + " < accumulator"
  );
  accumulator + currentValue;
}); // initializing accumulator
console.log();
console.log("accumulator code reduced");
const sum4 = num15.reduce(
  (accumulator, currentValue) => accumulator + currentValue
);

console.log(sum4);

// 16 E1 Array from Range
console.log();
console.log(t(4) + "16 E1 Array from Range\n");

function arrayOfTheRange(min, max) {
  let result = [];
  for (let i = min; i <= max; i++) {
    result.push(i);
    console.log(result);
  }
  return result;
}

const digits = arrayOfTheRange(-3, 3);

console.log("result in digits:");
console.log(digits);

// 17 E2 Includes
console.log();
console.log(t(4) + "17 E2 Includes\n");

const num17 = [1, 2, 3, 4, 2, 3, 4];
const mum17 = 5;

function includeS(array, searchElement) {
  if (!Array.isArray(array)) {
    console.log("Die Eingabe ist kein Array.");
    return 0;
  }

  let count = 0;
  for (let i = 0; i <= array.length; i++) {
    if (array[i] === searchElement) count++;
  }

  console.log(
    "Das Element >" +
      searchElement +
      "< ist in dem Array " +
      count +
      "-mal vorhanden."
  );
  return count;
}

// includeS(num17x, 4);

// Case 1
try {
  includeS(num17, "d");
} catch (error) {
  console.log("Ein Array mit diesem Namen existiert nicht.");
}
// Case 2
try {
  includeS(mum17, "3");
} catch (error) {
  console.log("Ein Array mit diesem Namen existiert nicht.");
}
// Case 3
try {
  includeS(num17, "1");
} catch (error) {
  console.log("Ein Array mit diesem Namen existiert nicht.");
}
// Case 4
try {
  includeS(num17x, "d");
} catch (error) {
  console.log("Ein Array mit diesem Namen existiert nicht.");
}

console.log();
// Tutorial Solution
console.log("Tutorial Solution");

function includes(array, searchElement) {
  for (let element of array) if (element === searchElement) return true;
  return false;
}

console.log(includes(num17, 2));
console.log(includes(num17, 5));

// 18 E3 Except
console.log();
console.log(t(4) + "18 E3 Except\n");

const num18 = [1, 2, 3, 4, 5, 6];
let output = [];

function exclude(array, excluded) {
  console.log("Original Array: " + array);

  // Stellen Sie sicher, dass 'excluded' immer ein Array ist
  const excludedArray = Array.isArray(excluded) ? excluded : [excluded];

  const output = array.filter((item) => !excludedArray.includes(item));

  if (output.length === array.length) {
    console.log("No such element in da array!  -> " + excluded);
    console.log(array);
  } else {
    console.log("Element " + excluded + " has been removed!");
    console.log(output);
  }
  console.log();
}

exclude(num18, 7);
exclude(num18, [3, 2, 1, 4]);

// Tutorial Solution
console.log("Tutorial Solution");

function except(array, excluded) {
  const output1 = [];
  for (let element of array)
    if (!excluded.includes(element)) output1.push(element);
  return output1;
}

const output1 = except(num18, [2, 3]);
console.log(num18);
console.log(output1);

// 19 E4 Moving an Element
console.log();
console.log(t(4) + "19 E4 Moving an Element\n");

const num19 = [1, 2, 3, 4, 5, 6];
console.log("Original array:", num19);

function move(array, index, offset) {
  const position = index + offset;
  if (position < 0 || position >= array.length) {
    console.error("Invalid offset");
    return;
  }

  const output19 = [...array];
  const element = output19.splice(index, 1)[0];
  output19.splice(position, 0, element);
  return output19;
}

console.log("Move 0 by -4:", move(num19, 0, 4));
console.log("Move 2 by 1:", move(num19, 2, 1));
console.log("Move 3 by -2:", move(num19, 3, -2));
console.log("Move 0 by -2:", move(num19, 0, -2));

// 20 Count
console.log();
console.log(t(4) + "20 Count\n");

const num20 = [1, 2, 3, 4, 1, 2, 3, 5, 6, 6, 2, 3, 4, 5, 6, 2, 3];
console.log("Original array:", num20);

function countOccurrences(array, searchElement) {
  let count20 = 0;
  // for (let i = 0; i <= array.length; i++) {
  //   if (array[i] === searchElement) count20++;
  // }
  for (let element of array) {
    if (element === searchElement) count20++;
  }
  console.log("Searched Element: " + searchElement);
  //return count20;
  console.log(count20);
}

function countOccurrencesReduce(array, searchElement) {
  return array.reduce((accumulator, current) => {
    const occurrence = current === searchElement ? 1 : 0;
    console.log(t(1), accumulator, t(1), current, t(1), searchElement);
    return accumulator + occurrence;
  }, 0);
}

countOccurrences(num20, 1);
countOccurrences(num20, 2);
countOccurrences(num20, 3);
countOccurrences(num20, 4);
countOccurrences(num20, 5);
countOccurrences(num20, 6);
countOccurrences(num20, 7);
console.log();

console.log("accumulator, current, searchElement");
countOccurrencesReduce(num20, 2);

// 21 Get Max
console.log();
console.log(t(4) + "21 Get Max\n");

const num21 = [1, 22, 3, 4, 5, 6, 54, 34, 3];
console.log("Original array:", num21);

// FUNCTION 1
function getMax1(array) {
  let max = 0;
  for (let element of array)
    element > max ? (max = element) : console.log("curent max: " + max);

  console.log("Greatest number in array: " + max);
}

console.log("Function 1: ");
getMax1(num21);
console.log();

// FUNCTION 2

function getMax2(array) {
  let max = 0;
  for (let element of array) {
    if (element > max) {
      max = element;
    }
  }
  return max;
}

console.log("Function 2: ");
const max2 = getMax2(num21);
console.log(max2);
console.log();

// FUNCTION 3

function getMax3(array) {
  if (array.length === 0) return undefined;

  const max = array.reduce((accumulator, current) =>
    current > accumulator ? current : accumulator
  );
  return max;
}

console.log("Function 3: ");
const max3 = getMax3(num21);
console.log(max3);
console.log();

// FUNCTION 4

function getMax4(array) {
  if (array.length === 0) return undefined;

  return array.reduce((acc, cur) => (acc > cur ? acc : cur));
}

console.log("Function 3: ");
const max4 = getMax4(num21);
console.log(max4);
console.log();

// 22 Movies
console.log();
console.log(t(4) + "22 Movies\n");

const movies = [
  { title: "a", year: 2018, rating: 4.5 },
  { title: "b", year: 2018, rating: 4.7 },
  { title: "c", year: 2018, rating: 3 },
  { title: "d", year: 2017, rating: 4.5 },
];

// Function 1
function sortMovies1(movies) {
  let sorted = movies.filter((movies) => movies.rating >= 4);
  sorted = sorted.filter((sorted) => sorted.year >= 2018);
  //sorted = sorted.sort((a, b) => a.title - b.title);
  sorted = sorted.sort((a, b) => a.title.localeCompare(b.title));
  let title = sorted.map((sorted) => sorted.title);
  title.reverse();
  return title;
}

console.log("Function 1:");
const sortedMovies1 = sortMovies1(movies);
console.log(sortedMovies1);

// Function 2
function sortMovies2(movies) {
  return movies
    .filter((movie) => movie.rating >= 4)
    .filter((movie) => movie.year >= 2018)
    .sort((a, b) => a.title.localeCompare(b.title))
    .reverse()
    .map((movie) => movie.title);
}

console.log("Function 2:");
const sortedMovies2 = sortMovies2(movies);
console.log(sortedMovies2);

// Function 3
console.log("Function 3:");
const titles = movies
  .filter((m) => m.year === 2018 && m.rating >= 4)
  .sort((a, b) => a.rating - b.rating)
  .reverse()
  .map((m) => m.title);

console.log(titles);

console.log(t(4) + " ");
console.log();
console.log();
console.log();
console.log();
