import { createContext } from "react"
import { UserResponse } from "./AuthProvider";


type AuthContextType = {
   user: UserResponse | null;
   signin: (email: string, password: string) => Promise<boolean>;
   signout: () => void;
   isLoading: boolean;
   token: string;
}

export const AuthContext = createContext<AuthContextType>(null!)