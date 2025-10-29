import React from 'react';

/**
 * A self-animating SVG representing "growth" and "data".
 * It uses internal CSS for animations, so it's totally self-contained.
 */
export const AnimatedHeroSvg = () => {
  return (
    <svg
      viewBox="0 0 400 400"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="w-full h-full"
    >
      <style>
        {`
          .path-draw {
            stroke-dasharray: 1000;
            stroke-dashoffset: 1000;
            animation: draw 3s ease-out forwards;
          }
          .fade-in {
            opacity: 0;
            animation: fade 1.5s ease-in forwards;
          }
          @keyframes draw {
            to {
              stroke-dashoffset: 0;
            }
          }
          @keyframes fade {
            from {
              opacity: 0;
            }
            to {
              opacity: 1;
            }
          }
        `}
      </style>
      
      {/* Large background circle */}
      <circle
        cx="200"
        cy="200"
        r="180"
        className="text-ks-green-100 fade-in"
        fill="currentColor"
        style={{ animationDelay: '0s' }}
      />
      
      {/* Growing Stem 1 (Green) */}
      <path
        d="M200 380 C 200 380, 100 300, 100 200 S 150 20, 200 20"
        className="text-ks-green-600 path-draw"
        stroke="currentColor"
        strokeWidth="12"
        strokeLinecap="round"
        style={{ animationDelay: '0.2s' }}
      />
      {/* Growing Stem 2 (Amber) */}
      <path
        d="M200 380 C 200 380, 200 300, 200 200 S 200 20, 200 20"
        className="text-ks-amber-500 path-draw"
        stroke="currentColor"
        strokeWidth="12"
        strokeLinecap="round"
        style={{ animationDelay: '0.4s' }}
      />
      {/* Growing Stem 3 (Green) */}
      <path
        d="M200 380 C 200 380, 300 300, 300 200 S 250 20, 200 20"
        className="text-ks-green-600 path-draw"
        stroke="currentColor"
        strokeWidth="12"
        strokeLinecap="round"
        style={{ animationDelay: '0.6s' }}
      />
      
      {/* Top "leaf" or "data point" */}
      <circle
        cx="200"
        cy="20"
        r="15"
        className="text-ks-green-700 fade-in"
        fill="currentColor"
        style={{ animationDelay: '2.5s' }}
      />
    </svg>
  );
};