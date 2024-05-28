import {
  Container,
  createTheme,
  CssBaseline,
  Grid,
  ThemeProvider,
  useMediaQuery,
} from '@mui/material';
import { FC, useMemo } from 'react';

import { GanttChart } from './components/GanttChart';
import { TaskList } from './components/TaskList';

const App: FC = () => {
  const prefersDarkMode = useMediaQuery('(prefers-color-scheme: dark)');

  const theme = useMemo(
    () =>
      createTheme({
        palette: {
          mode: prefersDarkMode ? 'dark' : 'light',
        },
      }),
    [prefersDarkMode]
  );

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Container disableGutters>
        <Grid container spacing={2}>
          <Grid item xs={3}>
            <TaskList />
          </Grid>
          <Grid item xs={9}>
            <GanttChart />
          </Grid>
        </Grid>
      </Container>
    </ThemeProvider>
  );
};

export default App;
