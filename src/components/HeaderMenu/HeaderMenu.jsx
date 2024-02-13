import { NavLink } from "react-router-dom";
import styles from "./HeaderMenu.module.scss";

export function HeaderMenu() {
  return (
    <ul className={`card p-20 ${styles.MenuContainer}`}>
      <NavLink to="/admin">Ajouter une recette</NavLink>
      <li>Wishlist</li>
      <li>Connexion</li>
    </ul>
  );
}

export default HeaderMenu;
