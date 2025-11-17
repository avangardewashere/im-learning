import { memo } from "react";
import Link from "next/link";

type LogoSize = "small" | "regular" | "large";

interface LogoProps {
  size?: LogoSize;
}

function Logo({ size = "regular" }: LogoProps) {
  const sizeClasses = {
    small: "text-lg sm:text-xl",
    regular: "text-xl sm:text-2xl",
    large: "text-2xl sm:text-3xl md:text-4xl",
  };

  return (
    <Link href="/" className="cursor-pointer">
      <h1 className={`${sizeClasses[size]} font-bold text-sky-300`}>
        <span className="text-amber-400">S</span>tudious
      </h1>
    </Link>
  );
}

export default memo(Logo);
