import React from 'react'
import {connect} from 'react-redux'
import FruitArrayDisplay from './reduxExerciseList'
import {selectItem} from '../action/action'

const FruitArray = (props) => {
    let [theList, setTheList] = React.useState(['Appples','Oranges', 'Bananas','Grapes','Peaches'])

    let renderList = theList.map((item, index)=> {
        return <div key={index}>
            <div>{item}</div>
            <button onClick={() => props.selectItem(item)}>Display {item} </button>
            {/* selectItem() is from action, made avaible in import and export, this makes it available to props*/}
        </div>
    })

    return (
        <div>
            {renderList}
            <FruitArrayDisplay />
        </div>
    )
}

//mapStateToProps take the state(from reducer ) and makes it available to this component as Props
//{selectItem} is the second Argument from Action
const mapStateToProps = state => {
    return state
}

export default connect (mapStateToProps, {selectItem})(FruitArray)