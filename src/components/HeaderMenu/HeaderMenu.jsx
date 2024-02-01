import styles from "./HeaderMenu.module.scss";

export function HeaderMenu() {
  return (
    <ul className={`card p-20 ${styles.MenuContainer}`}>
      <li>Wishlist</li>
      <li>Connexion</li>
    </ul>
  );
}

export default HeaderMenu;
