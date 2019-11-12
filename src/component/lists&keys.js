import React from 'react'

const Keys = () => {
    let dataArray = [{
        name: 'John Snow',
        location: 'winterfell'
    }, {
        name: 'Tyrion Lannister',
        location: 'Casterly Rock'
    }];

    //convert array of objects into an array of JSX elements
    let dataElementArr = dataArray.map((person, index) => {
        return(
            <li key={index}>
                Name: {person.name}
                Location: {person.location}
            </li>
        )
    })

    //dataArr
        // [{name:"John Snow", location:"Winterfell"}, {name:"Tyrion Lannister", location:"Casterly Rock"}]

    // //dataElementArr
        // [<li>Name: John Snow Location: Winterfell</li>, <li>Name: Tyrion Lannister Location: Casterly Rock</li>]

    return(
        <div> {dataElementArr}</div>   
    )
}

export default Keys;