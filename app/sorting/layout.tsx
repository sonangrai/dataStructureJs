"use client";

import Process from "./component/Process";

function layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="py-10">
      {children}
      <Process />
    </div>
  );
}

export default layout;
