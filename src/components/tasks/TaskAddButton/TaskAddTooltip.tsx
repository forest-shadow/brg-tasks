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
      <div>
        <Tooltip
          PopperProps={{
            disablePortal: true
          }}
          arrow
          interactive
          classes={classes}
          onClose={handleTooltipClose}
          placement="right"
          open={isOpen}
          disableFocusListener
          disableHoverListener
          disableTouchListener
          title={<TaskAddForm closeTooltip={handleTooltipClose} />}
        >
          {children}
        </Tooltip>
      </div>
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

export default withRouter(TaskAddTooltip);
