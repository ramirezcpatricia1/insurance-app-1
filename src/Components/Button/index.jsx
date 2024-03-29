import styles from "./Button.module.css";

function Button() {
  return (
    <button type="submit" className={styles.button}>
      Send
    </button>
  );
}

export default Button;
