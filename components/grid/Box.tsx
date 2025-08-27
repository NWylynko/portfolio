import type { PropsWithChildren } from "react";

type BoxProps = PropsWithChildren<{
  rotate?: number;
  angle: number;
  offset: number;
}>;

export const Box = (props: BoxProps) => {
  // Calculate the x and y offset from the center (384px, 384px) using polar coordinates
  const center = 768 / 2; // Half of 768px section
  const radians = (props.angle * Math.PI) / 180;
  const x = center + Math.cos(radians) * props.offset;
  const y = center + Math.sin(radians) * props.offset;

  return (
    <div
      className="inline-block absolute"
      style={{
        transform: `translate(${x}px, ${y}px) translate(-50%, -50%) rotate(${
          props.rotate ?? 0
        }deg)`,
      }}
    >
      <div className="inline-block grid-blur">{props.children}</div>
    </div>
  );
};
