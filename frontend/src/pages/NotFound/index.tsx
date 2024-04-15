import { Link } from 'react-router-dom';
import styles from './styles.module.css';

export const NotFound = () => {
  return (
    <div className={styles.notFound}>
      <h1>404 - Página não encontrada</h1>
      <p>Desculpe, a página que você está procurando não existe.</p>
      <Link className={styles.back} to='/'>Voltar página inicial</Link>
    </div>
  );
};
