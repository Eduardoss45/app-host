import TesteDaApi from "./components/TesteDaApi";

import "./App.css";
import useData from "./hooks/useData";
import Navbar from "./components/Navbar";

function App() {
  const { data, loading, error } = useData("http://localhost:8000/api/");

  return (
    <div className="App">
      <Navbar />
      {loading && <>Carregando...</>}
      {error ? (
        <>Erro ao buscar dados: {error.message}</>
      ) : (
        <TesteDaApi data={data} />
      )}
    </div>
  );
}

export default App;
