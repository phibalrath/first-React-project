import React from 'react';
import {Link} from 'react-router-dom'


class Button extends React.Component {
    render(){
        return(
            <div>
                <Link to="/secondPage">Link to Second Page</Link>
               <button style={{backgroundColor: this.props.bgColor, color:this.props.textColors}}>
                   {this.props.text}
                   </button> 
            </div>
        )
    }
}

export default Button;