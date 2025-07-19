export  const findProductInWishlistPage =(wishlist,id) =>{
    return wishlist.some(product => product.id===id);
    };