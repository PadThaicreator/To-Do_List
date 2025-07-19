

import React, { useEffect } from "react";
import Image from "next/image";


export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen w-full bg-blue-300 flex flex-col items-center justify-center">
      <div className="flex flex-col p-4 bg-white rounded-2xl shadow-lg">
        <h1 className="text-4xl font-bold mb-4">My ToDo App</h1>
        <p className="text-2xs mb-8">
          A simple ToDo application built with Next.js and Electron.js
        </p>
        <Image
          src="/LOGO_TO_DO_LIST.png"
          alt="Logo"
          width={150}
          height={150}
          className="rounded-full self-center"
        />
        {children}
      </div>
    </div>
  );
}
