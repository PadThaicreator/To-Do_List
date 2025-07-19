"use client";

import Image from "next/image";

export default function Navbar() {
  return (
    <div className="flex flex-1 p-4 justify-between items-center bg-blue-200">
      <div className="flex items-center gap-2 justify-center">
        <Image
          src="/LOGO_TO_DO_LIST.png"
          alt="Logo"
          width={50}
          height={50}
          className="rounded-full"
        />
        <b>
          <em>My ToDo List</em>
        </b>
      </div>
      <div className="flex gap-10 mr-10">
        <div>Home</div>
        <div>Add Task</div>
        <div>Profile</div>
      </div>
    </div>
  );
}
