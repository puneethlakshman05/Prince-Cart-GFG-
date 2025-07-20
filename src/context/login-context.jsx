import { createContext,useContext,useReducer } from "react";
import{ loginReducer } from "../reducers/loginReducer";
import { useEffect } from "react";
const LoginContext = createContext();
const LoginProvider = ({children}) => {
    const initialToken = localStorage.getItem('token') || { access_token: '', refresh_token: '' };

    const initialState = {
        email:'',
        password:'',
        token: initialToken
    }
    const [{email,password,token}, loginDispatch] = useReducer(loginReducer, initialState);
       
        console.log( JSON.parse(localStorage.getItem("register")) )
  useEffect(() => {
    localStorage.setItem("token", JSON.stringify(token));
  }, [token]);
    return (
        <LoginContext.Provider value={{email,password,token, loginDispatch}}>
            {children}
        </LoginContext.Provider>
    )
}

const useLogin = () => useContext(LoginContext);

// eslint-disable-next-line react-refresh/only-export-components
export { LoginProvider, useLogin };