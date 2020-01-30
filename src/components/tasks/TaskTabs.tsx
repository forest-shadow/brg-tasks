import React, { ChangeEvent } from 'react';
import { Tab, Tabs } from '@material-ui/core';

const TaskTabs: React.FC = () => {
  const [value, setValue] = React.useState(0);

  const handleChange = (event: ChangeEvent<{}>, newValue: number) => {
    setValue(newValue);
  };

  return (
    <Tabs
      value={value}
      indicatorColor="primary"
      textColor="primary"
      onChange={handleChange}
      aria-label="disabled tabs example"
    >
      <Tab label="All" />
      <Tab label="Active" />
      <Tab label="Completed" />
    </Tabs>
  );
};

export default TaskTabs;
