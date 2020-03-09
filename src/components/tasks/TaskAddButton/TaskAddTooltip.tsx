import React, { ReactElement } from 'react';
import { makeStyles } from '@material-ui/styles';
import { Tooltip } from '@material-ui/core';

import TaskAddForm from './TaskAddForm';

const TaskAddTooltip = ({
  open,
  handleClose,
  showNotification,
  children
}: Props) => {
  const classes = useStyles();

  return (
    <Tooltip
      PopperProps={{
        disablePortal: true
      }}
      arrow
      interactive
      classes={classes}
      onClose={handleClose}
      placement="right"
      open={open}
      disableFocusListener
      disableHoverListener
      disableTouchListener
      title={
        <TaskAddForm
          closeTooltip={handleClose}
          showNotification={showNotification}
        />
      }
    >
      {children}
    </Tooltip>
  );
};

interface Props {
  open: boolean;
  handleClose: () => void;
  showNotification: (show: boolean) => void;
  children: ReactElement<any>;
}

const useStyles = makeStyles({
  arrow: {
    color: '#FFFFFF',
    marginLeft: '-14px!important',

    '&:before': {
      marginTop: '-4px',
      borderWidth: '10px 14px 10px 0!important'
    }
  },
  tooltip: {
    left: '5px',
    backgroundColor: '#FFFFFF',
    color: 'rgba(0, 0, 0, 0.87)',
    width: '420px',
    maxWidth: 420,
    fontSize: '12px',
    border: '1px solid #dadde9',
    filter: 'drop-shadow(2px 3px 3px rgba(50, 50, 50, 0.55))',
    padding: '19px 16px 16px'
  }
});

export default TaskAddTooltip;
