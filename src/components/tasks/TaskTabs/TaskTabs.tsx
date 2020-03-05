import React, { ChangeEvent } from 'react';
import { Tab, Tabs } from '@material-ui/core';
import { observer } from 'mobx-react-lite';
import { toJS } from "mobx";

import TaskTabPanel from './TaskTabPanel';
import TaskGrid from '../TaskGrid/TaskGrid';
import useInject from 'components/utils/useInject';
import { StoreModel } from 'stores/store';

const mapStore = (store: StoreModel) => {
  const { tasks, activeTasks, completedTasks } = store.tasks;
  return {
    tasks,
    activeTasks,
    completedTasks
  };
};

const TaskTabs: React.FC = observer(() => {
  const [value, setValue] = React.useState(0);
  const { tasks, activeTasks, completedTasks } = useInject(mapStore);

  const handleChange = (event: ChangeEvent<{}>, newValue: number) => {
    setValue(newValue);
  };

  return (
    <>
      <Tabs
        value={value}
        indicatorColor="primary"
        textColor="primary"
        onChange={handleChange}
        centered
      >
        <Tab label="All" />
        <Tab label="Active" />
        <Tab label="Completed" />
      </Tabs>

      <TaskTabPanel value={value} index={0}>
        <TaskGrid rows={toJS(tasks)} />
      </TaskTabPanel>

      <TaskTabPanel value={value} index={1}>
        <TaskGrid rows={toJS(activeTasks)} />
      </TaskTabPanel>

      <TaskTabPanel value={value} index={2}>
        <TaskGrid rows={toJS(completedTasks)} />
      </TaskTabPanel>
    </>
  );
});

export default TaskTabs;
