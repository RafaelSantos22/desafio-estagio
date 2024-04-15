import { Link } from "react-router-dom";
import { FormContainer } from "../../components/FormContainer";
import styles from "./styles.module.css";

export const Login = () => {
  return (
    <div className={styles.container}>
      <h2 className={styles.title}>Login</h2>
      <p className={styles.description}>
        Entre ou <Link className={styles.register} to="#">
          faça seu cadastro
        </Link>
      </p>
      <FormContainer />
    </div>
  );
};
