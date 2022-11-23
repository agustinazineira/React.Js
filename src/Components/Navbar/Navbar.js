import './Navbar.css'
import Button from '../Button/Button'
import CartWidget from '../CartWidget/CartWidget'

const Navbar = (props) => {
    return(
        <nav className='navbar navbar-dark bg-dark'>
            <div className='container-fluid'>
                <h1 className='text-light'>Sushiblack</h1>
                <Button>Home</Button>
                <Button>Menu</Button>
                <Button>About Us</Button>
                <Button>Contact</Button>
                <CartWidget>0</CartWidget>
            </div>
            
        </nav>
    )
}

export default Navbar