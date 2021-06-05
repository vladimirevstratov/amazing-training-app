import React from 'react';
import { Link } from 'react-router-dom';
import styles from './index.module.css';

interface MenuItemProps {
  url: string;
  icon: any;
  title: string;
  isActive: boolean;
}

const MenuItem = ({ url, icon, title, isActive }: MenuItemProps) => {
  return (
    <Link
      to={url}
      className={`${styles.link} ${isActive ? styles.activeLink : null}`}
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
