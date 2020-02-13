import { types, Instance } from 'mobx-state-tree';

import Task, { TASK_STATUS } from './task';

export type TasksModel = Instance<typeof Tasks>;

const Tasks = types
  .model('Tasks', {
    tasks: types.optional(types.array(Task), [])
  })
  .views(self => ({
    get activeTasks() {
      return self.tasks.filter(task => task.status === TASK_STATUS.ACTIVE);
    },
    get completedTasks() {
      return self.tasks.filter(task => task.status === TASK_STATUS.COMPLETED);
    },
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
