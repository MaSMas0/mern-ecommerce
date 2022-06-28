
import { Container } from "react-bootstrap";
import { BrowserRouter as Router,Route,Routes } from "react-router-dom";
import axios from "axios";
import Header  from "./components/Header";
import Footer  from "./components/Footer";
import HomePage from "./pages/HomePage";
import ProductPage from "./pages/ProductPage"
import { useState,useEffect } from "react";

const App = () => {

  const [products,setProducts] = useState([])

  useEffect(()=>{
    const fetchProducts = async ()=>{
      const {data} = await axios.get('/api/products')
      setProducts(data)
    }
    fetchProducts()
  },[])

  return (
<Router>
<Header />
<main className="py-3">
  <Container>
    <Routes>
<Route path="/" element ={<HomePage products={products} />} />
<Route path="/product/:id" element ={<ProductPage products={products}/>} />
</Routes>
  </Container>
</main>
<Footer />
</Router>
);
}

export default App;
