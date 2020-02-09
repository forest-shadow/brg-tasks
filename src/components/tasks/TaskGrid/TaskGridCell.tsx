import React from 'react';
import { Table } from '@devexpress/dx-react-grid-material-ui';
import { makeStyles } from '@material-ui/styles';

import StatusCell from './GridCells/StatusCell';
import TextCell from './GridCells/TextCell';

type IGridCells = { [index: string]: React.FC<{ value: string }> };

const GridCells: IGridCells = {
  name: TextCell,
  priority: TextCell,
  added: TextCell,
  timeToComplete: TextCell,
  status: StatusCell,
  action: TextCell
};

const TaskGridCell = (props: Table.DataCellProps) => {
  const { value, column } = props;
  const classes = useStyles();
  const CellComponent = GridCells[column.name];

  return (
    <Table.Cell {...props} className={classes.root}>
      <CellComponent value={value} />
    </Table.Cell>
  );
};

const useStyles = makeStyles({
  root: {
    fontSize: '14px',
    border: '1px solid #e4e4e4',
    padding: 0,

    '&:first-child': {
      paddingLeft: 0
    }
  }
});

export default TaskGridCell;
