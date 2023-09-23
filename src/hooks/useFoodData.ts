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
   const deleteData = (id: string) => {
      try {
         api.delete(`/foods/${id}`)
         .then(() => {
            fetchData()
            alert('excluido com sucesso!')
         })
      } catch (error) {
         console.log(error)
      }
   }

   useEffect(() => {
      fetchData()
   }, [])
   
   return { data, deleteData }
}