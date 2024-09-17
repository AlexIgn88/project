import React from 'react';
// import './App.css';
// import styles from './app.module.css'; 
import Restaurants from '../restaurants';
import {RestaurantsProps} from '../../types/PropsTypes';

const App = ({restaurants}: RestaurantsProps) => {

  return (
    <div className="App">
    {/* <div className={styles.app}> */}
      <Restaurants restaurants={restaurants}/>
    </div>
  );
}

export default App;
