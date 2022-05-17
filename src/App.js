import { Route, Routes } from "react-router-dom";
import styled from "styled-components";
import Footer from "./Components/Footer";
import Header from "./Components/Header";
import GlobalStyles, { Button, Titulo } from "./globalStyles";
import Login from "./Pages/Login";
import { UserStorage } from "./store/UserContext";

function App() {
  return (
    <>
      <GlobalStyles />
      <UserStorage>
        <Header />
        <Routes>
          <Route path="/login/*" element={<Login />} />
        </Routes>
        <Footer />
      </UserStorage>
    </>
  );
}

export default App;
