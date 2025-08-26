import type { ComponentProps } from "react";
import _Image, { type StaticImageData } from "next/image";

type ImageProps = {
  src: StaticImageData;
  alt: string;
  size: number;
};

export const Image = (props: ImageProps) => {
  return (
    <div className="bg-white p-8 pb-32">
      <_Image
        src={props.src}
        alt={props.alt}
        height={Math.floor(props.src.height * props.size)}
        width={Math.floor(props.src.width * props.size)}
        className="rounded-lg"
      />
      <div className="flex flex-row justify-between">
        <span className="text-sm text-gray-500 mt-4">{props.alt}</span>
        <span className="text-sm text-gray-500 mt-4">
          {Math.floor(props.src.height * props.size)}x
          {Math.floor(props.src.width * props.size)}
        </span>
      </div>
    </div>
  );
};
