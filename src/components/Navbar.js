import React from 'react';
import { HashRouter as Router, NavLink } from 'react-router-dom';
import styles from './Navbar.module.css';

const Navbar = () => {
  const links = [
    {
      id: 1,
      path: '/',
      text: 'BOOKS',
    },
    {
      id: 2,
      path: '/categories',
      text: 'CATEGORIES',
    },
  ];

  return (
    <nav className={styles.navBar}>
      <div id={styles.title}>
        <h1>Bookstore CMS</h1>
      </div>
      <ul>
        {links.map((link) => (
          <li key={link.id}>
            <Router>
              <NavLink
                to={link.path}
                activeClassName={styles.activelink}
              >
                {link.text}
              </NavLink>
            </Router>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navbar;
