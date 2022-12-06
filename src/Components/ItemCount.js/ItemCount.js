import { useState } from 'react'

const Counter = ({initial, stock, onAdd}) => {
    
    //array desestructurado
    const [count, setCount] = useState(initial)

    const increment = () =>{
        if(count < stock){
            setCount(count + 1)
        }
    }

    const decrement = () =>{
        if(count > 0){
            setCount(count - 1)
        }
    }

    const reset = () => {
        setCount(initial)
    }

    return(
        <div>
            <div className="btn-group" role="group" aria-label="Basic example">
                <button type="button" className="btn btn-outline-danger" onClick={()=> decrement()}>-</button>
                <button type="button" className="btn btn-outline-dark">
                    <h2>{count} </h2>
                </button>
                <button type="button" className="btn btn-outline-success" onClick={()=> increment() }>+</button>
            </div>
            <div>
                <button onClick={()=> reset() }>Reset</button>
                <button onClick={()=> onAdd(count) }>Agregar al carrito</button>
            </div>            
        </div>
    )
}

export default Counter