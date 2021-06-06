import React from 'react';
import styles from './index.module.css';
import { ExerciseId } from '../index';

interface ListItemProps {
  id: number;
  url: string;
  alt: string;
  title: string;
  onClick: ({ id }: { id: ExerciseId }) => void;
}

const ListItem = ({ id, url, alt, title, onClick }: ListItemProps) => {
  return (
    <a href="/#" onClick={() => onClick({ id })} className={styles.link}>
      <div>
        <img src={url} alt={alt} className={styles.image} />
        <span className={styles.title}>{title}</span>
      </div>
    </a>
  );
};

export default ListItem;
