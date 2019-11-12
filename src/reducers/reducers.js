import {combineReducers} from 'redux';

//set of Functions: ex. The Departments in Insurance Analogy
// const reducer1 = () => {
//     return null
// }

// const reducer2 = () => {
//     return null
// }


//This reducer takes the count(from state) and an action as an argument
//Then it returns a value (new count)
const counterReducer=(count=0, action)=> {
    //Look at the Type part of the Action
    //if we care about it aka if its "INCR_COUNTER" then execute the return
    switch(action.type){
        case "INCR_COUNTER":
            return count+1;
            default:
                return count;
    }
}

//action is the JS Object that was return from action.js
const selectedItemReducer= (selectedItem = null, action) => {
    //Check what type of Form it is. 
    if(action.type == "SELECTED_ITEM") {
        selectedItem = action.payload
    }
    return selectedItem
}

// const someOtherReducer=(state,action) => {
//     if(action.type=== "SELECT_ITEM")
// }


//combineReducers just lets you store all the reducers in one place
export default combineReducers ({
    //this is the data. your state(in index.js) is created with the reducers from here
    // key: reducer1,
    // key2: reducer2

    //In this case, there's only one reducer so you can do export default counterReducer
    count: counterReducer,
    //count: 0

    selectedItem: selectedItemReducer
})