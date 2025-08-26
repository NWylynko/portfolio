import type { PropsWithChildren } from "react";
import clsx from "clsx";

type TextProps = PropsWithChildren<{
  type: "title" | "paragraph";
}>;

export const Text = (props: TextProps) => {
  return (
    <span
      className={clsx(
        "font-light",
        props.type === "title" && "text-4xl",
        props.type === "paragraph" && "text-lg"
      )}
    >
      {props.children}
    </span>
  );
};
