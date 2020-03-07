import React from 'react';
import { Snackbar, SnackbarContent } from '@material-ui/core';
import ReactDOM from 'react-dom';
import { makeStyles } from '@material-ui/styles';

const portalContainer = document.querySelector('#portal');

const NotificationSnackbar = ({
  open,
  autoHideDuration,
  onClose,
  message
}: Props) => {
  const classes = useStyles();
  return open
    ? ReactDOM.createPortal(
        <Snackbar
          open={open}
          autoHideDuration={autoHideDuration}
          onClose={onClose}
        >
          <SnackbarContent className={classes.root} message={message} />
        </Snackbar>,
        portalContainer as Element
      )
    : null;
};

interface Props {
  open: boolean;
  autoHideDuration?: number;
  onClose: () => void;
  message: string;
}

const useStyles = makeStyles({
  root: {
    borderColor: '#202020',
    color: '#fff'
  }
});

export default NotificationSnackbar;
