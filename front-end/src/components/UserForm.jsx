import { useState } from "react";

import { LiaUmbrellaBeachSolid } from "react-icons/lia";
import { MdBedroomParent, MdChalet } from "react-icons/md";
import { FaBuilding, FaHouse } from "react-icons/fa6";
import { FaMinus, FaPlus } from "react-icons/fa";

import CustomButton from "./CustomButton";

import "./UserForm.css";

const UserForm = () => {
  const labels = ["Pousada", "Chalé", "Apto", "Casa", "Quarto"];
  const values = ["Quartos", "Camas", "Banheiro", "Hóspedes acomodados"];
  const icons = [
    <LiaUmbrellaBeachSolid key="umbrella" />,
    <MdChalet key="chalet" />,
    <FaBuilding key="building" />,
    <FaHouse key="house" />,
    <MdBedroomParent key="bedroom" />,
  ];
  const increment = () => setCount(count + 1);
  const decrement = () => setCount(count - 1);
  const [count, setCount] = useState(0);

  return (
    <div id="userform-box">
      <h1>
        Qual das seguintes opções descreve melhor <br /> seu espaço?
      </h1>
      <div id="btn-form">
        <div id="btn-organization">
          {labels.map((label, index) => (
            <CustomButton key={index} icon={icons[index]} label={label} />
          ))}
        </div>
        <h2>Adicione informações básicas</h2>
        <div id="userform-box-input">
          {values.map((value, index) => (
            <>
              <div key={index} className="userform-inputs">
                <div>
                  <label>{value}</label>
                </div>
                <div className="cont-form">
                  <span onClick={decrement}>
                    <FaMinus />
                  </span>
                  <p>{count}</p>
                  <span onClick={increment}>
                    <FaPlus />
                  </span>
                </div>
              </div>
              <div className="userform-line"></div>
            </>
          ))}
        </div>
      </div>
    </div>
  );
};

export default UserForm;
