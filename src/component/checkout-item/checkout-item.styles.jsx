import styled from "styled-components";

export const CheckoutItemContainer = styled.div`
  width: 100%;
  display: flex;
  min-height: 100px;
  border-bottom: 1px solid darkgrey;
  padding: 15px 0;
  font-size: 19px;
  align-items: center;
`;

export const ImageContainer = styled.div`
  width: 22%;
  height: 142px;
  background-size: cover;
  background-position: center;
  margin-right: 15px;
  background-image: ${({ imageUrl }) => `url(${imageUrl})`};
`;

export const BaseSpan = styled.span`
  width: 23%;
`;

export const Quantity = styled(BaseSpan)`
  display: flex;
`;

export const Arrow = styled.div`
  cursor: pointer;
`;

export const Value = styled.span`
  margin: 0 10px;
`;

export const Price = styled(BaseSpan)`
  padding-left: 10px;
`;
export const RemoveButton = styled.div`
  cursor: pointer;
  padding-left: 5px;
`;

// .checkout-item-container {
//     width: 100%;
//     display: flex;
//     min-height: 100px;
//     border-bottom: 1px solid darkgrey;
//     padding: 15px 0;
//     font-size: 19px;
//     align-items: center;

//     .image-container {
//       width: 22%;
//       height: 142px;
//       background-size: cover;
//       background-position: center;
//       margin-right: 15px;
//     }

//     .name,
//     .quantity,
//     .price {
//       width: 23%;
//     }

//     .quantity {
//       display: flex;

//       .arrow {
//         cursor: pointer;
//       }

//       .value {
//         margin: 0 10px;
//       }
//     }

//     .price {
//       padding-left: 10px;
//     }

//     .remove-button {
//       cursor: pointer;
//       padding-left: 5px;
//     }
//   }
