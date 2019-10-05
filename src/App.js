import React from 'react';
import './App.css'
import CounterComponent from './components/CounterComponent';
import IsLoggedIn from './components/IsLoggedIn';


function App() {
  return (
    <div className="App">
      Welcome to React-Redux Boiler-plate
      <br />
      <br />
      <CounterComponent />
      <br />
      <IsLoggedIn />
    </div>
  )
}

export default App;
