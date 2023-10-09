import { addDoc, collection } from "firebase/firestore";
import { IFoodDataForm } from "../types/FoodData"
import { db } from "../services/firebaseConfig";

export const useFoodCreate = () => {
   const createNewFood = async (food: IFoodDataForm) => {
      try {
         await addDoc(collection(db, "food"), food);
      } catch (error) {
         console.log("erro ao criar novo item", error)
      }
   }

   return {createNewFood}
}