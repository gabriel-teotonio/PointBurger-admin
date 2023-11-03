import { useNavigate } from "react-router-dom"
import { Form } from "../../components/Form"
import { Header } from "./styles"
import { IFoodDataForm } from "../../types/FoodData"
import { useFoodCreate } from "../../hooks/useFoodCreate"
import IconArrow from "../../icons/IconArrow.svg";

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
            <img src={IconArrow} alt="icon arrow" />
           Cancelar
          </button>
      </Header>
      <Form btnTitle="Adicionar" onAction={handleCreateFood}/>
    </div>
  )
}
