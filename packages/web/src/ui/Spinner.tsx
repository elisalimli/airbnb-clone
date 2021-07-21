import React from "react";

const sizes = {
  "2": "h-2 w-2",
  "4": "h-4 w-4",
  "5": "h-5 w-5",
};

interface SpinnerProps {
  size?: keyof typeof sizes;
  center?: boolean;
  color?: string;
}

const Spinner: React.FC<SpinnerProps> = ({
  size = "4",
  center,
  color = "text-black",
}) => {
  return (
    <div
      className={`${
        center ? "flex items-center justify-center min-h-full" : ""
      }`}
    >
      <svg
        className={`animate-spin ${color} ${sizes[size]}`}
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
      >
        <path
          fill="currentColor"
          d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
        />
      </svg>
    </div>
  );
};

export default Spinner;
