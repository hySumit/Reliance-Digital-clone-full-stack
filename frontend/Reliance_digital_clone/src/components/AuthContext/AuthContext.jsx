import React, { createContext, useState } from "react";

export const AuthContext = createContext();

export default function AuthContextProvider({children}){
    const [error,setError] = useState(false)

    return(
        <AuthContext.Provider value={{error,setError}}>
            {children}
        </AuthContext.Provider>
    )
}