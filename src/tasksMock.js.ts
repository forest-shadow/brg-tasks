import { Task } from './stores/tasks/task';

const tasksMock = [
  {
    id: 1,
    name: 'Task 1',
    priority: 1,
    added: '11/18/1975',
    timeToComplete: '8:34:57',
    status: 'Active'
  },
  {
    id: 2,
    name: 'Task 2',
    priority: 2,
    added: '04/25/1987',
    timeToComplete: '7:30:45',
    status: 'Active'
  },
  {
    id: 3,
    name: 'Task 3',
    priority: 3,
    added: '07/12/1995',
    timeToComplete: '6:24:21',
    status: 'Completed'
  },
  {
    id: 4,
    name: 'Task 4',
    priority: 4,
    added: '07/12/1995',
    timeToComplete: '5:14:11',
    status: 'Completed'
  }
] as Task[];

export default tasksMock;
