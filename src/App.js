import { Route, Routes } from "react-router-dom";
import styled from "styled-components";
import Feed from "./Components/Feed";
import Footer from "./Components/Footer";
import Header from "./Components/Header";
import PaginaNaoEncontrada from "./Components/PaginaNaoEncontrada";
import GlobalStyles, { Button, Titulo } from "./globalStyles";
import Foto from "./Pages/Foto";
import Login from "./Pages/Login";
import Perfil from "./Pages/Perfil";
import ProtecaoRotaPerfil from "./Pages/Perfil/ProtecaoRota";
import Usuario from "./Pages/PerfilUsuario";
import { UserStorage } from "./store/UserContext";

function App() {
  return (
    <>
      <GlobalStyles />
      <UserStorage>
        <Header />
        <Routes>
          <Route path="/" element={<Feed />} />
          <Route path="login/*" element={<Login />} />
          <Route path="/perfil/*" element={<ProtecaoRotaPerfil />}></Route>
          <Route path="/foto/:id" element={<Foto />} />
          <Route path="/usuario/:name" element={<Usuario />} />
          <Route path="*" element={<PaginaNaoEncontrada />} />
        </Routes>
        <Footer />
      </UserStorage>
    </>
  );
}

export default App;
