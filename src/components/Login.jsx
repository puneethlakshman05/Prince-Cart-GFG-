import { useLogin } from "../context/login-context";
import { userLogin } from "../api/auth";
import { useNavigate } from "react-router-dom";
import { useState } from "react";


export const Login = () =>{
    const {loginDispatch,email,password } = useLogin();
    const navigate = useNavigate();
    const [isEyeOpen ,setIsEyeOpen] = useState(true)

const onFormSubmit = async(e) =>{
    e.preventDefault();
    console.log("Logging in with:", email, password);

    const data = await userLogin(email,password);
    console.log({data})
    if(Object.keys(data)?.length > 0){
        localStorage.setItem('token',data.access_token)
    }
    loginDispatch({
        type:'TOKEN',
        payload: {
            token:data
        }
    });
    if(data.access_token){
        navigate('/')
    }

}
const onEmailChange = (e)=>{
  loginDispatch({
    type: 'EMAIL', 
    payload: {
          value:e.target.value
    }
});
}

const onPasswordChange = (e)=>{
  loginDispatch({
    type: 'PASSWORD', 
    payload: {
          value:e.target.value
    }
});
}


const styles="sm:text-md md:text-lg lg:text-xl"

    return(
        <form onSubmit={onFormSubmit} className="bg-white shadow-md w-[200px] mt-[60px] mb-[20px]  p-2 h-[220px] sm:w-[200px] sm:h-[250px] sm:mt-[80px] sm:mb-[30px]   md:w-[280px] md:h-[350px] md:mt-[90px] lg:w-[300px] lg:h-[400px]  lg:mt-[90px] lg:mb-[40px] " >
            <h1 className={`flex justify-center text-xs font-bold ${styles}`}>Login</h1>
            <div className="flex flex-col gap-1 mb-1 mt-3 ">
                <span className={`text-xs ${styles}`}>Email *</span>
            <input onChange={onEmailChange} type="email" required placeholder="email.." className={` text-xs border-b-2 focus:outline-none focus:border-b-black  transition-transform-0.5s ${styles}`}/>
            </div>
             <div className="flex flex-col gap-1 mb-1 mt-3">
                <span className={`text-xs ${styles}`}>Password *</span> 
                <div className="relative w-full">
            <input onChange={onPasswordChange} type={isEyeOpen?"password" : "text"} required placeholder="password..." className={` text-xs border-b-2 w-full focus:outline-none focus:border-b-black ${styles}`}/>
            <button  className="absolute right-0 top-2 text-xs text-gray-900 -mr-[3px] cursor-pointer sm:right-0 sm:top-2 md:right-0 md:top-1 lg:right-0 lg:top-1" onClick={() => setIsEyeOpen(!isEyeOpen)}>
                {
                isEyeOpen ? <span className={`material-icons-outlined text-xs ${styles}`}>visibility</span> 
                : <span className={`material-icons-outlined text-xs ${styles} `}>visibility_off</span>
                }
           
            </button>
           
            </div>
            </div>
            <div className="flex justify-center items-center">
                   <button className={`button btn-primary btn-icon cart-btn flex align-center justify-center gap-3 cursor mt-3 h-[20px] w-[40px] text-xs ${styles} sm:h-[30px] sm:w-[50px] md:w-[60px] md:h-[40px] lg:w-[80px] lg:h-[40px] sm:mt-4 md:mt-5 lg:mt-6 `}>Login</button>
            </div>
            <div className="flex flex-col mt-1 justify-center items-center" >
                <p className={`text-xs mt-1 sm:mt-3 md:mt-4 lg:mt-5  ${styles}`}>Don't have an account??</p>
                <p className={`mt-2 text-xs sm:mt-3 md:mt-4 lg:mt-5 ${styles}`}>Create Account<a href="/register"  className={`pl-1 hover:text-blue-600 hover:underline-offset-1 text-xs ${styles}`}>Register</a>
                </p>
                
            </div>

        </form>
    )
}