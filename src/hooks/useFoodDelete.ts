import { deleteDoc, doc } from "firebase/firestore";
import { db } from "../services/firebaseConfig";

export const useFoodDelete = () => {
   const deleteFood = async (id: string) => {
      try {
         await deleteDoc(doc(db, "food", id));
      } catch (error) {
         console.log(error)
      }
   }

   return {
      deleteFood
   }
}