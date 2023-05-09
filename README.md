# Styling Components
## trim() - method

- In JavaScript, trim() is a built-in method that removes white space characters from both ends of a string. The trim() method does not modify the original string, but instead returns a new string with the white space removed.

- White space characters include spaces, tabs, and line breaks. The trim() method can be useful for cleaning up user input, especially when dealing with form fields.

- Here's an example of how to use trim() in JavaScript:

```js
let str = "   hello world    ";
let trimmedStr = str.trim();
console.log(trimmedStr); // Output: "hello world"
```

- In this example, trim() is called on the str variable, which contains extra white space characters at the beginning and end of the string. The result is a new string, trimmedStr, with the white space characters removed from both ends.

(trim() MDN) ![https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/trim];