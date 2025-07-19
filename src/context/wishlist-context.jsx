import { createContext, useContext,useReducer } from "react";
import { wishlistReducer } from "../reducers/wishlistReducer";

const WishlistContext = createContext();
const WishlistProvider = ({children}) =>{

    console.log(JSON.parse(localStorage.getItem('wishlist')));

   const initialState = {
        wishlist:JSON.parse(localStorage.getItem('wishlist')) || []
    }
    const [{wishlist},wishlistDispatch] = useReducer(wishlistReducer, initialState);

return(
    <WishlistContext.Provider value={{wishlist,wishlistDispatch}}>
        {children}
    </WishlistContext.Provider>
)
};
const useWishlist = () => useContext(WishlistContext);
// eslint-disable-next-line react-refresh/only-export-components
export{WishlistProvider, useWishlist};