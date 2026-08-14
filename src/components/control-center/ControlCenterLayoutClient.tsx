"use client";

import { useState } from "react";

import Header from "@/components/control-center/header/Header";
import Sidebar from "@/components/control-center/sidebar/Sidebar";

export default function ControlCenterLayoutClient({
  children,
}: {
  children: React.ReactNode;
}) {
  const [open, setOpen] = useState(false);

  return (
    <div className="control-layout">

      <Header
        onMenuClick={() => setOpen(!open)}
      />

      <div className="control-body">

        <Sidebar open={open} />

        <main
          className="control-main"
          onClick={() => open && setOpen(false)}
        >
          {children}
        </main>

      </div>

    </div>
  );
}
