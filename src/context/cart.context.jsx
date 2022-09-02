import { createContext, useState, useEffect } from "react";

export const CartContext = createContext({
  isCartOpen: false,
  setIsCartOpen: () => {},
  cartItems: [],
  addItemToCart: () => {},
  cartCount: 0,
  cartTotal: 0,
  removeItemFromCart: () => {},
  clearItemFromCart: () => {},
});

const addCartItem = (cartItems, productToAdd) => {
  const isProductExist = cartItems.find(
    (cartItem) => cartItem.id === productToAdd.id
  );

  if (isProductExist) {
    return cartItems.map((cartItem) => {
      return cartItem.id === productToAdd.id
        ? { ...cartItem, quantity: cartItem.quantity + 1 }
        : cartItem;
    });
  } else {
    return [...cartItems, { ...productToAdd, quantity: 1 }];
  }
};

const removeCartItem = (cartItems, productToRemove) => {
  if(productToRemove.quantity > 1){
   return cartItems.map((cartItem) => {
      return cartItem.id === productToRemove.id ? { ...cartItem, quantity: cartItem.quantity - 1 } : cartItem
    })
  } else {
    return cartItems.filter((cartItem) => cartItem.id !== productToRemove.id);
  }
}

const clearCartItem = (cartItems, productToClear) => {
  return cartItems.filter(cartItem => cartItem.id !== productToClear.id);
}

export const CartProvider = ({ children }) => {
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [cartItems, setCartItems] = useState([]);
  const [cartCount, setCartCount] = useState(0);
  const [cartTotal, setCartTotal] = useState(0);

  const addItemToCart = (productToAdd) => {
    setCartItems(addCartItem(cartItems, productToAdd));
  };
  const removeItemFromCart = (productToRemove) => {
    setCartItems(removeCartItem(cartItems, productToRemove));
  }
  const clearItemFromCart = (productToClear) => {
    setCartItems(clearCartItem(cartItems, productToClear));
  }

  useEffect(() => { 
    const newCartCount = cartItems.reduce((acc, cartItem) => acc + cartItem.quantity, 0);
    setCartCount(newCartCount);
  }, [cartItems]);

  useEffect(() => {
    const newCartTotal = cartItems.reduce((acc, cartItem) => acc + (cartItem.quantity * cartItem.price), 0);
    setCartTotal(newCartTotal);
  }, [cartItems]);

  const value = {
    isCartOpen,
    setIsCartOpen,
    cartItems,
    addItemToCart,
    cartCount,
    cartTotal,
    removeItemFromCart,
    clearItemFromCart,
  };

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};
