"use client";

import { type PropsWithChildren } from "react";

export const Grid = (props: PropsWithChildren) => {
  return (
    <div className="overflow-y-auto overflow-x-hidden size-full p-2 md:p-4 flex flex-col items-center justify-center">
      {props.children}
    </div>
  );
};
