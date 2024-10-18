import { useState } from "react";
import styles from "./app.module.css";
import RestaurantsPage from "../../routes/restaurants-page";
import CartPage from "../../routes/cart-page";
import OrderCompletePage from "../../routes/order-complete-page";
import NotFound from "../../routes/404-page";
import Header from "../header";
import { store } from "../../store";
import { Provider } from "react-redux";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import {
  Provider as UserProvider,
  initialStateUser,
} from "../../contexts/user";
import { LanguageContextProvider } from "../../contexts/language";

// only for experimenting:
declare global {
  interface Window {
    store: any;
  }
}
window.store = store;

const App = () => {
  const [user, setUser] = useState(initialStateUser);
  const handleUserChange = (userName: string) =>
    setUser((oldUser) => ({
      ...oldUser,
      user: { name: userName },
    }));
  return (
    <LanguageContextProvider>
      <UserProvider value={user}>
        <BrowserRouter>
          <Provider store={store}>
            <div className={styles.app}>
              <Header />
              <Routes>
                <Route path="/" element={<RestaurantsPage />}></Route>
                <Route
                  path="/restaurant/:activeId"
                  element={<RestaurantsPage />}
                ></Route>
                <Route
                  path="/cart"
                  element={<CartPage handleUserChange={handleUserChange} />}
                ></Route>
                <Route
                  path="/order-complete"
                  element={<OrderCompletePage />}
                ></Route>
                <Route path="/404" element={<NotFound />}></Route>
              </Routes>
            </div>
          </Provider>
        </BrowserRouter>
      </UserProvider>
    </LanguageContextProvider>
  );
};

export default App;
