import { FaArrowLeftLong, FaArrowRightLong } from "react-icons/fa6";
import Step1 from "../components/Step1";
import Step2 from "../components/Step2";
import Step3 from "../components/Step3";
import Step4 from "../components/Step4";
import Step5 from "../components/Step5";

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
    <Step1 updateFiedlHandler={updateFiedlHandler} />,
    <Step2 data={data} updateFiedlHandler={updateFiedlHandler} />,
    <Step3 data={data} updateFiedlHandler={updateFiedlHandler} />,
    <Step4 data={data} updateFiedlHandler={updateFiedlHandler} />,
    <Step5 data={data} updateFiedlHandler={updateFiedlHandler} />,
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
