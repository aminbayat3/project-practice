import { useContext } from "react";

import { CartContext } from "../../context/cart.context";

import {
  CheckoutItemContainer,
  ImageContainer,
  BaseSpan,
  Quantity,
  Arrow,
  Value,
  Price,
  RemoveButton,
} from "./checkout-item.styles";

const CheckoutItem = ({ product }) => {
  const { name, imageUrl, quantity, price } = product;
  const { addItemToCart, removeItemFromCart, clearItemFromCart } =
    useContext(CartContext);

  const addProductToCart = () => {
    addItemToCart(product);
  };
  const removeProductFromCart = () => {
    removeItemFromCart(product);
  };
  const clearProductFromCart = () => {
    clearItemFromCart(product);
  };

  return (
    <CheckoutItemContainer>
      <ImageContainer imageUrl={imageUrl} />

      <BaseSpan>{name}</BaseSpan>
      <Quantity>
        <Arrow onClick={removeProductFromCart}>
          &#10094;
        </Arrow>
        <Value>{quantity}</Value>
        <Arrow onClick={addProductToCart}>
          &#10095;
        </Arrow>
      </Quantity>
      <Price>{price}</Price>
      <RemoveButton onClick={clearProductFromCart}>
        &#10005;
      </RemoveButton>
    </CheckoutItemContainer>
  );
};

export default CheckoutItem;
