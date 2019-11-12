import React from 'react';
import CountChildComp from './countChild';

class CounterComponent extends React.Component {
    //each class has a constructor
    //you're inherting React.Compenent bc you want the render() function
    constructor() {
        //super is the React.component constructor
        super()
        
        //looks like an object with Sets of Keys and Values
        this.state =  {
            // key: "value1",
            // key2:"value2",
            // key3:"value3"
            count: 0
        }
    }

    onIncrement = () => {
        //setState is a function that takes a new argument to change the state
        this.setState({count:this.state.count+1})
        //to re-render your component when the while changes
    }

    decrement = () => {
        this.setState({count:this.state.count-1})
    }

    //render() will be what's actually displayed on screen if this
    //component is called upon
    render() {
        // let [count, setCount] = React.useState(0);
        // const handleClick=()=>{
        //     setCount(count+1);
        return <div>
            {/* pass on props. an object is create in child */}
            <CountChildComp theCount = {this.state.count} />
            <button onClick = {this.onIncrement}>Increment Count</button> 
            <button onClick = {this.decrement}>Decrement Count</button>
        </div>
    }
}

export default CounterComponent;