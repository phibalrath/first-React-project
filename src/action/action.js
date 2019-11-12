export const incrCounter=()=>{
    return ({
        //JS Object thats being returned: has type and payload
        //convention is to capitalize and seperate with underscore
        type: "INCR_COUNTER"
        //payload: "data that's supposed to be there"
    })
}

//selectItem is the Action Creator. What it returns the Action itself
export const selectItem =(item)=> {
    return({
        //return JS Object that will have a type and Payload
        type:'SELECTED_ITEM',
        //tells what is the item(aka fruit) that's been selected
        payload: item
    })
}