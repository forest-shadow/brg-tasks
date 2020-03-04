import React from 'react';
import { Typography, Box } from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';

import TaskAddButton from 'components/tasks/TaskAddButton/TaskAddButton';

const AppHeader: React.FC = () => {
  const classes = useStyles();

  return (
    <header className={classes.root}>
      <Box mr={1}>
        <Typography variant="h5" component="h1">
          Tasks
        </Typography>
      </Box>
      <TaskAddButton />
    </header>
  );
};

const useStyles = makeStyles({
  root: {
    padding: '10px 15px',
    display: 'flex',
    alignItems: 'center'
  },
});

export default AppHeader;
