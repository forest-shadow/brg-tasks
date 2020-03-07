import React, { useState } from 'react';
import { IconButton } from '@material-ui/core';
import AddIcon from '@material-ui/icons/Add';
import { RouteComponentProps, withRouter } from 'react-router-dom';
import { makeStyles } from '@material-ui/styles';
import classNames from 'classnames';

import ROUTES from 'constants/routes';
import TaskAddTooltip from './TaskAddTooltip';
import NotificationSnackbar from 'components/common/NotificationSnackbar';

const TaskAddButton = ({ history }: RouteComponentProps) => {
  const classes = useStyles();
  const [openNotification, setOpenNotification] = useState(false);

  const handleTooltipClose = () => {
    history.push('/');
  };
  const isTooltipOpen = history.location.pathname === ROUTES.TASK.ADD;

  return (
    <>
      <TaskAddTooltip
        open={isTooltipOpen}
        handleClose={handleTooltipClose}
        showNotification={setOpenNotification}
      >
        <IconButton
          onClick={() => {
            isTooltipOpen ? history.push('/') : history.push(ROUTES.TASK.ADD);
          }}
          className={classNames(classes.addBtn, {
            [`${classes.addBtnAnimated}`]: isTooltipOpen
          })}
        >
          <AddIcon />
        </IconButton>
      </TaskAddTooltip>
      <NotificationSnackbar
        open={openNotification}
        autoHideDuration={4000}
        onClose={() => {
          setOpenNotification(false);
        }}
        message="The task has been added"
      />
    </>
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
    transition: 'transform .5s',

    '&:hover': {
      backgroundColor: '#0a588c',
      borderColor: '#0a588c'
    },

    '&:active': {
      backgroundColor: '#0a588c',
      borderColor: '#0a588c'
    }
  },
  addBtnAnimated: {
    transform: 'rotate(45deg)'
  }
});

export default withRouter(TaskAddButton);
