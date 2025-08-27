import type { PropsWithChildren } from "react";
import clsx from "clsx";

type TextProps = PropsWithChildren<{
  type: "title" | "paragraph";
}>;

export const Text = (props: TextProps) => {
  return (
    <span
      className={clsx(
        "font-light text-shadow-[0px_0px_4rem_rgba(0,0,0,0.75)]",
        props.type === "title" && "text-4xl",
        props.type === "paragraph" && "text-lg"
      )}
    >
      {props.children}
    </span>
  );
};
