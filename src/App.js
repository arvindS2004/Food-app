import Navbar from './components/Navbar'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Cart from './pages/Cart'
import Placo from './pages/Placo'
import Header from './components/Header'
import Footer from './components/Footer'
import Login from './pages/Login'
import Register from './pages/Register'
const App = () => {
  return (
    <>
   <Navbar />
   <Routes>
    <Route path='/' element={<Home/>} />
    <Route path='/cart' element={<Cart/>} />
    <Route path='/placo' element={<Placo/>} />
    <Route path='/header' element={<Header/>} />
    <Route path='/login' element={<Login/>} />
    <Route path='/register' element={<Register/>} />
   </Routes>
   <Footer />
   </>
  )
}

export default App
