import React, { useEffect, useState } from 'react';
import MainLayout from '../../components/common/main-layout';
import ExercisesList, {
  Exercise,
  ExerciseId,
  Exercises,
} from '../../components/main/exercises-list';
import { menuTitles } from '../../constants/structures';
import ExerciseModal from '../../components/main/exercise-modal';
import jsonData from '../../constants/data.json';

const Training = () => {
  const [isModalShow, setIsModalShow] = useState(false);
  const [currentExercise, setCurrentExercise] = useState<Exercise>(
    {} as Exercise
  );
  const [exercises, setExercises] = useState<Exercises>([]);

  const handleExerciseClick = ({ id }: { id: ExerciseId }) => {
    const clickedExercise = exercises.find((exercise) => exercise.id === id);

    if (clickedExercise) {
      setIsModalShow(true);
      setCurrentExercise(clickedExercise);
    } else {
      console.error('Cant find exercise');
    }
  };

  const onModalClose = () => {
    setIsModalShow(false);
  };

  useEffect(() => {
    const data = JSON.parse(JSON.stringify(jsonData));

    setExercises(data);
  }, []);

  return (
    <MainLayout
      title={menuTitles.training}
      pageTitle={'Exercises'}
      pageDescription={'Strengthen respiratory system'}
    >
      <>
        <ExercisesList
          exercises={exercises}
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
