import { Modal } from 'react-bootstrap';
import { ExerciseSteps } from '../exercises-list';
import { useEffect, useState } from 'react';

interface ExerciseModalProps {
  isShow: boolean;
  close: () => void;
  imageUrl: string;
  title: string;
  steps: ExerciseSteps;
}

const StepItem = ({ order, text }: { order: number; text: string }) => {
  return (
    <>
      <span>Step {order}</span>
      <span>{text}</span>
    </>
  );
};

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
      setSortedSteps(steps.sort((a, b) => a.order - b.order));
    }
  }, [steps]);

  return (
    <Modal show={isShow} onHide={close}>
      <img src={imageUrl} />
      <span>{title}</span>
      {sortedSteps.map((step, index) => (
        <StepItem order={step.order} text={step.text} />
      ))}
    </Modal>
  );
};

export default ExerciseModal;
