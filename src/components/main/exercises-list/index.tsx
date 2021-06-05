import React, { useEffect, useState } from 'react';
import jsonData from '../../../constants/data.json';
import ListItem from './list-item';

interface Step {
  text: string;
  order: number;
}

export type ExerciseId = number;

export type ExerciseSteps = Step[];

export interface Exercise {
  id: ExerciseId;
  title: string;
  order: number;
  description: string;
  large_image: string;
  small_image: string;
  steps: ExerciseSteps;
}

export type Exercises = Exercise[];

interface ExercisesListProps {
  handleExerciseClick: ({ id }: { id: ExerciseId }) => void;
  exercises: Exercises;
}

const ExercisesList = ({
  handleExerciseClick,
  exercises,
}: ExercisesListProps) => {
  const onExerciseClick = ({ id }: { id: ExerciseId }) => {
    handleExerciseClick({ id });
  };

  return (
    <>
      {exercises.map((exercise, index) => (
        <div
          key={exercise.id}
          style={{
            marginBottom: index !== exercises.length - 1 ? '16px' : '0',
          }}
        >
          <ListItem
            id={exercise.id}
            url={exercise.small_image}
            alt={exercise.title}
            title={exercise.title}
            onClick={onExerciseClick}
          />
        </div>
      ))}
    </>
  );
};

export default ExercisesList;
