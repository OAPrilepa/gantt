import { Menu } from '@mui/icons-material';
import { List, ListItem, ListItemIcon, ListItemText } from '@mui/material';
import { FC } from 'react';

import { tasksMock } from '../../__mocks__/tasks.ts';

export const TaskList: FC = () => {
  return (
    <List>
      {tasksMock.map((task) => (
        <ListItem key={task.id}>
          <ListItemIcon>
            <Menu />
          </ListItemIcon>
          <ListItemText primary={task.name} />
        </ListItem>
      ))}
    </List>
  );
};
