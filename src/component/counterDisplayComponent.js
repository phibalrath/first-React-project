import React from 'react';
//Imports for Redux
//Connect Action/components to Provider
import {connect} from 'react-redux';

class CounterDisplayComponent extends React.Component {

    render() {
        // console.log(this.props)
        return <div>
            {/* count is the state that is being passed to props originating from the reducer */}
             The count now is {this.props.count}
        </div>
    }
}

const mapStateToProps = state => {
    console.log(state)
    return state
}

//(Function)(component name you're exporting)
export default connect (mapStateToProps)(CounterDisplayComponent)
