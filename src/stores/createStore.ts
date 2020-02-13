import { SnapshotIn } from 'mobx-state-tree';

import Tasks, { TasksModel } from './tasks/tasks';
import Store, { StoreModel } from './store';
import tasksMock from '../tasksMock.js';

type StoreEnv = {
  tasks: TasksModel;
};

const tasksData: SnapshotIn<TasksModel> = { tasks: [...tasksMock] };

const createStore = (): StoreModel => {
  const tasks = Tasks.create(tasksData);
  const env: StoreEnv = { tasks };

  return Store.create({ tasks }, env);
};

export const initialStore = createStore();
export default createStore;
