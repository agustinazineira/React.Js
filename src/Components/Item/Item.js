import { Link } from "react-router-dom"

const Item = ({note}) => {
    return(
        <div> 
            <h2>{note.title} </h2>
            <p>{note.text} </p>
            <h3>{note.price} </h3>
            <Link to={`/note/${note.id}`} >Detalle</Link>

        </div>
    )
}

export default Item