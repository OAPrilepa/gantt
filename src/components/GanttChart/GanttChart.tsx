import { Chip, List, ListItem } from '@mui/material';
import { FC } from 'react';

import { tasksMock } from '../../__mocks__/tasks.ts';
import { Task } from '../../types/task.ts';

const defaultWidth = 50;

interface TaskWithLeft extends Task {
  left: number;
}

function calcLeft(currentTask: Task): number {
  if (currentTask.dependsOn) {
    const parent = tasksMock.find((task) => task.id === currentTask.dependsOn);
    if (parent) {
      // todo: use parent.left to calc optimization
      return (parent.duration || 0) + calcLeft(parent);
    }
  }
  return 0;
}

const tasks: TaskWithLeft[] = tasksMock.map((task) => ({
  ...task,
  left: calcLeft(task),
}));

export const GanttChart: FC = () => (
  <List>
    <ListItem>TODO: days legend</ListItem>
    {tasks.map((task) => (
      <ListItem key={task.id}>
        <Chip
          color='success'
          sx={{
            width: defaultWidth * (task.duration || 1),
          }}
          style={{
            marginLeft: defaultWidth * (task.left || 0),
          }}
        />
      </ListItem>
    ))}
  </List>
);
