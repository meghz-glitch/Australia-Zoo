import React from 'react';
import styles from '../Footer/footer.module.css';

const Footer = () => (
  <footer className={styles.footer} aria-label="Site Footer">
    <p>&copy; {new Date().getFullYear()} Australia Zoo Exhibition</p>
  </footer>
);

export default Footer;
