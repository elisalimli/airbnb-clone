import React, { ButtonHTMLAttributes } from "react";
import { FontWeightProps } from "./shared/classNames";
import Spinner from "./Spinner";

const sizeClassnames = {
  big: "py-2 px-6 text-sm rounded-lg",
  small: "px-2 py-1 text-xs rounded-md",
};

const styles = {
  general:
    "text-button rounded-5 font-semibold transition-colors duration-300 select-none focus:ring-4 outline-no-chrome",
  variants: {
    primary:
      "bg-primary hover:bg-primary-hover disabled:bg-primary-disabled focus:ring-primary",
  },
  center: "flex items-center justify-center",
};

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> &
  FontWeightProps & {
    isLoading?: boolean;
    centered?: boolean;
    size?: keyof typeof sizeClassnames;
    variant?: keyof typeof styles.variants;
    wrapperClassname?: string;
  };

const Button: React.FC<ButtonProps> = ({
  isLoading,
  centered,
  size,
  variant = "primary",
  wrapperClassname = "",
  children,
  ...props
}) => {
  const buttonStyles = {
    //  useMemo(
    // () => ({
    wrapper: `${centered && "flex justify-center"} ${wrapperClassname}`,
    button: `${styles.general} ${styles.variants[variant]} ${styles.center} ${sizeClassnames[size]}`,
    loading: isLoading ? "opacity-0" : null,
    // }),
    // [isLoading]
    // );
  };

  return (
    <div className={buttonStyles.wrapper}>
      <button
        className={buttonStyles.button}
        disabled={isLoading}
        type="button"
        {...props}
      >
        <span className={buttonStyles.loading}>{children}</span>
        {isLoading ? (
          <span className="absolute">
            <Spinner />
          </span>
        ) : null}
      </button>
    </div>
  );
};

export default Button;
