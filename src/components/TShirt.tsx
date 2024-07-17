import { cn } from "@/lib/utils";
import { HTMLAttributes, CSSProperties } from "react";
import Image from "next/image";

interface TShirtProps extends HTMLAttributes<HTMLDivElement> {
  imgSrc: string;
  dark?: boolean;
  style?: CSSProperties;
}

const TShirt = ({
  imgSrc,
  className,
  dark = false,
  style,
  ...props
}: TShirtProps) => {
  return (
    <div
      className={cn(
        "relative pointer-events-none z-50 overflow-hidden",
        className
      )}
      style={style}
      {...props}
    >
      <div className="relative z-10 w-full h-full">
        <Image
          src={dark ? "/shirt-template-light.png" : "/shirt-template-dark.png"}
          className="pointer-events-none select-none w-full h-full object-cover"
          alt="t-shirt image"
          layout="fill"
          objectFit="cover"
        />
      </div>
      <div className="absolute inset-0 z-20 flex items-center justify-center p-10 md:p-20 lg:p-24">
        <Image
          className="object-contain"
          src={imgSrc}
          alt="overlaying t-shirt image"
          layout="intrinsic"
          width={500}
          height={500}
        />
      </div>
    </div>
  );
};

export default TShirt;
