import { ITask } from "../page";
import { Task } from "./task";

interface ITaskListProps {
  tasks: ITask[];
}

export const TaskList = ({ tasks }: ITaskListProps) => {
  return (
    <div className="flex flex-col p-2 bg-neutral rounded">
      {tasks && tasks.map((task) => <Task task={task} key={task.id} />)}
    </div>
  );
};
