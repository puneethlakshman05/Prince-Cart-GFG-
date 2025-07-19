import { Navbar } from "../components/Navbar";
import { useNavigate } from "react-router-dom";
import { useWishlist } from "../context/wishlist-context";
import { ProductCard } from "../components/ProductCard";


export const Wishlist = () =>{
    const navigate = useNavigate();
    const {wishlist} =  useWishlist();
  

    return(
        <>
            <Navbar />
            <main className="  mb-20 pt-20 ">
                <h1 className="text-base text-gray-700 font-bold mb-[30px] text-center hover:text-gray-900 transition-transform duration-300 hover:scale-110 hover:font-extrabold sm:text-md md:text-xl lg:text-3xl sm:mb-[35px] md:mb-[40px] lg:mb-[50px]">My Wishlist</h1>
                {
                    wishlist?.length > 0 ? (
                        <div className= " ">
 <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2 w-full mt-6 sm:gap-4 md:gap-6 lg:gap-8 justify-items-center items-start px-4'>
                           {
                   wishlist?.length > 0 && wishlist.map(
                   product =>  <ProductCard key={product.id} product={product}/>
                   )
                }
                    </div>
                </div>
                    ):<div className="flex fex-col  justify-center">
                    <p onClick ={() => navigate('/')
                    } className="hover: hover:text-gray-900 transition-transform duration-300 hover:scale-110 hover:font-extrabold text-sm sm:text-md md:text-lg lg:text-xl">No items in Wishlist,Click to Add</p>
                    </div>
                }

                
            </main>
        </>
    )

}
