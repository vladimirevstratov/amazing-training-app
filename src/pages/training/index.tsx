import React, { useEffect, useState } from 'react';
import MainLayout from '../../components/common/main-layout';
import ExercisesList, {
  Exercise,
  ExerciseId,
} from '../../components/main/exercises-list';
import { menuTitles } from '../../constants/structures';
import ExerciseModal from '../../components/main/exercise-modal';
import { useMst } from '../../models/root-store';

const Training = () => {
  const [isModalShow, setIsModalShow] = useState(false);
  const [currentExercise, setCurrentExercise] = useState<Exercise>(
    {} as Exercise
  );

  const store = useMst();

  const { allExercises } = store.exercises;

  const handleExerciseClick = ({ id }: { id: ExerciseId }) => {
    const clickedExercise = allExercises.find((exercise) => exercise.id === id);

    if (clickedExercise) {
      setIsModalShow(true);
      setCurrentExercise({ ...clickedExercise });
    } else {
      console.error('Cant find exercise');
    }
  };

  const onModalClose = () => {
    setIsModalShow(false);
  };

  useEffect(() => {
    store.exercises.getExercisesRequest();

    // eslint-disable-next-line
  }, []);

  return (
    <MainLayout
      title={menuTitles.training}
      pageTitle={'Exercises'}
      pageDescription={'Strengthen respiratory system'}
    >
      <>
        <ExercisesList
          exercises={allExercises}
          handleExerciseClick={handleExerciseClick}
        />
        <ExerciseModal
          isShow={isModalShow}
          close={onModalClose}
          imageUrl={currentExercise.large_image}
          title={currentExercise.title}
          steps={currentExercise.steps}
        />
      </>
    </MainLayout>
  );
};

export default Training;
