import { useContext } from "react";
import { useNavigate } from "react-router-dom";

import { CartContext } from "../../context/cart.context";

import Button from "../button/button.component";
import CartItem from "../cart-item/cart-item.component";

import { CartDropdownContainer, EmptyMessage, CartItems } from "./cart-dropdown.styles";

const CartDropdown = () => {
  const { cartItems, setIsCartOpen } = useContext(CartContext);
  const navigate = useNavigate();
  const cartItemsLength = cartItems.length;

  const goToCheckoutHandler = () => {
    navigate('/checkout');
    setIsCartOpen(prevIsCartOpen => !prevIsCartOpen);
  }
  //style={cartItemsLength < 3 ? {overflowY : 'initial'} : null}
  return (
    <CartDropdownContainer>
      <CartItems scroll={cartItemsLength < 3}>
        {cartItemsLength ? (
          cartItems.map((cartItem) => (
            <CartItem key={cartItem.id} cartItem={cartItem} />
          ))
        ) : (
          <EmptyMessage>Your cart is empty</EmptyMessage>
        )}
      </CartItems>
      <Button type="button" onClick={goToCheckoutHandler}>GO TO CHECKOUT</Button>
    </CartDropdownContainer>
  );
};

export default CartDropdown;
