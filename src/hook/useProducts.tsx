import { useState, useEffect } from "react";

const useProducts = () => {
    const [products, setProducts] = useState([]);
    const [error, setError] = useState('');
    const [loading, setLoading] = useState(true);

    //Option 1
    useEffect(() => {
    const getProducts = async () => {
      try {
        const datos = await fetch('https://fakestoreapi.com/products?limit=20').then((res) => res.json());
        setProducts(datos);
      } catch  {
        setError("error");
      } finally {
        setLoading(false);
      }
    }
    getProducts();
  },[])

  return { products, error, loading }
}

export default useProducts;