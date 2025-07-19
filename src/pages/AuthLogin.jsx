import { Navbar } from "../components/Navbar"
import { Login } from "../components/Login"


export const AuthLogin = () => {
    return (
        <>
            <Navbar />
            <main className="flex justify-center items-center  ">
            <Login />
            </main>
        </>
    )
} 