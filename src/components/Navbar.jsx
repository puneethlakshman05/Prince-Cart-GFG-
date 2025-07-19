import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { useLogin } from "../context/login-context";
import { useCart } from "../context/cart-context";
import { useWishlist } from "../context/wishlist-context";
import logo from '../assets/logo.png';
export const Navbar = () => {
    const navigate = useNavigate();
    const [isAccountDropdownOpen, setIsAccountDropDownOpen] = useState(false);
    const {token,loginDispatch} = useLogin();
    const {cart} = useCart();
    const {wishlist} =useWishlist();

     console.log(token)

    const onLoginClick = () =>{
        if(!token?.access_token){
           
        navigate('/auth/login');
        }
        else{
            loginDispatch({
                type: 'LOGOUT'
            })
            navigate('/auth/login')
        }
    }

    return (
        <header className="flex h-[30px]  w-full bg-white text-slate-800  z-10  fixed top-0  items-center shadow-md py-1 px-1 sm:py-2 sm:px-2 md:px-8 md:py-3 lg:py-4 lg:px-10 sm:h-[40px] md:h-[45px] lg:h-[60px] cursor-pointer">
            <div>
                {/* <h1 onClick={() =>navigate('/')} className="text-3xl font-extrabold hover:cursor-pointer">Buy It</h1> */}
                <img src={logo} alt="logo" className="h-[20px] w-[20px] sm:h-[25px] sm:w-[25px] md:h-[40px] md:w-[40px] lg:h-[45px] lg:w-[50px] " onClick={()=>navigate('/')}/> 
            </div>
            <nav className="ml-auto flex mr-0 gap-1 sm:gap-3 md:gap-4 lg:gap-5  items-center ">
                <div className="relative ">
                <span onClick={() => navigate('/cart')} className="material-icons-outlined text-lg sm:text-xl md:text-2xl lg:text-3xl sm:mr-[1px] hover:cursor-pointer text-fuchsia-950">
                    shopping_cart
                </span>
                {cart.length > 0 &&
                (
                 <span className="absolute -top-0 -right-0 text-xs bg-red-600 rounded-full w-2 h-2 sm:-top-0 sm:-right-0 md:-top-1 md:-right-1 lg:-top-2 sm:w-3 sm:h-3 md:w-4 md:h-4 lg:w-5 lg:h-5
                 flex justify-center items-center text-white cursor-pointer">{cart.length}</span>
                )}

                </div>
                <div className="relative">
                <span onClick={() => navigate('/wishlist')} className="material-icons-outlined text-lg sm:text-xl md:text-2xl lg:text-3xl hover:cursor-pointer text-fuchsia-950">
                    favorite_border
                </span>
                 {wishlist.length > 0 &&
                (
                 <span className="absolute -top-0 -right-0 text-xs bg-red-600 rounded-full w-2 h-2 sm:-top-0 sm:-right-0 md:-top-1 md:-right-1 lg:-top-2 sm:w-3 sm:h-3 md:w-4 md:h-4 lg:w-5 lg:h-5
                 flex justify-center items-center text-white cursor-pointer">{wishlist.length}</span>
                )}

                </div>
                <div className=" relative">
                <span onClick={() => setIsAccountDropDownOpen(!isAccountDropdownOpen)} className="material-icons-outlined text-lg sm:text-xl md:text-2xl lg:text-3xl hover:cursor-pointer ml-1 text-fuchsia-950">
                    account_circle
                </span>
                {
                    isAccountDropdownOpen &&<div className=" absolute bg-violet-400 p-1 font-extrabold rounded-lg text-xs sm:text-sm md:text-md lg:text-lg ">
                    <button onClick={onLoginClick} className="z-20">
                        {
                            token?.access_token ? 'Logout' : 'Login'
                        }
                    </button>
                </div>
                }
                
                </div>
            </nav>
        </header>
    )
}