import React from 'react';
import MainLayout from '../../components/common/main-layout';
import ExercisesList from '../../components/main/exercises-list';
import { menuTitles } from '../../constants/structures';

const Training = () => {
  return (
    <MainLayout
      title={menuTitles.training}
      pageTitle={'Exercises'}
      pageDescription={'Strengthen respiratory system'}
    >
      <ExercisesList />
    </MainLayout>
  );
};

export default Training;
