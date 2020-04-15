// 001 - Fundamentals: appendToString

// Write a function called appendToString, which accepts two strings.
// The function should return a new string which consists of the second string appended to the first string.

function appendToString(stringone, stringtwo) {
  return stringone + stringtwo;
}

// Examples:
appendToString("Hello", " World!");
appendToString("Foo", "bar"); // "Foobar"
appendToString("bar", "Foo"); // "barFoo"
appendToString("", "test"); // "test"
appendToString("other test", ""); // "other test"


// 002 - Fundamentals: prependToString

// Write a function called prependToString, which accepts two strings.

// The function should return a new string with the second string prepended to the first string.


function prependToString(stringOne, stringTwo) {
  return stringTwo + stringOne;
}


// Examples:
prependToString('awesome', 'very'); // 'veryawesome'

prependToString('awesome', 'very'); // 'veryawesome'
prependToString('world', 'hello '); // 'hello world'
prependToString('nothing', '') // 'nothing'



function charAt(string, index) {
  if (index > string.length) {
    return '';
  } else {
    return string[index];
  }
}

charAt('awesome', 2);
charAt('awesome', 12);


//004 - Fundamentals: stringIncludes

// Write a function called stringIncludes, which accepts two strings: the first string is a word and the second string is a single character.

// The function should return true if the first string includes the character, otherwise it should return false.

// Do not use the built in String.includes() function!


function stringIncludes(word, character) {

  for (let i = 0; i <= word.length; i++) {
    let current = word[i];
    if (current === character) {
      return true;
    }
  }

  return false;
}


// Examples:

stringIncludes('awesome', 'e'); // true
stringIncludes('awesome', 'z'); // false

// 005 - Fundamentals: stringIndexOf
// Write a function called stringIndexOf, which accepts two strings: the first is a word and the second is a single character.

// The function should return the first index in the word at which the character exists or -1 if the character is not found.

// Do not use the built in String.indexOf() function!

function stringIndexOf(str, char) {

  for (let i = 0; i < str.length; i++) {
    let current = str[i];

    if (current === char) {
      return i;
    }
  }

  return -1
}


//  Examples:
// stringIndexOf('awesome', 'e') // 2
// stringIndexOf('awesome', 'z') // -1


// 006 - Fundamentals: stringLastIndexOf
// Write a function called stringLastIndexOf, which accepts two strings: the first is a word and the second is a single character.

// The function should return the last index at which the character exists or -1 if the character is not found.

// Do not use the built in String.lastIndexOf() function!

function stringLastIndexOf(str, char) {

  for (let i = str.length - 1; i > 0; i--) {
    let current = str[i];

    if (current === char) {
      return i;
    }
  }

  return -1
}

// Examples:

stringLastIndexOf('awesome', 'e'); // 6
stringLastIndexOf('awesome', 'z'); // -1


// 007 - Fundamentals: repeat

// Write a function called repeat, which accepts a string and a number and returns a new string with the string repeated that number of times.

// Do not use the built in repeat method - the tests will fail if you do!

function repeat(str, times) {

  let result = ''

  while (times > 0) {
    result += str;
    times--
  }


  return result;
}

// Examples:

repeat('Matt', 3) // 'MattMattMatt'
repeat('Elie', 2) // 'ElieElie'
repeat('Michael', 0) // ''


// 008 - Fundamentals: removeFromString

// Write a function called removeFromString, which accepts a string, a starting index (number) and a number of characters to remove.

// The function should return a new string with the characters removed.

function removeFromString(string, index, number) {
  let newStr = string.split('');

  newStr.splice(index, number)
    .join('')

  return newStr;
}

// Examples:

removeFromString('Elie', 2, 2) // 'El'
removeFromString('Elie', 0, 1) // 'lie'
removeFromString('Rithm School', 0, 6) // 'School'
removeFromString('Rithm School', 2, 4) // 'RiSchool'
removeFromString('Rithm School', 6, 400) // 'Rithm '


// 009 - Fundamentals: includes

// Write a function called includes, which accepts an array and a number. The function should return true if the value exists in the array and false if it does not.

// Do not use the built in Array.includes() function!

function includes(arr, number) {

  for (let i = 0; i < arr.length; i++) {
    let current = arr[i];

    if (current === number) {
      return true;
    }
  }

  return false
}

// Examples:

includes([1, 2, 3, 4], 4) // true
includes([1, 2, 3, 4], 14) // false
includes([], 14) // false



// 010 - Fundamentals: indexOf

// Write a function called indexOf, which accepts an array and a number. The function should return the index of the number if the value exists in the array and -1 if it does not exist

// Do not use the built in Array.indexOf() function!


function indexOf(arr, number) {

  for (let i = 0; i <= arr.length; i++) {
    let current = arr[i]

    if (current === number) {
      return i;
    }
  }

  return -1;
}

var arr = [5, 10, 15, 20];
indexOf(arr, 20); // 3

var arr2 = [1, 2, 3, 4, 5];
indexOf(arr2, 2); // 1

var arr3 = [1, 2];
indexOf(arr3, 10); // -1



// 011 - Fundamentals: lastIndexOf

// Write a function called lastIndexOf, which accepts an array and a number.The function should return the last index at which the value exists, or -1 if the value is not found.

// Do not use the built in Array.lastIndexOf() function!

function lastIndexOf(arr, number) {

  for (let i = arr.length - 1; i > 0; i--) {

    let current = arr[i];

    if (current === number) {
      return i;
    }
  }

  return -1;
}

// Examples:
lastIndexOf([1, 2, 3, 4], 2); // 1
lastIndexOf([1, 2, 3, 4, 2], 2); // 4
lastIndexOf([1, 2, 3, 4], 22); // -1




// 012 - Fundamentals: push

// Write a function called push which accepts two parameters, an array and any value. The function should add the value to the end of the array and then return the new length of the array.

// Do not use the built in Array.push() function!

function push(arr, item) {

  let len = arr.length

  arr[len] = item;

  return len + 1;
}


// Examples:

var arr = [1, 2, 3];
push(arr, 10); // 4

//arr; // [1, 2, 3, 10]

var secondArr = [5, 2, 1, 6];
push(secondArr, 20); // 5

//arr; // [5, 2, 1, 6, 20]


//013 - Fundamentals: pop

// Write a function called pop which accepts an array.

// The function should remove the last value in the array and return the value removed or undefined if the array is empty.

// Do not use the built in Array.pop() function!

function pop(arr) {

  if (arr.length === 0) {
    return undefined;
  } else {
    let poppedVal = arr[arr.length - 1];
    arr.length = arr.length - 1;
    return poppedVal;
  }
}


// Examples:

var arr = [1, 2, 3, 4];
pop(arr); // 4
arr; // [1, 2, 3]

var emptyArr = [];
pop(emptyArr); // undefined
emptyArr.length; // 0



// 014 - Fundamentals: unshift

// Write a function called unshift which accepts an array and a value and adds the value to the beginning of the array.This function should return the new length of the array.

// Do not use the built in Array.unshift() function!

function unshift(arr, value) {

  for (let i = arr.length - 1; i >= 0; --i) {
    let current = arr[i]
    arr[i + 1] = current;
  }

  console.log(arr)
  arr[0] = value;
  console.log(arr)

  return arr.length;
}

// Examples:

var arr = [1, 2, 3];
unshift(arr, 0); // 4
arr; // [0, 1, 2, 3]

unshift([4, 5, 6], 10); // 4


// 015 - Fundamentals: shift

// Write a function called shift which accepts an array and removes the first value in the array and then returns the value removed. It should return undefined if the array is empty.

// Do not use the built in shift function!

function shift(arr) {

  if (arr.length === 0) {
    return undefined;
  }

  let shifted = arr.splice(0, 1)
                  .join();

  return shifted;



}

var arr = ["a", "b", "c"];
shift(arr); // "a"
arr; // ["b","c"]

var emptyArr = [];
shift(emptyArr); // undefined
emptyArr.length; // 0



// 016 - Fundamentals: reverse

// Write a function called reverse, which accepts an array and returns the same array with all of the values reversed. In other words, do not solve this by creating a new array.

// Note: returning the same array is called an in-place operation, since no additional space is used. https://en.wikipedia.org/wiki/In-place_algorithm

// Do not use the built in Array.reverse() function!

function reverse(arr){

  let first = 0;
  let last = arr.length -1;
  let temp;

  while(last > first){
    temp = arr[first]
    arr[first] = arr[last]
    arr[last] = temp;

    first++
    last--
  }

  return arr;

}

// Examples:
reverse([7,6, 5, 4, 3, 2, 1]); // [1, 2, 3, 4, 5]
reverse([]); // []


// 017 - Fundamentals: max

// Write a function called max, which accepts an array and returns the highest value.

// Do not use the built-in Math.max() function!

function max(arr){

  if(arr.length === 0){
    return undefined;
  }

  let max = arr[0]

  for(let i =1; i < arr.length; i++){
    let current = arr[i];

    if(current > max){
      max = current
    }
  }

  return max;
}

// Examples:

max([5, 1, 4, 7, 1, 2]); // 7
max([3, 4, 12, 1, 8]); // 12
max([-1, 6, 3, 2.2, -10, -4]); // 6


// 018 - Fundamentals: min

// Write a function called min, which accepts an array of numbers and returns the lowest value.

// Do note use the built-in Math.min() function!


function min(arr){

  if(arr.length === 0){
    return undefined;
  }

  let min = arr[0]

  for(let i = 1; i < arr.length; i++){
    let current = arr[i];

    if(min > current){
      min = current;
    }
  }

  return min;
}

// Examples:
min([5, 1, 4, 7, 1, 2]); // 1
min([-1, 6, 3, 2.2, -10, -4]); // -10


// 019 - Fundamentals: slice

// Write a function called slice, which accepts an array, and two numbers.

// The function should return a new array with the elements starting at the index of the first number and going until the index of the second number.

// If a third parameter is not passed to the function, it should slice until the end of the array by default. gIf the third parameter is greater than the length of the array, it should slice until the end of the array.

// Do not use the built in Array.slice() function!


function slice(arr, start, end){

  let newArr = [];

  for(let i = start; i < end; i++){
    let current = arr[i];

    result.push(current)
  }


  return result
}

// Examples:

slice([1, 2, 3, 4, 5], 0, 2); // [1, 2]
slice([1, 2, 3, 4, 5], 2, 4); // [3, 4]
slice([1, 2, 3, 4, 5], 2); // [3, 4, 5]
slice([1, 2, 3, 4, 5], 2, 10); // [3, 4, 5]


// 020 - Fundamentals: concat

// Write a function called concat, which accepts an array, and one, two, or three additional arguments (all of which are arrays).

// The function returns a new array with all of the remaining parameters joined with the array.

// Hint - if you do not want to hard code the number of arguments, you can use the arguments keyword (https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/arguments) or the spread operator (https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Spread_operator)  to handle a variable of parameters.
// Do not use the built in Array.concat() function!


//pseudocode included because... so far the hardest question 🤪

function concat(arr,...args){

  //use the spread operator to get the extra arrays
  var extraArrays=[...args];

  // outer loop over the extra arrays
  for (var i = 0; i < extraArrays.length; ++i) {

    //easy to read variable
    let currentArr= extraArrays[i];

    //looping over one array at a time
    for (var j = 0; j < currentArr.length; ++j)

    // push the to our og array (1st argument)
    arr.push(currentArr[j]);
  }

  // complete array-concat
  return arr;
}

// Examples:
concat([1, 2, 3], [4, 5, 6]); // [1, 2, 3, 4, 5, 6]
concat([1, 2, 3], [4], [5, 6]); // [1, 2, 3, 4, 5, 6]
concat([1, 2, 3], [4], [5], [6]); // [1, 2, 3, 4, 5, 6]
concat([1], [[2], [3]], [4]); // [1, [2], [3], 4]]


// 021 - Fundamentals: keys

// Write a function called keys, which accepts an object and returns an array of all of the keys in the object.

// Do not use the built in Object.keys() function!


function keys(obj){

  let result =[];

  for(let item in obj){
    result.push(item)
  }


  return result;
}


// Examples:
var obj = { a: 1, b: 2, c: 3 };
keys(obj); // ["a", "b", "c"]

var obj2 = { first: 'Matt', last: 'Lane' };
keys(obj2); // ["first", "last"]

var obj3 = {};
keys(obj3); // []


// 022 - Fundamentals: values

// Write a function called values, which accepts an object and returns an array of all of the values in the object.

// Do not use the built in Object.values() function!

function values(obj){

  let result =[];

  for(let item in obj){
    let current = obj[item]
    result.push(obj[item])
  }


  return result;
}

//Examples:
var obj = { a: 1, b: 2, c: 3 };
values(obj); // [1,2,3]

var obj2 = { first: 'Matt', last: 'Lane', isDogOwner: true };
values(obj2); // ["Matt", "Lane", true]

var obj3 = {};
values(obj3); // []


// 023 - Fundamentals: swapKeyAndValue

// Write a function called swapKeyAndValue, which accepts an object and a key.

// The function should return a new object with the given key and its value flipped, and all the other key/value pairs unchanged.


function swapKeyAndValue(obj,keyToSwap){

  var result = {};

  for(let key in obj){

    if (keyToSwap in obj){

      result[obj[keyToSwap]]=keyToSwap;
    }

    result[key]=obj[key];

  }
    delete result[keyToSwap];


  return result;
  }



  var instructor = { name: 'Elie', job: 'Instructor' };

  swapKeyAndValue(instructor, 'name');
  // {Elie: 'name', job: "Instructor"}

  swapKeyAndValue(instructor, 'job');
  // {name: "Elie", Instructor: 'job'}


//   024 - Fundamentals: entries

//   Write a function called entries, which accepts an object and returns an array of arrays of key-value pairs.

// In other words, each sub-array is an "entry" in the object with two elements: the first element is the key, and the second element is the value.

// Do not use the built in Object.entries() function!

// Examples:


function entries(obj){

  var result=[];

  for(var key in obj){
    result.push([key,obj[key]]);
  }
  return result;
}

var obj = { a: 1, b: 2, c: 3 };
entries(obj);
// [["a",1], ["b",2], ["c",3]]

var obj2 = { first: 'Matt', last: 'Lane', isDogOwner: true };
entries(obj2);
// [["first","Matt"], ["last","Lane"], ["isDogOwner",true]]

var obj3 = {};
entries(obj3); // []


//025 - Fundamentals: every

// Write a function called every which accepts an array and a callback function. The function should return true if all values in the array passed to the callback return true, otherwise return false.

// Do not use the built in every function, the tests will fail!

function every(arr, cb){

  for(let i = 0; i < arr.length; i++){
    let current = arr[i];

    if(!cb(current)){
      return false
    }
  }

  return true;

}

// Examples:

every([1, 2, 3, 4, 5], function(val) {
 return val > 0;
}); // true

every([1, 2, 3, 4, 5], function(val) {
 return val < 2;
}); // false