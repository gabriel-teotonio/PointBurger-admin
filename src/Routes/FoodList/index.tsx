import { FoodCard } from "../../components/FoodCard"
import { Button, Container, Header, Ul } from "./styles"
import { useNavigate } from "react-router-dom";
import { api } from "../../lib/axios";
import { useFoodData } from "../../hooks/useFoodData";




export const FoodList = () => {
  const navigate = useNavigate()
  const { data } = useFoodData()

  const onDelete = (id: string) => {
    api.delete(`/foods/${id}`)
    .then(() => {
      alert("burger excluido com sucesso!")
    })
    .catch(error => console.log("erro ao excluir item", error))
  }
  

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
        {data.map((food) => (
          <FoodCard 
          key={food.id}
          id={food.id}
          title={food.title}
          description={food.description}
          price={food.price}
          imgUrl={food.imgUrl}
          onDelete={onDelete}
          />
        ))}
      </Ul>
    </Container>
  )
}
