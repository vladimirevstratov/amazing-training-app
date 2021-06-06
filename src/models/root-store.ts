import { onSnapshot, types, Instance } from 'mobx-state-tree';
import { useContext, createContext } from 'react';
import { Exercises } from './exercises';

const RootModel = types.model({
  exercises: Exercises,
});

let initialState = RootModel.create({
  exercises: {
    allExercises: [],
  },
});

const data = localStorage.getItem('rootState');
if (data) {
  const json = JSON.parse(data);
  if (RootModel.is(json)) {
    initialState = RootModel.create(json);
  }
}

export const store = initialState;

onSnapshot(store, (snapshot) => {
  console.log('Snapshot: ', snapshot);
  localStorage.setItem('rootState', JSON.stringify(snapshot));
});

export type RootInstance = Instance<typeof RootModel>;
const RootStoreContext = createContext<null | RootInstance>(null);

export const Provider = RootStoreContext.Provider;
export function useMst() {
  const store = useContext(RootStoreContext);
  if (store === null) {
    throw new Error('Store cannot be null, please add a context provider');
  }
  return store;
}
