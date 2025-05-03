import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Home } from './pages/Home';
import { ProductPage } from './pages/ProductPage';
import { products } from './data/products';


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route 
          path="/product/:id" 
          element={
            <ProductPage 
              product={products[1]} // This will be replaced with the actual product
            />
          } 
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;