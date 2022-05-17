import styled from 'styled-components';
import Footer from './Components/Footer';
import Header from './Components/Header';
import GlobalStyles, { Button, Titulo } from './globalStyles';

function App() {
  const TituloFeito = styled(Titulo)``;
  const ButtonFeito = styled(Button)``;
  return (
    <>
      <GlobalStyles />
      <Header />
      <Footer />
      <TituloFeito>Login</TituloFeito>
      <Button novaCor='red'>Login</Button>
      <input type='text' placeholder='Nome'/>
    </>
  );
}

export default App;
