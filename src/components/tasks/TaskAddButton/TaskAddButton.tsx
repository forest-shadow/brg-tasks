import React from 'react';
import { IconButton } from '@material-ui/core';
import AddIcon from '@material-ui/icons/Add';
import { Link } from 'react-router-dom';
import { makeStyles } from '@material-ui/styles';

import ROUTES from 'constants/routes';
import TaskAddTooltip from './TaskAddTooltip';

const TaskAddButton = () => {
  const classes = useStyles();

  return (
    <TaskAddTooltip>
      <Link to={ROUTES.ADD_TASK}>
        <IconButton className={classes.addBtn}>
          <AddIcon />
        </IconButton>
      </Link>
    </TaskAddTooltip>
  );
};

const useStyles = makeStyles({
  addBtn: {
    boxShadow: '0px 2px 5px 0px rgba(50, 50, 50, 0.75)',
    textTransform: 'none',
    fontSize: 16,
    color: '#FFFFFF',
    padding: '6px',
    border: '1px solid',
    lineHeight: 1.5,
    backgroundColor: '#0a588c',
    borderColor: '#0a588c',

    '&:hover': {
      backgroundColor: '#0a588c',
      borderColor: '#0a588c'
    },

    '&:active': {
      backgroundColor: '#0a588c',
      borderColor: '#0a588c'
    }
  }
});

export default TaskAddButton;
