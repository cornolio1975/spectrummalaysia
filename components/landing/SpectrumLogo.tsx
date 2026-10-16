import React from "react";

interface SpectrumLogoProps {
  className?: string;
  variant?: "full" | "horizontal" | "icon" | "badge";
  size?: "sm" | "md" | "lg" | "xl";
  lightText?: boolean;
}

export function SpectrumLogo({
  className = "",
  size = "md",
}: SpectrumLogoProps) {
  // Height configurations matching 1024x346 aspect ratio
  const heightClasses = {
    sm: "h-10 sm:h-11",
    md: "h-12 sm:h-14 lg:h-[62px]",
    lg: "h-16 sm:h-18 lg:h-22",
    xl: "h-22 sm:h-26 lg:h-32",
  }[size];

  return (
    <div className={`inline-flex items-center select-none ${className}`}>
      <img
        src="/spectrum-logo.png?v=3"
        alt="Spectrum Edu Resources (M) Sdn. Bhd. - Empowering Minds. Building Futures."
        className={`${heightClasses} w-auto object-contain transition-transform duration-200 group-hover:scale-[1.02]`}
        loading="eager"
      />
    </div>
  );
}
