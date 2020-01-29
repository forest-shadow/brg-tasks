import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';

const App: React.FC = () => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <header>
        <Typography variant="h5" component="h1">
          Tasks
        </Typography>
      </header>
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
