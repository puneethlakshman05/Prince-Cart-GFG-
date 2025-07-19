import { Navbar } from '../components/Navbar'
import { useCart } from '../context/cart-context'
import { HorizontalProductCard } from '../components/HorizontalProductCard';
import { PriceDetails } from '../components/PriceDetails';
import { useNavigate } from 'react-router-dom';
export const Cart = () => {
    const navigate = useNavigate();

    const { cart } = useCart();

    return (
        <>
            <Navbar />
            <main className=' flex flex-col items-center pt-20 '>
                {
                    cart?.length > 0 ?(
                             <>
                      <h1 className=' font-extrabold text-sm sm:text-xl md:text-2xl lg:text-4xl text-center '>My Cart</h1>
                      <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2 gap-[30px] justify-items-center items-start ml-auto  sm:mx-auto md:mx-auto lg:mx-auto max-w-[1200px] px-4'>
                    <div className='pt-4 flex flex-col gap-[20px] mb-[10px] w-full sm:w-auto '>
                        {
                            cart?.length > 0 && cart.map(product => <HorizontalProductCard key={product.id}
                                product={product} />) 
                        }
                    </div>
                    <div className='w-full sm:w-auto' >
                        <PriceDetails />
                    </div>
                </div>
                </>
                    ) : <div className='flex flex-col align-center'>
                        <h2 className='text-lg font-extrabold text-slate-800 sm:text-xl md:text-2xl lg:text-3xl lg:mb-[10px]'> Cart is empty</h2>
                        <p onClick={()=> navigate('/')} className="hover:cursor-pointer mt-[15px] hover:border-[3px] rounded-sm px-6 py-2 mt-4 border-red-500 text-sm sm:text-base md:text-lg lg:text-lg lg:mb-8">Click to add items to Cart</p>
                    </div>
                }
               
              
            


            </main>
        </>
    );
}
