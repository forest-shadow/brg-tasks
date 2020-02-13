import { types, Instance } from 'mobx-state-tree';

import Task from './task';

export type TasksModel = Instance<typeof Tasks>;

const Tasks = types
  .model('Tasks', {
    tasks: types.optional(types.array(Task), [])
  })
  .views(self => ({
    findTaskById: function(id: number) {
      return self.tasks.find(task => task.id === id);
    }
  }))
  .actions(self => ({
    removeTask(id: number) {
      const task = self.findTaskById(id);
      if (task) self.tasks.remove(task);
    }
  }));

export default Tasks;
