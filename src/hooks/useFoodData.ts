import { useEffect, useState } from "react"
import { api } from "../lib/axios"
import { IFoodData, IFoodDataForm } from "../types/FoodData"

import { initializeApp } from "firebase/app";
import { collection, getDocs, getFirestore } from "firebase/firestore";

const firebaseConfig = {
   apiKey: "AIzaSyBZNCaec_d_NEksICPhLs2AxjE64k4abOE",
   authDomain: "avalia-4a968.firebaseapp.com",
   projectId: "avalia-4a968",
   storageBucket: "avalia-4a968.appspot.com",
   messagingSenderId: "194487410132",
   appId: "1:194487410132:web:388f25e8ef335aec908a41"
 };

const app = initializeApp(firebaseConfig);


const db = getFirestore(app);


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