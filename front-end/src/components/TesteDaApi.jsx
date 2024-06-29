import "./TesteDaApi.css"

const TesteDaApi = ({ data }) => {
  return (
    <div className="teste">
      <h1>Dados da API:</h1>
      <ul>
        {data.map((user, index) => (
          <li key={index}>
            <strong>Id:</strong>
            {user.id} <br></br>
            <strong>Nome:</strong>
            {user.user_name} <br></br>
            <strong>E-mail:</strong>
            {user.user_email} <br></br>
            <strong>Idade:</strong>
            {user.user_age} <br></br>
            {user.profile_picture && <img
              src={`http://localhost:8000${user.profile_picture}`}
              alt="Foto de perfil"
            />}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TesteDaApi;
