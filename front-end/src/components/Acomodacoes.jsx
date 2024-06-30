import React from "react";
import Detalhes from "./Detalhes";

import "./Acomodacoes.css";

const Main = ({ accommodations }) => {
  return (
    <>
      <div id="filtros">
        <div>
          <button className="opt-filtros">Pousada</button>
        </div>
        <div>
          <button className="opt-filtros">Chalé</button>
        </div>
        <div>
          <button className="opt-filtros">Apto</button>
        </div>
        <div>
          <button className="opt-filtros">Casa</button>
        </div>
        <div>
          <button className="opt-filtros">Quarto</button>
        </div>
      </div>
      <div id="area-anuncio">
        {accommodations.map((item, index) => (
          <Detalhes
            key={index}
            image={item.image}
            status={item.status}
            name={item.name}
            description={item.description}
            price={item.price}
          />
        ))}
      </div>
    </>
  );
};

export default Main;
