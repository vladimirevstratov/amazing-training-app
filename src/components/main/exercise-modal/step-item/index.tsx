import React from 'react';
import styles from './index.module.css';

const StepItem = ({ order, text }: { order: number; text: string }) => {
  return (
    <div>
      <p className={styles.title}>Step {order}</p>
      <p className={styles.text}>{text}</p>
    </div>
  );
};

export default StepItem;
