import React from 'react';

import { DataCellProps } from '../DataGridCell';

const getValueStyle = (value: string) => ({
  backgroundColor: value === 'Active' ? '#2196f3' : '#4caf50',
  color: '#FFF',
  display: 'inline-block',
  borderRadius: '3px',
  padding: '2px 0',
  width: 'calc(100% - 6px)',
  margin: '2px 3px'
});

const StatusCell = ({ row }: DataCellProps) => (
  <span style={getValueStyle(row.status)}>{row.status}</span>
);

export default StatusCell;
