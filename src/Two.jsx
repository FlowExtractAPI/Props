import React from "react";

// This child component 'Two' receives a property called "productName" from its parent 'One' and we can now use the productName in this component. Notice,we don't have to define a constructor if you don't create a state object. So in a class component, you can access the properties passed using 'this.props'
class Two extends React.Component {
  render() {
    console.log(this.props);
    return (
      <>
        <p>{this.props.productName}</p>
      </>
    );
  }
}

export default Two;
