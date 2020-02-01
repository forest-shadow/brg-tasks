import React, { ChangeEvent } from 'react';
import { Tab, Tabs } from '@material-ui/core';

import TaskGrid from './TaskGrid/TaskGrid';

const TaskTabs: React.FC = () => {
  const [value, setValue] = React.useState(0);

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
        aria-label="disabled tabs example"
        centered
      >
        <Tab label="All" />
        <Tab label="Active" />
        <Tab label="Completed" />
      </Tabs>
      <TaskGrid />
    </>
  );
};

export default TaskTabs;
