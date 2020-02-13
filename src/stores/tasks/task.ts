import { types, getParent } from 'mobx-state-tree';

import { TasksModel } from './tasks';

enum TASK_STATUS {
  ACTIVE = 'Active',
  COMPLETED = 'Completed'
}

const Task = types
  .model('Task', {
    id: types.identifierNumber,
    name: types.string,
    priority: types.number,
    added: types.string,
    timeToComplete: types.string,
    status: types.union(
      types.literal(TASK_STATUS.ACTIVE),
      types.literal(TASK_STATUS.COMPLETED)
    )
  })
  .actions(self => ({
    setCompleted() {
      self.status = TASK_STATUS.COMPLETED;
    },
    remove() {
      const TaskParent = getParent<TasksModel>(self, 1);
      TaskParent.removeTask(self.id);
    }
  }));

export default Task;
