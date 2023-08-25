const me = {
    age: 29,
    name: "Jordan",
    job: "Trainer",
    hobbies: ["books", "games", "tormenting the innocent"]
}

me
// {age: 29, name: 'Jordan', job: 'Trainer', hobbies: Array(3)}age: 29hobbies: (3) ['books', 'games', 'tormenting the innocent']job: "Trainer"name: "Jordan"[[Prototype]]: Objectconstructor: ƒ Object()hasOwnProperty: ƒ hasOwnProperty()isPrototypeOf: ƒ isPrototypeOf()propertyIsEnumerable: ƒ propertyIsEnumerable()toLocaleString: ƒ toLocaleString()toString: ƒ toString()valueOf: ƒ valueOf()__defineGetter__: ƒ __defineGetter__()__defineSetter__: ƒ __defineSetter__()__lookupGetter__: ƒ __lookupGetter__()__lookupSetter__: ƒ __lookupSetter__()__proto__: (...)get __proto__: ƒ __proto__()set __proto__: ƒ __proto__()
me['age']
//29
me.age
//29
me.age = me.age + 1
// 30
typeof []
// 'object'
typeof {}
// 'object'
me.age++
// 30
me
// loop through the object like an array
for (let key in me){ 
    console.log("Key:", key, "Val:", me[key]);
}

let myAge = me.age;

let {age} = me;
// create a new property of the object
me.eyesight = "Terrible";

me

me.eyesigt = "Good";

me
delete me.eyesigt

me