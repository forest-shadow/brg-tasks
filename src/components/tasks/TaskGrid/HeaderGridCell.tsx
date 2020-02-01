import React from 'react';
import { TableHeaderRow } from '@devexpress/dx-react-grid-material-ui';
import { makeStyles } from '@material-ui/styles';

const HeaderGridCell = ({
  children,
  ...restProps
}: TableHeaderRow.CellProps) => {
  const classes = useStyles();
  return (
    <TableHeaderRow.Cell className={classes.root} {...restProps}>
      {children}
    </TableHeaderRow.Cell>
  );
};

const useStyles = makeStyles({
  root: {
    fontSize: '12px',
    color: '#898989',
    border: '1px solid #e4e4e4',
    padding: '3px 16px',

    '&:first-child': {
      paddingLeft: '16px'
    }
  }
});

export default HeaderGridCell;
