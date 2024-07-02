import { IoMdClose } from "react-icons/io";

// import TesteDaApi from "./components/TesteDaApi";
// import Chat from "./pages/Chat";
import Acomodacoes from "./components/Acomodacoes";
import Navbar from "./components/Navbar";

import { useState } from "react";
import useData from "./hooks/useData";

import "./App.css";

function App() {
  const { data, loading, error } = useData("http://localhost:8000/api/");
  const accommodations = data && data.accommodations ? data.accommodations : [];
  const [searchTerm, setSearchTerm] = useState("");

  const handleSearch = (term) => {
    setSearchTerm(term);
  };

  const filteredAccommodations = searchTerm
    ? accommodations.filter((acc) =>
        acc.localization.toLowerCase().includes(searchTerm.toLowerCase())
      )
    : accommodations;

  return (
    <div className="App">
      <Navbar onSearch={handleSearch} />
      {loading && <>Carregando...</>}
      {error ? (
        <>Erro ao buscar dados: {error.message}</>
      ) : (
        <>
          {/* <TesteDaApi data={data} /> */}
          {/* <Chat /> */}
          <Acomodacoes accommodations={filteredAccommodations} />
          {/* <div id="painel-flutuante">
            <div id="painel-login">
              <p>
                <span>
                  <IoMdClose />
                  Entrar ou Cadastrar-se
                </span>
                <div>
                  <h1>Bem vindo ao App Host</h1>
                  <input type="email" name="Email" />
                  <input type="password" name="Senha" />
                </div>
              </p>
            </div>
            <div id="painel-mensagens">
              <h1>Painel flutuante</h1>
              <span>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Iste
                perferendis nam suscipit dolorem vero beatae doloremque corrupti
                repellendus ut, qui consequuntur porro ipsa neque inventore
                aliquam obcaecati architecto eligendi repudiandae.
              </span>
              <div id="box-text">
                <span>texto</span>
              </div>
              <div id="box-button">
                <button id="btn-painel">Texto</button>
              </div>
            </div>
          </div> */}
        </>
      )}
    </div>
  );
}

export default App;
