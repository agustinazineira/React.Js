import { Link } from "react-router-dom"


const Item = ({product}) => {

    return(
        <div  className="d-flex flex-row mb-3">
            
            <div className="card p-1" style={{width:'18rem'}}> 
            <img src={product.img} className="card-img-top" alt={product.title} />
            <div>
                <h2>{product.title} </h2>
                <p>{product.category} </p>
                <p>{product.text} </p>
                <h3>${product.price} </h3>
                <Link to={`/product/${product.id}`} >Detalle</Link>

            </div>
    
            </div>
    
        </div>
        )
}

export default Item