import React from 'react'

//can't use Hooks with class based components
//you have variable count. not this
const Hooks =() => {
    let [count, setCount] = React.useState(0);
    //react.useState() returns an array. First item is a variable, 2nd item is a function that changes the value of that variable
    //count is the variable, setCount - changing the value
    const onIncrement =()=>{
        setCount(count+1)
    }
    //useeffect has 2 args, function and an array
    //if you put count in the array, the component will mount everytime
    //this is bc the function will compare the count to the count+1 and since there was a difference,
    //the component will re-mount and update evertime
    React.useEffect(()=>{
        console.log("Component did mount");
      },[])
    React.useEffect(()=>{
        console.log("Component did update");
      })
      console.log("Render");
    return (
        <div>
        <div>Hook Method: {count}</div>
        <button onClick={onIncrement}>
          Increment
        </button>
      </div>
    )
}

export default Hooks;