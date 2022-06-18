<p><h1 align="center">🐶 Dogs 🐶</h1></p>
<p align="center">Rede social para divulgação de cachorros.</p>

<p align="center">
 <a href="#sobre">Sobre</a> •
 <a href="#aprendizados">Aprendizados</a> •
 <a href="#paginas">Páginas</a> •
 <a href="#tecnologias">Tecnologias</a> •
 <a href="#instalacao">Instalação</a>
</p>

<div id="sobre">
  <h1>📎 Sobre. </h1>
  <p> O sistema Dogs foi o primeiro contato com o farmework react no curso da <a href="https://www.origamid.com/">Origamid</a>. Durante seu desenvolvimento
  foram aplicados diversos conhecimentos visto nas aulas e conceitos importantes de javascript. Além do farmwwork foram utilizadas bibliotecas como styled components e react router dom
  para auxiliar o desenvolvimento do projeto. <b>Para a utilização da biblioteca de estilo foi feito um estudo à parte do curso baseado na documentação disponível no site dos
  criadores.</b>
  <p> O projeto conta com 10 rotas, 4 páginas contendo subrotas, cadastro e login de usuário, recuperação de senha, postagem e comentário de fotos 
    e uma estrutura de organização diferente da utilizada no curso. </p>
  </p>
  <p align="center">
    <img src="./src/assets/demo-dogs.gif"/>
  </p>
</div>

<div id="aprendizados">
 <h1>📚 Aprendizados. </h1>
 <ul>
  <li>Componentes, Propriedades, Contexto, Hooks, CustomHooks, JSX.</li>
  <li>Estrutura de pastas.</li>
  <li>Styled components.</li>
  <li>Rotas.</li>
  <li>Proteção de rotas</li>
  <li>Gitflow.</li>
 </ul>
<div>
  
 <div id="tecnologias">
  <h1>🛠 Tecnologias.</h1>
  <p>
    <a href="https://pt-br.reactjs.org/"><img src="https://img.shields.io/badge/react-%2320232a.svg?style=for-the-badge&amp;logo=react&amp;logoColor=%2361DAFB" alt="React"></a>
    <a href="https://reactrouter.com/"><img src="https://img.shields.io/badge/React_Router-CA4245?style=for-the-badge&amp;logo=react-router&amp;logoColor=white" alt="React Router"></a> 
    <a href="https://styled-components.com/"><img src="https://img.shields.io/badge/styled--components-DB7093?style=for-the-badge&amp;logo=styled-components&amp;logoColor=white" alt="Styled Components"></a>
    <a href="https://github.com/souzzs"><img src="https://img.shields.io/badge/github-%23121011.svg?style=for-the-badge&amp;logo=github&amp;logoColor=white" alt="GitHub"></a>
  </p>
</div>
  
<div id="paginas">
  <h1>📄 Páginas.</h1>
  <div>
    <h3>Home</h3>
    <img src="./src/assets/home.gif" />
    <p>A página home é um feed de fotos de todos os usuários, nela contém um componente de feed que apresenta um scrool infinito que faz resquisição de novas fotos
      quando o scrool acaba. Possui também o login automático, onde é verificado se há um token no localStorage, caso tenha é feito o login automático. Conceitos react utilizados: useState, useEffect, customHook e context Api.</p>
  </div>
  <div>
    <h3>Perfil</h3>
    <img src="./src/assets/perfil-usuario.gif" />
    <p>O perfil do usuário também contém um componente de feed, entretanto com suas próprias fotos. Na página há outras subrotas, sendo elas:
      <ul>
        <li>O feed de fotos do usuário citado</li>
        <li>A estatística de acesso ao perfil e de cada foto usando a biblioteca <a href="https://victory-graphics.co.uk/">Victory</a></li>
        <li>A postagem de foto onde o usuário preenche um formulário com os dados da foto que deseja postar</li>
        <li>Vale ressaltar que essa é uma rota protegida, onde somente após o login o usuário tem acesso à ela</li>
      <ul>
    </p>
  </div>
  <div>
    <h3>Login</h3>
    <img src="./src/assets/login.gif" />
    <p>A área de login contém um formulário com um hook que válida os campos de acesso. Após o login o token é salvo no localStorage para que o usuário não entre
    na conta novamente de forma manual.</p>
  </div>
  <div>
    <h3>Cadastro</h3>
    <img src="./src/assets/cadastro.gif" />
    <p>Para o cadastro, no formulário é validado os dados preenchidos pelo usuário. Na API, pelo back-end, é validado se já existe um usuário cadastrado com aquele email.
    Nesse caso e em outros de erro tudo é tratado e exibido ao usuário.</p>
  </div>
</div>
  
  <div id="instalacao">
   <h1>ℹ️ Instalação.</h1>
  <ul>
    <li>
      <p>Clone o projeto e acesse a pasta do mesmo.</p>
      <code>
          $ git clone https://github.com/souzzs/dogs.git
      </code>
    </li>
    <li>
      <p>Instale as dependências</p>
      <code>
          $ npm install
      </code>
    </li>
    <li>
      <p>Inicie o projeto</p>
      <code>
          $ npm start
      </code>
    </li>
  </ul>
</div>
  
<div id="autor">
  <h1>✏️ Autor.</h1>
  <p>Desenvolvimento por <a href="https://github.com/souzzs">Caio Souza</a>.</p>
  <p>
    <a href="https://instagram.com/seu-usuario/"><img src="https://img.shields.io/badge/Instagram-E4405F?style=for-the-badge&amp;logo=instagram&amp;logoColor=white" alt="Instagram Badge"></a>
    <a href="https://discord.gg/seu-server"><img src="https://img.shields.io/badge/Discord-7289DA?style=for-the-badge&amp;logo=discord&amp;logoColor=white" alt="Discord Badge"></a>
    <a href="https://www.linkedin.com/in/seu-usuario/"><img src="https://img.shields.io/badge/  LinkedIn-0077B5?style=for-the-badge&amp;logo=linkedin&amp;logoColor=white" alt="Linkedin"></a>
  </p>
</div>



