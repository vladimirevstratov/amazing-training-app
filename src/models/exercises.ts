import { flow, types } from 'mobx-state-tree';
import ExercisesApi from '../api/exercises';

const Step = types.model({
  text: types.string,
  order: types.number,
});

const Exercise = types.model({
  id: types.number,
  title: types.string,
  order: types.number,
  description: types.string,
  large_image: types.string,
  small_image: types.string,
  steps: types.array(Step),
});

export const Exercises = types
  .model({
    allExercises: types.optional(types.array(Exercise), []),
  })
  .actions((self) => ({
    // eslint-disable-next-line
    updateExercises(json: any) {
      self.allExercises = json;
    },
  }))
  .actions((self) => ({
    getExercisesRequest: flow(function* getExercisesRequest() {
      try {
        const data = yield ExercisesApi.getAll();

        self.updateExercises(yield data.json());
      } catch (error) {
        console.error('Failed to get exercises', error);
      }
    }),
  }));
