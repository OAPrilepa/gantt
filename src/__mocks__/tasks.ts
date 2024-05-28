import { Task } from '../types/task.ts';

export const tasksMock: Task[] = [
  {
    id: '1',
    name: 'Аналитика',
    duration: 2,
  },
  {
    id: '2',
    name: 'Декомпозиция',
    dependsOn: '1',
    duration: 1,
  },
  {
    id: '3',
    name: 'Планирование и оценка',
    dependsOn: '2',
    duration: 1,
  },
  {
    id: '4',
    name: 'Разработка',
    dependsOn: '3',
    duration: 3,
  },
  {
    id: '5',
    name: 'Code review',
    dependsOn: '4',
    duration: 1,
  },
  {
    id: '6',
    name: 'Тестирование',
    dependsOn: '5',
    duration: 2,
  },
  {
    id: '7',
    name: 'Доставка',
    dependsOn: '6',
    duration: 1,
  },
  {
    id: '8',
    name: 'Эксплуатация',
    dependsOn: '7',
    duration: 5,
  },
];
