export const registerReducer = (state,{type,payload}) =>{
    switch(type){
        case 'FIRSTNAME':
            return{
                ...state,
                firstname:payload
            };
             case 'LASTNAME':
            return{
                ...state,
                lastname:payload
            };
             case 'EMAIL':
            return{
                ...state,
                email:payload
            };
             case 'PASSWORD':
            return{
                ...state,
                password:payload
            };
             case 'CONFIRMPASSWORD':
            return{
                ...state,
                confirmpassword:payload
            };
              case 'TOKEN':
            return{
                ...state,
                token: payload.token
            }
            case 'CLEAR' :
                return {
                    firstname: '',
                    lastname: '',
                    email: '',
                    password: '',
                    confirmpassword: '',
                    token: { access_token: '', refresh_token: '' }
                };
            default :
            return state;
            }

            }