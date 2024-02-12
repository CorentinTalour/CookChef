import styles from "./HeaderMenu.module.scss";

export function HeaderMenu({ setPage }) {
  return (
    <ul className={`card p-20 ${styles.MenuContainer}`}>
      <li onClick={() => setPage("admin")}>Ajouter une recette</li>
      <li>Wishlist</li>
      <li>Connexion</li>
    </ul>
  );
}

export default HeaderMenu;
