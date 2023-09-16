import { useEffect, useState } from "react";
import { FoodCard } from "../../components/FoodCard"
import { Button, Container, Header, Ul } from "./styles"
import { useNavigate } from "react-router-dom";
import { IFoodData } from "../../types/FoodData";
import { api } from "../../lib/axios";




export const FoodList = () => {
  const [foods, setFoods] = useState<IFoodData[]>([])
  const navigate = useNavigate()
  
  useEffect(() => {
    fetchData()
  }, [])

  const fetchData = async () => {
    const response = await api.get("/foods")
    setFoods(response.data)
  }

  const onDelete = (id: string) => {
    const newListFood: IFoodData[] = foods.filter((food) => food.id !== id)
    api.delete(`/foods/${id}`)
    .then(() => {
      setFoods(newListFood)
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
        {foods.map((food) => (
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
