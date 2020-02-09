import React from 'react';

import { GridCellProps } from '../TaskGridCell';

const TextCell = ({ value }: GridCellProps) => (
  <span style={{ padding: '3px 16px' }}>{value}</span>
);

export default TextCell;
