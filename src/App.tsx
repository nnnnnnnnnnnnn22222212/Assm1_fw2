import { useState } from 'react'
import ProductList from './ProductList/Product'
import './App.css';
import "react-loading-skeleton/dist/skeleton.css";

function App() {
  const [count, setCount] = useState(0)

  return (
   <div>
     <hr className="my-4" />
            <h2 className="font-bold text-2xl">Product List</h2>
            <ProductList />
   </div>
  )
}

export default App
