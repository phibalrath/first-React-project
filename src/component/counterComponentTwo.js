import React from 'react';
import CounterDisplayComponent from './counterDisplayComponent';
//Redux Import
import {connect} from 'react-redux'
//Import Action that contains the functions that returns the JS Object
import {incrCounter} from '../action/action'


const CounterComponentTwo = (props) => {
    console.log(props)

    const onIncrement = () => {
        //this will return the object which will be passed to the Reducer with current value of count
        props.incrCounter()
    }
/
    return( <div>
        <br />
            <CounterDisplayComponent />
        <br />
        <button onClick={onIncrement}>Increment count</button>
    </div>)

}

//state is count in the reducer
const mapStateToProps = state => {
    return state
} 

//(Argument1 = mapStateToProps-A Function, Arugment2 = include all the action(you imported above) you want,action is a function that returns {JS Object})
export default connect (mapStateToProps, {incrCounter})(CounterComponentTwo)
