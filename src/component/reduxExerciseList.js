import React from 'react'
import {connect} from 'react-redux'

const FruitArrayDisplay = (props) => {
    return (
        <div>
            This item selected is: {props.selectedItem}
        </div>
    )
}

const mapStateToProps = state => {
    return state
}

export default connect (mapStateToProps)(FruitArrayDisplay)