import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { FormLogin } from "./pages/login";
import Store from "./pages/store";
import { AdminCreate } from "./pages/create";
import Cart from "./pages/cart";
import ProtectedRoute from "./components/ProtectedRoutes";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<FormLogin />}></Route>
          <Route path="/login" element={<FormLogin />}></Route>
          <Route path="/store" element={<Store />}></Route>
          <Route path="/admin/create" element={   <ProtectedRoute><AdminCreate /></ProtectedRoute>}></Route>
          <Route path="/cart" element={<Cart />}></Route>
        </Routes>
      </Router>
    </>
  );
}

export default App;