import styles from "./styles.module.css";

type Props = {
  children: React.ReactNode;
  type: "button" | "submit";
  onClick?: () => void;
  width?: string;
};

export const Button = ({ type, onClick, children, width }: Props) => {
  return (
    <button style={{width: width}} className={styles.btn} type={type} onClick={onClick}>
      {children}
    </button>
  );
};
