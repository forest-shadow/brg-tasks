import React, { ReactNode } from 'react';
import { Grid, Paper } from '@material-ui/core';

interface Props {
  children: ReactNode;
}

const AppBody: React.FC<Props> = ({ children }: Props) => (
  <Grid container spacing={3}>
    <Grid item xs={12}>
      <Paper>{children}</Paper>
    </Grid>
  </Grid>
);

export default AppBody;
