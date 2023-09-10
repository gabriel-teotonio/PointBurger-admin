import { useEffect, useState } from "react";
import { FoodCard } from "../../components/FoodCard"
import { Button, Container, Header, Ul } from "./styles"
import axios, { AxiosPromise } from "axios";

interface IFoodData {
  id: string
  title: string
  description: string
  price: number
  imgUrl: string
}
const url = "http://localhost:3000"
export const FoodList = () => {
  const [foods, setFoods] = useState<IFoodData[]>([])
  
  const fetchData = async () => {
    const response = await axios.get(url + "/foods")
    setFoods(response.data)
  }

  useEffect(() => {
    fetchData()
  }, [])
  

  return (
    <Container>
      <Header>
         <h3>Burgers</h3>
         <Button>Adicionar novo burger</Button>
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
