import { Link } from "react-router-dom";

import { FaArrowLeftLong } from "react-icons/fa6";

const Reservas = () => {
  return (
    <div>
      <Link to="/">
        <FaArrowLeftLong />
      </Link>
      <h1>Reservas</h1>
      {/* Um map vai percorrer uma ou mais reservas e estarão em relação com as acomodações de de um ou mais anfitriões do sistema */}
    </div>
  );
};

export default Reservas;
