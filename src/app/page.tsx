"use client";

import Image from "next/image";
import * as React from "react";
import NsComboBox from "./selection";

export default function Home() {
  const [ns, setNs] = React.useState("");
  const [svc, setSvc] = React.useState("");
  const updateNs = (newNs: string) => {
    setNs(newNs);
  };
  const updateSvc = (newSvc: string) => {
    setSvc(newSvc);
  };
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div>
        <NsComboBox boxType="ns" onUpdateData={updateNs} />
        <NsComboBox boxType="svc" namespace={ns} onUpdateData={updateSvc} />
      </div>
    </main>
  );
}
