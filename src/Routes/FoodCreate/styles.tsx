import styled from "styled-components";

export const Header = styled.header`
   display: flex;
   justify-content: space-between;

   h3{
      font-size: 2rem;
      font-weight: 600;
   }
   button{
      border: 0;
      background: none;
      cursor: pointer;
      font-weight: 500;
      font-size: 1rem;
      display: flex;
      align-items: center;
      gap: .4rem;
      img{
         width: 32px;
      }
   }
`