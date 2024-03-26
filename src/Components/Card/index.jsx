import { NavLink } from "react-router-dom";
import "./Card.module.css";

const Card = ({ image, title, navLink }) => {
  return (
    <div>
      <figure>
        <span>{title}</span>
        <img src={image} alt="Equipment Mobile" />
        <NavLink to={navLink}>Report Here!</NavLink>
      </figure>
    </div>
  );
};
export default Card;
