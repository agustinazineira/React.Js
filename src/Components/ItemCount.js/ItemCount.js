import { useState } from 'react'

const Counter = ({initial, stock, onAdd}) => {
    
    //array desestructurado
    const [count, setCount] = useState(initial)

    const increment = () =>{
        if(count < stock){
            setCount(count + 1)
        }      
        
    }

    const reset = () => {
        setCount(initial)
    }

    return(
        <div>
            <h2>{count} </h2>
            <button onClick={()=> increment() }>Sumar click</button>
            <button onClick={()=> reset() }>Reset</button>
            <button onClick={()=> onAdd(count) }>Agregar al carrito</button>
        </div>
    )
}

export default Counter