
import logo from './logo.svg';
import './App.css';
import Navbar from './Components/Navbar/Navbar';
import ItemListContainer from './Components/ItemListContainer/ItemListContainer';
import Counter from './Components/ItemCount/ItemCount';

function App() {

  const handleOnAdd = (quantity) => {
    console.log('se agregó al carrito' + quantity)
  }
  return (
    <div className="App">
      <Navbar />
      <ItemListContainer greeting='Bienvenidos a Sushiblack'/>
      <Counter initial= {0} stock={12} onAdd= {handleOnAdd} />
    </div>
    
  );
}

export default App;
