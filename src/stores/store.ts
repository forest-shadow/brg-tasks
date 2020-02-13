import { types, Instance } from 'mobx-state-tree';

import Tasks from './tasks/tasks';

export type StoreModel = Instance<typeof Store>;

const Store = types.model('Store', {
  tasks: Tasks
});

export default Store;
