import { ActionsBtn, Container, InfoDescription, InfoTitle } from "./styles"

export const FoodCard = () => {
  return (
    <Container>
      <img src="/src/imgs/burger3.png" alt="img burger" />
      <div>
         <InfoTitle>
            <h4>Burger X-charque</h4>
            <span>R$24,00</span>
         </InfoTitle>
         <InfoDescription>
            <h5>Ingredintes:</h5>
            <p>Blend 150g, salada, charque, cheddar, picles</p>
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
