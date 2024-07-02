import React from "react";
import "./Filter.css";

const Filter = ({ onFilterClick }) => {
  const options = ["Pousada", "Chalé", "Apto", "Casa", "Quarto", "Todos"];

  const removeAccents = (str) => {
    return str.normalize("NFD").replace(/[\u0300-\u036f]/g, "");
  };

  const handleButtonClick = (option) => {
    if (option === "Todos") {
      onFilterClick("");
    } else {
      const cleanedOption = removeAccents(option.toLowerCase());
      onFilterClick(cleanedOption);
    }
  };

  return (
    <>
      {options.map((option, index) => (
        <div key={index}>
          <button
            className="opt-filtros"
            onClick={() => handleButtonClick(option)}
          >
            {option}
          </button>
        </div>
      ))}
    </>
  );
};

export default Filter;
