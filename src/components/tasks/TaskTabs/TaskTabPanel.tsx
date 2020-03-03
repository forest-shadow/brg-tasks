import React, { ReactNode } from 'react';

const TaskTabPanel = ({ children, value, index, ...other }: Props) => {
  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`tabpanel-${index}`}
      aria-labelledby={`tab-${index}`}
      {...other}
    >
      {value === index && <>{children}</>}
    </div>
  );
};

interface Props {
  [index: string]: any;
  children: ReactNode;
  value: number;
  index: number;
}

export default TaskTabPanel;
