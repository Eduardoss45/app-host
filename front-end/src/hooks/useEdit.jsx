import { useState, useEffect, useCallback } from "react";
import axios from "axios";

const useEdit = (userId, token) => {
  const [formData, setFormData] = useState({});
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(false);

  // Função para buscar dados do usuário
  const fetchUserData = useCallback(async () => {
    if (!userId) {
      setError(new Error("User ID is required"));
      setLoading(false);
      return;
    }
    try {
      const response = await axios.get(
        `http://localhost:8000/user/${userId}/`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      setFormData(response.data);
      setLoading(false);
    } catch (err) {
      setError(err);
      setLoading(false);
    }
  }, [userId, token]);

  const editUser = async (updatedData) => {
    if (!userId) {
      setError(new Error("User ID is required"));
      return;
    }

    try {
      const response = await axios.put(
        `http://localhost:8000/user/update/${userId}/`,
        updatedData,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      setFormData(response.data);
      setSuccess(true);
    } catch (err) {
      setError(err);
    }
  };

  // Função para lidar com mudanças no formulário
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.id]: e.target.value,
    });
  };

  useEffect(() => {
    fetchUserData();
  }, [fetchUserData]);

  return {
    formData,
    loading,
    error,
    success,
    fetchUserData,
    editUser,
    handleChange,
  };
};

export default useEdit;
