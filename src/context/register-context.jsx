import { createContext,useContext,useReducer } from "react";
import { registerReducer } from "../reducers/registerReducer";
const RegisterContext = createContext();
const RegisterProvider = ({children}) =>{

    const initialState = {
        firstname: '',
        lastname : '',
        email : '',
        password : '',
        confirmpassword :'',
        token:{access_token: localStorage.getItem('token') || '', refresh_token: ''}
    }


    const [{firstname,lastname,email,password,confirmpassword,token},registerDispatch] = useReducer(registerReducer, initialState)
    localStorage.setItem("register", JSON.stringify({firstname,lastname,email,password,confirmpassword}));
    console.log("the firstname updating to local storage", firstname)
      console.log("the lastname updating to local storage", lastname)
    return(
        <RegisterContext.Provider value={{firstname,lastname,email,password,confirmpassword,token,registerDispatch}}>
            {children}
        </RegisterContext.Provider>
    )
}

const useRegister = () => useContext(RegisterContext);
export {RegisterProvider,useRegister}

