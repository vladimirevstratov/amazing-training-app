import React from 'react';
import { Link } from 'react-router-dom';
import styles from './index.module.css';

interface MenuItemProps {
  url: string;
  icon: any;
  title: string;
  isActive: boolean;
  closeMobileMenu: () => void;
}

const MenuItem = ({
  url,
  icon,
  title,
  isActive,
  closeMobileMenu,
}: MenuItemProps) => {
  return (
    <Link
      to={url}
      className={`${styles.link} ${isActive ? styles.activeLink : null}`}
      onClick={closeMobileMenu}
    >
      <div
        className={`${styles.container} ${
          !isActive ? styles.inActiveContainer : null
        }`}
      >
        <span className={styles.icon}>{icon}</span>
        {title}
      </div>
    </Link>
  );
};

export default MenuItem;
