import { useNavigate, useParams } from "react-router-dom"
import { Form } from "../../components/Form"
import { Header } from "../FoodCreate/styles"
import { IFoodDataForm } from "../../types/FoodData"
import { useFoodUpdate } from "../../hooks/useFoodUpdate"
import IconArrow from "../../icons/IconArrow.svg";

export const FoodUpdate = () => {
   const {id} = useParams()
   const navigate = useNavigate()
   const {updateFood} = useFoodUpdate()

   const handleEditFood = async (data: IFoodDataForm) => {
      try {
         if(id){
            await updateFood(id, data)
            alert("burger atualizado com sucesso!")
         }
      } catch (error) {
         alert("erro ao editar burger! Tente novamente!")
      }
   }
  return (
   <>
      <Header>
      <h3>Atualizar Burger</h3>
      <button onClick={() => navigate("/")}>
         <img src={IconArrow} alt="icon arrow" />
      Cancelar
      </button>
      </Header>
      <Form btnTitle="Atualizar" onAction={handleEditFood}/>
   </>
  )
}
