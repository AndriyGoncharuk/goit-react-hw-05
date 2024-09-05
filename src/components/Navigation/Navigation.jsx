import { NavLink } from "react-router-dom";
import styles from "./Navigation.module.css";

const Navigation = () => (
  <nav className={styles.nav}>
    <NavLink exact to="/" activeClassName={styles.active}>
      Home
    </NavLink>
    <NavLink to="/movies" activeClassName={styles.active}>
      Movies
    </NavLink>
  </nav>
);

export default Navigation;
