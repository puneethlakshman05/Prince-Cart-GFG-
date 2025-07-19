import axios from "axios";

export const userLogin = async (email, password) => {
    const url = "https://api.escuelajs.co/api/v1/auth/login";
    try {
        const { data } = await axios.post(url, {
            email,
            password
        });
        console.log(data);
        return data;
    }
    catch (error) {
        console.error("Login failed", error);
        throw error;
    }

}

export const userRegister = async (firstname, lastname, email, password) => {
    const url = 'https://api.escuelajs.co/api/v1/users';
    try {
        const { data } = await axios.post(url,
            {
                name: `${firstname} ${lastname}`,
                email,
                password,
                avatar: "https://i.pravatar.cc/150"
            });
         console.log("registered data",data);
        const loginData = await userLogin(email, password);
        return loginData;
       
        

    }
    catch (error) {
        console.error("Registration failed", error)
        throw error;
    }



}