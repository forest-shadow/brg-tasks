import React from 'react';

const TextCell = ({ value }: Props) => (
  <span style={{ padding: '3px 16px' }}>{value}</span>
);

interface Props {
  value: string;
}

export default TextCell;
