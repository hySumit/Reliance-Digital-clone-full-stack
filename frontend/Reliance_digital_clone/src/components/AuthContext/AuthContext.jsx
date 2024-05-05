import React, { createContext, useState } from "react";

export const AuthContext = createContext();

export default function AuthContextProvider({children}){
    const [error,setError] = useState(false)
    const [isAuth,setIsAuth] = useState(false)

    return(
        <AuthContext.Provider value={{error,setError,isAuth,setIsAuth}}>
            {children}
        </AuthContext.Provider>
    )
}