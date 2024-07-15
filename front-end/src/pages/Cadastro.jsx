import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { FaArrowLeftLong } from "react-icons/fa6";
import axios from "axios";

import "./Cadastro.css";

const Cadastro = () => {
  const [formData, setFormData] = useState({
    user_name: "",
    user_email: "",
    user_password: "",
    user_age: "",
    profile_picture: null,
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleFileChange = (e) => {
    setFormData({
      ...formData,
      profile_picture: e.target.files[0],
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const data = new FormData();
    data.append("user_name", formData.user_name);
    data.append("user_email", formData.user_email);
    data.append("user_password", formData.user_password);
    data.append("user_age", formData.user_age);
    data.append("profile_picture", formData.profile_picture);

    try {
      await axios.post("http://localhost:8000/register/", data);
      navigate("/");
    } catch (error) {
      console.error("Erro ao registrar usuário:", error);
      if (error.response) {
        console.error("Resposta do servidor:", error.response.data);
      }
    }
  };

  return (
    <div id="page-row">
      <div id="left-arrow">
        <Link to="/">
          <button>
            <span>
              <FaArrowLeftLong />
            </span>
          </button>
        </Link>
      </div>
      <div id="page-col">
        <form onSubmit={handleSubmit}>
          <h1>Criar Conta</h1>
          <div>
            <label>
              Nome legal
              <input
                type="text"
                name="user_name"
                value={formData.user_name}
                onChange={handleChange}
              />
            </label>
          </div>
          <div>
            <label>
              Data de Nascimento
              <input
                type="date"
                name="user_age"
                value={formData.user_age}
                onChange={handleChange}
              />
            </label>
          </div>
          <div>
            <label>
              Telefone
              <input type="text" name="telefone" onChange={handleChange} />
            </label>
          </div>
          <div>
            <label>
              Endereço de email
              <input
                type="email"
                name="user_email"
                value={formData.user_email}
                onChange={handleChange}
              />
            </label>
          </div>
          <div>
            <label>
              Senha
              <input
                type="password"
                name="user_password"
                value={formData.user_password}
                onChange={handleChange}
              />
            </label>
          </div>
          <div id="file-input">
            <label>Escolher Foto de Perfil</label>
            <input
              type="file"
              id="upload-photo"
              name="profile_picture"
              accept="image/*"
              onChange={handleFileChange}
            />
          </div>
          <div>
            <input type="submit" value="Criar conta" />
          </div>
        </form>
      </div>
    </div>
  );
};

export default Cadastro;
