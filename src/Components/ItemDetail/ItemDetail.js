import { useState } from 'react'
import { Link } from 'react-router-dom'
import { CartContext } from '../Context/CartContext'
import { useContext } from 'react'



const InputCount = ({onAdd, stock, initial}) => {
    const [count, setCount] = useState(initial)

    const handleChange = (e) => {
        if(e.target.value <= stock) {
            setCount(e.target.value)
        }
    }

    return (
        <div>
            <input type='number' onChange={handleChange} value={count}/>
            <button onClick={() => onAdd(count)}>Agregar al carrito</button>
            
        </div>
    )
}

const ButtonCount = ({ onAdd, stock, initial = 1 }) => {
    const [count, setCount] = useState(initial)

    const increment = () => {
        if(count < stock) {
            setCount(count + 1)
        }

    }

    const decrement = () => {
            setCount(count - 1)

    }

    const reset = () => {
        setCount(initial)
    }

    return (
        
        <div>
            <p>{count}</p>
            <button onClick={decrement}>-</button>
            <button onClick={increment}>+</button>
            <button onClick={() => onAdd(count)}>Agregar al carrito</button>
            <button onClick={()=> reset() }>Reset</button>
        </div>
    )
}


const ItemDetail = ({ product }) => {
    const [inputType, setInputType] = useState('button')
    const [quantityToAdd, setQuantityToAdd] = useState(0)


    const handleOnAdd = (quantity) => {
        console.log('Se agregó al carrito'+ quantity)
         addItem({id, title, price, quantity})
    }

    const Count =  inputType === 'button' ? ButtonCount : InputCount

    return (
        <article className="CardItem">
            <button onClick={() => setInputType(inputType === 'button' ? 'input' : 'button')}>{inputType === 'button' ? 'pasar a input' : 'pasar a button'}</button>
            <header className="Header">
                <h2 className="ItemHeader">
                    {product.title}
                </h2>
            </header>
            <picture>
                <img src={product.img} alt={product.title} className="ItemImg"/>
            </picture>
            <section>
                <p className="Info">
                    Categoria: {product.category}
                </p>
                <p className="Info">
                    Descripción: {product.text}
                </p>
                <p className="Info">
                    Precio: {product.price}
                </p>
            </section>           
            <footer className='ItemFooter'>
                {
                    quantityToAdd === 0 ? (
                        <Count onConfirm={handleOnAdd} stock={product.stock} />
                    ) : (
                        <Link to='/cart'>Finalizar compra</Link>
                    )
                }
            </footer>
        </article>
    )
}

export default ItemDetail