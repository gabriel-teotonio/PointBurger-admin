import { Form } from "../../components/Form"
import { Header } from "./styles"

export const FoodCreate = () => {
  return (
    <div>
      <Header>
         <h2>Adicionar Burger</h2>
         <button>Cancelar</button>
      </Header>
      <Form />
    </div>
  )
}
