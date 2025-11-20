import { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { addProduct, type Product } from "../redux/slices/productsSlice";

export const AdminCreate = () => {

  const [title, setTitle] = useState("");
  const [price, setPrice] = useState("");
  const [category, setCategory] = useState("");
  const [description, setDescription] = useState("");
  const [image, setImage] = useState("");
  const dispatch = useDispatch()
  const navigate = useNavigate()

  const handleCreate = () => {
    if (!title || !price) {
        alert("Completa todos los campos")
        return
    }

    const newProduct: Product = {
        id: Date.now().toString(),
        title: title,
        price: Number(price),
        description: description,
        category: category,
        image: image

    }
    dispatch(addProduct(newProduct))
    alert("Producto creado")
    navigate("/store")
  };

  return (
    <>
      <h1>Crea el producto</h1>
      <button onClick={() => navigate(-1)}>volver</button>
    
        <input
          placeholder="Ingresa el title"
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <input
          placeholder="Ingresa el price"
          type="text"
          value={price}
          onChange={(e) => setPrice(e.target.value)}
        />
        <input
          placeholder="Ingresa el category"
          type="text"
          value={category}
          onChange={(e) => setCategory(e.target.value)}
        />
        <input
          placeholder="Ingresa el description"
          type="text"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
        <input
          placeholder="Ingresa la imagen"
          type="text"
          value={image}
          onChange={(e) => setImage(e.target.value)}
        />

        <button onClick={handleCreate}>Crear</button>
     
    </>
  );
};
