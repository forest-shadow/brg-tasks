import React, { useState } from 'react';
import '@devexpress/dx-react-grid';
import {
  Grid,
  Table,
  TableHeaderRow
} from '@devexpress/dx-react-grid-material-ui';
import { Table as TableBase } from '@devexpress/dx-react-grid';

import DataGridCell from './DataGridCell';
import HeaderGridCell from './HeaderGridCell';
import { Task } from 'stores/tasks/task';

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

const TaskGrid = ({ rows }: Props) => {
  const [tasks, setTasks] = useState(rows);

  return (
    <Grid rows={tasks} columns={columns}>
      <Table
        cellComponent={(props: Table.DataCellProps) => (
          <DataGridCell {...props} setTasks={setTasks} />
        )}
        columnExtensions={tableColumnExtensions}
      />
      <TableHeaderRow cellComponent={HeaderGridCell} />
    </Grid>
  );
};

interface Props {
  rows: Task[];
}

export default TaskGrid;
