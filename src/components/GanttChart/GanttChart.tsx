import { Chip, List, ListItem } from '@mui/material';
import React, { FC } from 'react';
import { ArcherContainer, ArcherElement } from 'react-archer';

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
      return (parent.duration || 0) + parent.left + 0.25;
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
    <ArcherContainer>
      {tasks.map((task) => (
        <ListItem>
          <ArcherElement
            key={task.id}
            id={task.id}
            relations={
              task.dependsOn
                ? [
                    {
                      targetId: task.dependsOn,
                      targetAnchor: 'bottom',
                      sourceAnchor: 'left',
                      style: {
                        strokeColor: '#AAA',
                        lineStyle: 'curve',
                      },
                    },
                  ]
                : undefined
            }
          >
            <Chip
              color='info'
              sx={{
                width: defaultWidth * (task.duration || 1),
              }}
              style={{
                marginLeft: defaultWidth * (task.left || 0),
              }}
            />
          </ArcherElement>
        </ListItem>
      ))}
    </ArcherContainer>
  </List>
);
