import {useCart} from "../context/cart-context";
import { findProductInCart } from "../utils/findProductInCart";
import { useNavigate ,useLocation} from "react-router-dom";
import { useWishlist } from "../context/wishlist-context";
import { findProductInWishlist } from "../utils/findProductInWishlist";
import { useLogin } from "../context/login-context";


export const ProductCard = ({product}) =>{
    const {cart,cartDispatch} = useCart();
    const {wishlist,wishlistDispatch} = useWishlist();
    const navigate = useNavigate();
    console.log(product)
    const location = useLocation();

    
const{token} = useLogin();
 
console.log("value of token in product card",token)

 const isAuthenticated = !!token.access_token;   

const isProductInCart = findProductInCart(cart,product.id)
const isProductInWishlist = findProductInWishlist(wishlist,product.id)
const isWishlistPage = location.pathname==='/wishlist';

console.log("value of isProductInCart",isProductInCart)
console.log("value of isProductInWishlist",isProductInWishlist)
console.log("value of logged in or registered",isAuthenticated)

      
     const onCartClick = (product) => {
        if(!isProductInCart ){
            if(!isAuthenticated){
                navigate('/auth/login')
            
                return;
            }
            else{
                   localStorage.setItem('cart',JSON.stringify([...cart, product]))
            cartDispatch({
            type: "ADD_TO_CART",
            payload: {...product, qty :1} 
        })
    }
    }
        else{
            navigate('/cart')
            } 
    }

      const onWishlistClick = (product) => {
        if(!isProductInWishlist ){
         localStorage.setItem('wishlist',JSON.stringify([...wishlist, product]))
         if(!isAuthenticated){
                navigate('/auth/login')
                return;
            }
            else{
            wishlistDispatch({
            type: "ADD_TO_WISHLIST",
            payload: product,
        })
    }
        }
        else{
            navigate('/wishlist')
            } 
    }

    const onRemoveFromWishlist = (product) =>{
        if(isProductInWishlist){
            const storedWishlist = JSON.parse(localStorage.getItem('wishlist')) || [];
            const updatedWishlist = storedWishlist.filter(item => item.id !== product.id);
            localStorage.setItem('wishlist', JSON.stringify(updatedWishlist));
            wishlistDispatch({
                type :'REMOVE_FROM_WISHLIST',
                payload : product.id
            })
        }
    }


    return(
        <div className="card card-verticalflex flex-col relative  shadow w-[290px] text-sm h-[380px] sm:w-[275px] sm:h-[350px] md:w-[245px] md:h-[350px] lg:w-[260px] lg:h-[410px] hover:transition-transform hover:scale-105 cursor-pointer bg-white p-1 rounded-md">
     <div className="card-image-container h-[180px]  sm:h-[160px] md:h-[160px] lg:h-[200px]">
          <img className="card-image" src={product.images[0]} alt="shoes" />
     </div>
     <div className="card-details ">
          <div className="card-des line-clamp-2  h-[35px] text-md sm:text-sm md:text-sm lg:text-md sm:line-clamp-2 md:line-clamp-3  ">{product.title}</div>
          <div className="card-description mt-2 flex flex-col justify-between h-2 sm:h-3 md:h-4 lg:h-5 mb-1 sm:mb-0 md:mb-0 lg:mb-0">
               <p className="card-price mt-0 text-sm font-bold sm:text-sm md:text-md lg:text-lg ">
                  Rs.{product.price}
               </p>
          </div>
          <div className="cta-btn mt-auto flex flex-col justify-center items-center">
                    <button onClick={() =>
                         isWishlistPage ? onRemoveFromWishlist(product) : onWishlistClick(product)}
                          className="button bg-orange-400 hover:bg-orange-600 btn-icon gap-1 flex align-center justify-center 
                          cursor btn-margin font-bold text-sm px-[3px] py-[8px] sm:text-sm md:text-md lg:text-md w-[95%] sm:w-[95%] md:w-[95%] lg:w-[95%]">
                     <span className="material-icons-outlined text-md mr-[2px] ml-[2px] sm:text-sm md:text-md lg:text-xl">
                        { 
                        isWishlistPage?'delete' : isProductInWishlist ? 'favorite':' favorite_border'
                        }
                       </span>
                       {
                          isWishlistPage?'Remove ': isProductInWishlist ?'Go to Wishlist' : 'Add To WishList'
                       }
                </button>

               <button onClick={() => onCartClick(product)} className="button bg-teal-300 hover:bg-teal-500 btn-icon gap-1 cart-btn flex align-center justify-center  cursor mt-[10px] font-bold text-sm  px-[0px] py-[8px] sm:text-sm md:text-md lg:text-md  w-[95%] sm:w-[95%] md:w-[95%] lg:w-[95%]">
                     <span className="material-icons-outlined text-md mr-[2px] ml-[2px] sm:text-sm md:text-md lg:text-lg">
                        {
                            isProductInCart ?  'shopping_cart_checkout':  'shopping_cart'
                        }
                        </span>
                    {isProductInCart ? 'Go To Cart' : 'Add To Cart'}
               </button>
          </div>
     </div>
</div>
    )
}