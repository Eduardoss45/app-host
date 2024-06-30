// import TesteDaApi from "./components/TesteDaApi";
// import Chat from "./pages/Chat";
import Acomodacoes from "./components/Acomodacoes";

import useData from "./hooks/useData";
import Navbar from "./components/Navbar";

import "./App.css";

function App() {
  const { data, loading, error } = useData("http://localhost:8000/api/");
  const accommodations = data && data.accommodations ? data.accommodations : [];

  return (
    <div className="App">
      <Navbar />
      {loading && <>Carregando...</>}
      {error ? (
        <>Erro ao buscar dados: {error.message}</>
      ) : (
        <>
          {/* <TesteDaApi data={data} /> */}
          {/* <Chat /> */}
          <Acomodacoes accommodations={accommodations} />
        </>
      )}
    </div>
  );
}

export default App;
