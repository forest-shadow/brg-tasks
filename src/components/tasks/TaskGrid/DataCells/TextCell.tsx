import React from 'react';

import { DataCellProps } from '../DataGridCell';

const TextCell = ({ value }: DataCellProps) => (
  <span style={{ padding: '3px 16px' }}>{value}</span>
);

export default TextCell;
