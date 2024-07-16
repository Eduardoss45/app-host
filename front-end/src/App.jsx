import Home from "./pages/Home";
import Navbar from "./components/Navbar";
import Cadastro from "./pages/Cadastro";
import Favoritos from "./pages/Favoritos";
import Reservas from "./pages/Reservas";
import Acomodacao from "./pages/Acomodacao";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState } from "react";
import useData from "./hooks/useData";

function App() {
  const { data, loading, error } = useData(
    "http://127.0.0.1:8000/"
  );
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
      <BrowserRouter>
        <Navbar onSearch={handleSearch} />
        {loading ? (
          <>Carregando...</>
        ) : error ? (
          <>Erro ao buscar dados: {error.message}</>
        ) : (
          <Routes>
            <Route
              path="/"
              element={<Home accommodations={filteredAccommodations} />}
            />
            <Route path="/cadastro" element={<Cadastro />} />
            <Route path="/favoritos" element={<Favoritos />} />
            <Route path="/reservas" element={<Reservas />} />
            <Route path="/acomodacoes" element={<Acomodacao />} />
          </Routes>
        )}
      </BrowserRouter>
    </div>
  );
}

export default App;
