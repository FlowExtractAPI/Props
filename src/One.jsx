import React from "react";
import Two from "./Two";

// Components let you split the UI into independent, reusable pieces of UI(User Interface), and think about each piece in isolation.You can, see we use the component called 'Two' in this class component 'One' so the idea is separating components and reuse them where necessary.

// This component 'One' renders the child component 'Two' and passes a property called "productName" to it
class One extends React.Component {
  render() {
    return (
      <div>
        <h2>From One</h2>
        {/* Passes a property called "productName" with the value "keyboard" */}
        <Two productName="keyboard" />
      </div>
    );
  }
}

export default One;
