import { useContext } from "react";
import { AuthContext } from "./AuthContext";
import { Navigate, useLocation } from "react-router-dom";

export const ProtectedRoute = ({ children }:{children: JSX.Element}) => {
   const { isAutenticated, isLoading } = useContext(AuthContext)
   const location = useLocation()

   if(isLoading){
    return <h2>carregando</h2>
   }
   if (!isAutenticated) {
     return <Navigate to="/login" state={{ from: location }} replace />;
   }
   return children;  
 };