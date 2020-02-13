import { types, getParent, Instance } from 'mobx-state-tree';

import { TasksModel } from './tasks';

export enum TASK_STATUS {
  ACTIVE = 'Active',
  COMPLETED = 'Completed'
}

export interface Task {
  id: number;
  name: string;
  priority: number;
  added: string;
  timeToComplete: string;
  status: TASK_STATUS;
}

export type TaskModel = Instance<typeof Task>;

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
