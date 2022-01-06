import styled, { css } from "styled-components";

export const Container = styled.div`
  max-width: 1200px;
  width: 100%;
  margin: 0 auto;
  padding: 0.8rem;


  ${props => props.flexBetween && css`
    display: flex;
    justify-content: space-between;
    align-items: center;
  `}
`;

// export default function Container(){
//   return (

//   )
// }
