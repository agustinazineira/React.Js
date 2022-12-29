import { useEffect, useState } from "react"
import ItemList from "../ItemList/ItemList"
import { getProducts, getProductsByCategory } from "../../asyncMock"
import { useParams } from "react-router-dom"  

const ItemListContainer = (props) => {
    const [products, setProducts] = useState([])

    const { categoryId} = useParams()
    console.log(categoryId)

    useEffect(() => {
      if(!categoryId){
        getProducts()
        .then(response => {
          setProducts(response)
        })
        .catch(error => {
          console.log(error)
        })        
      }else{
        getProductsByCategory(categoryId)
        .then(response => {
          setProducts(response)
        })
        .catch(error => {
          console.log(error)
        }) 
      }
    }, [categoryId] )
      
      //const arrayTransformado = notes.map(note => <h2>{note.tittle} </h2>)

      return (
          <div>
              <h1 className="m-4">{props.greeting} </h1>
              <div  className="d-flex flex-wrap justify-content-evenly mb-3">
                <ItemList products={products} />
              </div>
          </div>
      )
} 


export default ItemListContainer