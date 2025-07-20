import { Navbar } from '../components/Navbar'
import { useCart } from '../context/cart-context'
import { HorizontalProductCard } from '../components/HorizontalProductCard';
import { PriceDetails } from '../components/PriceDetails';
import { useNavigate } from 'react-router-dom';
import {useLogin} from '../context/login-context';
export const Cart = () => {
    const navigate = useNavigate();

    const { cart } = useCart();
    const {token} = useLogin();

    return (
        <>
            <Navbar />
            <main className=' flex flex-col items-center  pt-20 '>
                {
                    token?.access_token ?(
                    cart?.length > 0 ?(
                             <>
                      <h1 className=' font-extrabold text-sm sm:text-xl md:text-2xl lg:text-4xl text-center text-slate-50'>My Cart</h1>
                      
                        <div className='grid grid-cols-1 sm:grid-cols-2 gap-5   justify-items-center  md:px-1 md:gap-4 md:grid-cols-2 lg:grid-cols-2 md:pl-5 '>
                    <div className='pt-4 flex flex-col gap-[20px] mb-[10px]  sm:w-auto  pl-2 sm:pl-0 md:pl-3 lg:pl-6 md:ml-3 lg:ml-6 lg:gap-[30px] md:gap-[20px] '>
                        {
                            cart?.length > 0 && cart.map(product => <HorizontalProductCard key={product.id}
                                product={product} />) 
                        }
                    </div>
                  <div >

                        <PriceDetails />
                    </div>
                </div>
                </>
                    ) : <div className='flex flex-col align-center items-center mt-7'>
                        <h2 className='text-lg font-extrabold text-slate-200 sm:text-xl md:text-2xl lg:text-3xl lg:mb-[10px]'> Cart is empty</h2>
                        <p onClick={()=> navigate('/')} className="hover:cursor-pointer mt-[15px] hover:border-[3px] rounded-sm px-6 py-2 mt-4 border-red-500 text-sm sm:text-base md:text-lg lg:text-lg lg:mb-8 text-gray-200">Click to add items to Cart</p>
                    </div>
                    ) : navigate('/auth/login')
    
                }
               
              
            


            </main>
        </>
    );
}
