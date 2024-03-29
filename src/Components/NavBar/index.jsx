import { NavLink } from "react-router-dom";
import styles from "./Nav.module.css";

const Navbar = () => {
  return (
    <nav className="mt-5">
      <ul className={styles.Container}>
        <li>
          <NavLink to="/">Home</NavLink>
        </li>
        <li>
          <NavLink to="/">Contact Us</NavLink>
        </li>
        <li>
          <NavLink to="/">Frequently Asked Questions (FAQs)</NavLink>
        </li>
        <li className={styles.logo}>
          <img
            src="./assets/logo-home.png"
            alt="logo WMC"
            className={styles.image}
          />
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
