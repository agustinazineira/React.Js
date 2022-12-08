import './Navbar.css'
import Button from '../Button/Button'
import CartWidget from '../CartWidget/CartWidget'
import { NavLink } from 'react-router-dom'

const Navbar = (props) => {
    return(
        <nav className='navbar navbar-dark bg-dark'>
            <div className='container-fluid'>
                <h1 className='text-light'>Sushiblack</h1>
                <NavLink>Home</NavLink>
                <NavLink to='/category/Roll Clasico'>Roll Clasico</NavLink>
                <NavLink to='/category/Roll Especial'>Roll Especial</NavLink>
                <NavLink to='/category/Roll Caliente'>Roll Caliente</NavLink>
                <NavLink to='/category/Niguiri'>Niguiri</NavLink>
                <CartWidget>0</CartWidget>
            </div>
            
        </nav>
    )
}

export default Navbar