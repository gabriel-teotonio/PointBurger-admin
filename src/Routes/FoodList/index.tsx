import { FoodCard } from "../../components/FoodCard"
import { Button, Container, Header, Ul } from "./styles"

export const FoodList = () => {
  return (
    <Container>
      <Header>
         <h3>Burgers</h3>
         <Button>Adicionar novo burger</Button>
      </Header>
      <Ul>
        <FoodCard />
      </Ul>
    </Container>
  )
}
