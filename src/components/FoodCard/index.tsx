import { api } from "../../services/axios"
import { ActionsBtn, Container, InfoDescription, InfoTitle } from "./styles"

interface FoodCardProps {
   title: string
   description: string
   price: number
   imgUrl: string  
   id: string
   onDelete: (id:string) => void
}

export const FoodCard = ({title,description, price, imgUrl, id, onDelete}: FoodCardProps) => {

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
            <p>{description}</p>
         </InfoDescription>
         <ActionsBtn>
            <button>
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
