import { createContext,useContext,useReducer } from "react";
import{ loginReducer } from "../reducers/loginReducer";

const LoginContext = createContext();
const LoginProvider = ({children}) => {

    const initialState = {
        email:'',
        password:'',
        token:{access_token: localStorage.getItem('token') || '', refresh_token: ''}
    }
    const [{email,password,token}, loginDispatch] = useReducer(loginReducer, initialState);
       
        console.log( JSON.parse(localStorage.getItem("register")) )

    return (
        <LoginContext.Provider value={{email,password,token, loginDispatch}}>
            {children}
        </LoginContext.Provider>
    )
}

const useLogin = () => useContext(LoginContext);

// eslint-disable-next-line react-refresh/only-export-components
export { LoginProvider, useLogin };