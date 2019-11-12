import React from 'react';
//download react library
import './App.css';
import { BrowserRouter, Route } from 'react-router-dom'

import WelcomeCom from './component/welcomeCom'
import Button from './component/buttons'
import CounterComponent from './component/stateEx'
import Add from './component/inputAdd'
import Hooks from './component/hooks'
import ListComponent from './component/lists'
import Keys from './component/lists&keys'
import Form from './component/reactForm'
import CounterComponentTwo from './component/counterComponentTwo'
import FruitArray from './component/reduxExercise';


// const pageOne = () => {
//   return(
//     <div>
//           <Button bgColor="blue" textColors="white" text="I'm button 1" />
//           <Button bgColor="red" textColors="purple" text="I'm Button 2 Y'll" />
//           <Button bgColor="green" textColors="grey" text="I'm Button 3" />
//     </div>
//   )
// }

// const pageTwo = () => {
//   return(
//     <div>
//        <CounterComponent />
//           <Add />
//           <Hooks />
//           <ListComponent />
//           <Keys />
//           <Form />
//     </div>
//   )
// }


function App() {
  return (
    <div className="App">
      {/* <BrowserRouter>
        <div>
          <WelcomeCom />
          <Route path="/" exact component={pageOne} />
          <Route path="/secondpage" component={pageTwo} />
        </div>
      </BrowserRouter> */}

      <CounterComponentTwo />
      <FruitArray />
    </div>

  )
}

export default App;
//make this file visible to the outside world

//new component, import and export. 