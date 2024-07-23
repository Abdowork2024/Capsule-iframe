import { Fragment } from "react";

export function Notches() {
  return (
    <Fragment>
      <NotchTop className="fade-in-delayed pointer-events-none fixed left-1/2 top-0 hidden -translate-x-1/2 md:block" />
      <NotchBottom className="fade-in-delayed pointer-events-none fixed bottom-0 left-1/2 hidden -translate-x-1/2 md:block" />
      <NotchRight className="fade-in-delayed pointer-events-none fixed right-0 top-1/2 hidden -translate-y-1/2 md:block" />
      <NotchLeft className="fade-in-delayed pointer-events-none fixed left-0 top-1/2 hidden -translate-y-1/2 md:block " />
    </Fragment>
  );
}

function NotchLeft({ className }: { className: string }) {
  return (
    <svg
      width="80"
      height="112"
      viewBox="0 0 80 112"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
      className={className}
    >
      <g filter="url(#filter0_ii_566_9930)">
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M41 39.9883C40.6679 39.9961 40.3339 40 40 40C17.9082 40 -2.60246e-05 22.0918 -2.47955e-05 1.53e-06L-23.5 2.22544e-07L-23.5 40L-27.5 40L-27.5 72L-23.5 72L-23.5 112L-3.10268e-05 112C-2.97977e-05 89.9082 17.9082 72 40 72C40.3339 72 40.6679 72.0039 41 72.0117L41 72L64 72C72.8366 72 80 64.8366 80 56C80 47.1635 72.8366 40 64 40L41 40L41 39.9883Z"
          fill="white"
          fillOpacity="0.01"
        />
      </g>
      <defs>
        <filter
          id="filter0_ii_566_9930"
          x="-27.5"
          y="-5"
          width="107.5"
          height="121"
          filterUnits="userSpaceOnUse"
          colorInterpolationFilters="sRGB"
        >
          <feFlood floodOpacity="0" result="BackgroundImageFix" />
          <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
          <feColorMatrix
            in="SourceAlpha"
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            result="hardAlpha"
          />
          <feOffset dy="4" />
          <feGaussianBlur stdDeviation="5" />
          <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1" />
          <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.1 0" />
          <feBlend mode="normal" in2="shape" result="effect1_innerShadow_566_9930" />
          <feColorMatrix
            in="SourceAlpha"
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            result="hardAlpha"
          />
          <feOffset dy="-5" />
          <feGaussianBlur stdDeviation="5" />
          <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1" />
          <feColorMatrix type="matrix" values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.1 0" />
          <feBlend
            mode="normal"
            in2="effect1_innerShadow_566_9930"
            result="effect2_innerShadow_566_9930"
          />
        </filter>
      </defs>
    </svg>
  );
}

function NotchRight({ className }: { className: string }) {
  return (
    <svg
      width="80"
      height="112"
      viewBox="0 0 80 112"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
      className={className}
    >
      <g filter="url(#filter0_ii_566_15129)">
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M39.0001 72.0117C39.3321 72.0039 39.6661 72 40.0001 72C62.0919 72 80 89.9082 80 112L103.5 112L103.5 72L107.5 72L107.5 40L103.5 40L103.5 -3.4969e-07L80.0001 -2.40412e-06C80.0001 22.0918 62.0919 40 40.0001 40C39.6661 40 39.3321 39.9961 39.0001 39.9883L39.0001 40L16 40C7.16345 40 5.66819e-06 47.1634 4.89568e-06 56C4.12316e-06 64.8365 7.16345 72 16 72L39.0001 72L39.0001 72.0117Z"
          fill="white"
          fillOpacity="0.01"
        />
      </g>
      <defs>
        <filter
          id="filter0_ii_566_15129"
          x="0"
          y="-5"
          width="107.5"
          height="121"
          filterUnits="userSpaceOnUse"
          colorInterpolationFilters="sRGB"
        >
          <feFlood floodOpacity="0" result="BackgroundImageFix" />
          <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
          <feColorMatrix
            in="SourceAlpha"
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            result="hardAlpha"
          />
          <feOffset dy="4" />
          <feGaussianBlur stdDeviation="5" />
          <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1" />
          <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.1 0" />
          <feBlend mode="normal" in2="shape" result="effect1_innerShadow_566_15129" />
          <feColorMatrix
            in="SourceAlpha"
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            result="hardAlpha"
          />
          <feOffset dy="-5" />
          <feGaussianBlur stdDeviation="5" />
          <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1" />
          <feColorMatrix type="matrix" values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.1 0" />
          <feBlend
            mode="normal"
            in2="effect1_innerShadow_566_15129"
            result="effect2_innerShadow_566_15129"
          />
        </filter>
      </defs>
    </svg>
  );
}

function NotchTop({ className }: { className: string }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="112"
      height="80"
      viewBox="0 0 112 80"
      fill="none"
      className={className}
    >
      <g clipPath="url(#clip0_528_15151)">
        <g filter="url(#filter0_ii_528_15151)">
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M72.0117 40.9999C72.0039 40.6679 72 40.3339 72 39.9999C72 17.9081 89.9082 -4.48347e-05 112 -4.3869e-05L112 -23.5L72 -23.5L72 -27.5L40 -27.5L40 -23.5L-1.74845e-07 -23.5L-1.20206e-06 -4.87647e-05C22.0918 -4.7799e-05 40 17.9081 40 39.9999C40 40.3339 39.9961 40.6679 39.9883 40.9999L40 40.9999L40 64C40 72.8366 47.1634 80 56 80C64.8366 80 72 72.8366 72 64L72 40.9999L72.0117 40.9999Z"
            fill="white"
            fillOpacity="0.01"
          />
        </g>
      </g>
      <defs>
        <filter
          id="filter0_ii_528_15151"
          x="0"
          y="-32.5"
          width="112"
          height="116.5"
          filterUnits="userSpaceOnUse"
          colorInterpolationFilters="sRGB"
        >
          <feFlood floodOpacity="0" result="BackgroundImageFix" />
          <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
          <feColorMatrix
            in="SourceAlpha"
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            result="hardAlpha"
          />
          <feOffset dy="4" />
          <feGaussianBlur stdDeviation="5" />
          <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1" />
          <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.1 0" />
          <feBlend mode="normal" in2="shape" result="effect1_innerShadow_528_15151" />
          <feColorMatrix
            in="SourceAlpha"
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            result="hardAlpha"
          />
          <feOffset dy="-5" />
          <feGaussianBlur stdDeviation="5" />
          <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1" />
          <feColorMatrix type="matrix" values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.1 0" />
          <feBlend
            mode="normal"
            in2="effect1_innerShadow_528_15151"
            result="effect2_innerShadow_528_15151"
          />
        </filter>
        <clipPath id="clip0_528_15151">
          <rect width="112" height="80" fill="white" />
        </clipPath>
      </defs>
    </svg>
  );
}

function NotchBottom({ className }: { className: string }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="112"
      height="80"
      viewBox="0 0 112 80"
      fill="none"
      className={className}
    >
      <g clipPath="url(#clip0_528_15152)">
        <g filter="url(#filter0_ii_528_15152)">
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M39.9883 39.0001C39.9961 39.3321 40 39.6661 40 40.0001C40 62.0919 22.0918 80 3.60618e-06 80L5.24534e-07 103.5L40 103.5L40 107.5L72 107.5L72 103.5L112 103.5L112 80.0001C89.9082 80.0001 72 62.0919 72 40.0001C72 39.6661 72.0039 39.3321 72.0117 39.0001L72 39.0001L72 16C72 7.16345 64.8366 8.50229e-06 56 7.34351e-06C47.1635 6.18474e-06 40 7.16345 40 16L40 39.0001L39.9883 39.0001Z"
            fill="white"
            fillOpacity="0.01"
          />
        </g>
      </g>
      <defs>
        <filter
          id="filter0_ii_528_15152"
          x="0"
          y="-5"
          width="112"
          height="116.5"
          filterUnits="userSpaceOnUse"
          colorInterpolationFilters="sRGB"
        >
          <feFlood floodOpacity="0" result="BackgroundImageFix" />
          <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
          <feColorMatrix
            in="SourceAlpha"
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            result="hardAlpha"
          />
          <feOffset dy="4" />
          <feGaussianBlur stdDeviation="5" />
          <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1" />
          <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.1 0" />
          <feBlend mode="normal" in2="shape" result="effect1_innerShadow_528_15152" />
          <feColorMatrix
            in="SourceAlpha"
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            result="hardAlpha"
          />
          <feOffset dy="-5" />
          <feGaussianBlur stdDeviation="5" />
          <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1" />
          <feColorMatrix type="matrix" values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.1 0" />
          <feBlend
            mode="normal"
            in2="effect1_innerShadow_528_15152"
            result="effect2_innerShadow_528_15152"
          />
        </filter>
        <clipPath id="clip0_528_15152">
          <rect width="112" height="80" fill="white" transform="translate(112 80) rotate(-180)" />
        </clipPath>
      </defs>
    </svg>
  );
}
