import './Navbar.css'
import CartWidget from '../CartWidget/CartWidget'
import { NavLink, Link } from 'react-router-dom'
import { CartContext } from '../Context/CartContext'
import { useContext } from 'react'


const Navbar = (props) => {

    const { getQuantity} = useContext(CartContext)
    
    const totalQuantity = getQuantity()
    
    const {cart}= useContext(CartContext)

    return(
        <nav className='navbar navbar-dark bg-dark'>
            <div className='container-fluid'>
                <h1 className='text-light'>Sushiblack</h1>
                <NavLink className='btn btn-light' to='/'>Home</NavLink>
                <NavLink className='btn btn-light' to='/category/Roll Clasico'>Roll Clasico</NavLink>
                <NavLink className='btn btn-light' to='/category/Roll Especial'>Roll Especial</NavLink>
                <NavLink className='btn btn-light' to='/category/Roll Caliente'>Roll Caliente</NavLink>
                <NavLink className='btn btn-light' to='/category/Niguiri'>Niguiri</NavLink>
                <CartWidget>
                    <Link to='/cart'>
                        {totalQuantity}
                    </Link>
                </CartWidget>
            </div>
            
        </nav>
    )
}

export default Navbar