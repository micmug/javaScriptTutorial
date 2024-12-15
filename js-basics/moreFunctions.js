function t(count) {
  return "\t".repeat(count);
}

// 1 More Functions
console.log(t(4) + " 1 More Functions");
console.log();

// Function Declaration
function walk() {
  console.log("walk");
}

// Anonymous Function Expession

let run = function () {
  // anonymous function, naming possible
  console.log("running anonymous");
};
//let x = run;

run();
let move = run;
move();

// 2 Hoisting -> hochziehen
console.log(t(4) + " 1 Hoisting");
console.log();

console.log(
  "Functions declaration are moved to the top by the Java Scrip Engine before the code is executed"
);
console.log(
  "... so ist is possible to call a function before it's declaration"
);
console.log();

// 3 Arguments
console.log(t(4) + " 3 Arguments");
console.log();

let x = 1; // changing type is possible
x = "a";

function sum(a, b) {
  return a + b;
}
console.log("Function:");
console.log();

console.log(`function sum(a, b) {
  return a + b;
}`);
console.log();

console.log(">console.log(sum(1, 2));");
console.log(sum(1, 2));
console.log();

console.log(">console.log(sum(1));");
console.log(sum(1));
console.log("1 + undefined => NaN (Not a Number)");
console.log();

console.log(">console.log(sum());");
console.log(sum());
console.log("undefined => NaN (Not a Number)");
console.log();

console.log(">console.log(sum(1, 2, 3, 4));");
console.log(sum(1, 2, 3, 4));
console.log("... only a + b");
console.log();

console.log(`function sum(a, b) {
  console.log(arguments);
  return a + b;
}`);
console.log();

function sum(a, b) {
  console.log(arguments);
  return a + b;
}
console.log(">console.log(sum(1, 2, 3, 4));");
console.log(sum(1, 2, 3, 4));
console.log();

console.log(`function sum3() {
  let total = 0;
  for (let value of arguments) total += value;
  return total;
}

>console.log(sum3(1, 2, 3, 4));`);
function sum3() {
  let total = 0;
  for (let value of arguments) total += value;
  return total;
}
console.log(sum3(1, 2, 3, 4));
console.log();

// 4 Rest Operator
console.log(t(4) + " 4 Rest Operator");
console.log();
//---------------------------------------------------------------
console.log(`function sum4(...args) {
    console.log(args);
}`);
function sum4(...args) {
  console.log(args);
}
console.log(sum4(1, 2, 3, 4));
console.log();
//---------------------------------------------------------------
console.log(`function sum41(...args) {
  return args.reduce((a, b) => a + b);
}`);
function sum41(...args) {
  return args.reduce((a, b) => a + b);
}
console.log(sum41(1, 2, 3, 4));
console.log();
//---------------------------------------------------------------
console.log(`function sum42(discount, ...prices) {
  const total = prices.reduce((a, b) => a + b);
  console.log(total);
  return total * (1 - discount);
  }`);
console.log("... rest parameter must be the last parameter of the function");
function sum42(discount, ...prices) {
  const total = prices.reduce((a, b) => a + b);
  console.log(total);
  return total * (1 - discount);
}
console.log(sum42(0.1, 20, 30, 40));
console.log();
//---------------------------------------------------------------
// 5 Default Parameters
console.log(t(4) + " 5 Default Parameters");

function interest(principal, rate, years) {
  rate = rate || 3.5; // if rate is not defined, use 3.5
  years = years || 5;
  return ((principal * rate) / 100) * years;
}

console.log(interest(10000)); // => principal = 10000
//---------------------------------------------------------------
function interest1(principal, rate = 3.5, years = 5) {
  return ((principal * rate) / 100) * years;
}

console.log(interest1(10000));
//---------------------------------------------------------------
// 6 Getters and Setters
console.log(t(4) + " 6 Getters and Setters");

const person = {
  firstName: "John",
  lastName: "Doe",
  get fullName() {
    // getters => access properties
    return `${this.firstName} ${this.lastName}`;
  },
  set fullName(name) {
    // setters => change (mutate) properties
    const parts = name.split(" ");
    this.firstName = parts[0];
    this.lastName = parts[1];
  },
};
console.log(person.fullName);
person.fullName = "Jane Doe";
console.log(person.fullName);
console.log(person.firstName);
console.log(person.lastName);
console.log(person);
person.fullName = "Bird Hunter";
console.log(person);
console.log();
//---------------------------------------------------------------
// 7 Try and Catch
console.log(t(4) + " 7 Try and Catch");

const person7 = {
  firstName: "John",
  lastName: "Doe",

  set fullName7(value) {
    if (typeof value !== "string") throw new Error("Expected a string");

    const parts = value.split(" ");

    if (parts.length !== 2) throw new Error("Enter a first and last name");

    this.firstName = parts[0];
    this.lastName = parts[1];
  },
};

try {
  person7.fullName7 = null;
  console.log(person7.firstName, person7.lastName);
} catch (e) {
  console.log(e.message);
}
try {
  person7.fullName7 = "Bird";
  console.log(person7.firstName, person7.lastName);
} catch (e) {
  console.log(e.message);
}
try {
  person7.fullName7 = "Bird Hunter";
  console.log(person7.firstName, person7.lastName);
} catch (e) {
  console.log(e.message);
}

//---------------------------------------------------------------
// 8 Local and Golbal Scope
console.log(t(4) + " 8 Local and Golbal Scope");

function start() {
  const message = "Hi"; // global

  if (true) {
    const another = "Bye"; // local
  }
  for (let i8 = 0; i8 < 5; i++) {
    console.log(i8); // local
  }
}

start();

//---------------------------------------------------------------
// 9 Let vs Var
console.log(t(4) + " 9 Let vs Var");

let y = 1;
var z = 2;

function start() {
  for (let i = 0; i < 3; i++) {
    // let => local
    console.log(i);
    if (true) {
      var color = "red"; // var => global
    }
  }
  for (var j = 10; j < 13; j++) {
    // var => global
    console.log(j);
  }
  console.log(color);
}

var color = "blue";
// var => function scope
// ES6 (es2015): let, const => block scope
// var and function are on the same scope as the window objects in the browser or the global object in node js or any other environment
start();

//---------------------------------------------------------------
// 10 The THIS Keyword
console.log(t(4) + " 10 The THIS Keyword");

// what is this?
// this is a keyword that points to the object that is currently executing the current function or method

const video = {
  title: "a",
  play() {
    console.log(this); // this points to the video object in the const video { }
  },
};
//---------------------------------------------------------------
video.stop = function () {
  console.log(this); // this points to the video object in the const video {...}
};

video.stop(); // this is the video object ( const video {...} )

video.play(); // this is the video object

//---------------------------------------------------------------
function playVideo() {
  console.log(this); // this points to the window object in the browser or the global object in node js
}

playVideo(); // this is the window object

//---------------------------------------------------------------
function Video(title) {
  this.title = title; // this points to the Video object in the const v = new Video("b");
  console.log(this);
}

const v = new Video("b"); // this is the Video object, it is a constructor function -> keyword new

//---------------------------------------------------------------
/**
 * Displays each tag of the video with its title.
 * Uses the `forEach` method to iterate over the tags array.
 */
const video10 = {
  title: "a",
  tags: ["a", "b", "c"],
  showTags() {
    // Iterate over each tag in the tags array

    this.tags.forEach(function (tag) {
      // Log the video title and the current tag

      console.log(this.title, tag);
    }, this); // this points to the video object
  },
};

video10.showTags();

// 11 Changing this
console.log(t(4) + " 11 Changing this");
//---------------------------------------------------------------
console.log(`Workaround for THIS: 
  > Arrow Functions >> this points to the parent object
  > const self = this >> this points to the parent object
  > .bind(this) >> this points to the parent object`);

const video11 = {
  title: "a",
  tags: ["a", "b", "c"],
  showTags() {
    const self = this;
    this.tags.forEach(function (tag) {
      console.log(self.title, tag);
    });
  },
};

video11.showTags();
//---------------------------------------------------------------
function playVideo(a, b) {
  console.log(this);
}
console.log();

playVideo.call({ named: "Bird" }, 1, 2);
playVideo.apply({ named: "Bird" }, [1, 2]); // properties must be passed as an array [1, 2]
playVideo.bind({ named: "Bird" }, 1, 2); // returns a new function
const fn1 = playVideo.bind({ named: "Bird" }, 1, 2);
fn1();
const fn2 = playVideo.bind({ named: "Bird" }, 1, 2)();
console.log();
//---------------------------------------------------------------

const video11c = {
  title: "a",
  tags: ["a", "b", "c"],
  showTags() {
    this.tags.forEach(
      function (tag) {
        console.log(this.title, tag);
      }.bind(this)
    );
  },
};

video11c.showTags();

//---------------------------------------------------------------
console.log();

const video11d = {
  title: "a",
  tags: ["a", "b", "c"],
  showTags() {
    this.tags.forEach((tag) => {
      // arrow function inherits this
      console.log(this.title, tag);
    });
  },
};

video11d.showTags();

// 12 E1 Sum of Arguments
console.log(t(4) + " 12 E1 Sum of Arguments");

function sum1e(...items) {
  console.log("Items:", items); // Überprüfen Sie die Argumente
  return items.reduce((a, b) => {
    console.log(`Adding ${a} and ${b}`); // Überprüfen Sie jeden Schritt
    return a + b;
  });
}
console.log();

console.log(sum1e(1, 2, 3, 4));
console.log(sum1e([1, 2, 3, 4]));
console.log();

function sum2e(...items) {
  if (items.length === 1 && Array.isArray(items[0])) {
    items = [...items[0]];
  }
  console.log("Items:", items); // Überprüfen Sie die Argumente
  return items.reduce((a, b) => {
    console.log(`Adding ${a} and ${b}`); // Überprüfen Sie jeden Schritt
    return a + b;
  });
}
console.log();

console.log(sum2e(1, 2, 3, 4));
console.log(sum2e([1, 2, 3, 4]));

console.log();
// 12 E1 Sum of Arguments
console.log(t(4) + " 12 E1 Sum of Arguments");
console.log();

//circle.radius =2;
// console.log(circle.area);

const circle = {
  radius: 1,
  get area() {
    return Math.PI * this.radius * this.radius;
  },
};
console.log(circle.area);

// 13 E3 Error Handling
console.log(t(4) + " 13 E3 Error Handling");
console.log();

const numE3 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

function countOccurrencesReduce(array, searchElement) {
  if (!Array.isArray(array)) {
    throw new Error("First argument must be an array");
  }

  return array.reduce((accumulator, current) => {
    const occurrence = current === searchElement ? 1 : 0;
    console.log(t(1), accumulator, t(1), current, t(1), searchElement);
    return accumulator + occurrence;
  }, 0);
}

try {
  countOccurrencesReduce(numE3, 1);
} catch (e) {
  console.log(e);
}
console.log();

try {
  countOccurrencesReduce(null, 1);
} catch (e) {
  console.log(e);
}

console.log();
console.log(``);
console.log("");
