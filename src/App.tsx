import { Container, Grid } from '@mui/material';
import { FC } from 'react';

const App: FC = () => (
  <Container disableGutters>
    <Grid container spacing={2}>
      <Grid item xs={4}>
        TODO: Task list
      </Grid>
      <Grid item xs={8}>
        TODO: Gantt chart
      </Grid>
    </Grid>
  </Container>
);

export default App;
