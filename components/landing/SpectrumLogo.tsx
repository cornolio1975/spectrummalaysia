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
    sm: "h-9 sm:h-10",
    md: "h-11 sm:h-12 lg:h-14",
    lg: "h-14 sm:h-16 lg:h-20",
    xl: "h-20 sm:h-24 lg:h-28",
  }[size];

  return (
    <div className={`inline-flex items-center select-none ${className}`}>
      <img
        src="/spectrum-logo.png"
        alt="Spectrum Edu Resources (M) Sdn. Bhd. - Empowering Minds. Building Futures."
        className={`${heightClasses} w-auto object-contain transition-transform duration-200 group-hover:scale-105`}
        loading="eager"
      />
    </div>
  );
}
