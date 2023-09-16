import { useNavigate } from "react-router-dom"
import { ActionsBtn, Container, InfoDescription, InfoTitle } from "./styles"
import { formatedLongText } from "../../utils/formatting"

interface FoodCardProps {
   title: string
   description: string
   price: number
   imgUrl: string  
   id: string
   onDelete: (id:string) => void
}

export const FoodCard = ({title,description, price, imgUrl, id, onDelete}: FoodCardProps) => {
   const navigate = useNavigate()
   const handleDeleteFood = () => {
      const resConfirm = confirm("voce realmente excluir?")
      if(resConfirm){
        onDelete(id)
      }
   }

   

  return (
    <Container>
      <img src={imgUrl} alt="img burger" />
      <div>
         <InfoTitle>
            <h4>{title}</h4>
            <span>R$ {price}</span>
         </InfoTitle>
         <InfoDescription>
            <h5>Ingredintes:</h5>
            <p>{description.length > 30 ? formatedLongText(description, 30): description}</p>
         </InfoDescription>
         <ActionsBtn>
            <button onClick={() => navigate(`/FoodUpdate/${id}`)}>
               <img src="src/icons/IconEdit.svg" alt="edit icon" />
            </button>
            <button onClick={handleDeleteFood}>
               <img src="src/icons/IconDelete.svg" alt="delete icon" />
            </button>
         </ActionsBtn>
      </div>
    </Container>
  )
}
