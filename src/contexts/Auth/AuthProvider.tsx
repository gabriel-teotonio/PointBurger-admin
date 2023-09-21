import { useEffect, useState } from "react"
import { User } from "../../types/User"
import { useAuth } from "../../hooks/useAuth"
import { AuthContext } from "./AuthContext"


export const AuthProvider = ({children}: {children: JSX.Element}) => {
   const [user, setUser] = useState<User | null>(null)
   const authApi = useAuth()
   useEffect(() => {
      const validateToken = async () => {
         const storageData = localStorage.getItem("AUTH_TOKEN")
         if(storageData){
            const data = await authApi.validateToken(storageData)
            if(data.user){
               setUser(data.user)
            }
         }
      }
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
      localStorage.setItem(JSON.stringify(token), "AUTH_TOKEN")
   }

   return (
      <AuthContext.Provider value={{user, signin, signout}}>
         {children}
      </AuthContext.Provider>
   )
}