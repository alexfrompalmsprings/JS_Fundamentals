# JS_Fundamentals
A repo to help some of the people who I have been tutoring and helping over the past weeks.

This repo covers the following:

- [Fundamentals: appendToString](#appendToString)

## JS Fundamentals

### AppendToString
```JavaScript
function appendToString(stringone,stringtwo) {
  return stringone + stringtwo;
}

appendToString("Hello", " World!");
appendToString("Foo", "bar"); // "Foobar"
appendToString("bar", "Foo"); // "barFoo"
appendToString("", "test"); // "test"
appendToString("other test", ""); // "other test"
```