import { Route, Routes } from "react-router-dom";
import styled from "styled-components";
import Footer from "./Components/Footer";
import Header from "./Components/Header";
import GlobalStyles, { Button, Titulo } from "./globalStyles";
import Login from "./Pages/Login";
import Perfil from "./Pages/Perfil";
import ProtecaoRotaPerfil from "./Pages/Perfil/ProtecaoRota";
import { UserStorage } from "./store/UserContext";

function App() {
  return (
    <>
      <GlobalStyles />
      <UserStorage>
        <Header />
        <Routes>
          <Route path="login/*" element={<Login />} />
          <Route path="/perfil" element={<ProtecaoRotaPerfil />}>
            <Route path="/perfil" element={<Perfil />} />
          </Route>
        </Routes>
        <Footer />
      </UserStorage>
    </>
  );
}

export default App;
