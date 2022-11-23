import './CartWidget.css'

const CartWidget = (props) => {
    return (
        <button className='btn btn-light'>
            {props.children} 
            <img src={'./images/cart.png'} className= 'imageCart'/>           
        </button>
    )
}

export default CartWidget