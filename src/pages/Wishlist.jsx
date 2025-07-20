import { Navbar } from "../components/Navbar";
import { useNavigate } from "react-router-dom";
import { useWishlist } from "../context/wishlist-context";
import { ProductCard } from "../components/ProductCard";
import { useLogin } from "../context/login-context";


export const Wishlist = () => {
    const navigate = useNavigate();
    const { wishlist } = useWishlist();
    const { token } = useLogin();


    return (
        <>
            <Navbar />
            <main className="  mb-20 pt-20 ">
                {
                    token?.access_token ? (
                        wishlist?.length > 0 ? (
                            <>
                                <h1 className="text-base text-gray-300 font-bold mb-[30px] text-center hover:text-gray-900 transition-transform duration-300 hover:scale-110 hover:font-extrabold sm:text-md md:text-xl lg:text-3xl sm:mb-[35px] md:mb-[40px] lg:mb-[50px]">My Wishlist</h1>
                                <div>
                                    <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-[20px] w-full mt-6 sm:gap-4 md:gap-6 lg:gap-8 justify-items-center items-start px-4'>
                                        {
                                            wishlist?.length > 0 && wishlist.map(
                                                product => <ProductCard key={product.id} product={product} />
                                            )
                                        }
                                    </div>
                                </div>
                            </>
                        ) : <div className="flex flex-col align-center items-center mt-7">
                            <h2 className='text-lg font-extrabold text-slate-200 sm:text-xl md:text-2xl lg:text-3xl lg:mb-[10px]'> Wishlist is empty</h2>
                            <p onClick={() => navigate('/')
                            } className=" hover:cursor-pointer mt-[15px] hover:border-[3px] rounded-sm px-6 py-2  border-red-500 text-sm sm:text-base md:text-lg lg:text-lg lg:mb-8 text-gray-200">No items in Wishlist,Click to Add</p>
                        </div>
                    ) : navigate('/auth/login')
                }


            </main>
        </>
    )

}
