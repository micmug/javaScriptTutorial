// let radius = 1;
// let x = 1;
// let y = 1;

// function draw() {}
// function move() {}

// Object Oriented Programming (OOP)

//circle.draw(); // method

// 2 Factory Functions

// Camel Notation: oneTwoThreeFour
// function createCircle(radius) {
//   return {
//     radius,
//     draw() {},
//   };
// }

// const circle1 = createCircle(21);
// console.log(circle1);

// const circle2 = createCircle(22);
// console.log(circle2);

// 3 Constructor Functions

// Pascal Notation OneTwoThreeFour
// function Circle(radius) {
//   this.radius = radius;
//   this.draw = function () {
//     console.log("draw");
//   };
//   return this;
// }

// const circle = new Circle(1);

// 4 Dynamic Nature of Objects

// const circle4 = {
//   radius: 41,
// };

// circle4.color = "yellow";
// circle4.draw = function () {};

// delete circle4.color;
// delete circle4.draw;

// console.log(circle4);

// 5 Constuctor Property

// 2 Factory Functions
function createCircle(radius) {
  return {
    radius,
    draw: function () {
      console.log("draw");
    },
  };
}

const circle5 = createCircle(51);

// 3 Constructor Functions
// function Circle(radius) {
//   this.radius = radius;
//   this.draw = function () {
//     console.log("draw");
//   };
// }

//const another = new Circle(5);

// buildin JavaScrip Constuctors
new String(); // '', "", ``
new Boolean(); // true, false
new Number(); // 1, 2, 3, ...

// 6 Functiond are Objects

function Circle(radius) {
  this.radius = radius;
  this.draw = function () {
    console.log("draw");
  };
}

// const Circle6 = new Function(
//   "radius",
//   `
//   this.radius = radius;
//   this.draw = function () {
//     console.log("draw");
//   }
//   `
// );

//const circle = new Circle6(6);

Circle.call({}, 6);
Circle.apply({}, [1, 2, 3]);

const another = new Circle(6);

// 7 Value vs Reference Types

let x = 10;
let y = x;
console.log("x = " + x);
console.log("y = " + y);
x = 20;
console.log("x = " + x);
console.log("y = " + y);

let xx = { value: 10 };
let yy = xx;
console.log("xx = ", xx);
console.log("yy = ", yy);
xx.value = 20;
console.log("xx = ", xx);
console.log("yy = ", yy);
console.log("Primitives are copied by their value");
console.log("Objects are copied by their reference");

// primitive
let number = 10;
console.log("Number initial : " + number);

function increase(number) {
  number++;
  console.log("Number in Function : " + number);
}

increase(number);
console.log("Number outside the Function : " + number);

// object
let obj = { values: 10 };
console.log("Number is Object (let obj = {values: 10 }): ", obj);

function increase(obj) {
  obj.values++;
  console.log("Number is Object in Function : ", obj);
}

increase(obj);
console.log("Number is Object outside the Function : ", obj);
console.log();
// Enumerating Properties of an Object

const circle = {
  radius: 1,
  draw() {
    console.log("draw");
  },
};

for (let key in circle) {
  console.log(key, circle[key]);
}
console.log();
//for (let key of circle) console.log(key);
console.log("Objects are not iterable");
console.log();
for (let key of Object.keys(circle)) console.log(key);
console.log("Method Object.keys(circle) returns an Array");
console.log();
console.log("const x = { value: 1 };");
console.log("-> calls Constructor: const x = new Object();");
console.log("-> function Object() {}");
console.log("All Function are Objects, with Methods");
console.log("-> Object.(method)");
console.log();

console.log(
  "Checks if Property is in Object with > if ('radius' in circle) console.log('yes');"
);
if ("radius" in circle) console.log("yes");
console.log();

console.log("'color' in circle ? console.log('yes') : console.log('no')");
"color" in circle ? console.log("yes") : console.log("no");
console.log();

// 9 Cloning an Object
const anotherC = {};

console.log("Cloning with for-loop:");
for (let key in circle) anotherC[key] = circle[key];
console.log(anotherC);
console.log();

console.log(
  "Shallow Copy: clons only the direct reference of an object, for simple data types"
);
anotherC["radius"] = circle["radius"];
console.log(anotherC);
console.log();

console.log("Cloning with Object.assign({}, property):");
console.log("Also only a Shallow Copy");
anotherC1 = Object.assign({}, circle);
console.log(anotherC1);
console.log();

console.log("eg. :  const circleEG = { radius: 5, center: { x: 0, y: 0 } };");
console.log("eg. :  anotherEG.center.x = 10;");
const circleEG = { radius: 5, center: { x: 0, y: 0 } };
const anotherEG = Object.assign({}, circleEG);
anotherEG.center.x = 10;
console.log("eg. :  const anotherEG = Object.assign({}, circleEG);");
console.log(circleEG.center.x); // Gibt 10 aus

//const anotherC2 = Object.assign({}, circle);

console.log("Copy with Spread-Operator: const anotherC2 = { ...circle };");
const anotherC2 = { ...circle };
console.log(anotherC2);

// 11 Math build-In Objects

console.log();
console.log();
