import Item from "../Item/Item"

const ItemList = ({notes}) => {
    { notes.map(note => (
            <Item  key={note.id} note={note} />
        ))}
}

export default ItemList