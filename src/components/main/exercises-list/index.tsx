import React, { useEffect, useState } from 'react';
import jsonData from '../../../constants/data.json';
import ListItem from './list-item';

interface Step {
  text: string;
  order: number;
}

interface Exercise {
  id: number;
  title: string;
  order: number;
  description: string;
  large_image: string;
  small_image: string;
  steps: Step[];
}

type Exercises = Exercise[];

const ExercisesList = () => {
  const [exercises, setExercises] = useState<Exercises>([]);

  useEffect(() => {
    const data = JSON.parse(JSON.stringify(jsonData));

    setExercises(data);
  }, []);

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
            url={exercise.small_image}
            alt={exercise.title}
            title={exercise.title}
          />
        </div>
      ))}
    </>
  );
};

export default ExercisesList;
