import axios from "axios"
const authApi = axios.create({
   baseURL: import.meta.env.VITE_REACT_AUTH_API
})

export const useAuth = () => ({
   validateToken: async (token: string) => {
      if(token === "hAHSsdnKsjdf"){
         return {
            user: {id:"3",name:"jose maria", email:"jose@gmail.com" }
         };
      }
      // const response = await authApi.post("/validate", {token})
      // return response.data;
   },
   signin: async (email: string, password: string) => {
      return {
         user: {id:"3",nome:"jose maria", email:"jose@gmail.com"},
         token: "hAHSsdnKsjdf"
      }
      const response = await authApi.post("/signin", {email, password})
      return response.data;
   },
   logout: async () => {
      return {status: true}
      const response = await authApi.post("/logout")
      return response.data;
   }
})