import { Routes, Route, BrowserRouter } from "react-router-dom";
import { useState } from "react";
import Login from "./Login";
import Cadastro from "./Cadastro";
import Carrinho from "./Carrinho";
import Produtos from "./Produtos";
import Checkout from "./Checkout";

function App() {
  const [token, setToken] = useState("");

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/login" element={<Login setToken={setToken} />} />
          <Route path="/cadastro" element={<Cadastro />} />
          <Route path="/" element={<Produtos token={ token }/>}/>
          <Route path="/carrinho" element={<Carrinho token={token} />} />
          <Route
            path="/checkout"
            element={<Checkout token={token} setToken={setToken} />}
          />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
