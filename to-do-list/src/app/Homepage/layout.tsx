"use client";

import React, { useEffect } from "react";

import { useRouter } from "next/navigation";
import Navbar from "./navbar";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex flex-1 flex-col  ">
      <div className="flex ">
        <Navbar />
      </div>
      <div className=" bg-amber-50   flex  flex-col h-screen">{children}</div>
    </div>
  );
}
