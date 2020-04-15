// 001 - Fundamentals: appendToString

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


// 002 - Fundamentals: prependToString

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



function charAt (string,index) {
  if (index > string.length){
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


function stringIncludes (word,character){

  for(i = 0;i <= word.length; i++) {

    if(word[i] === character){

      return true;
    }

    // else{return 'false';}

  }
  return false;
}


// Examples:

stringIncludes('awesome', 'e'); // true
stringIncludes('awesome', 'z'); // false