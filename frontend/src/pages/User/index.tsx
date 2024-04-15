import { useNavigate } from "react-router-dom";
import { Button } from "../../components/Button";
import styles from "./styles.module.css";

type UserProps = {
  name: string;
  age: number;
  email: string;
  abilities: string[];
};

export const User = () => {
  const user: UserProps = JSON.parse(localStorage.getItem("userData") || "{}");
  const navigate = useNavigate();

  const handleOut = () => {
    localStorage.removeItem('userData');
    navigate('/');
  }

  return (
    <div className={styles.container}>
      <h1>Olá, meu nome é {user.name}, tenho {user.age} anos e possuo conhecimentos em tecnologias como</h1>
      <ul>
          {user.abilities.map((abilitie, index) => (
            <li key={index}>{abilitie}</li>
          ))}
        </ul>
      <Button width="100px" type="button" onClick={handleOut}>
        Sair
      </Button>
    </div>
  );
};
