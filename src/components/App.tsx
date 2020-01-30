import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

import AppHeader from './layout/AppHeader';
import AppBody from './layout/AppBody';
import TaskTabs from './tasks/TaskTabs';

const App: React.FC = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppHeader />

      <AppBody>
        <TaskTabs />
      </AppBody>
    </div>
  );
};

const useStyles = makeStyles({
  root: {
    width: '1200px',
    margin: 'auto'
  }
});

export default App;
