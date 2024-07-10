// import TesteDaApi from "./components/TesteDaApi";
// import Chat from "./pages/Chat";
import Acomodacoes from "./components/Acomodacoes";
import Navbar from "./components/Navbar";
import PainelFlutuanteLogin from "./components/PainelFlutuanteLogin";

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
          {/* <PainelFlutuanteLogin /> */}
        </>
      )}
    </div>
  );
}

export default App;
