import type { PropsWithChildren } from "react";
import clsx from "clsx";

type TextProps = PropsWithChildren<{
  type: "title" | "paragraph";
}>;

export const Text = (props: TextProps) => {
  return (
    <span
      className={clsx(
        "font-light text-shadow-[0px_0px_2rem_rgba(175,175,175,0.75)] md:text-shadow-[0px_0px_4rem_rgba(175,175,175,0.75)]",
        props.type === "title" && "text-2xl md:text-4xl",
        props.type === "paragraph" && "md:text-lg"
      )}
    >
      {props.children}
    </span>
  );
};
