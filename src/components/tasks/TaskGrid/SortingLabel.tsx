import React from 'react';
import { TableHeaderRow } from '@devexpress/dx-react-grid-material-ui';
import { makeStyles } from '@material-ui/styles';

const SortingLabel = ({
  children,
  ...restProps
}: TableHeaderRow.SortLabelProps) => {
  const classes = useStyles();

  return (
    <TableHeaderRow.SortLabel
      className={classes.root}
      {...restProps}
    >
      <span className={classes.titleLabel}>{restProps.column.title}</span>
    </TableHeaderRow.SortLabel>
  );
};

const useStyles = makeStyles({
  titleLabel: {
    color: '#898989!important'
  },
  root: {
    fontSize: '12px',

    '& svg': {
      display: 'none!important'
    }
  }
});

export default SortingLabel;
