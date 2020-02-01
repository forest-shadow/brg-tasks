import React from 'react';
import { Table } from '@devexpress/dx-react-grid-material-ui';
import { makeStyles } from '@material-ui/styles';

const getValueStyle = (value: string) => ({
  backgroundColor: value === 'Active' ? '#2196f3' : '#4caf50',
  color: '#FFF',
  display: 'inline-block',
  borderRadius: '3px',
  padding: '2px 0',
  width: '100%'
});

const TaskGridCell = (props: Table.DataCellProps) => {
  const { value, column } = props;
  const classes = useStyles();

  return (
    <Table.Cell
      {...props}
      className={column.name === 'status' ? classes.statusLabel : classes.root}
    >
      {column.name === 'status' ? (
        <span style={getValueStyle(value)}>{value}</span>
      ) : (
        value
      )}
    </Table.Cell>
  );
};

const useStyles = makeStyles({
  root: {
    fontSize: '14px',
    border: '1px solid #e4e4e4',
    padding: '3px 16px',

    '&:first-child': {
      paddingLeft: '16px'
    }
  },
  statusLabel: {
    fontSize: '14px',
    border: '1px solid #e4e4e4',
    padding: '3px',

    '&:first-child': {
      paddingLeft: '16px'
    }
  }
});

export default TaskGridCell;
