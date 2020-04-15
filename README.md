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




