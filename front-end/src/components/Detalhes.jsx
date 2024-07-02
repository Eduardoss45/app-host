import "./Detalhes.css";

const Detalhes = ({ image, status, name, description, price, category }) => {
  return (
    <div className="anuncio">
      <div className="img-anuncio">
        <img
          src={`http://127.0.0.1:8000/${image}`}
          alt="Imagem da acomodação"
        />
        <span>Status: {status ? "Disponível" : "Indisponível"}</span>
      </div>
      <p>
        <strong>{name}</strong>
      </p>
      <p>{description}</p>
      <p>{category}</p>
      <p>
        <strong>R${price}</strong> Preço por hospede
      </p>
    </div>
  );
};

export default Detalhes;
