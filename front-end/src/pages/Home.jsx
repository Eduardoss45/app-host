import { useState } from "react";
import Detalhes from "../components/Detalhes";
import Filter from "../components/Filter";

import "./Home.css";

const Home = ({ accommodations }) => {
  const [selectedCategory, setSelectedCategory] = useState("");

  const handleFilterClick = (category) => {
    setSelectedCategory(category);
  };

  const filteredAccommodations = selectedCategory
  ?  accommodations.filter((item) => item.category === selectedCategory)
  : accommodations;

  return (
    <>
      <div id="filtros">
        <Filter onFilterClick={handleFilterClick} />
      </div>
      <div id="area-anuncio">
        {filteredAccommodations.map((item, index) => (
          <Detalhes
            key={index}
            image={item.image}
            status={item.status}
            name={item.name}
            description={item.description}
            price={item.price}
            category={item.category}
          />
        ))}
      </div>
    </>
  );
};

export default Home;
