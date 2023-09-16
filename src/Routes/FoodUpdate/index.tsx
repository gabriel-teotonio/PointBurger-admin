import { useNavigate, useParams } from "react-router-dom"
import { Form } from "../../components/Form"
import { Header } from "../FoodCreate/styles"
import { IFoodDataForm } from "../../types/FoodData"
import { api } from "../../services/axios"

export const FoodUpdate = () => {
   const {id} = useParams()
   const navigate = useNavigate()

   const handleEditFood = (data: IFoodDataForm) => {
      api.put(`/foods/${id}`, data)
         .then(() => {
            alert("item atualizado com sucesso!")
            navigate("/")
         })
         .catch(error => console.log("erro na edição do item", error))
   }
  return (
   <>
      <Header>
      <h3>Atualizar Burger</h3>
      <button onClick={() => navigate("/")}>
         <img src="../src/icons/IconArrow.svg" alt="icon arrow" />
      Cancelar
      </button>
      </Header>
      <Form btnTitle="Atualizar" onAction={handleEditFood}/>
   </>
  )
}
