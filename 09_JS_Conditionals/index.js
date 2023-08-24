x = x + 1: 1
X: 1
x += 1: 2
X: 2
x++: 2
X: 3
++x: 4
X: 4
x
4

if (x % 2 === 0) {
    console.log("X is even");
}

x

x = 5;

if (x % 2 === 0) {
    console.log("X is even");
}

if (x % 2 === 0) {
    console.log("X is even");
} else {
    console.log("X is odd");
}

if (x % 2 === 0) {
    console.log("X is even");
} else if (x == 0) {
    console.log("X is 0");
} else {
    console.log("X is odd");
}

let dayOfWeek = "Thursday";

switch (dayOfWeek) {
    case "Monday":
    case "Tuesday":
    case "Wednesday":
    case "Thursday":
    case "Friday":
        console.log("At work");
    case "Saturday":
    case "Sunday":
        console.log("I sleep");
}

switch (dayOfWeek) {
    case "Monday":
    case "Tuesday":
    case "Wednesday":
    case "Thursday":
    case "Friday":
        console.log("At work");
        break;
    case "Saturday":
    case "Sunday":
        console.log("I sleep");
        break;
}

!!"jordan"

let name = "Jordan";

if (name) {
    console.log("Name: ", name);
}

if (name !== undefined && name !== null && name !== "") {
    console.log("Name: ", name);
}

console.log(x % 2 === 0 ? "X is even" : "X is odd");

if (x > 100 && x % 2 == 0) {
    console.log("X is > 100 and even");
}

x = 200;
200
if (x > 100 && x % 2 == 0) {
    console.log("X is > 100 and even");
}
x = 50;
if (x > 100 && x % 2 == 0) {
    console.log("X is > 100 and even");
}

if (x > 100 && x % 2 == 0) {
    console.log("X is > 100");
    console.log("X is even");
}

if (x > 100 && x % 2 == 0) console.log("X is > 100 and even");

let age = 29;
if (age < 18) console.log("Uninsurable");
else if (age <= 65) console.log("Insurable");
else console.log("Out of range"); 
// ? -> if 
// : -> else
age < 18 ? 
    console.log("Uninsurable") 
: 
age <= 65 ?
    console.log("Insurable")
:
    console.log("Out of range");