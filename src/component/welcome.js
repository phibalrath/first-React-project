import React from 'react';

// // Defining a component using a Javascript function "Functional Component"
// function Welcome(props) {
//     return <h1>Hello, {props.name}</h1>;
//   }
  
  
  // Defining a component using an ES6 class "Class Component"
  //Welcome is the name of the component
  class Welcome extends React.Component {
    render() {
        
      return <h1>Hello, {this.props.name}</h1>;
      
    }
  }
  
  export default Welcome;
  
  