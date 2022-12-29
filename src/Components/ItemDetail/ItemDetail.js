import { useState } from 'react'
import { Link } from 'react-router-dom'



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


const ItemDetail = ({ note }) => {
    const [inputType, setInputType] = useState('button')
    const [quantityToAdd, setQuantityToAdd] = useState(0)


    const handleOnAdd = (quantity) => {
        console.log('agregue al carrito')
        console.log(quantity)
        setQuantityToAdd(quantity)
    }

    const Count =  inputType === 'button' ? ButtonCount : InputCount

    return (
        <article className="CardItem">
            <button onClick={() => setInputType(inputType === 'button' ? 'input' : 'button')}>{inputType === 'button' ? 'pasar a input' : 'pasar a button'}</button>
            <header className="Header">
                <h2 className="ItemHeader">
                    {note.title}
                </h2>
            </header>
            <picture>
                <img src={note.img} alt={note.title} className="ItemImg"/>
            </picture>
            <section>
                <p className="Info">
                    Categoria: {note.category}
                </p>
                <p className="Info">
                    Descripción: {note.text}
                </p>
                <p className="Info">
                    Precio: {note.price}
                </p>
            </section>           
            <footer className='ItemFooter'>
                {
                    quantityToAdd === 0 ? (
                        <Count onConfirm={handleOnAdd} stock={note.stock} />
                    ) : (
                        <Link to='/cart'>Finalizar compra</Link>
                    )
                }
            </footer>
        </article>
    )
}

export default ItemDetail