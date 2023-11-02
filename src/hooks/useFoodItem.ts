import { doc, getDoc } from "firebase/firestore";
import { db } from "../services/firebaseConfig";
import { useEffect, useState } from "react";
import { IFoodDataForm } from "../types/FoodData";

export const useFoodItem = (id: string) => {
   const [food, setFood] = useState<IFoodDataForm>()

   const getFoodItem = async () => {
      try {
      const querySnapshot = await getDoc(doc(db, "food", id));
      if(querySnapshot.exists()){
         const food = querySnapshot.data()
         const foodItem: IFoodDataForm = {
            title: food.title,
            description: food.description,
            price: food.price,
            img: food.img,
         }
         setFood(foodItem)
      }
   } catch (error) {
      console.log("erro na requisição", error) 
   }
   }

   useEffect(() => {
      getFoodItem()
   },[])
   
   return { food }
}