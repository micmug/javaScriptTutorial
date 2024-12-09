// 11 Math build-In Objects

console.log("11 Math build-In Objects");
console.log();

console.log(Math.PI);
let numberRow = [1, 2, 3, 4, 5];
console.log(Math.max(numberRow));
console.log(Math.max(...numberRow));
console.log(Math.max.apply(null, numberRow));
console.log(Math.min(numberRow));
console.log(Math.min(...numberRow));
console.log(Math.min.apply(null, numberRow));

let min = 1;
let max = 50;
let result = 0;
function randomMinMax(min, max) {
  result = Math.floor(Math.random() * (max - min) + min);
  console.log(result);
}

randomMinMax(min, max);
console.log();

// Strings
console.log("12 Strings");
console.log();
console.log("There are String Primitives and String Objects");
console.log();

const messagePrimitive = "This is my first message!";

const messageObject = new String("Hello again!");

console.log(typeof messagePrimitive + "\t " + messagePrimitive);
console.log(typeof messageObject + "\t " + messageObject);

console.log("Template Literals");
console.log("... using backTicks");
console.log(`this is a very long text...
  going over 
muliple rows 
  and
  it is possible to use \$\{\} for input of variables and functions
  ...good to know!
And it's uses the same format as in the code.`);

// Date
console.log();
console.log(" 14 Date");
console.log();
const now = new Date();
console.log(now);

const date1 = new Date("May 11 2018 09:00");
console.log(date1);

const date2 = new Date(2018, 4, 11, 9);
console.log(date2);

console.log(now.toDateString());
console.log(now.toTimeString());
console.log(now.toISOString());
console.log();

// Address Object
console.log(" 15 Address Object");

const address = {
  street: "Wettegasse 3",
  city: "Hohenstadt",
  zip: "73453",
};

function createTabs(count) {
  return "\t".repeat(count);
}

const text =
  "Dies" +
  createTabs(2) +
  "ist" +
  createTabs(1) +
  "ein" +
  createTabs(2) +
  "Beispiel";
console.log(text);

function showAddress(address) {
  for (let key in address) {
    console.log(createTabs(1) + key + ":" + createTabs(3) + address[key]);
  }
}
showAddress(address);
console.log();

// 16 Factory and constructor function
console.log("16 Factory and constructor function:");
console.log();

// let addressX = {
//   street: "Wettegasse 3",
//   city: "Hohenstadt",
//   zip: "73453",
// };

//Factory Function
function createAddress(street, city, zip) {
  return {
    street,
    city,
    zip,
  };
}

console.log("Factory Function");
let addressFF = createAddress("Wettegasse 3", "Hohenstadt", "73453");
console.log(addressFF);

//Constructor Function
function Address(street, city, zip) {
  this.street = street;
  this.city = city;
  this.zip = zip;
}

console.log("Constructor Function");
let addressCF = new Address("Wettegasse 3", "Hohenstadt", "73453");
console.log(addressCF);
console.log();

// 17 OBJECT EQUALITY
console.log("17 OBJECT EQUALITY -> Value Comparison || Reference Comparison");

let addressA = new Address("Wettegasse 3", "Hohenstadt", "73453");
let addressB = new Address("Wettegasse 3", "Hohenstadt", "73453");
let addressC = addressA;

function areEqual(addressA, addressB) {
  return (
    addressA.street === addressB.street &&
    addressA.city === addressB.city &&
    addressA.zip === addressB.zip
  );
}

function areSame(addressA, addressB) {
  return addressA === addressB;
}

console.log("...are equal because of equal properties/ values ->");
console.log(areEqual(addressA, addressB));
console.log("...are not equal because of different references");
console.log(areSame(addressA, addressB));
console.log("...are equal because of same reference");
console.log(areSame(addressA, addressC));

// Blog Post Objekt
console.log("18 Block Post Object");

let post = {
  title: "a",
  body: "b",
  author: "c",
  views: 10,
  comments: [
    { author: "aa", body: "bb" },
    { author: "cc", body: "dd" },
  ],
  isLive: true,
};
console.log(post);

// Constructor Functions
console.log("19 Constructor Functions");

function Blog(title, body, author) {
  this.title = title;
  this.body = body;
  this.author = author;
  this.views = 0;
  this.comments = [];
  this.isLive = false;
}
let blog = new Blog("A", "B", "C");
console.log(blog);

// Constructor Functions
console.log("20 Constructor Functions");

let priceRanges = [
  { label: "$", tooltip: "Inexpensive", minPerPerson: 0, maxPerPerson: 10 },
  { label: "$", tooltip: "Moderate", minPerPerson: 11, maxPerPerson: 20 },
  { label: "$", tooltip: "Expensive", minPerPerson: 21, maxPerPerson: 50 },
];

let restaurant = [{ averagePerPerson: 5 }];

console.log(priceRanges);
console.log(restaurant);

console.log();
console.log("");
