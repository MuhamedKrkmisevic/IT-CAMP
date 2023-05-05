import React, { createContext } from "react";
import { useState } from "react";
export const CartContext = createContext({
  items: null,
  setItems: () => undefined,
});

const CartContextProvider = ({ children }) => {
  const [items, setItems] = useState({});
  const values = {};

  return <CartContext.Provider value={values}>{children}</CartContext.Provider>;
};

export default CartContextProvider;
