"use client";

import { type PropsWithChildren } from "react";

export const Grid = (props: PropsWithChildren) => {
  return (
    <div className="overflow-auto size-full p-4 flex flex-col items-center justify-center">
      {props.children}
    </div>
  );
};
