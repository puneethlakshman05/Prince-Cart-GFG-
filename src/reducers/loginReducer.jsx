

export const loginReducer = (state, { type, payload }) => {
    switch (type) {
        case 'EMAIL':
            return {
                ...state,
                email: payload.value
            }
        case 'PASSWORD':
            return {
                ...state,
                password: payload.value
            }
        case 'TOKEN':
            return {
                ...state,
                token: payload.token
            }
        case 'LOGOUT':
            localStorage.removeItem('token');
            return {
                email: '',
                password: '',
                token: { access_token: '', refresh_token: '' }
                
            };

        default:
            return state
    }
}