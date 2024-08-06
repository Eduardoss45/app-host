import { MdBedroomParent } from "react-icons/md";
import { FaHouse } from "react-icons/fa6";

import "./Step3.css";

const Step3 = () => {
  return (
    <div id="step-third">
      <h1>Que tipo de espaço você fornecerá ao seu hóspede?</h1>
      <div>
        <div>
          <h2>Espaço inteiro</h2>
          <div className="step-third-opt">
            <p>Uma acomodação completa para seus hóspedes</p>
            <span>
              <FaHouse key="house" />
            </span>
          </div>
        </div>
        <div>
          <h2>Quarto</h2>
          <div className="step-third-opt">
            <p>Direito a um quarto exclusivo e acesso a áreas compartilhadas</p>
            <span>
              <MdBedroomParent key="bedroom" />
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Step3;
