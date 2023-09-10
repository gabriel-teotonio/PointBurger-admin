import { styled } from "styled-components"

export const Container = styled.li`
   width: 260px;
   display: flex;
   flex-direction: column;
   background-color: white;
   border-radius: 0.5rem;
   box-shadow: 1px 1px 4px 0px rgba(0, 0, 0, 0.10);
   padding: 1rem;

   >img{
      width: 100%;
      height: 260px;
      border-radius: 1rem;
   }

`
export const InfoTitle = styled.div`
   h4{
      color: #171616;
      font-size: 14px;
      font-weight: 400;
   }
   span{
      font-size: 18px;
      font-weight: 600;
   }
   `
export const InfoDescription = styled.div`
   h5{
      color: #171616;
      font-size: 14px;
      font-weight: 600;
   }
   p{
      font-size: 14px;
   }
`
export const ActionsBtn = styled.div`
   display: flex;
   gap: .5rem;
   margin-top: 1rem;
   button{
      background-color: #EBEBEB;
      border: none;
      border-radius: 100px;
      width: 45px;
      height: 45px;
      display: flex;
      align-items: center;
      justify-content: center;
      cursor: pointer;

      img{
         width: 24px;
      }
   }
`