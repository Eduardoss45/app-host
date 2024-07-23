import { useEffect } from "react";
import { Link } from "react-router-dom";
import { FaArrowLeftLong } from "react-icons/fa6";
import useEdit from "../hooks/useEdit";
import "./EditorDePerfil.css";

const EditorDePerfil = ({ handleReset }) => {
  const token = localStorage.getItem("token");
  const userId = localStorage.getItem("userId");
  const {
    formData,
    loading,
    error,
    success,
    fetchUserData,
    editUser,
    handleChange,
  } = useEdit(userId, token);

  useEffect(() => {
    fetchUserData();
  }, [fetchUserData]);

  const handleFileChange = (event) => {
    const { id, files } = event.target;
    handleChange({
      target: {
        id,
        value: files[0],
      },
    });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    const form = new FormData();
    for (const [key, value] of Object.entries(formData)) {
      if (key === "profile_picture" && typeof value === "string") {
        continue;
      }
      form.append(key, value);
    }

    try {
      await editUser(form);
      if (success) {
        alert("Dados atualizados com sucesso!");
      }
    } catch (err) {
      console.error("Erro ao atualizar dados:", err);
    }
  };

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Ocorreu um erro: {error.message}</p>;

  return (
    <div id="page-row-perfil">
      <div id="left-arrow">
        <Link to="/" onClick={handleReset}>
          <span>
            <FaArrowLeftLong />
          </span>
        </Link>
      </div>
      <div id="page-col-perfil">
        <form onSubmit={handleSubmit}>
          <h1>Informações pessoais</h1>
          <div>
            <label htmlFor="username">
              <div className="row-line-edit">Nome Legal </div>
              <span className="perfil-data">{formData.username}</span>
              <input id="username" onChange={handleChange} />
            </label>
          </div>
          <div>
            <label htmlFor="social_name">
              <div className="row-line-edit">Nome Social</div>
              <span className="perfil-data">{formData.social_name}</span>
              <input id="social_name" onChange={handleChange} />
            </label>
          </div>
          <div>
            <label htmlFor="email">
              <div className="row-line-edit">Endereço de email</div>
              <span className="perfil-data">{formData.email}</span>
              <input id="email" onChange={handleChange} disabled />
            </label>
          </div>
          <div>
            <label htmlFor="phone_number">
              <div className="row-line-edit">Telefone</div>
              <span className="perfil-data">{formData.phone_number}</span>
              <input id="phone_number" onChange={handleChange} />
            </label>
          </div>
          <div>
            <label htmlFor="birth_date">
              <div className="row-line-edit">Data de nascimento</div>
              <span className="perfil-data">{formData.birth_date}</span>
              <input id="birth_date" onChange={handleChange} disabled />
            </label>
          </div>
          <div>
            <label htmlFor="emergency_contact">
              <div className="row-line-edit">Contato de emergência</div>
              <span className="perfil-data">{formData.emergency_contact}</span>
              <input id="emergency_contact" onChange={handleChange} />
            </label>
          </div>
          <div>
            <label htmlFor="profile_picture">
              <div className="row-line-edit">Foto de perfil</div>
              <span className="perfil-data">
                {formData.profile_picture && formData.profile_picture.name}
              </span>
              <div className="custom-file-upload">
                <span>Escolha um arquivo</span>
                <input
                  id="profile_picture"
                  type="file"
                  onChange={handleFileChange}
                />
              </div>
            </label>
          </div>
          <div className="row-line-edit">
            <button className="" type="submit">
              Salvar
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default EditorDePerfil;
