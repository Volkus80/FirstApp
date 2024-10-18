import { Dispatch, SetStateAction } from "react";
import { TypeUserState } from "./TypeUserState";


type TypeAuth = {
    user: TypeUserState,
    setUser: Dispatch<SetStateAction<TypeUserState>>
};

export { TypeAuth }