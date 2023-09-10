import styled from "styled-components";

export const Container = styled.form`
   display: flex;
   flex-direction: column;
   max-width: 380px;
   label{
      display: flex;
      flex-direction: column;
      margin-top: .5rem;

      input, textarea {
         padding: .5rem;
         font-size: 1rem;
         outline: none;
         border-radius: 6px;
         border: rgba(214, 214, 214, 1) 1px solid;
      }
      textarea{
         resize: none;
      }
   }
   button{
      margin-top: 1.5rem;
      border: none;
      padding: .7rem;
      width: 100%;
      border-radius: 6px;
      color: white;
      text-transform: uppercase;
      font-size: 1rem;
      cursor: pointer;
      background-color: rgba(255, 158, 13, 1);
   }
`