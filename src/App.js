import './App.css';
import Navbar from './Components/Navbar/Navbar';
import ItemListContainer from './Components/ItemListContainer/ItemListContainer';
import Counter from './Components/ItemCount.js/ItemCount';
import { BrowserRouter, Routes, Route} from 'react-router-dom'
import ItemDetailContainer from './Components/ItemDetailContainer/ItemDetailContainer';


function App() {
 
  const handleOnAdd = (quantity) => {
    console.log('se agregó al carrito' + quantity)
  }
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path='/' element={<ItemListContainer greeting='Bienvenidos a Sushiblack'/>} />
          <Route path='/category/:categoryId' element={<ItemListContainer greeting='Bienvenidos a Sushiblack'/>} />
          <Route path='/note/:noteId' element={<ItemDetailContainer />} />
        </Routes>
      </BrowserRouter>
      
      <Counter initial= {0} stock={12} onAdd= {handleOnAdd} />
    </div>
    
  );
}

export default App;
