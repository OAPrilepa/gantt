import { Chip, List, ListItem } from '@mui/material';
import { FC } from 'react';

import { tasksMock } from '../../__mocks__/tasks.ts';
import { Task } from '../../types/task.ts';

const defaultWidth = 50;

interface TaskWithLeft extends Task {
  left: number;
}

function calcLeft(prevTasks: TaskWithLeft[], currentTask: Task): number {
  if (currentTask.dependsOn) {
    const parent = prevTasks.find((task) => task.id === currentTask.dependsOn);
    if (parent) {
      return (parent.duration || 0) + parent.left;
    }
  }
  return 0;
}

const tasks: TaskWithLeft[] = tasksMock.reduce((tasksWithLeft, task) => {
  tasksWithLeft.push({
    ...task,
    left: calcLeft(tasksWithLeft, task),
  });
  return tasksWithLeft;
}, [] as TaskWithLeft[]);

export const GanttChart: FC = () => (
  <List>
    <ListItem>TODO: days legend</ListItem>
    {tasks.map((task) => (
      <ListItem key={task.id}>
        <Chip
          color='info'
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
