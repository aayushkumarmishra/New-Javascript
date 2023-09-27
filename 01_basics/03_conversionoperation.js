let value = "33abc";

console.log(typeof value); // this prints type of variables // stirng
console.log(typeof(value)); // this is called method in jS it's also prints type of variables // string

let valueInNumber = Number(value); // we are type-casting string into number.
console.log(typeof valueInNumber); // number.
console.log(valueInNumber); // it print NaN (means => not a number)


// few Examples of type-casting

// int to string

let num = 33;
let numToString = String(num);
console.log(numToString);
console.log(typeof numToString);

// int to boolean
let num1 = 0;
let numToBolean = Boolean(num1);
console.log(numToBolean);
console.log(typeof numToBolean);

// string to in
let string = "33";
let stringToNumber = Number(string);
console.log(stringToNumber);
console.log(typeof stringToNumber);