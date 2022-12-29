import Item from "../Item/Item";
import './ItemList.css'

const ItemList = ({notes}) => {
    return(

        notes.map(note => (
               <Item key={note.id} note={note} />
           ))
    )
    
}

export default ItemList
