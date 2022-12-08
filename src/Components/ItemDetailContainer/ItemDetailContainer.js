import { useEffect, useState } from "react"
import { getNotesById } from "../../asyncMock"
import { useParams } from "react-router-dom"

const ItemDetailContainer = () => {

    const [note, setNote] = useState({})
    const [isLoading, setIsLoading] = useState(true)

    const {noteId} = useParams()

    useEffect(() => {
        getNotesById(noteId)
            .then(response =>{
                setNote(response)
            })
            .catch(error =>{
                console.error(error)
            })
    }, [noteId])

    if(isLoading){
        return <h1>Cargando...</h1>
    }
    
    return(
        <div>
            <h1>{note.title} </h1>
            <h2>{note.category} </h2>
            <p>{note.text} </p>
        </div>


    )
}

export default ItemDetailContainer