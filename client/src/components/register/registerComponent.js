import React, { Component } from 'react';
import { Link, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { registerUser } from '../../redux/actions/authActions';
import classnames from 'classnames';
import PropTypes from 'prop-types';
import styles from './register.module.scss';

class Register extends Component {
  constructor(props) {
    super(props);
    this.state = {
      firstName: '',
      surname: '',
      email: '',
      password: '',
      password2: '',
      errors: {},
    };
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.errors) {
      this.setState({
        errors: nextProps.errors,
      });
    }
  }

  onChange = (e) => {
    this.setState({ [e.target.id]: e.target.value });
  };

  onSubmit = (e) => {
    e.preventDefault();

    const newUser = {
      firstName: this.state.firstName,
      surname: this.state.surname,
      email: this.state.email,
      password: this.state.password,
      password2: this.state.password2,
    };

    this.props.registerUser(newUser, this.props.history);
  };

  render() {
    const { errors } = this.state;
    return (
      <section className={styles.register}>
        <div className={styles.formContainer}>
          <div>
            <h4>Register</h4>
            <p>
              Already have an account? <Link to="/login">Log in</Link>
            </p>
          </div>
          <form noValidate onSubmit={this.onSubmit}>
            <input
              onChange={this.onChange}
              value={this.state.firstName}
              error={errors.firstName}
              id="firstName"
              type="text"
              placeholder="First Name"
              className={classnames('', {
                [styles.inputWarning]: errors.name,
              })}
            />
            <p className={styles.warning}>{errors.firstName}</p>
            <input
              onChange={this.onChange}
              value={this.state.surname}
              error={errors.surname}
              id="surname"
              type="text"
              placeholder="Surname"
              className={classnames('', {
                [styles.inputWarning]: errors.surname,
              })}
            />
            <p className={styles.warning}>{errors.surname}</p>
            <input
              onChange={this.onChange}
              value={this.state.email}
              error={errors.email}
              id="email"
              type="email"
              placeholder="Email"
              className={classnames('', {
                [styles.inputWarning]: errors.email,
              })}
            />
            <p className={styles.warning}>{errors.email}</p>
            <input
              onChange={this.onChange}
              value={this.state.password}
              error={errors.password}
              id="password"
              type="password"
              placeholder="Password"
              className={classnames('', {
                [styles.inputWarning]: errors.password,
              })}
            />
            <p className={styles.warning}>{errors.password}</p>
            <input
              onChange={this.onChange}
              value={this.state.password2}
              error={errors.password2}
              id="password2"
              type="password"
              placeholder="Confirm Password"
              className={classnames('', {
                [styles.inputWarning]: errors.password2,
              })}
            />
            <p className={styles.warning}>{errors.password2}</p>
            <button type="submit">Sign up</button>
          </form>
        </div>
      </section>
    );
  }
}

const mapStateToProps = (state) => ({
  auth: state.auth,
  errors: state.errors,
});

Register.propTypes = {
  registerUser: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
  errors: PropTypes.object.isRequired,
};

export default connect(mapStateToProps, { registerUser })(withRouter(Register));
