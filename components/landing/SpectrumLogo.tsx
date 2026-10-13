import React from "react";
import Image from "next/image";

interface SpectrumLogoProps {
  className?: string;
  variant?: "full" | "horizontal" | "icon" | "badge";
  size?: "sm" | "md" | "lg" | "xl";
  lightText?: boolean;
}

export function SpectrumLogo({
  className = "",
  variant = "horizontal",
  size = "md",
}: SpectrumLogoProps) {
  // Height configurations - enlarged for optimal legibility of 3D lettering & motto
  const heightClasses = {
    sm: "h-10 sm:h-11 w-auto",
    md: "h-13 sm:h-14 lg:h-16 w-auto",
    lg: "h-16 sm:h-20 lg:h-22 w-auto",
    xl: "h-24 sm:h-28 lg:h-32 w-auto",
  }[size];

  if (variant === "icon") {
    return (
      <div className={`relative inline-flex items-center overflow-hidden ${className}`}>
        {/* Shows just the iconic ribbon S mark */}
        <div className="relative w-10 h-10 overflow-hidden flex items-center justify-start">
          <img
            src="/spectrum-logo.png"
            alt="Spectrum Edu Resources"
            className="h-10 max-w-none object-left object-contain"
            style={{ width: "auto" }}
          />
        </div>
      </div>
    );
  }

  return (
    <div className={`inline-flex items-center select-none ${className}`}>
      <img
        src="/spectrum-logo.png"
        alt="Spectrum Edu Resources (M) Sdn. Bhd. - Empowering Minds. Building Futures."
        className={`${heightClasses} object-contain transition-transform duration-200 group-hover:scale-105`}
        loading="eager"
      />
    </div>
  );
}
