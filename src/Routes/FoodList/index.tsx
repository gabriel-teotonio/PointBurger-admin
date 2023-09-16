import { useEffect, useState } from "react";
import { FoodCard } from "../../components/FoodCard"
import { Button, Container, Header, Ul } from "./styles"
import { useNavigate } from "react-router-dom";
import { IFoodData } from "../../types/FoodData";
import { api } from "../../services/axios";




export const FoodList = () => {
  const [foods, setFoods] = useState<IFoodData[]>([])
  const navigate = useNavigate()
  
  const fetchData = async () => {
    const response = await api.get("/foods")
    setFoods(response.data)
  }

  useEffect(() => {
    fetchData()
  }, [])
  

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
          title={food.title}
          description={food.description}
          price={food.price}
          imgUrl={food.imgUrl}
          />
        ))}
      </Ul>
    </Container>
  )
}
