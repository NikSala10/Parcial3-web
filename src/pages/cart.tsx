import { useDispatch, useSelector } from "react-redux";
import type { RootState } from "../redux/store";
import useProducts from "../hook/useProducts";
import { useNavigate } from "react-router-dom";
import { clearCart, deleteItem, type Product } from "../redux/slices/cartSlice";

const Cart = () => {

    const dispatch = useDispatch()
    const navigate = useNavigate()
    const allProducts = useSelector((state: RootState) => state.cart.cart)
    const user = useSelector((state: RootState) => state. userAuth.user)
    const {loading, error} = useProducts()

   

  return (
  <>
  <h1>Bienvenido al Cart</h1>
  <h3>Rol actual: {user?.role}</h3>
    <button onClick={() => navigate(-1)}>volver</button>
  {loading && <p>Cargando</p>}
  {error && <p>Error</p>}
  {!error && !loading && allProducts.length ===0 && <p>No hay productos disponibles</p>}
  <p>Total a pagar:</p>
  <button onClick={() => dispatch(clearCart())}>Finalizar compra</button>
  {allProducts.map((product:Product) => (
        <div key={product.id}>
          <h3>{product.title}</h3>
          <p>{product.price}</p>
          <p>{product.description}</p>
          <p>{product.category}</p>
          <img src={product.image} />
          <button onClick={() => dispatch(deleteItem(product.id))}>Eliminar</button>
        </div>
      ))}
  
  </>
  )
};

export default Cart;