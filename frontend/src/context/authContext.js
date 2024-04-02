import { createContext, useEffect, useState } from "react";

export const AuthContext = createContext();

export const AuthContextProvider = ({ children }) => {
    const [currentUser, setCurrentUser] = useState(
        JSON.parse(localStorage.getItem("user")) 
        || null
    );

    //asociar al boton login en el form de login para "activar" validacion
    const login = () => {
        // to do
        setCurrentUser({ 
            id: 1, 
            name: "user X",
            email: "userx@gmail.com",
            access_token: true});
    };

    useEffect(() => {
        localStorage.setItem("user", JSON.stringify(currentUser));
    }, [currentUser]);

    return (
        <AuthContext.Provider value={{ currentUser, login }}>
            {children}
        </AuthContext.Provider>
    )

}