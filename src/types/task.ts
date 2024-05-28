import { UUID } from './uuid.ts';

/**
 * Модель "Задача".
 *
 * @property [dependsOn] Идентификатор задачи, от которой зависит текущая.
 * @property [duration]  Длительность задачи (в условных единицах).
 * @property id          Идентификатор.
 * @property name        Название.
 */
export interface Task {
  dependsOn?: UUID;
  duration?: number;
  id: UUID;
  name: string;
}
