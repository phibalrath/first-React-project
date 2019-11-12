import React from 'react';
import Welcome from './welcome'

class WelcomeCom extends React.Component {
    render() {
      return <div>
        <Welcome name="Phibal"/>
        <Welcome name="Mean"/>
        <Welcome name="Cesar"/>
      </div>
      
    }
  }
  
  export default WelcomeCom;