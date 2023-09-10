import { Container } from "./styles"

export const Form = () => {
  return (
   <Container>
      <label htmlFor="">
         Título
         <input type="text" placeholder="X-burger"/>
      </label>
      <label htmlFor="">
         Preço
         <input type="text" placeholder="26,00" />
      </label>
      <label htmlFor="">
         Url da imagem
         <input type="text" placeholder="http://image"/>
      </label>
      <label htmlFor="">
         Descrição
         <textarea name="description" placeholder="2 carnes de hamburger, queijo, ..." rows={5}></textarea>
      </label>
      <button type="submit">Adicionar</button>
   </Container>
  )
}
