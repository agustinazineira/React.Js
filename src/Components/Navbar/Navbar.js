import './Navbar.css'
import Button from '../Button/Button'
import CartWidget from '../CartWidget/CartWidget'
import { NavLink } from 'react-router-dom'

const Navbar = (props) => {
    return(
        <nav className='navbar navbar-dark bg-dark'>
            <div className='container-fluid'>
                <h1 className='text-light'>Sushiblack</h1>
                <NavLink className='btn btn-light' to='/'>Home</NavLink>
                <NavLink className='btn btn-light' to='/category/Roll Clasico'>Roll Clasico</NavLink>
                <NavLink className='btn btn-light' to='/category/Roll Especial'>Roll Especial</NavLink>
                <NavLink className='btn btn-light' to='/category/Roll Caliente'>Roll Caliente</NavLink>
                <NavLink className='btn btn-light' to='/category/Niguiri'>Niguiri</NavLink>
                <CartWidget>0</CartWidget>
            </div>
            
        </nav>
    )
}

export default Navbar