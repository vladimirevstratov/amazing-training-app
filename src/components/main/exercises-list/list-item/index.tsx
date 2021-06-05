import React from 'react';
import styles from './index.module.css';

interface ListItemProps {
  url: string;
  alt: string;
  title: string;
}

const ListItem = ({ url, alt, title }: ListItemProps) => {
  return (
    <div>
      <img
        src={url}
        alt={alt}
        width="88"
        height="88"
        className={styles.image}
      />
      <span className={styles.title}>{title}</span>
    </div>
  );
};

export default ListItem;
