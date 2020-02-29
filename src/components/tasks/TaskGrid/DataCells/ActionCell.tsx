import React from 'react';
import Button from '@material-ui/core/Button';

import { TASK_STATUS } from 'stores/tasks/task';
import { StoreModel } from 'stores/store';
import useInject from 'components/utils/useInject';

import { DataCellProps } from '../DataGridCell';

const mapStore = (store: StoreModel) => {
  const { setCompleted, removeTask, tasks } = store.tasks;
  return {
    setCompleted,
    removeTask,
    tasks
  };
};

const ActionCell = ({ row, setTasks }: DataCellProps) => {
  const { id, status } = row;
  const { setCompleted, removeTask, tasks } = useInject(mapStore);

  const buttonProps: { [index: string]: any } = {
    [TASK_STATUS.COMPLETED]: {
      label: 'Delete',
      handler: () => {
        removeTask(id);
        setTasks && setTasks(tasks.filter(task => task.id !== id));
      }
    },
    [TASK_STATUS.ACTIVE]: {
      label: 'Complete',
      handler: () => {
        setCompleted(id);
        setTasks &&
          setTasks(
            tasks.map(task =>
              task.id === id ? { ...task, status: TASK_STATUS.COMPLETED } : task
            )
          );
      }
    }
  };

  const currentBtnProps = buttonProps[status];

  return (
    <Button
      onClick={() => {
        currentBtnProps.handler(id);
      }}
      color="primary"
    >
      {currentBtnProps.label}
    </Button>
  );
};

export default ActionCell;
