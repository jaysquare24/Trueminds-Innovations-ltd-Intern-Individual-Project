import { createContext, useReducer } from "react";
import { cartReducer, initialState } from "./cartReducer";

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [state, dispatch] = useReducer(cartReducer, initialState);

  return (
    <CartContext.Provider
      value={{
        items: state.items,
        totalAmount: state.totalAmount,
        dispatch
      }}
    >
      {children}
    </CartContext.Provider>
  );
};