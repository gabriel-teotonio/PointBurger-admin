import { useNavigate } from "react-router-dom"
import { Form } from "../../components/Form"
import { Header } from "./styles"
import { IFoodDataForm } from "../../types/FoodData"
import { api } from "../../lib/axios"
import { useFoodCreate } from "../../hooks/useFoodCreate"

export const FoodCreate = () => {
  const navigate = useNavigate()
  const { createNewFood } = useFoodCreate()

  const handleCreateFood = async (data: IFoodDataForm) => {
    try {
      await createNewFood(data)
      alert("Novo burger criado com sucesso!")
      navigate("/")
    } catch (error) {
      alert("não foi possível criar novo burger, tente novamente!")
    }
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
