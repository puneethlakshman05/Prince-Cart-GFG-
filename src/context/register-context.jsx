import { createContext, useContext, useReducer, useEffect } from "react";
import { registerReducer } from "../reducers/registerReducer";
import { useLogin } from "./login-context";

const RegisterContext = createContext();

const RegisterProvider = ({ children }) => {
  const initialState = {
    firstname: '',
    lastname: '',
    email: '',
    password: '',
    confirmpassword: '',
    token: { access_token: '', refresh_token: '' }
  };

  const [{ firstname, lastname, email, password, confirmpassword, token }, registerDispatch] = useReducer(registerReducer, initialState);

  const { loginDispatch } = useLogin();

  useEffect(() => {
    const isFilled = firstname && lastname && email && password && confirmpassword;
    const isValid = password === confirmpassword;

    // Validate and simulate login only if all fields are filled and passwords match
    if (isFilled && isValid) {
      const registerData = { firstname, lastname, email, password, confirmpassword };
      localStorage.setItem("register", JSON.stringify(registerData));

      const fakeToken = { access_token: "fake_token_" + email, refresh_token: "refresh_" + email };
      localStorage.setItem("token", JSON.stringify(fakeToken));

      loginDispatch({ type: "EMAIL", payload: { value: email } });
      loginDispatch({ type: "PASSWORD", payload: { value: password } });
      loginDispatch({ type: "TOKEN", payload: { token: fakeToken } });
    }
  }, [firstname, lastname, email, password, confirmpassword, loginDispatch]);

  return (
    <RegisterContext.Provider value={{ firstname, lastname, email, password, confirmpassword, token, registerDispatch }}>
      {children}
    </RegisterContext.Provider>
  );
};

const useRegister = () => useContext(RegisterContext);

// eslint-disable-next-line react-refresh/only-export-components
export { RegisterProvider, useRegister };
