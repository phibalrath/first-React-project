import React from 'react'

const FormFunction = () => {
    let [petList, setPetList] = React.useState([])
    let [petName, setPetName] = React.useState('')
    let [petBreed, setPetBreed] = React.useState('')
    let [petAge, setPetAge] = React.useState(0)

    const handleNameInput =(event) => {
        setPetName(event.target.value)
    } 

    const handleBreedInput = (event) => {
        setPetBreed(event.target.value)
    }

    const handleAgeInput = (event) => {
        setPetAge(event.target.value)
    }

    const handleClick = () => {
        let petObj = {
            petName: petName,
            petBreed: petBreed,
            petAge: petAge
        };
        setPetList([...petList, petObj]);
        setPetName('')
        setPetBreed('')
        setPetAge(0)
    }

    let petElementArr = petList.map((animal, index) => {
        return(
            <div key={index}>
                <div>Name: {animal.petName}</div>
                <div>Breed: {animal.petBreed}</div>
                <div>Age: {animal.petAge}</div>
            </div>
        )
    })
    return (
        <div>
            <h4>Pet Store Animal List</h4>
            {petElementArr}
            <input value={petName} onChange={handleNameInput} placeholder="Pet Name" />
            <input value={petBreed} onChange={handleBreedInput} placeholder="Pet Breed" />
            <input value={petAge} onChange={handleAgeInput} placeholder="Pet Age" />
            <button onClick={handleClick}>Add Animal</button>
        </div>
    )
}

export default FormFunction