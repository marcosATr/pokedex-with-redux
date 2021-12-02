import styled, { css } from "styled-components";

export const Container = styled.div`
  max-width: 1200px;
  width: 100%;
  margin: 0 auto;


  ${props => props.flexBetween && css`
    display: flex;
    justify-content: space-between;
  `}
`;

// export default function Container(){
//   return (

//   )
// }
