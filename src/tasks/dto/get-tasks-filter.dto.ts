import { TaskStatus } from "../task.model";

export class GetTasksFilter {
  status: TaskStatus;
  search: string;
}
