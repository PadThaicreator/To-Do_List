"use client";

import { Check, PencilLine, Trash2 } from "lucide-react";
import { useRouter } from "next/navigation";
import { useState } from "react";

export const AllTaskSection = () => {
  const [allTask, setAllTask] = useState<any>([
    {
      id: 1,
      title: "Task 1",
      description: "Description 1",
      status: "Pending",
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      id: 2,
      title: "Task 2",
      description: "Description 2",
      status: "Pending",
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      id: 3,
      title: "Task 3",
      description: "Description 3",
      status: "Pending",
      createdAt: new Date(),
      updatedAt: new Date(),
    },
  ]);

  const router = useRouter();
  return (
    <div className="flex flex-1 flex-col">
      <div className="flex items-center justify-between p-4">
        <div>All Task</div>

        <div className="flex py-2 px-4 rounded-2xl bg-blue-400 text-white cursor-pointer hover:bg-blue-500 duration-300" onClick={()=>router.push("/Homepage/addTask")}>
          Add Task
        </div>
      </div>
      <div className="flex flex-col gap-4">
        {allTask.map((item: any, index: number) => (
          <div
            key={index}
            className="flex   gap-2 bg-white hover:shadow-lg duration-400 p-4 justify-between items-center border border-gray-200 rounded-2xl"
          >
            <div>
              <div className="flex gap-2 items-center">
                {item.title}
                <div
                  className={`${
                    item.createdAt.setHours(0, 0, 0, 0) <
                    new Date().setHours(0, 0, 0, 0)
                      ? "bg-red-200"
                      : "bg-gray-200"
                  }  rounded-3xl py-1 px-2 text-xs`}
                >
                  {item.createdAt.toDateString()}
                </div>{" "}
              </div>
              <div>{item.description}</div>
            </div>
            <div>{item.status}</div>
            <div className="flex gap-4">
              <Check
                className="rounded-full bg-green-500 p-2 text-white cursor-pointer"
                size={34}
              />
              <PencilLine
                className="rounded-full bg-amber-500 p-2 text-white cursor-pointer"
                size={34}
              />
              <Trash2
                className="rounded-full bg-red-500 p-2 text-white cursor-pointer"
                size={34}
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
