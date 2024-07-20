import { Link } from "react-router-dom";

import { FaArrowLeftLong } from "react-icons/fa6";

import "./Favoritos.css"

const Favoritos = () => {
  return (
    <div>
      <Link to="/">
        <FaArrowLeftLong />
      </Link>
      <h1>Favoritos</h1>
      <div>
        {/* Uma função map que buscara o id das acomodações favoritas e exibira nesta area */}
      </div>
    </div>
  );
};

export default Favoritos;
