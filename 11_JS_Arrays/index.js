// Create a blank array with jut a length (full of undefined's)
const blankArray = new Array(27);

console.log("Blank: ", blankArray);

// create an array "literal" with pre-defined values (can still change them later)
const array = [12, "test", false, "37"];

console.log("Array:", array);
// Access elements using the index
console.log("First element:", array[0]); // 12
console.log("Second element:", array[1]); // "test"
console.log("Third element:", array[2]); // false
console.log("Fourth element:", array[3]); // "37"

// You CAN access the 4th index bit it will just return undefined as there is no value there
console.log("Too far:", array[4]) // undefined

// set the third element
array[2] = 27;
console.log("Array:", array); // 12, "test", 27, "37"

// sorts the elements alphabetically
array.sort(); 

console.log("Array:", array); // 12, 27, "37", "test"

// reverses order of array

array.reverse();

console.log("Array:", array); // "test", "37", 27, 12

// joins the elements together into one string
array.join(", "); // "test, 37, 27, 12"


// loops through the array forwards
for (let index = 0; index < array.length; index++) {
    console.log("I:", index, "VAL:", array[index]);
}

// loops through the array backwards
for (let index = array.length - 1; index >= 0; index++) {
    console.log("I:", index, "VAL:", array[index]);
}

// shortcut for the first loop
for (let value of array) {
    console.log("VAL:", array[index]);
}

