import React, { useState, useEffect } from 'react';
import '@devexpress/dx-react-grid';
import {
  Grid,
  Table,
  TableHeaderRow,
  VirtualTable,
} from '@devexpress/dx-react-grid-material-ui';
import {
  Table as TableBase,
  SortingState,
  IntegratedSorting,
  Sorting
} from '@devexpress/dx-react-grid';
import { RouteComponentProps, withRouter } from 'react-router';
import { History, LocationState } from 'history';

import SortingLabelGridCell from './SortingLabelGridCell';
import DataGridCell from './DataGridCell';
import HeaderGridCell from './HeaderGridCell';
import { Task } from 'stores/tasks/task';
import ROUTES from 'constants/routes';

const columns = [
  { name: 'name', title: 'Name' },
  { name: 'priority', title: 'Priority' },
  { name: 'added', title: 'Added' },
  { name: 'timeToComplete', title: 'Time to complete' },
  { name: 'status', title: 'Status' },
  { name: 'action', title: 'Action' }
];

const tableColumnExtensions: Array<TableBase.ColumnExtension> = [
  { columnName: 'name', width: '677px' },
  { columnName: 'priority', width: '74px', align: 'center' },
  { columnName: 'added', width: '110px' },
  { columnName: 'timeToComplete', width: '131px', align: 'right' },
  { columnName: 'status', width: '108px', align: 'center' },
  { columnName: 'action', width: '100px', align: 'center' }
];

const columnSorting: Sorting[] = [
  { columnName: 'name', direction: 'asc' },
  { columnName: 'priority', direction: 'asc' },
  { columnName: 'added', direction: 'asc' },
  { columnName: 'timeToComplete', direction: 'asc' },
  { columnName: 'status', direction: 'asc' }
];

const TableRow = ({
  history,
  ...restProps
}: Table.DataRowProps & {
  history: History<LocationState>;
}) => (
  <Table.Row
    {...restProps}
    onClick={() => {
      history.push(ROUTES.TASK.DETAILS(restProps.row.id));
    }}
  />
);

const TaskGrid = ({ rows, history }: Props) => {
  const [tasks, setTasks] = useState(rows);
  const [sorting, setSorting] = useState(columnSorting);

  useEffect(() => {
    setTasks(rows);
  }, [rows]);

  return (
    <Grid rows={tasks} columns={columns}>
      <SortingState sorting={sorting} onSortingChange={setSorting} />
      <IntegratedSorting />
      <VirtualTable
        cellComponent={(props: Table.DataCellProps) => (
          <DataGridCell {...props} setTasks={setTasks} />
        )}
        columnExtensions={tableColumnExtensions}
        rowComponent={(props: Table.DataRowProps) => (
          <TableRow {...props} history={history} />
        )}
      />
      <TableHeaderRow
        showSortingControls
        sortLabelComponent={SortingLabelGridCell}
        cellComponent={HeaderGridCell}
      />
    </Grid>
  );
};

type Props = OwnProps & RouteComponentProps;

interface OwnProps {
  rows: Task[];
}

export default withRouter(TaskGrid);
