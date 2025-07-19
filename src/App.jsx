import {Home} from './pages/Home'
import {Cart} from './pages/Cart'
import {Wishlist} from './pages/Wishlist'
import './App.css'
import {Routes, Route} from 'react-router-dom'
import { AuthLogin } from './pages/AuthLogin'
import { Footer } from './components/Footer'
import { AuthRegister } from './pages/AuthRegister'
function App() {


  return (
    <>
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/cart' element={<Cart/>}/>
      <Route path='/wishlist' element ={<Wishlist/>} />
      <Route path='/auth/login' element={<AuthLogin/>} />
      <Route path ='/register' element = {<AuthRegister />} />
    </Routes>
    <Footer/>
    </> 
  )
}

export default App
