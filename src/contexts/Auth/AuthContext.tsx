import { createContext } from "react"
import { UserResponse } from "./AuthProvider";


type AuthContextType = {
   user: UserResponse | null;
   signin: (email: string, password: string) => Promise<boolean>;
   signout: () => void;
   isLoading: boolean;
   isAutenticated: boolean;
}

export const AuthContext = createContext<AuthContextType>(null!)