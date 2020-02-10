import React from 'react';
import // State or Local Processing Plugins
'@devexpress/dx-react-grid';
import {
  Grid,
  Table,
  TableHeaderRow
} from '@devexpress/dx-react-grid-material-ui';
import { Table as TableBase } from '@devexpress/dx-react-grid';

import TaskGridCell from './TaskGridCell';
import HeaderGridCell from './HeaderGridCell';

const columns = [
  { name: 'name', title: 'Name' },
  { name: 'priority', title: 'Priority' },
  { name: 'added', title: 'Added' },
  { name: 'timeToComplete', title: 'Time to complete' },
  { name: 'status', title: 'Status' },
  { name: 'action', title: 'Action' }
];

const rows = [
  {
    name: 'Task 1',
    priority: 1,
    added: '11/18/1975',
    timeToComplete: '8:34:57',
    status: 'Active'
  },
  {
    name: 'Task 2',
    priority: 2,
    added: '04/25/1987',
    timeToComplete: '7:30:45',
    status: 'Active'
  },
  {
    name: 'Task 3',
    priority: 3,
    added: '07/12/1995',
    timeToComplete: '6:24:21',
    status: 'Completed'
  },
  {
    name: 'Task 4',
    priority: 4,
    added: '07/12/1995',
    timeToComplete: '5:14:11',
    status: 'Completed'
  }
];

const tableColumnExtensions: Array<TableBase.ColumnExtension> = [
  { columnName: 'name', width: '677px' },
  { columnName: 'priority', width: '74px', align: 'center' },
  { columnName: 'added', width: '110px' },
  { columnName: 'timeToComplete', width: '131px', align: 'right' },
  { columnName: 'status', width: '108px', align: 'center' },
  { columnName: 'action', width: '100px', align: 'center' }
];

const TaskGrid = () => {
  return (
    <Grid rows={rows} columns={columns}>
      <Table
        cellComponent={TaskGridCell}
        columnExtensions={tableColumnExtensions}
      />
      <TableHeaderRow cellComponent={HeaderGridCell} />
    </Grid>
  );
};

export default TaskGrid;
