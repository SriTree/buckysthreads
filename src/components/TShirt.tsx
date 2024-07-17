"use client";
import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";
import { HTMLAttributes, CSSProperties } from "react";

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
  const [scale, setScale] = useState("scale(0.625)");

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024) {
        setScale("scale(0.7)");
      } else if (window.innerWidth >= 768) {
        setScale("scale(0.7)");
      } else {
        setScale("scale(0.625)");
      }
    };

    handleResize(); // Set the initial scale
    window.addEventListener("resize", handleResize); // Update scale on resize

    return () => {
      window.removeEventListener("resize", handleResize); // Cleanup on unmount
    };
  }, []);

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
        <img
          src={dark ? "/shirt-template-light.png" : "/shirt-template-dark.png"}
          className="pointer-events-none select-none w-full h-full object-cover"
          alt="t-shirt image"
        />
      </div>
      <div className="absolute inset-0 z-20 flex items-center justify-center p-10 md:p-20 lg:p-24">
        <div style={{ transform: scale }}>
          <img
            className="object-contain w-full h-full"
            src={imgSrc}
            alt="overlaying t-shirt image"
          />
        </div>
      </div>
    </div>
  );
};

export default TShirt;
