import { useContext } from "react";
import { AuthContext } from "./AuthContext";
import { Navigate } from "react-router-dom";

export const ProtectedRoute = ({ children }:{children: JSX.Element}) => {
   const auth = useContext(AuthContext)
   console.log(auth.user)
   if (!auth.user) {
     return <Navigate to="/" />;
   }
   return children;  
 };