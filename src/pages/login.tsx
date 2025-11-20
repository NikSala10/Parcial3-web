import { useState } from "react";
import { useDispatch } from "react-redux";
import { setUser, type User } from "../redux/slices/authSlice";
import { useNavigate } from "react-router-dom";

export const FormLogin = () => {
  const [name, setName] = useState("");
  const [role, setRole] = useState("");
  const dispatch = useDispatch()
  const navigate = useNavigate()

  const handleLogin = () => {
    if (!name || !role) {
        alert("Completa todos los campos")
        return
    }

    const newUser: User = {
        name: name,
        role: role
    }
    dispatch(setUser(newUser))
    alert("usuario creado")
    navigate("/store")
  };

  return (
    <>
      <h1>Bienvenido al login</h1>
    
        <input
          placeholder="Ingresa el name"
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <span>Manager</span>
        <input
        type="radio"
        name="role"
        value={"manager"}
        checked={role === "manager"}
        onChange={() => setRole("manager")}
        />
        <span>Customer</span>

        <input
        type="radio"
        name="role"
        value={"customer"}
        checked={role === "customer"}
        onChange={() => setRole("customer")}
        />
        <button onClick={handleLogin}>Enviar</button>
     
    </>
  );
};