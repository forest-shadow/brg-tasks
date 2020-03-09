import React from 'react';
import {
  Box,
  Dialog,
  DialogContent,
  Typography,
  Button,
  IconButton
} from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';
import { RouteComponentProps, withRouter } from 'react-router-dom';
import { toJS } from 'mobx';
import CloseIcon from '@material-ui/icons/Close';

import { useStore } from 'components/utils/StoreProvider';
import { Task } from 'stores/tasks/task';

const getValueStyle = (value: string) => ({
  backgroundColor: value === 'Active' ? '#2196f3' : '#4caf50',
  color: '#FFF',
  borderRadius: '3px',
  padding: '2px 12px',
  height: 24
});

const TaskGridDetails = (props: RouteComponentProps<{ id: string }>) => {
  const classes = useStyles();
  const {
    tasks: { getTaskById, removeTask }
  } = useStore();
  const { id } = props.match.params;
  let task: Task = (id && toJS(getTaskById(Number(id)))) as Task;

  const handleCloseDetails = () => {
    props.history.push('/');
  };

  return task ? (
    <Dialog
      BackdropProps={{ classes: { root: classes.root } }}
      PaperProps={{ classes: { root: classes.paper } }}
      open={true}
      fullWidth
    >
      <DialogContent>
        <div className={classes.detailsHeader}>
          <span className={classes.addedDate}>{task.added}</span>
          <span style={getValueStyle(task.status)}>{task.status}</span>
          <div className={classes.detailsHeaderControls}>
            <Button
              className={classes.removeBtn}
              onClick={() => {
                removeTask(Number(id));
                handleCloseDetails();
              }}
            >
              Remove
            </Button>
            <IconButton
              className={classes.closeBtn}
              onClick={handleCloseDetails}
              disableRipple
            >
              <CloseIcon />
            </IconButton>
          </div>
        </div>
        <Box mb={1}>
          <Typography variant="h6" component="h1">
            {task.name}
          </Typography>
        </Box>

        <Typography gutterBottom>{task.description}</Typography>
      </DialogContent>
    </Dialog>
  ) : null;
};

const useStyles = makeStyles({
  root: {
    backgroundColor: 'transparent'
  },
  paper: {
    minWidth: 1172,
    minHeight: 282,
    alignSelf: 'flex-end'
  },
  detailsHeader: {
    display: 'flex'
  },
  detailsHeaderControls: {
    marginLeft: 'auto',
    marginTop: '-6px'
  },
  addedDate: {
    fontSize: 17,
    marginRight: 16,
    color: '#777777'
  },
  closeBtn: {
    margin: '-12px -20px 0 0',
    '&:hover': { background: 'transparent' }
  },
  removeBtn: {
    padding: '6px 16px',
    fontSize: 14,
    color: '#FFFFFF',
    border: '1px solid #0a588c',
    lineHeight: 1.5,
    backgroundColor: '#0a588c',
    marginRight: 20,

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

export default withRouter(TaskGridDetails);
