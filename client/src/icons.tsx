/**
 * New, more meaningful logo for "Kisaan Saathi".
 * It symbolizes a hand ("Saathi" - companion) gently holding
 * a new sprout ("Kisaan" - farming/growth) within a protective circle.
 */
import React from 'react';

export const LogoSvg = ({ className = 'w-10 h-10' }: { className?: string }) => (
  <svg
    className={className}
    viewBox="0 0 64 64"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    {/* Hand (support) */}
    <path
      d="M10 38c3 4 8 8 16 8h8c5 0 9 2 12 4s6 4 10 0"
      stroke="#15803d"
      strokeWidth="3"
      strokeLinecap="round"
      strokeLinejoin="round"
      fill="none"
    />
    <path
      d="M12 42c3 3 7 6 14 6h8c4 0 7 1 10 3"
      stroke="#4ade80"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      opacity="0.8"
    />

    {/* Sprouting seed */}
    <path
      d="M30 24c0-6 6-10 10-10 4 0 8 4 8 8s-4 8-8 8c-1 0-3 0-4-1v3"
      stroke="#16a34a"
      strokeWidth="3"
      strokeLinecap="round"
      strokeLinejoin="round"
      fill="none"
    />

    {/* Small seed base */}
    <circle cx="34" cy="34" r="3" fill="#22c55e" />

    {/* Decorative glow behind seed */}
    <circle cx="34" cy="26" r="10" fill="url(#glow)" opacity="0.3" />

    <defs>
      <radialGradient
        id="glow"
        cx="0"
        cy="0"
        r="1"
        gradientUnits="userSpaceOnUse"
        gradientTransform="translate(34 26) scale(10)"
      >
        <stop stopColor="#bbf7d0" />
        <stop offset="1" stopColor="#ffffff" stopOpacity="0" />
      </radialGradient>
    </defs>
  </svg>
);



export const LeafScanIcon = ({ className = 'w-8 h-8' }: { className?: string }) => (
  <svg
    className={className}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M11 20A7 7 0 0 1 7 16.1C7 14.5 8 11.1 9 9c2-5 6-7 7-7a7 7 0 0 1 4 14.9" />
    <path d="M11 20A7 7 0 0 0 15 16.1c0-1.6-1-4.9-2-7-2-5-6-7-7-7a7 7 0 0 0-4 14.9" />
    <path d="M11 20v-8" />
    <path d="m15 16.1-4-4" />
  </svg>
);

export const TreatmentIcon = ({ className = 'w-8 h-8' }: { className?: string }) => (
  <svg
    className={className}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
    <path d="m9 12 2 2 4-4" />
  </svg>
);

export const ChartIcon = ({ className = 'w-8 h-8' }: { className?: string }) => (
  <svg
    className={className}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M3 3v18h18" />
    <path d="M18.7 8l-5.1 5.2-2.8-2.7L7 15" />
    <path d="M15 8h5v5" />
  </svg>
);

export const StarIcon = ({ className = 'w-5 h-5' }: { className?: string }) => (
  <svg
    className={className}
    viewBox="0 0 20 20"
    fill="currentColor"
    aria-hidden="true"
  >
    <path
      fillRule="evenodd"
      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
      clipRule="evenodd"
    />
  </svg>
);

export const CheckCircleIcon = ({ className = 'w-6 h-6' }: { className?: string }) => (
  <svg
    className={className}
    fill="none"
    viewBox="0 0 24 24"
    strokeWidth="1.5"
    stroke="currentColor"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
    />
  </svg>
);

export const ArrowRightIcon = ({ className = 'w-5 h-5' }: { className?: string }) => (
  <svg
    className={className}
    fill="none"
    viewBox="0 0 24 24"
    strokeWidth="2"
    stroke="currentColor"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"
    />
  </svg>
);


export const CameraIcon = ({ className = 'w-8 h-8' }: { className?: string }) => (
  <svg
    className={className}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M23 19a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h4l2-3h6l2 3h4a2 2 0 0 1 2 2z" />
    <circle cx="12" cy="13" r="4" />
  </svg>
);

export const CloudIcon = ({ className = 'w-8 h-8' }: { className?: string }) => (
  <svg
    className={className}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M17.5 19a4.5 4.5 0 0 0 0-9 5 5 0 0 0-9.7-.8A4 4 0 0 0 4 13a4 4 0 0 0 4 4h9.5z" />
  </svg>
);

export const SproutIcon = ({ className = 'w-8 h-8' }: { className?: string }) => (
  <svg
    className={className}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M7 20h10" />
    <path d="M12 20V10" />
    <path d="M12 10c-1-4-5-6-9-6 0 4 2 8 9 8z" />
    <path d="M12 10c1-4 5-6 9-6 0 4-2 8-9 8z" />
  </svg>
);
