import React from 'react';

const getValueStyle = (value: string) => ({
  backgroundColor: value === 'Active' ? '#2196f3' : '#4caf50',
  color: '#FFF',
  display: 'inline-block',
  borderRadius: '3px',
  padding: '2px 0',
  width: 'calc(100% - 6px)',
  margin: '2px 3px'
});

const StatusCell = ({ value }: Props) => (
  <span style={getValueStyle(value)}>{value}</span>
);

interface Props {
  value: string;
}

export default StatusCell;
