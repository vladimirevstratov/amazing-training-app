import { Modal } from 'react-bootstrap';
import { ExerciseSteps } from '../exercises-list';
import { useEffect, useState } from 'react';
import styles from './index.module.css';
import StepItem from './step-item';
import { ReactComponent as CloseIcon } from '../../../icons/close.svg';
import React from 'react';

interface ExerciseModalProps {
  isShow: boolean;
  close: () => void;
  imageUrl: string;
  title: string;
  steps: ExerciseSteps;
}

const ExerciseModal = ({
  isShow,
  close,
  imageUrl,
  title,
  steps,
}: ExerciseModalProps) => {
  const [sortedSteps, setSortedSteps] = useState<ExerciseSteps>([]);

  useEffect(() => {
    if (steps) {
      const stepsCopy = [...steps];

      setSortedSteps(stepsCopy.sort((a, b) => a.order - b.order));
    }
  }, [steps]);

  return (
    <Modal show={isShow} onHide={close} dialogClassName={styles.modal}>
      <img alt={title} src={imageUrl} className={styles.image} />
      <a href="/#" onClick={close} className={styles.close}>
        <CloseIcon />
      </a>
      <div className={styles.infoContainer}>
        <p className={styles.title}>{title}</p>
        {sortedSteps.map((step, index) => (
          <div
            key={step.order}
            style={{
              marginBottom: index !== sortedSteps.length - 1 ? '38px' : '0',
            }}
          >
            <StepItem order={step.order} text={step.text} />
          </div>
        ))}
      </div>
    </Modal>
  );
};

export default ExerciseModal;
