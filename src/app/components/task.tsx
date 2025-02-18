import React from "react";
import { ITask } from "../page";
import { Checkbox } from "./ui/checkbox";

export interface ITaskProps {
  task: ITask;
  key: number;
}

export const Task = ({ task }: ITaskProps) => {
  return (
    <div key={task.id} className="">
      <div className="flex justify-between">
        <div>task description</div>
        <Checkbox />
      </div>
    </div>
  );
};
