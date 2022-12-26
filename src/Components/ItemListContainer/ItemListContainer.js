import { useEffect, useState } from "react"
import ItemList from "../ItemList/ItemList"
import { getNotes, getNotesByCategory } from "../../asyncMock"
import { useParams } from "react-router-dom"  

const ItemListContainer = (props) => {
    const [notes, setNotes] = useState([])

    const { categoryId} = useParams()
    console.log(categoryId)

    useEffect(() => {
      if(!categoryId){
        getNotes()
        .then(response => {
          setNotes(response)
        })
        .catch(error => {
          console.log(error)
        })        
      }else{
        getNotesByCategory(categoryId)
        .then(response => {
          setNotes(response)
        })
        .catch(error => {
          console.log(error)
        }) 
      }
    }, [categoryId] )
      
      //const arrayTransformado = notes.map(note => <h2>{note.tittle} </h2>)

      return (
          <div>
              <h1>{props.greeting} </h1>
              <ItemList notes={notes}/>
          </div>
      )
} 


export default ItemListContainer