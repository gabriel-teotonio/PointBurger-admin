import { FoodCard } from "../../components/FoodCard"
import { Button, Container, Header, Ul } from "./styles"
import { useNavigate } from "react-router-dom";
import { useFoodData } from "../../hooks/useFoodData";
import { useFoodDelete } from "../../hooks/useFoodDelete";




export const FoodList = () => {
  const navigate = useNavigate()
  const { data } = useFoodData()
  const { deleteFood } = useFoodDelete()

  return (
    <Container>
      <Header>
         <h3>Burgers</h3>
          <Button onClick={() => navigate("/foodCreate")}>
            <img src="src/icons/IconPlus.svg" alt="icon plus" />
            novo burger
          </Button>
      </Header>
      <Ul>
        {data?.map((food) => (
          <FoodCard 
          key={food.id}
          id={food.id}
          title={food.title}
          description={food.description}
          price={food.price}
          imgUrl={food.img}
          onDelete={deleteFood}
          />
        ))}
      </Ul>
    </Container>
  )
}
