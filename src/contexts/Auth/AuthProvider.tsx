import { useEffect, useState } from "react"
import { useAuth } from "../../hooks/useAuth"
import { AuthContext } from "./AuthContext"

export interface UserResponse {
   name: string;
   email: string;
   id: string;
}

export const AuthProvider = ({children}: {children: JSX.Element}) => {
   const [user, setUser] = useState<UserResponse | null>(null)
   const [isLoading, setIsLoading] = useState(true); 
   const isAutenticated = !!user
   const authApi = useAuth()
   
   const validateToken = async () => {
      try {
         const storageData = localStorage.getItem("AUTH_TOKEN")
         if(storageData){
            const data = await authApi.validateToken(storageData)
            console.log(data?.user)
            if(data?.user){
               setUser(data.user)
            }
         }
      }catch(error){
        await authApi.logout()
      }
      setIsLoading(false)
   }
   useEffect(() => {
      validateToken()
   }, [])

   const signin = async (email: string, password: string) => {
      const data = await authApi.signin(email, password)
      if(data.user && data.token){
         setUser(data.user)
         setToken(data.token)
         return true
      }
      return false
   }

   const signout = async () => {
      setUser(null)
      setToken("")
      await authApi.logout()
   }

   const setToken = (token: string) => {
      localStorage.setItem("AUTH_TOKEN", token)
   }

   return (
      <AuthContext.Provider value={{user, signin, signout, isLoading, isAutenticated}}>
         {children}
      </AuthContext.Provider>
   )
}