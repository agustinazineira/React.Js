import Item from "../Item/Item";
import './ItemList.css'

const ItemList = ({products}) => {
    return(

        products.map(product => (
               <Item key={product.id} note={product} />
           ))
    )
    
}

export default ItemList
