import React from 'react';
import styles from './app.module.css'; 
// import Restaurants from '../restaurants';
import RestaurantsPage from '../../routes/restaurants-page';
import CartPage from '../../routes/cart-page';
import OrderCompletePage from '../../routes/order-complete-page';
import NotFound from '../../routes/404-page';
import Header from '../header';
import {store} from '../../store';
import {Provider} from 'react-redux';
import {BrowserRouter, Route, Routes} from 'react-router-dom';

  // only for experimenting
declare global {
  interface Window {
    store: any; 
  }
}
window.store = store; 

  const App = () => {
  return (
    <BrowserRouter>
      <Provider store={store}>
        <div
        className={styles.app}
        >
                        <Header
                        // lang={this.state.lang}
                        // setLang={this.handleLangChange}
                        />
                        <Routes>
                          <Route 
                          path='/'
                          element={<RestaurantsPage/>}
                          >
                          </Route>
                          <Route 
                          path='/restaurant/:activeId'
                          element={<RestaurantsPage/>}
                          >
                          </Route>
                          <Route 
                          path='/cart'
                          element={<CartPage/>}
                          >
                          </Route>
                          <Route 
                          path='/order-complete'
                          element={<OrderCompletePage/>}
                          >
                          </Route>
                          <Route 
                          path='/404'
                          element={<NotFound/>}
                          >
                          </Route>
                        </Routes>
        </div>
      </Provider>
    </BrowserRouter>
  );
}

export default App;
