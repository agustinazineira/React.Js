import { Link } from "react-router-dom"

const Item = ({note}) => {
    return(
        <div  className="d-flex flex-row mb-3">
            
            <div className="card p-1" style={{width:'18rem'}}> 
            <img src={note.img} className="card-img-top" alt={note.title} />
            <div>
                <h2>{note.title} </h2>
                <p>{note.category} </p>
                <p>{note.text} </p>
                <h3>${note.price} </h3>
                <Link to={`/note/${note.id}`} >Detalle</Link>

            </div>
    
            </div>
    
        </div>
        )
}

export default Item