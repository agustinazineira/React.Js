import { useEffect, useState, useContext } from "react"
import { getProductsById } from "../../asyncMock"
import { useParams } from "react-router-dom"
import ItemDetail from "../ItemDetail/ItemDetail"
import { CartContext } from "../Context/CartContext"

const ItemDetailContainer = () => {

    const [product, setProduct] = useState({})

    const { addItem, isInCart, removeItem } = useContext(CartContext)

    const {productId} = useParams()

    useEffect(() => {
        getProductsById(productId)
            .then(response =>{
                setProduct(response)
            })
            .catch(error =>{
                console.error(error)
            })
    }, [productId])

    const isAdded = isInCart(product.id)

    return(
        <div>
            
            <h1>{product.title} </h1>
            <h2>{product.category} </h2>
            <p>{product.text} </p>
            <button 
                onClick={() => { isAdded ? removeItem(product.id) : addItem(product)}}
                >
                    { isAdded ? 'Quitar de favoritos' : 'Agregar a favoritos'}
            </button>
        </div>


    )
}

export default ItemDetailContainer