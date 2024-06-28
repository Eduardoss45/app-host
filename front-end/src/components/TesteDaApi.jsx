import React from "react";

const TesteDaApi = ({data}) => {
  return (
    <>
      <h1>Dados da API:</h1>
      <ul>
        {data.map((user, index) => (
          <li key={index}>
            <strong>Nickname:</strong>
            {user.user_nickname} <br></br>
            <strong>Nome:</strong>
            {user.user_name} <br></br>
            <strong>E-mail:</strong>
            {user.user_email} <br></br>
            <strong>Idade:</strong>
            {user.user_age} <br></br>
          </li>
        ))}
      </ul>
    </>
  );
};

export default TesteDaApi;
