# [Passing Props to a Component](https://react.dev/learn/passing-props-to-a-component).


# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

# Props
n React, "props" (short for "properties") are a core concept that allows you to pass data from a parent component to a child component. They are similar to function arguments and can be used to configure the behavior, appearance, or data of the child component.

# Key Points About Props:
1. Immutable: Props are read-only, meaning that a child component cannot modify its props. If you need to modify the data, you should lift the state up to the parent component or use a callback to communicate changes.

2. Data Passing: Props allow you to pass any kind of data, such as strings, numbers, arrays, objects, functions, or even other React components.

3. Default Props: You can define default values for props in case they are not provided by the parent component. This is done using defaultProps.

4. PropTypes: React provides a way to validate the props that a component receives using PropTypes. This is useful for catching bugs early by ensuring the props are of the expected type.

# Example of Using Props:
jsx
```
import React from 'react';

// Child Component
const Greeting = (props) => {
  return <h1>Hello, {props.name}!</h1>;
}

// Parent Component
const App = () => {
  return (
    <div>
      <Greeting name="John" />
      <Greeting name="Jane" />
    </div>
  );
}

export default App;

```
In this example, the Greeting component receives a name prop from the App component. The prop is then used to customize the greeting message.

# Default Props Example:
jsx
```
const Greeting = (props) => {
  return <h1>Hello, {props.name}!</h1>;
}

// Setting default props
Greeting.defaultProps = {
  name: 'Stranger'
};

// Usage in Parent Component
const App = () => {
  return (
    <div>
      <Greeting />
      <Greeting name="Jane" />
    </div>
  );
}
```
In this example, if no name prop is provided, the default value "Stranger" will be used.

Props are a fundamental part of how React components interact and are crucial for building reusable and modular components.
