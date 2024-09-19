import React from 'react';
import styles from './app.module.css'; 
import Restaurants from '../restaurants/restaurants';
import Header from '../header';
import {store} from '../../store';
import {Provider} from 'react-redux';

  // only for experimenting
declare global {
  interface Window {
    store: any; //  или конкретный тип хранилища
  }
}
window.store = store; 

  const App = () => {
  return (
    <Provider store={store}>
      <div
      className={styles.app}
      >
                      <Header
                      // lang={this.state.lang}
                      // setLang={this.handleLangChange}
                      />

                      <Restaurants
                      />
      </div>
    </Provider>
  );
}

export default App;
