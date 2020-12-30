import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import styles from './navbar-styles.module.scss';
import { ReactComponent as CloseMenu } from '../../assets/x-mark.svg';
import { ReactComponent as MenuIcon } from '../../assets/menu.svg';

const Navbar = ({ user, logout }) => {
  const [mobileMenu, setMobileMenu] = useState(false);

  const menuActive = mobileMenu ? styles.active : '';

  const handleMenu = () => {
    setMobileMenu(!mobileMenu);
  };

  const onLogoutClick = (e) => {
    e.preventDefault();
    logout();
    handleMenu();
  };

  return (
    <section className={styles.navbar}>
      <nav>
        <Link to="/" className={styles.title} onClick={handleMenu}>
          <span>Fantasy Me</span>
        </Link>
        {user ? (
          <div className={`${styles.navButtons} ${menuActive}`}>
            <Link
              to="/my-sunday-leagues"
              className={styles.navButton}
              onClick={handleMenu}
            >
              My Sunday Leagues
            </Link>
            <Link to="/" className={styles.navButton} onClick={handleMenu}>
              My Fantasy Leagues
            </Link>
            <a className={styles.navButton} onClick={onLogoutClick}>
              Logout
            </a>
          </div>
        ) : null}
        {user ? (
          <div className={styles.mobileMenuIcon} onClick={handleMenu}>
            {mobileMenu ? (
              <CloseMenu className={styles.menuIcon} />
            ) : (
              <MenuIcon className={styles.menuIcon} />
            )}
          </div>
        ) : null}
      </nav>
    </section>
  );
};

export default Navbar;
