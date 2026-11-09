import React, { useId } from "react";

export default function BrushStroke({ className = "" }) {
  const id = `paint-${useId().replace(/:/g, "")}`;

  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 1000 320"
      preserveAspectRatio="none"
      className={`pointer-events-none absolute origin-center mix-blend-multiply dark:mix-blend-screen text-copper opacity-65 [transform:matrix(1,-0.07,0,1,0,0)] ${className}`}
    >
      <defs>
        <filter
          id={`${id}-fray`}
          x="-28%"
          y="-45%"
          width="160%"
          height="190%"
          colorInterpolationFilters="sRGB"
        >
          <feTurbulence
            type="fractalNoise"
            baseFrequency="0.008 0.72"
            numOctaves="3"
            seed="4"
            result="noise"
          />
          <feDisplacementMap
            in="SourceGraphic"
            in2="noise"
            scale="48"
            xChannelSelector="R"
            yChannelSelector="G"
          />
        </filter>
        <clipPath id={`${id}-left`}>
          <rect x="0" y="0" width="500" height="320" />
        </clipPath>
        <g id={`${id}-end`}>
          <g clipPath={`url(#${id}-left)`}>
            <rect
              x="88"
              y="78"
              width="430"
              height="164"
              filter={`url(#${id}-fray)`}
            />
          </g>
        </g>
      </defs>
      <g fill="currentColor">
        <rect x="150" y="96" width="700" height="128" />
        <use href={`#${id}-end`} />
        <use href={`#${id}-end`} transform="matrix(-1 0 0 1 1000 0)" />
      </g>
    </svg>
  );
}
