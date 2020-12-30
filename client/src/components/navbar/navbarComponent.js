import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { logoutUser } from '../../redux/actions/authActions';
import styles from './navbar-styles.module.scss';

class Navbar extends Component {
  onLogoutClick = (e) => {
    e.preventDefault();
    this.props.logoutUser();
  };

  render() {
    const { user } = this.props.auth;
    return (
      <section className={styles.navbar}>
        <nav>
          <Link to="/" className={styles.title}>
            <span>Fantasy Me</span>
          </Link>
          {user ? (
            <div className={styles.navButtons}>
              <Link to="/my-sunday-leagues" className={styles.navButton}>
                My Sunday Leagues
              </Link>
              <Link to="/" className={styles.navButton}>
                My Fantasy Leagues
              </Link>
              <a onClick={this.onLogoutClick} className={styles.navButton}>
                Logout
              </a>
            </div>
          ) : null}
        </nav>
      </section>
    );
  }
}

const mapStateToProps = (state) => ({
  auth: state.auth,
});

export default connect(mapStateToProps, { logoutUser })(Navbar);
