import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import classnames from 'classnames';
import styles from './login.module.scss';

const Login = ({ auth, loginErrors, push, loginUser }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errors, setErrors] = useState({});

  useEffect(() => {
    if (auth.isAuthenticated) push('/');
  }, [auth]);

  useEffect(() => {
    if (loginErrors) setErrors(loginErrors);
  }, [loginErrors]);

  const onSubmit = (e) => {
    e.preventDefault();
    const userData = {
      email,
      password,
    };

    loginUser(userData);
  };

  return (
    <section className={styles.login}>
      <div className={styles.formContainer}>
        <div>
          <h3>Login</h3>
          <p>
            Don't have an account? <Link to="/register">Register</Link>
          </p>
        </div>
        <form noValidate onSubmit={onSubmit}>
          <input
            onChange={(e) => setEmail(e.target.value)}
            value={email}
            error={errors.email}
            id="email"
            type="email"
            placeholder="Email"
            className={classnames('', {
              [styles.inputWarning]: errors.email || errors.emailnotfound,
            })}
          />
          <p className={styles.warning}>
            {errors.email}
            {errors.emailnotfound}
          </p>
          <input
            onChange={(e) => setPassword(e.target.value)}
            value={password}
            error={errors.password}
            id="password"
            type="password"
            placeholder="Password"
            className={classnames('', {
              [styles.inputWarning]:
                errors.password || errors.passwordincorrect,
            })}
            style={{ color: 'black' }}
          />
          <p className={styles.warning}>
            {errors.password}
            {errors.passwordincorrect}
          </p>
          <button type="submit" className={styles.submitBtn}>
            Login
          </button>
        </form>
      </div>
    </section>
  );
};

export default Login;
