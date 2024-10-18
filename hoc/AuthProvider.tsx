import { createContext, FC, PropsWithChildren, useState } from "react";
import { TypeAuth } from "../types/TypeAuth";
import { IUser } from "../types/IUser";
import { TypeUserState } from "../types/TypeUserState";


const AuthContext = createContext<TypeAuth>({} as TypeAuth);

const AuthProvider: FC<PropsWithChildren<unknown>> = ({ children }) => {
    const [user, setUser] = useState<TypeUserState>(null);

    return <AuthContext.Provider value={{ user, setUser }}>
        {children}
    </AuthContext.Provider>
}

export { AuthContext, AuthProvider };