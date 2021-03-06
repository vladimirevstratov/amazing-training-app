import call from './_call';
import { NetMethod } from '../constants/network/net-methods';

// eslint-disable-next-line
function Exercises() {}

Exercises.getAll = async () =>
  await call({
    endpoint: `/get_test_data?format=json`,
    method: NetMethod.GET,
  });

export default Exercises;
