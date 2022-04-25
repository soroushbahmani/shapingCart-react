
import './App.css';
//components
import Store from './components/Store';
// context
import ProductContextProvider, { ProductContext } from './context/ProductContextProvider';


function App() {
  return (
    <ProductContextProvider>
      <Store />
    </ProductContextProvider>
  );
}

export default App;
