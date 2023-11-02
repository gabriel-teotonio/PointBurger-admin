import { useEffect, useState } from "react"
import { IFoodData } from "../types/FoodData"
import { collection, getDocs } from "firebase/firestore";
import { db } from "../services/firebaseConfig";

export const useFoodData = () => {
   const [data, setData] = useState<IFoodData[]>([])

   const fetchData = async () => {
      try {
      const querySnapshot = await getDocs(collection(db, "food"));
      const response: IFoodData[] = querySnapshot.docs.map(doc => {
         const foodData = doc.data()
         return {
            title: foodData.title,
            description: foodData.description,
            price: foodData.price,
            img: foodData.img,
            id: doc.id
         }
      })
      setData(response)
      } catch (error) {
         console.log("erro na requisição", error) 
      }
   }

   useEffect(() => {
      fetchData()
   }, [])
   
   return { data }
}