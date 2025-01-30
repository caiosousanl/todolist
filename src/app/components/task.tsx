import React from "react";
import { ITask } from "../page";

export interface ITaskProps {
  task: ITask;
  key: number;
}

export const Task = ({ task }: ITaskProps) => {
  return (
    <div key={task.id} className="border-indigo-500 border-2">
      <div className="flex justify-between">
        <div>task description</div>
        <div>checkbox shadcn</div>
      </div>
    </div>
  );
};
