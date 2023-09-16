import { useNavigate } from "react-router-dom"
import { Form } from "../../components/Form"
import { Header } from "./styles"
import { IFoodDataForm } from "../../types/FoodData"

export const FoodCreate = () => {
  const navigate = useNavigate()

  const handleCreateFood = (data: IFoodDataForm) => {
    console.log(data)
  }

  return (
    <div>
      <Header>
         <h3>Adicionar Burger</h3>
          <button onClick={() => navigate("/")}>
            <img src="src/icons/IconArrow.svg" alt="icon arrow" />
           Cancelar
          </button>
      </Header>
      <Form btnTitle="Adicionar" onAction={handleCreateFood}/>
    </div>
  )
}
