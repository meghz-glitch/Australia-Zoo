import React from 'react';
import { NavLink } from 'react-router-dom';
import styles from '../Header/header.module.css';
import logo from '../../assets/logo.png';

const Header = () => {
  return (
    <header className={styles.header}>
      <img src={logo} alt="Zoo Logo" className={styles.logo} />
      <nav className={styles.nav} aria-label="Main Navigation">
        <NavLink to="/" className={({ isActive }) => isActive ? styles.activeLink : styles.link}>Home</NavLink>
        <NavLink to="/mammals" className={({ isActive }) => isActive ? styles.activeLink : styles.link}>Mammals</NavLink>
        <NavLink to="/reptiles" className={({ isActive }) => isActive ? styles.activeLink : styles.link}>Reptiles</NavLink>
        <NavLink to="/birds" className={({ isActive }) => isActive ? styles.activeLink : styles.link}>Birds</NavLink>
      </nav>
    </header>
  );
};

export default Header;
