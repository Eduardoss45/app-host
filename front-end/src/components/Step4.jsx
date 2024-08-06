import "./Step4.css";

const Step4 = () => {
  return (
    <div id="step-four">
      <h1>Informe o endereço de sua acomodação</h1>
      <div>
        <div>
          <input type="text" placeholder="Enderço" />
        </div>
        <div>
          <input type="text" placeholder="Cidade" />
        </div>
        <div>
          <input type="text" placeholder="Bairro" />
        </div>
        <div>
          <input type="text" placeholder="CEP" />
        </div>
        <div>
          <input type="text" placeholder="Complemento" />
        </div>
      </div>
    </div>
  );
};

export default Step4;
