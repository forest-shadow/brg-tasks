import React, { useState, useEffect } from 'react';
import '@devexpress/dx-react-grid';
import {
  Grid,
  Table,
  TableHeaderRow
} from '@devexpress/dx-react-grid-material-ui';
import { Table as TableBase } from '@devexpress/dx-react-grid';
import { RouteComponentProps, withRouter } from 'react-router';
import { History, LocationState } from 'history';

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

  useEffect(() => {
    setTasks(rows);
  }, [rows]);

  return (
    <Grid rows={tasks} columns={columns}>
      <Table
        cellComponent={(props: Table.DataCellProps) => (
          <DataGridCell {...props} setTasks={setTasks} />
        )}
        columnExtensions={tableColumnExtensions}
        rowComponent={(props: Table.DataRowProps) => (
          <TableRow {...props} history={history} />
        )}
      />
      <TableHeaderRow cellComponent={HeaderGridCell} />
    </Grid>
  );
};

type Props = OwnProps & RouteComponentProps;

interface OwnProps {
  rows: Task[];
}

export default withRouter(TaskGrid);
