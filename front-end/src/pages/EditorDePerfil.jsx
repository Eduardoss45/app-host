import { Link } from "react-router-dom";

import { FaArrowLeftLong } from "react-icons/fa6";

import "./EditorDePerfil.css";

const EditorDePerfil = ({ handleReset }) => {
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
        <form>
          <h1>Informações pessoais</h1>
          <div>
            <label>
              <div className="row-line-edit">
                Nome Legal{" "}
                <div>
                  <button>editar</button>
                </div>
              </div>
              <span className="perfil-data">dados do usuario</span>
              <input required />
            </label>
          </div>
          <div>
            <label>
              <div className="row-line-edit">
                Nome Social{" "}
                <div>
                  <button>editar</button>
                </div>
              </div>
              <span className="perfil-data">dados do usuario</span>
              <input required />
            </label>
          </div>
          <div>
            <label>
              <div className="row-line-edit">Endereço de email </div>
              <span className="perfil-data">dados do usuario</span>
              <input disabled />
            </label>
          </div>
          <div>
            <label>
              <div className="row-line-edit">
                Telefone{" "}
                <div>
                  <button>editar</button>
                </div>
              </div>
              <span className="perfil-data">dados do usuario</span>
              <input required />
            </label>
          </div>
          <div>
            <label>
              <div className="row-line-edit">Data de nascimento </div>
              <span className="perfil-data">dados do usuario</span>
              <input disabled />
            </label>
          </div>
          <div>
            <label>
              <div className="row-line-edit">
                Contato de emergência{" "}
                <div>
                  <button>editar</button>
                </div>
              </div>
              <span className="perfil-data">dados do usuario</span>
              <input required />
            </label>
          </div>
          <div>
            <label>
              <div className="row-line-edit">
                Foto de perfil{" "}
                <div>
                  <button>editar</button>
                </div>
              </div>
              <span className="perfil-data">dados do usuario</span>
              <input required />
            </label>
          </div>
        </form>
      </div>
    </div>
  );
};

export default EditorDePerfil;
