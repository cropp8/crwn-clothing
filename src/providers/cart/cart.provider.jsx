import { createContext, useState, useEffect } from 'react';
import {
  addItemToCart,
  removeItemFromCart,
  clearItem,
  getCartItemsCount,
  getCartTotal,
} from './cart.utils';

export const CartContext = createContext({
  hidden: true,
  toggleHidden: () => {},
  cartItems: [],
  addItem: () => {},
  removeItem: () => {},
  clearItemFromCart: () => {},
  cartItemsCount: 0,
  cartTotal: 0,
});

function getItemsFromLocalStorage() {
  return JSON.parse(window.localStorage.getItem('crwn_cart_items'));
}

function setItemsToLocalStorage(cartItems) {
  window.localStorage.setItem('crwn_cart_items', JSON.stringify(cartItems));
}

const CartProvider = ({ children }) => {
  const [hidden, setHidden] = useState(true);
  const [cartItems, setCartItems] = useState(getItemsFromLocalStorage() || []);
  const [cartItemsCount, setCartItemsCount] = useState(0);
  const [cartTotal, setCartTotal] = useState(0);
  const toggleHidden = () => setHidden(!hidden);
  const addItem = (item) => setCartItems(addItemToCart(cartItems, item));
  const removeItem = (item) =>
    setCartItems(removeItemFromCart(cartItems, item));
  const clearItemFromCart = (item) => setCartItems(clearItem(cartItems, item));

  useEffect(() => {
    setCartItemsCount(getCartItemsCount(cartItems));
  }, [cartItems]);

  useEffect(() => {
    setCartTotal(getCartTotal(cartItems));
  }, [cartItems]);

  useEffect(() => {
    setItemsToLocalStorage(cartItems);
  }, [cartItems]);

  return (
    <CartContext.Provider
      value={{
        hidden,
        toggleHidden,
        cartItems,
        addItem,
        removeItem,
        cartItemsCount,
        clearItemFromCart,
        cartTotal,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export default CartProvider;
