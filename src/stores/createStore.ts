import Tasks, { TasksModel } from './tasks/tasks';
import Store, { StoreModel } from './store';

type StoreEnv = {
  tasks: TasksModel;
};

const createStore = (): StoreModel => {
  const tasks = Tasks.create();
  const env: StoreEnv = { tasks };

  return Store.create({ tasks }, env);
};

export const initialStore = createStore();
export default createStore;
