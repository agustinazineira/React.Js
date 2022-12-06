import { useEffect, useState } from "react"
import ItemList from "../ItemList/ItemList"
import { getNotes } from "../../asyncMock"


  

const ItemListContainer = (props) => {
    const [notes, setNotes] = useState([])

  useEffect(() => {
    getNotes().then(response=>{
      setNotes(response)
    }).catch(error => {
      console.log('error')
    })  
    }, [])
    //const arrayTransformado = notes.map(note => <h2>{note.tittle} </h2>)

    return (
        <div>
            <h1>{props.greeting} </h1>
            <ItemList notes={notes}/>
        </div>
    )
} 

export default ItemListContainer