import { type PropsWithChildren } from "react";

type SectionProps = PropsWithChildren<{}>;

export const Section = (props: SectionProps) => {
  return (
    <div className="p-8 relative min-h-[24rem] md:min-h-[48rem] min-w-[24rem] md:min-w-[48rem]">
      {props.children}
    </div>
  );
};
