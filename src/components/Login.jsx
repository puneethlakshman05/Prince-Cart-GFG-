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
        <form onSubmit={onFormSubmit} className="bg-white shadow-md w-[250px] mt-[100px] mb-[20px]   h-[350px] sm:w-[280px] sm:h-[370px] sm:mt-[120px] sm:mb-[30px]   md:w-[370px] md:h-[410px] md:mt-[140px] lg:w-[350px] lg:h-[400px]  lg:mt-[160px] lg:mb-[40px] p-4 " >
            <h1 className={`flex justify-center  text-md sm:text-lg md:text-2xl lg:text-3xl font-bold mt-[0px] md:mt-4 sm:mt-4 `}>Login</h1>
            <div className="flex flex-col gap-1 mb-1 mt-1 sm:mt-3 ">
                <span className={`text-sm ${styles}`}>Email *</span>
            <input onChange={onEmailChange} type="email" required placeholder="email.." className={` text-xs border-b-2 focus:outline-none focus:border-b-black  transition-transform-0.5s ${styles}`}/>
            </div>
             <div className="flex flex-col gap-1 mb-1 mt-3 sm:mt-5">
                <span className={`text-sm ${styles}`}>Password *</span> 
                <div className="relative w-full">
            <input onChange={onPasswordChange} type={isEyeOpen?"password" : "text"} required placeholder="password..." className={` text-xs border-b-2 w-full focus:outline-none focus:border-b-black ${styles}`}/>
            <button  className="absolute right-0 top-1  text-sm text-gray-900 -mr-[3px] sm: cursor-pointer sm:right-0 sm:top-1 md:right-0 md:top-1 lg:right-0 lg:top-1" onClick={() => setIsEyeOpen(!isEyeOpen)}>
                {
                isEyeOpen ? <span className={`material-icons-outlined text-sm ${styles}`}>visibility</span> 
                : <span className={`material-icons-outlined text-sm ${styles} `}>visibility_off</span>
                }
           
            </button>
           
            </div>
            </div>
            <div className="flex justify-center items-center">
                   <button className={`button btn-primary btn-icon cart-btn flex align-center justify-center gap-3 cursor mt-3 h-[40px] w-[60px] text-sm ${styles} sm:h-[40px] sm:w-[100px] md:w-[100px] md:h-[45px] lg:w-[150px] lg:h-[40px] sm:mt-8 md:mt-5 lg:mt-6 `}>Login</button>
            </div>
            <div className="flex flex-col mt-1 justify-center items-center" >
                <p className={`text-sm mt-5 sm:mt-6 md:mt-4 lg:mt-5  ${styles}`}>Don't have an account??</p>
                <p className={`mt-3 text-sm  sm:mt-4 md:mt-4 lg:mt-5 ${styles}`}>Create Account<a href="/register"  className={`pl-1 hover:text-blue-600 hover:underline-offset-1 text-sm ${styles}`}>Register</a>
                </p>
                
            </div>

        </form>
    )
}