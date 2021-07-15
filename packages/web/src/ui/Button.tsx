import React, { ButtonHTMLAttributes, useMemo, useState } from "react";
import Loader from "./Loader";
import { FontWeightProps } from "./shared/classNames";

const styles = {
  general:
    "text-button rounded-5 font-semibold transition-colors duration-300 select-none focus:ring-4",
  variants: {
    primary:
      "bg-primary hover:bg-primary-hover disabled:bg-primary-disabled focus:ring-primary",
  },
};

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> &
  FontWeightProps & {
    isLoading?: boolean;
    centered?: boolean;
    width?: number;
    height?: number;
    variant?: keyof typeof styles.variants;
    // display:block;
  };

const Button: React.FC<ButtonProps> = ({
  isLoading,
  centered,
  width,
  height,
  variant = "primary",

  children,

  ...props
}) => {
  const buttonStyles = useMemo(
    () => ({
      wrapper: `${centered && "flex justify-center"}`,
      button: `${styles.general} ${styles.variants[variant]}`,
      loading: isLoading ? "opacity-0" : "flex items-center justify-center",
    }),
    [isLoading]
  );

  return (
    <div className={buttonStyles.wrapper}>
      <button
        style={{
          width,
          height,
        }}
        className={buttonStyles.button}
        disabled={isLoading}
        type="button"
        {...props}
      >
        {/* {isLoading ? null : (
          <span className={buttonStyles.loading}>{children}</span>
        )}
        {isLoading ? (
          <span className="absolute">
            <Loader />
          </span>
        ) : null} */}

        <span className={isLoading ? "opacity-0" : `flex items-center`}>
          {children}
        </span>
        {isLoading ? (
          <span className={`absolute`}>
            <Loader />
          </span>
        ) : null}
      </button>
    </div>
  );
};

export default Button;
