import React from "react";
import { ITask } from "../page";
import { Checkbox } from "./ui/checkbox";
import { Input } from "./ui/input";

export interface ITaskProps {
  task: ITask;
  key: number;
}

export const Task = ({ task }: ITaskProps) => {
  return (
    <div key={task.id} className="">
      <div className="flex justify-between bg-neutral my-1">
        <Input placeholder="Task description" size="input-xs" />
        <Checkbox />
      </div>
    </div>
  );
};
