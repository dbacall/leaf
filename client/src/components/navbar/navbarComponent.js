import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import styles from './navbar-styles.module.scss';
import { ReactComponent as CloseMenu } from '../../assets/icons/x-mark.svg';
import { ReactComponent as MenuIcon } from '../../assets/icons/menu.svg';
import classNames from 'classnames';

const Navbar = ({ auth, logout }) => {
  const [mobileMenu, setMobileMenu] = useState(false);

  const openMenu = () => {
    setMobileMenu(true);
  };

  const closeMenu = () => {
    setMobileMenu(false);
  };

  const onLogoutClick = (e) => {
    e.preventDefault();
    logout();
    closeMenu();
  };

  const renderRight = () => {
    const { user, isAuthenticated } = auth

    if (isAuthenticated) {
      return (
        <div
          className={classNames(styles.navButtons, {
            [styles.active]: mobileMenu,
          })}
        >
          {user.therapistId ? (
            <Link to={`/therapist/${user.therapistId}`} className={styles.navButton} onClick={closeMenu}>
              Therapist Page
            </Link>
          ) : (
              <Link to="/therapist-form" className={styles.navButton} onClick={closeMenu}>
                Become A Therapist
              </Link>
            )}

          <a className={styles.navButton} onClick={onLogoutClick}>
            Logout
            </a>
        </div>
      )
    } else {
      return (
        <div
          className={classNames(styles.navButtons, {
            [styles.active]: mobileMenu,
          })}
        >
          <Link to="/login" className={styles.navButton} onClick={closeMenu}>
            Login
            </Link>
        </div>
      )
    }
  }

  return (
    <section className={styles.navbar}>
      <nav>
        <Link to="/" className={styles.title} onClick={closeMenu}>
          <span>Leaf</span>
        </Link>

        {renderRight()}

        {auth.isAuthenticated ? (
          <div
            className={styles.mobileMenuIcon}
            onClick={mobileMenu ? closeMenu : openMenu}
          >
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
