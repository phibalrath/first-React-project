import React from 'react'

class Add extends React.Component {
    constructor() {
        super()
    
    this.state = {
        //display what opreation is 
            operation: '',
            result: 0
        }

    }

    //Lifecycle: how many times a component should run and in what order
    // shouldComponentUpdate(){
    //     console.log("Should component update");
    //   }
    //   componentDidUpdate(){
    //      console.log("Component did update");
    //   }
    //   componentDidMount(){
    //     console.log("Component did mount");
    //   }
    //   componentWillUnmount(){
    //     console.log("Component will unmount");
    //   }



    //use event to see properties of what happened
    onAdd = (event) => {
        console.log(event.target)
        this.setState(
            {
                operation: 'addition',
                result: parseInt(document.getElementById('num1').value) + parseInt(this.refs.num2.value)
                //result will pull each # from input elements 
            }
        )
    }

    onSubtract = () => {
        this.setState({
            operation: 'difference',
            result: parseInt(document.getElementById('num1').value) - parseInt(this.refs.num2.value)
        })
    }
    
    onMultiply = () => {
        this.setState({
            operation: 'multiplication',
            result: parseInt(document.getElementById('num1').value) * parseInt(this.refs.num2.value)
        })
    }

    onDivision = () => {
        this.setState({
            operation: 'division',
            result: parseInt(document.getElementById('num1').value)/parseInt(this.refs.num2.value)
        })
    }

    onInputChange = (e) => {
        console.log(e.target)
    }

    render() {
        return <div>
            First Number: <input onInput= {this.onInputChange} id="num1" type="text" value={this.state.title}/>
            <br />
            Second Number: <input ref = "num2" type="text" value={this.state.title2}/>
            <br />
            <button onClick={this.onAdd}>Add</button>
            <button onClick={this.onSubtract}>Subtract</button>
            <button onClick={this.onMultiply}>Multiply</button>
            <button onClick={this.onDivision}>Division</button>
            <br />
            <div>The {this.state.operation} of these 2 numbers is {this.state.result}</div>
        
            
        </div>
    }
}

export default Add;