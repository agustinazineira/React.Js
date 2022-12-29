import './App.css';
import Navbar from './Components/Navbar/Navbar';
import ItemListContainer from './Components/ItemListContainer/ItemListContainer';
import { BrowserRouter, Routes, Route} from 'react-router-dom'
import ItemDetailContainer from './Components/ItemDetailContainer/ItemDetailContainer';
import Cart from './Components/Cart/Cart';
import {CartProvider } from './Components/Context/CartContext';


function App() {
  
  return (

    <div className="App">
     <CartProvider>
        <BrowserRouter>
          <Navbar />
          <Routes>
            <Route path='/' element={<ItemListContainer greeting='Bienvenidos a Sushiblack'/>} />
            <Route path='/category/:categoryId' element={<ItemListContainer  />} />
            <Route path='/product/:productId' element={<ItemDetailContainer />} />
            <Route path='/cart' element={<Cart />} />
          </Routes>
        </BrowserRouter>
      </CartProvider>
      
    </div>
    
  );
}

export default App;
