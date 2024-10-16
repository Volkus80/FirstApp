import { createContext, PropsWithChildren } from "react";
import { TypeAuth } from "../types/TypeAuth";


const AuthContext = createContext<TypeAuth>({ user: null });

const AuthProvider = ({ children }: PropsWithChildren) => {
    return <AuthContext.Provider value={{ user: null }}>
        {children}
    </AuthContext.Provider>
}

export { AuthContext, AuthProvider };