import styled from "styled-components";

export const Container = styled.div`
   min-height: 100vh;
   height: auto;
   display: flex;
`
export const Nav = styled.div`
   display: flex;
   flex-direction: column;
   min-height: 100vh;
   height: 100%;
   width: 280px;
   background-color: rgba(22, 25, 36, 1);
   color: white;

   header{
      padding: 1rem 1rem;
      border-bottom: #ffffff44 1px solid;
   }
`
export const NavMenu = styled.nav`
   padding-top: 1rem;
   li{
      list-style: none;
      padding: .5rem 1rem;
      cursor: pointer;
      
      &:hover{
         background-color: #f0f8ff2c;
      }
   }
`

export const Main = styled.main`
   flex: 1;
   padding: 1rem 2rem;
`