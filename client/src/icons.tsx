/**
 * New, more meaningful logo for "Kisaan Saathi".
 * It symbolizes a hand ("Saathi" - companion) gently holding
 * a new sprout ("Kisaan" - farming/growth) within a protective circle.
 */
export const LogoSvg = ({ className = 'w-10 h-10' }: { className?: string }) => (
  <svg
    className={className}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M14 9.5C14 8.67157 13.3284 8 12.5 8C11.6716 8 11 8.67157 11 9.5C11 10.3284 11.6716 11 12.5 11C13.3284 11 14 10.3284 14 9.5Z"
      stroke="currentColor"
      strokeWidth="1.5"
    />
    <path
      d="M12.5 8C12.5 8 12.5 7.5 12.5 6C12.5 3.79086 14.2909 2 16.5 2C18.7091 2 20.5 3.79086 20.5 6C20.5 7.5 20.5 8 20.5 8"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
    />
    <path
      d="M11 9.5C11 9.5 9 10.5 9 13C9 15.5 11 16.5 11 16.5"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
    />
    <path
      d="M14 9.5C14 9.5 16 10.5 16 13C16 15.5 14 16.5 14 16.5"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
    />
    <path
      d="M3.5 18C3.5 15.2386 5.73858 13 8.5 13H16.5C19.2614 13 21.5 15.2386 21.5 18V20.5C21.5 21.3284 20.8284 22 20 22H5C4.17157 22 3.5 21.3284 3.5 20.5V18Z"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
    />
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
export const HowItWorksIcon = ({ className = 'w-8 h-8' }: { className?: string }) => (
  <svg
    className={className}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <circle cx="12" cy="12" r="10" />
    <path d="M10 8h4v8h-4z" />
    <path d="M8 10h8" />
  </svg>
);

export const ImpactIcon = ({ className = 'w-8 h-8' }: { className?: string }) => (
  <svg
    className={className}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M12 2v4" />
    <path d="M12 18v4" />
    <path d="M4.93 4.93l2.83 2.83" />
    <path d="M16.24 16.24l2.83 2.83" />
    <path d="M2 12h4" />
    <path d="M18 12h4" />
    <circle cx="12" cy="12" r="3" />
  </svg>
);

export const TestimonialsIcon = ({ className = 'w-8 h-8' }: { className?: string }) => (
  <svg
    className={className}
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M7 8h10M7 12h8M5 16h6" />
    <path d="M5 4h14a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2h-4l-4 4-4-4H5a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2z" />
  </svg>
);

export const FAQIcon = ({ className = 'w-8 h-8' }: { className?: string }) => (
  <svg
    className={className}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <circle cx="12" cy="12" r="10" />
    <path d="M9.09 9a3 3 0 1 1 5.82 1c0 1.5-1.5 2-1.5 2" />
    <path d="M12 17h.01" />
  </svg>
);

export const FooterIcon = ({ className = 'w-8 h-8' }: { className?: string }) => (
  <svg
    className={className}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <rect x="3" y="3" width="18" height="18" rx="2" ry="2" />
    <path d="M3 15h18" />
    <path d="M9 21v-6" />
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
