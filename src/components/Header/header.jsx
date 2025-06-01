// import React from 'react';
import { Link } from 'react-router-dom';
import styles from '../Header/header.module.css';
import logo from '../../assets/logo.png';


const Header = () => {
  return (
    <header className={styles.header}>
      <img src={logo} alt="Zoo Logo" className={styles.logo} />
      <nav className={styles.nav}>
        <Link to="/" className={styles.link}>Home</Link>
        <Link to="/mammals" className={styles.link}>Mammals</Link>
        <Link to="/reptiles" className={styles.link}>Reptiles</Link>
        <Link to="/birds" className={styles.link}>Birds</Link>
      </nav>
    </header>
  );
};

export default Header;