import { useEffect, useMemo, useState } from "react"
import { AuthContext } from "./AuthContext"
import { onAuthStateChanged, signInWithEmailAndPassword } from "firebase/auth"
import { auth } from "../../services/firebaseConfig";

export interface UserResponse {
   displayName: string | undefined | null;
   email: string | undefined | null;
   uid: string | undefined | null;
}

export const AuthProvider = ({children}: {children: JSX.Element}) => {
   const [user, setUser] = useState<UserResponse | null>(null)
   const [isLoading, setIsLoading] = useState(true); 
   const [token, setToken] = useState(JSON.stringify(localStorage.getItem("AUTH_TOKEN")))
   
   // const validateToken = async () => {
   //    try {
   //       const storageData = localStorage.getItem("AUTH_TOKEN")
   //       if(storageData){
   //          const data = await authApi.validateToken(storageData)
   //          console.log(data?.user)
   //          if(data?.user){
   //             setUser(data.user)
   //          }
   //       }
   //    }catch(error){
   //      await authApi.logout()
   //    }
   //    setIsLoading(false)
   // }
   // useEffect(() => {
   //    validateToken()
   // }, [])
   
   useEffect(() => {
      const checkAuth = () => {
         setIsLoading(true)
         onAuthStateChanged(auth, async (user) => {
            if(user){
               const {displayName,email, uid} = user
               setUser({displayName,email,uid})
            }
            else{
               console.log("usuario não logado! redirecionando <---")
               setUser(null)
            }
         })
         setIsLoading(false)
      }
      checkAuth()
   }, [])

   const signin = async (emailInput: string, password: string) => {
      try {
         const data = await signInWithEmailAndPassword(auth ,emailInput, password)
         const { displayName, email, uid } = data.user
         setUser({displayName, email, uid})
         return true
      } catch (error) {
         console.log("erro no login", error)
         return false
      }
   }
   
   const signout = async () => {
      setUser(null)
      setToken("")
   }

   const contextValue = useMemo(() => ({user, signin, signout, isLoading, token}), [user])

   return (
      <AuthContext.Provider value={contextValue}>
         {children}
      </AuthContext.Provider>
   )
}