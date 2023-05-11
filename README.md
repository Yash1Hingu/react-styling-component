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

[trim() MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/trim);

## styled-components MODULE
- Styled Components is a library for styling React components using CSS-in-JS.
- It allows you to write CSS styles directly in your JavaScript files using a special syntax, instead of having separate CSS files.
- With Styled Components, you can easily create dynamic styles based on props or state, which makes it easy to create responsive UIs.
- Styles are scoped to individual components, which makes it easier to reason about your code and avoid naming collisions.
- You can also create global styles or themes that apply to multiple components.
- Styled Components generate CSS at runtime, which allows you to avoid having to include large CSS files in your bundle.
- Styled Components provide excellent theming support, which makes it easy to create consistent designs across your application.
- Overall, Styled Components offer a more flexible, maintainable, and efficient way to style your React components.

```js
import styled from 'styled-components';

// Define a new styled component
const Button = styled.button`
  background-color: ${props => props.primary ? 'blue' : 'gray'};
  color: white;
  padding: 10px 20px;
  border: none;
  border-radius: 5px;
  font-size: 16px;
`;

// Use the Button component in your React code
function App() {
  return (
    <div>
      <Button>Default Button</Button>
      <Button primary>Primary Button</Button>
    </div>
  );
}
```
- In this example, we define a new styled component called Button using the styled function from styled-components. The Button component is a button element with some custom styles defined using CSS syntax inside a template literal. The background-color of the button is determined by a prop called primary, which allows us to create a primary and a default button.

- In our React code, we simply render the Button component twice with different props to create two different styled buttons. The end result is that we have two buttons with different styles based on the primary prop, all without having to write any separate CSS files.

- [styled-components](https://styled-components.com/)

### use media query
- @media query use in style-components:
```js
const ButtonStyle = styled.button`

  width: 100%;

  @media (min-width: 550px){
    width: auto;
  }
`
```
- when width < 550px then width 100%.

## CSS Module
- (What is CSS Module? -by CSS-tricks)[https://css-tricks.com/css-modules-part-1-need/]
- (How to Add CSS Module ?)[https://create-react-app.dev/docs/adding-a-css-modules-stylesheet/#buttonmodulecss]
- CSS Modules is a way to write modular CSS code that only affects specific components.
- With CSS Modules, each component has its own unique class names that are generated at build time and scoped to that component.
- This means that CSS rules written for one component won't accidentally affect other components.
- CSS Modules can help make your code more maintainable and scalable, because you can organize your CSS code on a per-component basis.
- CSS Modules are particularly useful in large codebases with multiple developers working on the same code, because they help prevent naming collisions and reduce the risk of conflicts between different parts of the code.
- CSS Modules are supported in popular front-end frameworks like React, Vue, and Angular.

