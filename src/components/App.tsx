import React,{FC, useCallback, useState} from 'react';
// import './App.css';
import Restaurants from './restaurants';
import {RestaurantsProps} from '../types/fixturesTypes'

const App = ({restaurants}: RestaurantsProps) => {

  // const [value, setValue] = useState({value:0});

  // const handlePlusButtonClick = useCallback((number:number) => {
  //   setValue(oldValue => (
  //     {value: oldValue.value + number}
  //   ))
  // },[]);

  return (
    <div className="App">
      {/* <header className="App-header">
        <div>
          <h1>TEST</h1>
          <h2>{value.value}</h2>
          <button onClick={()=> handlePlusButtonClick(1)}>+1</button>
        </div>
      </header> */}

      <Restaurants restaurants={restaurants}/>
    </div>
  );
}

export default App;
