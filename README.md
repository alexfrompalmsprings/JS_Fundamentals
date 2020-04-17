# JS_Fundamentals
A repo to help some of the people who I have been tutoring and helping over the past weeks.

This repo covers the following:

- [Fundamentals: appendToString](#appendToString)
- [Fundamentals: prependToString](#prependToString)
- [Fundamentals: charAt](#charAt)
- [Fundamentals: stringIncludes](#stringIncludes)
- [Fundamentals: stringIndexOf](#stringIndexOf)
- [Fundamentals: stringLastIndexOf](#stringLastIndexOf)
- [Fundamentals: repeat](#repeat)
- [Fundamentals: removeFromString](#removeFromString)
- [Fundamentals: includes](#includes)
- [Fundamentals: indexOf](#indexOf)
- [Fundamentals: push](#push)
- [Fundamentals: pop](#pop)
- [Fundamentals: unshift](#unshift)
- [Fundamentals: shift](#shift)
- [Fundamentals: reverse](#reverse)
- [Fundamentals: max](#max)
- [Fundamentals: min](#min)
- [Fundamentals: slice](#slice)
- [Fundamentals: concat](#concat)
- [Fundamentals: keys](#keys)
- [Fundamentals: values](#values)
- [Fundamentals: swapKeyAndValue](#swapKeyAndValue)
- [Fundamentals: entries](#entries)
- [Fundamentals: every](#every)
- [Fundamentals: some](#some)
- [Fundamentals: countIf](#countIf)
- [Fundamentals: squareEvenNumbers](#squareEvenNumbers)

This repo also has some coding challenges. This is the list of the 'Problem Solving Challenges' :

- [Problem Solving Challenge: multiples](#multiples)
- [Problem Solving Challenge: pluck](#pluck)
- [Problem Solving Challenge: twoHighest](#twoHighest)
- [Problem Solving Challenge: minMaxKeyInObject](#minMaxKeyInObject)
- [Problem Solving Challenge: stringFromObject](#stringFromObject)
- [Problem Solving Challenge: toQueryString](#toQueryString)
- [Problem Solving Challenge: countNumbers](#countNumbers)
- [Problem Solving Challenge: generatePairs](#generatePairs)
- [Problem Solving Challenge: findTheDuplicate](#findTheDuplicate)
- [Problem Solving Challenge: totalCaps](#totalCaps)
- [Problem Solving Challenge: highestScoringWord](#highestScoringWord)
- [Problem Solving Challenge: separate](#separate)
- [Problem Solving Challenge: findGreaterNumbers](#findGreaterNumbers)


## JS Fundamentals

### AppendToString
```JavaScript

// Write a function called appendToString, which accepts two strings.
// The function should return a new string which consists of the second string appended to the first string.

function appendToString(stringone,stringtwo) {
  return stringone + stringtwo;
}

// Examples:
appendToString("Hello", " World!");
appendToString("Foo", "bar"); // "Foobar"
appendToString("bar", "Foo"); // "barFoo"
appendToString("", "test"); // "test"
appendToString("other test", ""); // "other test"
```
### PrependToString
```JavaScript


// Write a function called prependToString, which accepts two strings.
// The function should return a new string with the second string prepended to the first string.


function  prependToString (stringOne,stringTwo){
  return stringTwo + stringOne;
}

// Examples:
prependToString('awesome', 'very'); // 'veryawesome'

prependToString('awesome', 'very'); // 'veryawesome'
prependToString('world', 'hello '); // 'hello world'
prependToString('nothing', '') // 'nothing'

```

### charAt
```JavaScript

function charAt (string,index) {
  if (index > string.length){
    return '';
  } else {
    return string[index];
  }
}

// Examples:
  charAt('awesome', 2);
  charAt('awesome', 12);

```

### stringIncludes
```JavaScript

// Write a function called stringIncludes, which accepts two strings: the first string is a word and the second string is a single character.

// The function should return true if the first string includes the character, otherwise it should return false.

// Do not use the built in String.includes() function!

function stringIncludes(word, character) {

  for (i = 0; i <= word.length; i++) {
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

```

### stringIndexOf
```JavaScript

// Write a function called stringIndexOf, which accepts two strings: the first is a word and the second is a single character.

// The function should return the first index in the word at which the character exists or -1 if the character is not found.

// Do not use the built in String.indexOf() function!

function stringIndexOf(str, char){

  for(let i = 0; i < str.length; i++){
    let current = str[i];

    if(current === char){
      return i;
    }
  }

  return -1
}


//  Examples:
// stringIndexOf('awesome', 'e') // 2
// stringIndexOf('awesome', 'z') // -1

```

### stringLastIndexOf
```JavaScript

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

```


### repeat
```JavaScript
// Write a function called repeat, which accepts a string and a number and returns a new string with the string repeated that number of times.

// Do not use the built in repeat method - the tests will fail if you do!

function repeat(str, times){

  let result = ''

  while(times > 0){
    result+= str;
    times--
  }


  return result;
}

// Examples:

repeat('Matt', 3) // 'MattMattMatt'
repeat('Elie', 2) // 'ElieElie'
repeat('Michael', 0) // ''

```

### removeFromString
```JavaScript
// Write a function called removeFromString, which accepts a string, a starting index (number) and a number of characters to remove.

// The function should return a new string with the characters removed.

function removeFromString(string,index,number){
  let newStr = string.split('');

  newStr.splice(index,number)
        .join('')

  return newStr;
  }

// Examples:

removeFromString('Elie', 2, 2) // 'El'
removeFromString('Elie', 0, 1) // 'lie'
removeFromString('Rithm School', 0, 6) // 'School'
removeFromString('Rithm School', 2, 4) // 'RiSchool'
removeFromString('Rithm School', 6, 400) // 'Rithm '

```


### includes
```JavaScript
// Write a function called includes, which accepts an array and a number. The function should return true if the value exists in the array and false if it does not.

// Do not use the built in Array.includes() function!

function includes(arr, number){

  for(let i = 0; i < arr.length; i++){
    let current = arr[i];

    if(current === number){
      return true;
    }
  }

  return false
}

// Examples:
includes([1, 2, 3, 4], 4) // true
includes([1, 2, 3, 4], 14) // false
includes([], 14) // false

```

### indexOf
```JavaScript
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

//Examples
var arr = [5, 10, 15, 20];
indexOf(arr, 20); // 3

var arr2 = [1, 2, 3, 4, 5];
indexOf(arr2, 2); // 1

var arr3 = [1, 2];
indexOf(arr3, 10); // -1

```


### lastIndexOf
```JavaScript
// Write a function called lastIndexOf, which accepts an array and a number.The function should return the last index at which the value exists, or -1 if the value is not found.

// Do not use the built in Array.lastIndexOf() function!

function lastIndexOf(arr, number){

  for(let i = arr.length -1; i > 0; i--){

    let current = arr[i];

    if(current === number){
      return i;
    }
  }

  return -1;
}

// Examples:
lastIndexOf([1, 2, 3, 4], 2); // 1
lastIndexOf([1, 2, 3, 4, 2], 2); // 4
lastIndexOf([1, 2, 3, 4], 22); // -1

```

### push
```JavaScript
// Write a function called push which accepts two parameters, an array and any value. The function should add the value to the end of the array and then return the new length of the array.

// Do not use the built in Array.push() function!

function push(arr, item){

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

```


### pop
```JavaScript
// Write a function called pop which accepts an array.

// The function should remove the last value in the array and return the value removed or undefined if the array is empty.Do not use the built in Array.pop() function!

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

```

### unshift
```JavaScript

// Write a function called unshift which accepts an array and a value and adds the value to the beginning of the array.This function should return the new length of the array.

// Do not use the built in Array.unshift() function!

function unshift(arr,value){

  for (let i = arr.length-1; i >= 0; --i) {
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
//arr; // [0, 1, 2, 3]


```

### shift
```JavaScript
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
// arr; // ["b","c"]

var emptyArr = [];
shift(emptyArr); // undefined
// emptyArr.length; // 0

```


### reverse
```JavaScript
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

```


### max
```JavaScript

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


```

### min
```JavaScript
//Write a function called min, which accepts an array of numbers and returns the lowest value.

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

```

### slice
```JavaScript
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

```

### Concat
```JavaScript
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
```


### Values
```JavaScript
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
```


### Keys
```JavaScript
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

```

### swapKeyAndValue
```JavaScript
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

```

### Entries
```JavaScript
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

```

### Every

```JavaScript
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

```
### Some
```JavaScript
// Write a function called every which accepts an array and a callback function. The function should return true if all values in the array passed to the callback return true, otherwise return false.

// Do not use the built in every function, the tests will fail!
function some(arr, cb){

  for(let i = 0; i < arr.length; i++){
    let current = arr[i];

    if(cb(current)){
      return true;
    }
  }

  return false;
}

// Examples:
every([1, 2, 3, 4, 5], function(val) {
 return val > 0;
}); // true

every([1, 2, 3, 4, 5], function(val) {
 return val < 2;
}); // false

```

### CountIf
```JavaScript
// Write a function called countIf which accepts an array and a callback function. The callback function will return a boolean comparison to its val parameter.

// The function should return a count of the number of times the callback returns true when passed each value in the array.

// Examples:

function countIf(arr, cb){

  let counter = 0;

  for(let i = 0; i < arr.length; i++){
    let current = arr[i];

    if(cb(current)){
      counter++
    }

  }

  return counter;
}

countIf([1, 2, 3, 4, 5], function(val) {
 return val > 4;
}); // 1

countIf([2, 4, 6, 7], function(val) {
 return val % 2 === 0;
}); // 3

countIf(['Tim', 'Matt', 'Elie'], function(val) {
 return val.length > 3;
}); // 2
```

### squareEvenNumbers
```JavaScript
// Write a function called countIf which accepts an array and a callback function. The callback function will return a boolean comparison to its val parameter.

// The function should return a count of the number of times the callback returns true when passed each value in the array.

// Examples:

function countIf(arr, cb){

  let counter = 0;

  for(let i = 0; i < arr.length; i++){
    let current = arr[i];

    if(cb(current)){
      counter++
    }

  }

  return counter;
}

countIf([1, 2, 3, 4, 5], function(val) {
 return val > 4;
}); // 1

countIf([2, 4, 6, 7], function(val) {
 return val % 2 === 0;
}); // 3

countIf(['Tim', 'Matt', 'Elie'], function(val) {
 return val.length > 3;
}); // 2
```

## Problem Solving Challenges

### Multiples
```JavaScript
// Implement a function called multiples that accepts two numbers: x and n. The function should return the first n multiples of the number x. Assume that x is a positive integer.

function multiples(number, times){

  let result = [];
  let sum = number;

  while(times > 0){
    result.push(sum)
    sum+=number;
    times--
  }

  return result
}

// Examples:
multiples(3, 4) // [3, 6, 9, 12]
multiples(2, 5) // [2, 4, 6, 8, 10]

// Credit - https://www.codewars.com/kata/return-the-first-m-multiples-of-n/train/javascript

```

### Pluck
```JavaScript
// Write a function called pluck, which takes an array of objects and the name of a key. The function should return an array containing the value associated with that key for each object, or undefined if that key is not present in the object.

function pluck(arr, key){

  let result = [];

  for(let i = 0; i < arr.length; i++){
    let current = arr[i];

    if(key in current){
      result.push(current[key])
    } else{
      result.push(undefined)
    }


  }

  return result;
}


// Examples:

pluck([
  { name: "Tim" }, { name: "Matt" }, { name: "Elie" }],
 'name'
)
// ["Tim", "Matt", "Elie"]

pluck(
  [{ name: "Tim", isBoatOwner: true }, { name: "Matt", isBoatOwner: false }, { name: "Elie" }],
 'isBoatOwner'
)
// [true, false, undefined]
```

### twoHighest
```JavaScript
// Write a function called twoHighest that takes an array of numbers as its argument and returns the two highest numbers within the array. The returned value should be an array in the following format: [secondHighest, highest].The order of the numbers passed in could be any order.

// Do not use the build in sort() method - the tests will fail!

function twoHighest(arr){
  let highest = arr[0];
  let secondHighest = arr[1]

  if(secondHighest > highest){
    let temp = highest;
    highest = secondHighest;
    secondHighest = temp;
  }


  for(let i = 2; i < arr.length; i++){
    let current = arr[i];

    if(current > highest){
      secondHighest = highest;
      highest = current;
    } else if(current > secondHighest){
      secondHighest = current;
    }

  }

  // console.log([secondHighest, highest])
  return [secondHighest, highest]
}



// Examples:

twoHighest([1, 2, 10, 8]); // [8, 10]
twoHighest([6, 1, 9, 10, 4]); // [9,10]
twoHighest([4, 25, 3, 20, 19, 5]); // [20,25]
twoHighest([1, 2, 2]) // [2, 2];

// Credit - https://www.codewars.com/kata/two-oldest-ages-1
```

### minMaxKeyInObject
```JavaScript
// Write a function called minMaxKeyInObject that accepts an object with numeric keys.*
// The function should return an array with the following format: [lowestKey, highestKey]
// * Remember all object keys are strings, even if they hold numeric values.

// Examples:

function minMaxKeyInObject(obj){

  let keys = Object.keys(obj)

  let first = Number(keys[0])
  let last = Number(keys[keys.length -1]);

  return [first, last]
}

minMaxKeyInObject({ 2: 'a', 7: 'b', 1: 'c', 10: 'd', 4: 'e' });
// [1, 10]

minMaxKeyInObject({ 1: 'Elie', 4: 'Matt', 2: 'Tim' });
// [1, 4]
```

### stringFromObject
```JavaScript
// Write a function called stringFromObject that generates a string from an object's key/value pairs.
// The format should be "key = value, key = value".
// Each key/value pair should be separated by a comma and space except for the last pair.

//Examples:

function stringFromObject(obj){

  var result=[];

  for(let key in obj){
   result.push(key + ' = ' + obj[key]);
  }

  return result.join(', ');
}


stringFromObject({ a: 1, b: '2' });
// "a = 1, b = 2"

stringFromObject({ name: 'Elie', job: 'Instructor', isCatOwner: false });
// "name = Elie, job = Instructor, isCatOwner = false"

stringFromObject({});
// ""

// Credit - https://www.codewars.com/kata/building-strings-from-a-hash
```

### toQueryString
```JavaScript
// A query string, is a way to send data in an HTTP request, you may see it in a URL starting with a question mark. Write a function called toQueryString, which accepts an object and returns a string with each key and value separated by a = and each pair separated by a &. If the value is an array, add another pair to the string with each value

function toQueryString(obj){

  let result = [];

  for(let key in obj){

    if(Array.isArray(obj[key])){
      let innerArr = obj[key]

      for(let i = 0; i < innerArr.length; i++){
        result.push(key + '=' + innerArr[i])
      }
    }

    else{
      result.push(key + '=' + obj[key]);
    }


  }

  return result.join('&')

}

// Examples:
toQueryString({}) // ""
toQueryString({"bar": [ 2, 3], "foo": 1 }) // "bar=2&bar=3&foo=1"
toQueryString({name: "Elie", "nums": [1,2,3,4]}) // "name=Elie&nums=1&nums=2&nums=3&nums=4"

// Credit - https://www.codewars.com/kata/do-you-know-how-to-make-query-string
```


### countNumbers
```JavaScript
// Write a function called countNumbers, which accepts an array of strings. The function should return a count of the number of strings in the array that can be successfully converted into a number. For example, the string "1" can be successfully converted to the number 1, but the string "hello" cannot be converted into a number.

function countNumbers(arr){
  let counter = 0;

  arr.forEach((item) => {

    if(item === '0' || Number(item)){
      counter++
    }
    return counter
  })

  return counter;
}

// Examples:
countNumbers(['a','b','3','awesome','4']); // 2
countNumbers(['32', '55', 'awesome', 'test', '100']); // 3
countNumbers([]); // 0
countNumbers(['0','1','3','NaN']); // 3
countNumbers(['7', '12', 'a', '', '6', '8', ' ']); // 4
```

### generatePairs
```JavaScript
// Write a function generatePairs that accepts an integer and generates an array containing the pairs of integers [a, b]. The pairs should be sorted by increasing values of a then increasing values of b.

function generatePairs(number) {
  let result = [];

  for(let i =0 ; i <= number ; i++){

    for(let j = i ; j <= number ; j++){

        result.push([i, j]);
    }
  }

  return result;
}

// Examples:
generatePairs(3) // [ [0, 0], [0, 1], [0, 2], [0, 3], [1, 1], [1, 2], [1, 3], [2, 2], [2, 3], [3, 3] ]
generatePairs(2) // [ [0, 0], [0, 1], [0, 2], [1, 1], [1, 2], [2, 2] ]
generatePairs(1) // [ [0, 0], [0, 1], [1,1]]
generatePairs(0) // [ [0, 0]]

// Credit -  https://www.codewars.com/kata/pairs-of-integers-from-0-to-n/train/javascript
```


### findTheDuplicate
```JavaScript
// Write a function called findTheDuplicate which accepts an array of numbers containing a single duplicate. The function returns the number which is a duplicate or undefined if there are no duplicates.
// Examples:

function findTheDuplicate(arr){

  let map = {};

  for(let i = 0; i< arr.length; i ++){
    let current = arr[i];

    if(map[current] === undefined){
      map[current] = 1;
    } else{
      map[current]++;
    }
  }

  for(let num in map){

    if(map[num] > 1){
      return Number(num);
    }
  }

  return undefined;
}

findTheDuplicate([1,2,1,4,3,12]) // 1
findTheDuplicate([6,1,9,5,3,4,9]) // 9
findTheDuplicate([2,1,3,4]) // undefined
```

### TotalCaps
```JavaScript
// Write a function called totalCaps, which accepts an array of strings and returns the total number of capitals in each of the strings. Do not convert the array into a string.


let totalCaps = (arr) => {

  let counter = 0;

  for(let i = 0; i < arr.length; i++){
    let word = arr[i];

    for(let j = 0; j < word.length; j++){
      let letter = word[j];

      if(letter === letter.toUpperCase()){
        // console.log(`we found a CAP ${letter}`)
        counter++
      }

    }
  }

  // console.log(counter)
  return counter;
}

// Examples:

totalCaps(["AwesomE", "ThIngs", "hAppEning", "HerE"]) // 8
totalCaps(["Elie", "Matt", "Tim"]) // 3
totalCaps(["hello", "world"]) // 0
```


### HighestScoringWord
```JavaScript
// Given a string of words, your goal is to find the highest scoring word in the string. a is worth 1 point, b is worth 2 points, c is worth 3 points,
//and so on, all the way up until z, which is worth 26 points. You can assume that strings will consist only of lowercase letters and spaces.
// In the event that two words have the same score, return the word that appears first in the string.

let alphabet = {
  a: 1,
  b: 2,
  c: 3,
  d: 4,
  e: 5,
  f: 6,
  g: 7,
  h: 8,
  i: 9,
  j: 10,
  k: 11,
  l: 12,
  m: 13,
  n: 14,
  o: 15,
  p: 16,
  q: 17,
  r: 18,
  s: 19,
  t: 20,
  u: 21,
  v: 22,
  w: 23,
  x: 24,
  y: 25,
  z: 26
}


let highestScoringWord = (string) => {

  let wordsArray = string.split(' ');
  let score = 0;
  let highestScoring;


  for(let i = 0; i < wordsArray.length; i++){
    let currentWord = wordsArray[i];
    let currentScore = 0;

    for(let j = 0; j < currentWord.length; j++){
      let letter = currentWord[j]
      currentScore += alphabet[letter]

    }

    if(currentScore >= score){
      score = currentScore
      highestScoring = currentWord
    }
  }

  return highestScoring;
}

// Examples:
highestScoringWord("a b c d e f"); // "f"
highestScoringWord("world hello"); // "world"
highestScoringWord("go ahead make my day"); // "my"
highestScoringWord("there is no place like home"); // "there"
highestScoringWord("aaaaaa bbb cc f"); // "aaaaaa"
highestScoringWord("bbb cc f aaaaaa"); // "bbb"
highestScoringWord("this sentence has two highest scoring words"); // "sentence"

// Credit - https://www.codewars.com/kata/highest-scoring-word

```

### HighestScoringWord
```JavaScript
// Dogs don't get along with cats, and cats don't get along with dogs.
// What they both have in common is that they don't get along with water (baths).
// Given an array of 'dogs', 'cats', and 'water', write a function called separate, which returns a new array so that the dogs are separated from the cats by water. Make sure that cats always come first in the array.
// You can assume that the array will always at least three elements, and that there'll always be at least one dog, one cat, and one water to work with.


/* Please note that this solution is not the most optimized way to solve it. Best solution would involved recursion but for demonstration purposes this solution works well*/
let separate = (arr) => {

    let result;
    let dogs = [];
    let cats = [];
    let water = [];


    arr.forEach((item) => {
      if(item === 'dog'){
        dogs.push(item)
      }

      if(item === 'water'){
        water.push(item)
      }

      if(item === 'cat'){
        cats.push(item)
      }
    })



    result = cats.concat(water).concat(dogs)

  return result;
}


separate(['dog','cat','water']) // ['cat','water','dog']

separate(['dog','cat','water','cat']) // ['cat', 'cat', 'water', 'dog'])

separate(['cat','cat','water','dog','water','cat','water','dog'])
  // ['cat','cat','cat','water','water','water','dog','dog']
  ```



### findGreaterNumbers
```JavaScript

// Write a function called findGreaterNumbers which accepts an array and returns the number of times a number is followed by a larger number.

// Note that the numbers don 't need to be next to each other in the array.
// Any pair where the second number comes later in the array and is also the larger number should count.

let findGreaterNumbers = (arr) => {

  let counter = 0;

  for(let i = arr.length -1; i >= 0; i--){
    let current = arr[i];

    for(let j = i -1; j >= 0; j--){
      let compare = arr[j];

      // console.log(current, compare)
      if(current > compare){
        counter++
      }
    }
  }

  console.log(counter)
  return counter;
}

//examples
findGreaterNumbers([1, 2, 3]) // 3 (2 > 1, 3 > 2, and 3 > 1)
findGreaterNumbers([6, 1, 2, 7]) // 4
findGreaterNumbers([5, 4, 3, 2, 1]) // 0
findGreaterNumbers([]) // 0
  ```



### numInversions
```JavaScript
// Given an array of numbers (not necessarily unique values), your goal is to measure how close the array is to being sorted by counting the number of inversions it has. An inversion occurs when two numbers in the array are out of order.
// Implement a function called numInversions which counts the number of inversions in the array.

let numInversions = (arr) => {
  let counter = 0;

  for(let i = arr.length -1; i >= 0; i--){
    let current = arr[i];

    for(let j = i -1; j >= 0; j--){
      let compare = arr[j];

      // console.log(current, compare)
      if(current < compare){
        counter++
      }
    }
  }

  return counter;
}


// Examples:
numInversions([]); // 0
numInversions([5]); // 0
numInversions([1,2]); // 0
numInversions([2,1]); // 1
numInversions([1,2,3]); // 0
numInversions([1,3,2]); // 1
numInversions([3,1,2]); // 2
numInversions([3,2,1]); // 3
numInversions([5,3,4,1,2]); // 8
numInversions([1,1,1,1]); // 0
numInversions([2,2,1,1]); // 4
numInversions([3,3,3,2,2,1]); // 11
numInversions([8, 6, 6, 1, 1, 1, 3, 4, 2]); // 22

// Credit - https://www.codewars.com/kata/calculate-number-of-inversions-in-array
  ```