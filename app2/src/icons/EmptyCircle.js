import React from "react";

export default function EmptyCircle() {
  return (
    <svg
      width="50"
      height="50"
      viewBox="0 0 78 78"
      fill="none"
      className="emptyCircle"
      xmlns="http://www.w3.org/2000/svg">
      <g filter="url(#filter0_d_19_112)">
        <line
          x1="37.7332"
          y1="18.4667"
          x2="37.7332"
          y2="58.0667"
          stroke="white"
          stroke-width="4"
        />
        <path
          d="M59.1998 39.0001L19.5998 39.0001"
          stroke="white"
          stroke-width="4"
        />
      </g>
      <defs>
        <filter
          id="filter0_d_19_112"
          x="-0.00012207"
          y="0.333313"
          width="77.3334"
          height="77.3333"
          filterUnits="userSpaceOnUse"
          color-interpolation-filters="sRGB">
          <feFlood flood-opacity="0" result="BackgroundImageFix" />
          <feColorMatrix
            in="SourceAlpha"
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            result="hardAlpha"
          />
          <feOffset />
          <feGaussianBlur stdDeviation="1" />
          <feComposite in2="hardAlpha" operator="out" />
          <feColorMatrix
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.15 0"
          />
          <feBlend
            mode="normal"
            in2="BackgroundImageFix"
            result="effect1_dropShadow_19_112"
          />
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="effect1_dropShadow_19_112"
            result="shape"
          />
        </filter>

      </defs>
    </svg>
  );
}
