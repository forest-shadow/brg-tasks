import { types, Instance } from 'mobx-state-tree';

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
  description: string;
}

export type TaskModel = Instance<typeof Task>;

const Task = types.model('Task', {
  id: types.identifierNumber,
  name: types.string,
  priority: types.number,
  added: types.string,
  timeToComplete: types.string,
  description: types.string,
  status: types.union(
    types.literal(TASK_STATUS.ACTIVE),
    types.literal(TASK_STATUS.COMPLETED)
  )
});

export default Task;
