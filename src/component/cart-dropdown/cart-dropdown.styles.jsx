import styled from "styled-components";

import {
  BaseButton,
  GoogleSignInButton,
  InvertedButton,
} from "../button/button.styles";

const subColor = "rgb(168, 168, 168)";
const mainColor = "black";

const handleOverflowType = (scroll) => {
    return scroll ? 'initial' : 'scroll'
}

export const CartDropdownContainer = styled.div`
  position: absolute;
  width: 240px;
  height: 340px;
  display: flex;
  flex-direction: column;
  border: 1px solid ${subColor};
  background-color: white;
  padding: 20px;
  top: 80px;
  right: 0px;
  z-index: 5;

  ${BaseButton}, 
  ${GoogleSignInButton}, 
  ${InvertedButton} {
    margin-top: auto;
  }
`;

export const EmptyMessage = styled.span`
  font-size: 18px;
  margin: 50px auto;
`;

export const CartItems = styled.div`
  height: 240px;
  display: flex;
  flex-direction: column;
  overflow-y: ${({ scroll }) => handleOverflowType(scroll)};

  &::-webkit-scrollbar {
    width: 8px;
    background: ${subColor};
    border-radius: 0 10px 10px 0;
  }

  &::-webkit-scrollbar-thumb {
    background: ${mainColor};
    border-radius: 0 10px 10px 0;
  }
`;

// $sub-color: rgb(168, 168, 168);
// $main-color: black;

// .cart-dropdown-container {
//     position: absolute;
//     width: 240px;
//     height: 340px;
//     display: flex;
//     flex-direction: column;
//     border: 1px solid $sub-color;
//     background-color: white;
//     padding: 20px;
//     top: 80px;
//     right: 0px;
//     z-index: 5;

//     .cart-items {
//         height: 240px;
//         display: flex;
//         flex-direction: column;
//         overflow-y: scroll;

//         &::-webkit-scrollbar {
//             width: 8px;
//             background: $sub-color;
//             border-radius: 0 10px 10px 0;
//         }

//         &::-webkit-scrollbar-thumb {
//             background: $main-color;
//             border-radius: 0 10px 10px 0;
//         }

//         .empty-message {
//             font-size: 18px;
//             margin: 50px auto;
//         }
//     }

//     button {
//         margin-top: auto; //the highest margin-top// it would go down as much as it can
//     }

// }
