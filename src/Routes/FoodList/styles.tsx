import { styled } from "styled-components";

export const Container = styled.div`

`
export const Header = styled.header`
   display: flex;
   justify-content: space-between;
   align-items: center;
   margin-bottom: 2rem;

   h3{
      font-size: 2rem;
      font-weight: 600;
   }
`
export const Ul = styled.ul`
   list-style: none;
   display: flex;
   align-items: center;
   /* justify-content: space-between; */
   gap: 1rem;
   max-width: 100%;
   flex-wrap: wrap;
`
export const Button = styled.button`
   display: flex;
   padding: 0.625rem;
   justify-content: center;
   align-items: center;
   gap: .5rem;
   border: none;
   color: white;
   
   font-size: 16px;
   text-transform: uppercase;
   cursor: pointer;

   border-radius: 0.375rem;
   background: #FF9E0D;
`
