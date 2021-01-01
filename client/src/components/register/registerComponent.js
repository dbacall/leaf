import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import classnames from 'classnames';
import styles from './register.module.scss';

const Register = ({ errors, registerUser }) => {
  const [firstName, setFirstName] = useState('');
  const [surname, setSurname] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [password2, setPassword2] = useState('');

  const onSubmit = (e) => {
    e.preventDefault();

    const newUser = {
      firstName,
      surname,
      email,
      password,
      password2,
    };

    registerUser(newUser);
  };

  return (
    <section className={styles.register}>
      <div className={styles.formContainer}>
        <div>
          <h4>Register</h4>
          <p>
            Already have an account? <Link to="/login">Log in</Link>
          </p>
        </div>
        <form noValidate onSubmit={onSubmit}>
          <input
            onChange={(e) => setFirstName(e.target.value)}
            value={firstName}
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
            onChange={(e) => setSurname(e.target.value)}
            value={surname}
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
            onChange={(e) => setEmail(e.target.value)}
            value={email}
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
            onChange={(e) => setPassword(e.target.value)}
            value={password}
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
            onChange={(e) => setPassword2(e.target.value)}
            value={password2}
            error={errors.password2}
            id="password2"
            type="password"
            placeholder="Confirm Password"
            className={classnames('', {
              [styles.inputWarning]: errors.password2,
            })}
          />
          <p className={styles.warning}>{errors.password2}</p>
          <button type="submit" className={styles.submitBtn}>
            Sign up
          </button>
        </form>
      </div>
    </section>
  );
};

export default Register;
