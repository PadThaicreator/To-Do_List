"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";

export default function Navbar() {

  const router = useRouter();
  return (
    <div className="flex flex-1 p-4 justify-between items-center bg-blue-300">
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
      <div className="flex gap-10 mr-10 text-white">
        <div className="cursor-pointer" onClick={()=>router.push("/Homepage/home")}>Home</div>
        <div className="cursor-pointer" onClick={()=>router.push("/Homepage/addTask")}>Add Task</div>
        <div className="cursor-pointer">Profile</div>
      </div>
    </div>
  );
}
