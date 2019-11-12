import React from 'react';

class CountChildComp extends React.Component {
    render() {
        return <div>
            The Count now is:{this.props.theCount}
        </div>
        
    }
}

export default CountChildComp;