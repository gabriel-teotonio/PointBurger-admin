import { doc, updateDoc } from "firebase/firestore";
import { db } from "../services/firebaseConfig";
import { IFoodDataForm } from "../types/FoodData";

export const useFoodUpdate = () => {
   const updateFood = async (id: string, data: IFoodDataForm) => {
      try {
         const foodRef = doc(db, "food", id);
         await updateDoc(foodRef, {
            title: data.title,
            description: data.description,
            price: data.price,
            img: data.img
          });
      } catch (error) {
         console.log("erro ao atualizar item!", error)
      }
   }

   return {updateFood}
}