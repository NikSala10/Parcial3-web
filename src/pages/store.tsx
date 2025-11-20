import { useDispatch, useSelector } from "react-redux";
import type { RootState } from "../redux/store";
import useProducts from "../hook/useProducts";
import { useEffect } from "react";
import { deleteProduct, setProducts, type Product } from "../redux/slices/productsSlice";
import { useNavigate } from "react-router-dom";
import { setCart } from "../redux/slices/cartSlice";

const Store = () => {

    const dispatch = useDispatch()
    const navigate = useNavigate()
    const allProducts = useSelector((state: RootState) => state. products.products)
    const user = useSelector((state: RootState) => state. userAuth.user)
    const {loading, error, products} = useProducts()

    useEffect (() => {
        if (allProducts.length ===0 && products.length > 0) {
                dispatch(setProducts(products))
        }
    }, [allProducts, products, dispatch])
    
    const handleAddProduct = async (product: Product) => {
        dispatch(setCart(product));
  };

  return (
  <>
  <h1>Bienvenido al Store {user?.name}</h1>
  <h3>Rol actual: {user?.role}</h3>
  {loading && <p>Cargando</p>}
  {error && <p>Error</p>}
  {!error && !loading && allProducts.length ===0 && <p>No hay productos disponibles</p>}
  {user?.role === "manager" && <button  onClick={() => navigate("/admin/create")}>Crear producto</button>}
  {user?.role === "customer" && <button  onClick={() => navigate("/cart")}>Ver carrito</button>}
  
  {allProducts.map((product) => (
        <div key={product.id}>
          <h3>{product.title}</h3>
          <p>{product.price}</p>
          <p>{product.description}</p>
          <p>{product.category}</p>
          <img src={product.image} />
        {user?.role === "manager" && <button  onClick={() => dispatch(deleteProduct(product.id))}>Eliminar</button>}
        {user?.role === "customer" && <button  onClick={() => handleAddProduct(product)}>Agregar al carrito</button>}

        </div>
      ))}
  
  </>
  )
};

export default Store;