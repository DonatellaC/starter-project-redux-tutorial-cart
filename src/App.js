import React from "react";
// components
import Navbar from "./components/Navbar";
import CartContainer from "./components/CartContainer";
// items
import cartItems from "./cart-items";
// redux store
import { createStore } from "redux";

//import reducer
import reducer from "./reducer";

import { Provider } from "react-redux";

//initial store
const initialStore = {
  cart: cartItems,
  total: 0,
  amount: 3,
};

//store
const store = createStore(reducer, initialStore);

function App() {
  // cart setup

  return (
    <Provider store={store}>
      <Navbar />
      <CartContainer cart={cartItems} />
    </Provider>
  );
}

export default App;
