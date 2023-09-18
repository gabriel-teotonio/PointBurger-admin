import { useEffect, useState } from "react"
import { api } from "../lib/axios"
import { IFoodData } from "../types/FoodData"



export const useFoodData = () => {
   const [data, setData] = useState<IFoodData[]>([])

   const fetchData = async () => {
      try {
         const response = await api.get("/foods")
         setData(response.data)
      } catch (error) {
         console.log("erro na requisição", error) 
      }
   }
   useEffect(() => {
      fetchData()
   }, [data])
   
   return {data}
}