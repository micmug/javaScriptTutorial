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
  "... numbers1.splice( 2 (add after {index]), 0 (elements to delete), 'a', 'b' (elements to add"
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

console.log(t(4) + " ");
console.log();
console.log();
