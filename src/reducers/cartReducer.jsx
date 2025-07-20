export const cartReducer = (state, { type, payload }) => {
    switch (type) {
        case "ADD_TO_CART":
            return {
                ...state,
                cart: [...state.cart, { ...payload }]
            }
        case "REMOVE_FROM_CART":
            return {
                ...state,
                cart: state.cart.filter(product => product.id !== payload.id),
            };
        case 'INCREMENT':
            return {
                ...state,
                cart: state.cart.map(item =>
                    item.id === payload.id
                        ? { ...item, qty: item.qty + 1 }
                        : item
                         
                ),
           
            }; 
    

        case 'DECREMENT':
            return {
                ...state,
                cart: state.cart
                    .map(item =>
                        item.id === payload.id
                            ? { ...item, qty: item.qty - 1 }
                            : item
                    )
                    .filter(item => item.qty > 0), // removes if qty reaches 0
            };
        case "CLEAR_CART":
            return {
                ...state,
                cart: []
            };
        

        default:
            return state;
    }
}