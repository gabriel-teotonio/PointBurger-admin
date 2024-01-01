import { useContext } from "react";
import { AuthContext } from "./AuthContext";
import { Navigate, useLocation } from "react-router-dom";

export const ProtectedRoute = ({ children }:{children: JSX.Element}) => {
   const { isLoading, user } = useContext(AuthContext)
   const location = useLocation()
   console.log(user)
   
   if(isLoading) return <h2>carregando...</h2>
   if (!user) return <Navigate to="/login" state={{ from: location }} replace />;

   return children;
 };