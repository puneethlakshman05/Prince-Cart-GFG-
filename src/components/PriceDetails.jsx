import { useCart } from "../context/cart-context";
import { getTotalCartPrice } from "../utils/getTotalCartPrice";
import { useNavigate } from "react-router-dom";
import logo from "../assets/logo.png";
export const PriceDetails = () => {
    const { cart } = useCart();
    const navigate = useNavigate(); 
   
    const totalCartAmount=getTotalCartPrice (cart)   ;
    const deliveryCharge = 50;

    const loadscript = (src) =>{
        return new Promise(resolve=>{
            const script = document.createElement("script");
            script.src=src;
            script.onload = () => resolve(true);
            script.onerror = () => resolve(false);
            document.body.appendChild(script);
        });
     

    };

    const displayRazorPay = async () =>{
        await loadscript("https://checkout.razorpay.com/v1/checkout.js");

        const options ={
            key: import.meta.env.VITE_RAZORPAY_KEY,
            amount: (totalCartAmount + deliveryCharge) * 100,
            currency: "INR",
            name: "Prince Cart",
            description: "Thank you for shopping with us",
            image:logo,


            handler:({payment_id}) =>{
                console.log(payment_id);
                navigate('/')
            },
               prefill: {
            name: "Buy-It User",
            email: "Buy-It@corpo.com",
            contact: "798973****"
        },
        theme: {
            color: "#22c55e"
        }
        };
        
        const paymentObject= new window.Razorpay(options);
        paymentObject.open();
    }
    return (
        <>
            <div className="w-[250px] bg-[#fafafa] p-[7px] sm:w-[220px] sm:h-[250px] md:w-[320px] md:h-[280px] lg:w-[400px] lg:h-[300px] mt-[15px]  ">
                <p className='text-sm border-b p-[5px] sm:text-md md:text-xl lg:text-2xl'>Price Details</p>
                <div className="flex flex-col gap-4 border-b p-2 ">
                    <div className="flex">
                        <p className="text-xs sm:text-md  md:text-md lg:text-lg">Price ({cart.length}) items</p>
                        <p className="ml-auto text-xs sm:text-sm  md:text-md lg:text-lg ">Rs.{totalCartAmount}</p>
                    </div>
                    <div>
                        <p className=" text-sm sm:text-sm  md:text-md lg:text-lg">Delivery Charge</p>
                        <p className="ml-auto text-sm sm:text-sm  md:text-md lg:text-lg">Rs.{deliveryCharge}</p>
                    </div>
                    <div className="flex border-b p-2">
                        <p className=" text-sm sm:text-sm  md:text-md lg:text-lg">Total amount</p>
                        <p className="ml-auto  text-sm sm:text-sm  md:text-md lg:text-lg">Rs.{totalCartAmount + deliveryCharge}</p>
                    </div>
                    <div>
                        <button onClick={displayRazorPay} className="button bg-gray-800 btn-icon cart-btn flex align-center 
                        justify-center gap cursor mt-[5px] text-white   text-sm sm:text-sm  md:text-md lg:text-lg">PLACE ORDER</button>
                    </div>
                </div>
            </div>
        </>
    )
}