import { Link } from 'react-router-dom';
import styles from './NavBar.module.css';


function NavBar() {
  return (
    <nav className={styles.nav}>
      <Link to="/">Главная</Link>
      <Link to="/about">О нас</Link>
            <Link to="/price">Сеансы</Link>
      <Link to="/contacts">Контакты</Link>

    </nav>
  );
}

export default NavBar;
