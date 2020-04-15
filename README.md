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


