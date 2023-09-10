import { ActionsBtn, Container, InfoDescription, InfoTitle } from "./styles"

interface FoodCardProps {
   title: string
   description: string
   price: number
   imgUrl: string  
}

export const FoodCard = ({title,description, price, imgUrl}: FoodCardProps) => {
  return (
    <Container>
      <img src={imgUrl} alt="img burger" />
      <div>
         <InfoTitle>
            <h4>{title}</h4>
            <span>{price}</span>
         </InfoTitle>
         <InfoDescription>
            <h5>Ingredintes:</h5>
            <p>{description}</p>
         </InfoDescription>
         <ActionsBtn>
            <button>
               <img src="src/icons/IconEdit.svg" alt="edit icon" />
            </button>
            <button>
               <img src="src/icons/IconDelete.svg" alt="delete icon" />
            </button>
         </ActionsBtn>
      </div>
    </Container>
  )
}
