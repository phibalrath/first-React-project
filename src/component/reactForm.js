import React from 'react'

//using class method
class Form extends React.Component {
    constructor() {
        super();
        this.state = {
            petList: [],
            petName: '',
            petBreed: "",
            petAge: 0
        }
    }

    	
handleNameInput = (event) => {
    this.setState({petName:event.target.value});
}

handleBreedInput = (event) => {
    this.setState({petBreed:event.target.value})
}

handleAgeInput = (event) => {
    this.setState({petAge:event.target.value})
}

handleClickInput = () => {
    let petObject = {petName:this.state.petName, petBreed:this.state.petBreed, petAge:this.state.petAge};
    this.setState({petList: [...this.state.petList, petObject], petName:"", petBreed:"", petAge:0})
}
    

    render() {
        let petElementArr = this.state.petList.map((animal, index)=> {
            return(
                <div key={index}>
                    <div>Name: {animal.petName}</div>
                    <div>Breed: {animal.petBreed}</div>
                    <div>Age: {animal.petAge}</div>
                </div>
            )
        })

        
        return(
            <div>
                <h2>Pet Store Animal List</h2>
                {petElementArr}
                
                <input placeholder="Pet Name" value={this.state.petName} onChange={this.handleNameInput}/>
                <input placeholder="Pet Breed" value={this.state.petBreed} onChange={this.handleBreedInput}/>
                <input placeholder='0' value={this.state.petAge} onChange={this.handleAgeInput} />
                <button onClick ={this.handleClickInput}>Add Animal</button>
            </div>
        )

    }
}

export default Form;