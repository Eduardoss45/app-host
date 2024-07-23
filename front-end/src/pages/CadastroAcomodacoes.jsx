import { FaArrowLeftLong, FaArrowRightLong } from "react-icons/fa6";
import UserForm from "../components/UserForm";
import ReviewForm from "../components/ReviewForm";
import Thanks from "../components/Thanks";
import Descriptions from "../components/Descriptions";

import { useForm } from "../hooks/useForm";
import { useState } from "react";
import { Link } from "react-router-dom";

import "./CadastroAcomodacoes.css";

const formTemplate = {
  name: "",
  emai: "",
  review: "",
  comment: "",
};

function CadastroAcomodacoes() {
  const [data, setData] = useState(formTemplate);

  const updateFiedlHandler = (key, value) => {
    setData((prev) => {
      return { ...prev, [key]: value };
    });
  };

  const formComponents = [
    <Descriptions updateFiedlHandler={updateFiedlHandler} />,
    <UserForm data={data} updateFiedlHandler={updateFiedlHandler} />,
    <ReviewForm data={data} updateFiedlHandler={updateFiedlHandler} />,
    <Thanks data={data} />,
  ];

  const { currentStep, currentComponent, changeStep, isLastStep, isFirstStep } =
    useForm(formComponents);

  return (
    <form
      id="description-form"
      onSubmit={(e) => changeStep(currentStep + 1, e)}
    >
      <>{currentComponent}</>
      <div id="description-bar">
        <Link to="/hospedar/anuncio">
          <button>Sair</button>
        </Link>
        <div>
          {!isFirstStep && (
            <button type="button" onClick={() => changeStep(currentStep - 1)}>
              <span>
                <FaArrowLeftLong />
              </span>
            </button>
          )}
          {!isLastStep ? (
            <button type="submit">
              <span>
                <FaArrowRightLong />
              </span>
            </button>
          ) : (
            <button type="button">
              <span>Finalizar</span>
            </button>
          )}
        </div>
      </div>
    </form>
  );
}

export default CadastroAcomodacoes;
