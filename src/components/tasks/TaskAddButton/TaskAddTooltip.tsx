import React, { ReactElement } from 'react';
import { makeStyles } from '@material-ui/styles';
import { ClickAwayListener, Tooltip } from '@material-ui/core';
import { RouteComponentProps, withRouter } from 'react-router';

import ROUTES from 'constants/routes';
import TaskAddForm from './TaskAddForm';

const TaskAddTooltip = ({ history, children }: Props) => {
  const classes = useStyles();
  const handleTooltipClose = () => {
    history.push('/');
  };
  const isOpen = history.location.pathname === ROUTES.ADD_TASK;

  return (
    <ClickAwayListener onClickAway={handleTooltipClose}>
      <Tooltip
        PopperProps={{
          disablePortal: true
        }}
        arrow
        classes={classes}
        onClose={handleTooltipClose}
        placement="right"
        open={isOpen}
        disableFocusListener
        disableHoverListener
        disableTouchListener
        title={<TaskAddForm />}
      >
        {children}
      </Tooltip>
    </ClickAwayListener>
  );
};

type Props = OwnProps & RouteComponentProps;

interface OwnProps {
  children: ReactElement<any>;
}

const useStyles = makeStyles({
  arrow: {
    color: '#FFFFFF',
  },
  tooltip: {
    backgroundColor: '#FFFFFF',
    color: 'rgba(0, 0, 0, 0.87)',
    maxWidth: 220,
    fontSize: '12px',
    border: '1px solid #dadde9',
    boxShadow: '0px 3px 7px 3px rgba(50, 50, 50, 0.35)',
  }
});

export default withRouter(TaskAddTooltip);
