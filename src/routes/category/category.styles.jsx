import styled from "styled-components";

export const Title = styled.h2`
  display: flex;
  justify-content: center;
  font-size: 38px;
  margin: 0 auto 30px;
`;

export const CategoryContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  column-gap: 10px;
  row-gap: 18px;
`;

// .category-container {
//     display: flex;
//     flex-direction: column;

//     .title {
//       font-size: 38px;
//       margin: 0 auto 30px;
//     }

//     .items {
//       display: grid;
//       grid-template-columns: 1fr 1fr 1fr 1fr;
//       column-gap: 10px;
//       row-gap: 18px;
//     }
//   }
