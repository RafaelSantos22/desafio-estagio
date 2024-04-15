/* eslint-disable @typescript-eslint/no-explicit-any */
import { Button } from "../Button";
import styles from "./styles.module.css";
import { api } from "../../services/api";
import { ErrorMessage } from "../ErrorMessage";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

export const FormContainer = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (!email || !password) {
      setError("Por favor, preencha o email e a senha.");
      return;
    }

    try {
      const response = await api.post("/login", { email, password });
      const user = response.data;
      
      localStorage.setItem('userData', JSON.stringify(user));
      navigate(`/user`)
      setError("");
    } catch (error: any) {
      if (error.response.status === 401) {
        setError("Senha incorreta");
      } else if (error.response.status === 404) {
        setError("Usuário não encontrado");
      } else {
        setError("Erro ao acessar o servidor");
      }
    } 
  };

  return (
    <form onSubmit={handleSubmit} className={styles.form}>
      <input
        className={`${styles.input} ${styles.emailIcon}`}
        type="email"
        name="email"
        placeholder="E-mail"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <input
        className={`${styles.input} ${styles.passwordIcon}`}
        type="password"
        name="password"
        placeholder="Senha"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      {error && <ErrorMessage msg={error} />}
      <Button type="submit">Entrar</Button>
    </form>
  );
};
