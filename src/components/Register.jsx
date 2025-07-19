import { useRegister } from "../context/register-context"
import { userRegister } from "../api/auth";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
export const Register = () => {
    const navigate = useNavigate();
    const { registerDispatch, firstname, lastname, email, password, confirmpassword } = useRegister();
    const [error, setError] = useState('');
    const [isPasswordEyeOpen, setIsPasswordEyeOpen] = useState(true)
    const [isConfirmPasswordEyeOpen, setIsConfirmPasswordEyeOpen] = useState(true)


    const onRegisterSubmit = async (e) => {
        e.preventDefault();
      
        if (!firstname || !lastname || !email || !password || !confirmpassword) {
            setError("Please enter all the fields!!!")

        }

        else if (password !== confirmpassword) {
            setError("Passwords do not match");
            return;
        }
        else if ((password.length || confirmpassword.length) < 4) {
            setError("Please enter 4 Characters for password");
            return;
        }


        console.log("registering with", firstname, lastname, email, password, confirmpassword)
        try {
            const data = await userRegister(firstname, lastname, email, password);
            localStorage.setItem("token", data.access_token);

            registerDispatch({
                type: "TOKEN",
                payload: { token: data },
            });
            registerDispatch({
                type: 'CLEAR'
            });
            setError('');
            console.log("Registration successful", data);
            alert("Registration successful");

            navigate("/"); // redirect after success
        } catch (error) {
            alert("Registration or Login failed");
            throw error;
        }

    }
    const onFirstnameChange = (e) => {
        e.preventDefault();
        registerDispatch({
            type: 'FIRSTNAME',
            payload: e.target.value
        })
    };
    const onLastnameChange = (e) => {
        e.preventDefault();
        registerDispatch({
            type: 'LASTNAME',
            payload: e.target.value
        })
    };
    const onEmailChange = (e) => {
        e.preventDefault();
        registerDispatch({
            type: 'EMAIL',
            payload: e.target.value
        })
    };
    const onPasswordChange = (e) => {
        e.preventDefault();
        registerDispatch({
            type: 'PASSWORD',
            payload: e.target.value
        })
    };
    const onConfirmPasswordChange = (e) => {
        e.preventDefault();
        registerDispatch({
            type: 'CONFIRMPASSWORD',
            payload: e.target.value
        })
    };

    const styles = "sm:text-md md:text-lg lg:text-xl"

    return (
        <div >
            <form onSubmit={onRegisterSubmit} className="h-[480px] mt-24 flex flex-col justify-evenly p-4 w-[350px] bg-white mb-[40px] sm:w-[400px] sm:h-[400px] md:w-[350px] md:h-[500px] lg:w-[400px] lg:h-[600px]">  
                <h1 className={`flex justify-center text-sm sm:text-xl md:text-2xl lg:text-3xl font-extrabold  `}>Register</h1>
                <div className="flex flex-col  mb-3 ">
                    <span className={`text-sm ${styles}`}>Firstname*</span>
                    <input  className={`mt-2 focus:outline-none border-b-2 border-gray-300 text-xs focus:border-b-black  ${styles}`} type="text" onChange={onFirstnameChange} placeholder="FirstName" />
                </div>
                <div className="flex flex-col  mb-3  ">
                    <span className={`text-sm ${styles}`}>Lastname*</span>
                    <input  className={`mt-2 focus:outline-none border-b-2 border-gray-300 text-xs  focus:border-b-black ${styles}`} type="text" onChange={onLastnameChange} placeholder="LastName" />
                </div>
                <div className="flex flex-col  mb-3 ">
                    <span className={`text-sm ${styles}`}>Email*</span>
                    <input  className={`mt-2 focus:outline-none border-b-2 border-gray-300 text-xs focus:border-b-black   ${styles}`} type="email" onChange={onEmailChange} placeholder="Email" />
                </div>
                <div className="flex flex-col  mb-3 ">
                    <span className={`text-sm ${styles}`}>Password*</span>
                    <div className="relative w-full">
                        <input onChange={onPasswordChange} type={isPasswordEyeOpen ? "password" : "text"} required placeholder="password..." className={` text-xs border-b-2 w-full focus:outline-none focus:border-b-black ${styles}`} />
                        <button className="absolute right-0 top-2 text-xs text-gray-900 -mr-[3px] cursor-pointer sm:right-0 sm:top-2 md:right-0 md:top-1 lg:right-0 lg:top-1" onClick={() => setIsPasswordEyeOpen(!isPasswordEyeOpen)}>
                            {
                                isPasswordEyeOpen ? <span className={`material-icons-outlined text-xs ${styles}`}>visibility</span>
                                    : <span className={`material-icons-outlined text-xs ${styles} `}>visibility_off</span>
                            }

                        </button>

                    </div>
                </div>
                <div className="flex flex-col  mb-2  ">
                    <span>Confirm Password*</span>
                    <div className="relative w-full">
                        <input className={` text-xs border-b-2 w-full focus:outline-none focus:border-b-black ${styles}`}
                            type={isConfirmPasswordEyeOpen ? "password" : "text"} onChange={onConfirmPasswordChange} placeholder="Confirm password" />
                        <button className="absolute right-0 top-2 text-xs text-gray-900 -mr-[3px] cursor-pointer sm:right-0 sm:top-2 md:right-0 md:top-1 lg:right-0 lg:top-1" onClick={() => setIsConfirmPasswordEyeOpen(!isConfirmPasswordEyeOpen)}>
                            {
                                isConfirmPasswordEyeOpen ? <span className={`material-icons-outlined text-xs ${styles}`}>visibility</span>
                                    : <span className={`material-icons-outlined text-xs ${styles} `}>visibility_off</span>
                            }

                        </button>
                    </div>
                </div>
                <div >
                    {
                        error && <p className={`text-red-500 text-sm  ${styles} `}>{error}</p>
                    }
                </div>
                <div className="flex justify-center items-center">
                    <button className={`button btn-primary btn-icon cart-btn flex align-center justify-center cursor mt-1 h-[30px] w-[60px] text-xs ${styles} sm:h-[40px] sm:w-[70px] md:w-[80px] md:h-[40px] lg:w-[90px] lg:h-[40px] sm:mt-4 md:mt-5 lg:mt-6 `}>Register</button>
                </div>

            </form>
        </div>
    )
}