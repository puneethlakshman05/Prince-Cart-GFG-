import {useCart} from "../context/cart-context";
import { useWishlist } from "../context/wishlist-context";
export const HorizontalProductCard = ({ product }) => {
    const { cartDispatch} = useCart();
    const {wishlistDispatch} = useWishlist();

    const onRemoveClick =(product) => {
         const storedCart = JSON.parse(localStorage.getItem('cart')) || [];
         const updatedCart = storedCart.filter(item => item.id !== product.id);
         localStorage.setItem('cart', JSON.stringify(updatedCart));
        cartDispatch({ type: "REMOVE_FROM_CART", 
            payload: {id:product.id }
        });

    }

const onAddToWishlist = ()=>{
    wishlistDispatch({
        type : "ADD_TO_WISHLIST",
        payload : product.id
    });
};
const onCountIncreaseClick = () => {
  cartDispatch({
    type: 'INCREMENT',
    payload: { id: product.id }
  });
};

const onCountReduceClick = () => {
  cartDispatch({
    type: 'DECREMENT',
    payload: { id: product.id }
  });
};


    return (
        <div className="card-horizontal flex shadow w-[350px] h-[180px] sm:w-[360px] sm:h-[180px] md:w-[380px] md:h-[190px] lg:w-[410px] lg:h-[220px]">
            <div className="card-hori-image-container relative">
                <img className="card-image w-[140px] h-[180px] sm:w-[160px] sm:h-[180px] md:w-[220px] md:h-[190px] lg:h-[220px] lg:w-[240px] " src={product.images} alt="shoes" />
            
            </div>
            <div className="card-details flex flex-col justify-between py-1 w-full mt-[4px] ">
                <div className="card-des text-xs h-[16px] mt-[5px] sm:text-xs md:text-sm lg:text-md sm:h-[18px] md:h[20px] lg:h-[22px] w-full">{product.title}</div>
                <div className="card-description">
                 
                    <p className="card-price h-[15px] mt-[16px] text-sm sm:text-md md:text-lg lg:text-xl sm:mt-[20px] md:mt-[23px] lg:mt-[25px]">Rs.{product.price} 
                       
                    </p>
                </div>
                <div className="quantity-container flex mt-[10px] sm:mt-[8px] md:mt-[15px] lg:mt-[18px]">
                    <p className="q-title text-xs sm:text-md md:text-md lg:text-lg">Quantity: </p>
                    <div className="count-container flex flex-row items-start justify-start gap-[7px] ml-2 ">
                        <button className="count text-sm w-[15px] h-[15px] rounded-full flex items-center justify-center sm:w-[18px] sm:h-[18px] md:w-[22px] md:h-[22px] lg:w-[25px] lg:h-[25px] sm:text-md md:text-lg lg:text-xl" onClick={onCountReduceClick}>-</button>
                        <span className="count-value text-sm flex items-start justify-center -mt-[3px] sm:text-md md:text-lg lg:text-xl">{product.qty}</span>
                        <button className="count text-sm w-[15px] h-[15px] rounded-full flex items-center justify-center sm:w-[18px] sm:h-[18px] md:w-[22px] md:h-[22px] lg:w-[25px] lg:h-[25px] sm:text-md md:text-lg lg:text-xl" onClick={onCountIncreaseClick}>+</button>
                    </div>
                </div>
                <div className="cta-btn flex mt-auto mb-[12px] gap-3">
                    <div className="cta-btn ">
                        <button onClick={() => onRemoveClick(product)} className="button  btn-primary btn-icon flex align-center justify-center px-[4px] py-[6px] cursor mt-[10px] text-sm sm:text-sm md:text-md lg:text-lg">
                            Remove From Cart</button>
                    </div>
                    <div className="cta-btn">
                        <button onClick = {() => onAddToWishlist(product)} className="button  btn-outline-primary btn-icon flex align-center justify-center px-[4px] py-[6px] mt-[10px] cursor text-sm  sm:text-sm md:text-md lg:text-lg text-gray-800">
                            Move to Wishlist</button>
                    </div>
                </div>
            </div>
        </div>
    )
}