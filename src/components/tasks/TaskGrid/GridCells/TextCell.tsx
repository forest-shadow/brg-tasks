import React from 'react';

import { Table } from '@devexpress/dx-react-grid-material-ui';

const TextCell = ({ value }: Table.DataCellProps) => (
  <span style={{ padding: '3px 16px' }}>{value}</span>
);

export default TextCell;
