import clsx from "clsx";
import type { PropsWithChildren } from "react";

type BoxProps = PropsWithChildren<{
  rotate?: number;
  angle: number;
  offset: number;
  className?: string;
}>;

export const Box = (props: BoxProps) => {
  return (
    <>
      <LargeBox {...props} className="hidden md:inline-block" />
      <SmallBox {...props} className="inline-block md:hidden" />
    </>
  );
};

export const LargeBox = (props: BoxProps) => {
  // Calculate the x and y offset from the center (384px, 384px) using polar coordinates
  const center = 768 / 2; // Half of 768px section
  const radians = (props.angle * Math.PI) / 180;
  const x = center + Math.cos(radians) * props.offset;
  const y = center + Math.sin(radians) * props.offset;

  return (
    <div
      className={clsx("absolute", props.className)}
      style={{
        transform: `translate(${x}px, ${y}px) translate(-50%, -50%) rotate(${
          props.rotate ?? 0
        }deg)`,
      }}
    >
      <div className="grid-blur inline-flex flex-col">{props.children}</div>
    </div>
  );
};

export const SmallBox = (props: BoxProps) => {
  // Calculate the x and y offset from the center (192px, 192px) using polar coordinates
  const center = 384 / 2; // Half of 384px section
  const radians = (props.angle * Math.PI) / 180;
  const x = center + Math.cos(radians) * (props.offset / 2);
  const y = center + Math.sin(radians) * (props.offset / 2);

  return (
    <div
      className={clsx("absolute", props.className)}
      style={{
        transform: `translate(${x}px, ${y}px) translate(-50%, -50%) rotate(${
          props.rotate ?? 0
        }deg)`,
      }}
    >
      <div className="grid-blur inline-flex flex-col">{props.children}</div>
    </div>
  );
};
