import { useState } from "react";
import axios from "axios";

function useCadastro(url) {
  const [formData, setFormData] = useState({
    username: "",
    birth_date: "",
    telefone: "",
    email: "",
    password: "",
  });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const response = await axios.post(url, formData, {
        headers: {
          "Content-Type": "application/json",
        },
      });
      console.log("Usuário cadastrado com sucesso:", response.data);
      setSuccess(true);
    } catch (error) {
      console.error("Erro ao cadastrar o usuário:", error);
      setError(error);
    } finally {
      setLoading(false);
    }
  };

  return { formData, loading, error, success, handleChange, handleSubmit };
}

export default useCadastro;
