
import logo from './logo.svg';
import { useEffect, useState } from 'react';
import './App.css';
import Navbar from './Components/Navbar/Navbar';
import ItemListContainer from './Components/ItemListContainer/ItemListContainer';
import Counter from './Components/ItemCount.js/ItemCount';

const notes =[
  {
    id:'1',
    tittle:'New York',
    text:'Salmón, palta y queso'
  },
  {
    id:'2',
    tittle:'Buenos Aires',
    text:'Langostino, palta y queso'
  }
]

const getNotes = () =>{
  return new Promise((resolve)=>{
    setTimeout(()=>{
      resolve(notes)
    }, 2000)
  })
}

function App() {

  const [notes, setNotes] = useState([])

  useEffect(() => {
    getNotes().then(response=>{
      setNotes(response)
    }).catch(error => {
      console.log('error')
    })  
  }, [])

  //const arrayTransformado = notes.map(note => <h2>{note.tittle} </h2>)

  console.log(notes)
  
  const handleOnAdd = (quantity) => {
    console.log('se agregó al carrito' + quantity)
  }
  return (
    <div className="App">
      <Navbar />
      <ItemListContainer greeting='Bienvenidos a Sushiblack'/>
      { notes.map(note => (
        <div key={note.id}> 
          <h2>{note.tittle} </h2>
          <p>{note.text} </p>
        </div>
      ))}
      <Counter initial= {0} stock={12} onAdd= {handleOnAdd} />
    </div>
    
  );
}

export default App;
