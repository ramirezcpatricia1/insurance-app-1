import { NavLink } from "react-router-dom";
import styles from "./Card.module.css";

const Card = ({ image, title, navLink, text }) => {
  return (
    <div>
      <figure className={styles.figure}>
        <span className={styles.span}>{title}</span>
        <img src={image} alt="Equipment Mobile" className={styles.image} />
        <span>{text}</span>
        <div className={styles.linked}>
          <NavLink to={navLink}>Report Here!</NavLink>
        </div>
      </figure>
    </div>
  );
};
export default Card;
