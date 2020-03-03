import React from 'react';
import { Table } from '@devexpress/dx-react-grid-material-ui';
import { makeStyles } from '@material-ui/styles';

import StatusCell from './DataCells/StatusCell';
import TextCell from './DataCells/TextCell';
import CountdownCell from './DataCells/CountdownCell';
import ActionCell from './DataCells/ActionCell';
import { Task } from 'stores/tasks/task';

export type DataCellProps = Table.DataCellProps & {
  setTasks?: (tasks: Task[]) => void;
};

type IGridCells = {
  [index: string]: React.FC<DataCellProps>;
};

const GridCells: IGridCells = {
  name: TextCell,
  priority: TextCell,
  added: TextCell,
  timeToComplete: CountdownCell,
  status: StatusCell,
  action: ActionCell
};

const DataGridCell = (props: DataCellProps) => {
  const { setTasks, ...restProps } = props;
  const { column } = restProps;
  const classes = useStyles();
  const CellComponent = GridCells[column.name];

  return (
    <Table.Cell {...restProps} className={classes.root}>
      <CellComponent
        {...restProps}
        setTasks={column.name === 'action' ? setTasks : undefined}
      />
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

export default DataGridCell;
