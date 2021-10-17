import { forwardRef, ButtonHTMLAttributes } from "react";

import classnames from "classnames";

type Ref = HTMLButtonElement;

interface Base extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
  className?: string;
  size: "small" | "normal" | "large";
  disabled?: boolean;
}

type Conditional =
  | {
      variant: "primary" | "secondary" | "danger";
      pill?: boolean;
      outline?: boolean;
    }
  | {
      variant?: "primary" | "secondary" | "danger";
      pill?: never;
      outline?: never;
    };

const classes = {
  base: "focus:outline-none transition ease-in-out duration-300 rounded",
  disabled: "opacity-50 cursor-not-allowed",
  pill: "rounded-full",
  size: {
    small: "px-2 py-1 text-sm",
    normal: "px-4 py-2",
    large: "px-8 py-3 text-lg",
  },
  variant: {
    primary:
      "bg-blue-500 hover:bg-blue-800 focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 text-white",
    secondary:
      "bg-gray-200 hover:bg-gray-800 focus:ring-2 focus:ring-gray-500 focus:ring-opacity-50 text-gray-900 hover:text-white",
    danger:
      "bg-red-500 hover:bg-red-800 focus:ring-2 focus:ring-red-500 focus:ring-opacity-50 text-white",
  },
  outline: {
    primary:
      "bg-transparent hover:bg-blue-500 text-blue-700 hover:text-white border border-blue-500 hover:border-transparent",
    secondary:
      "bg-transparent hover:bg-gray-500 text-gray-700 hover:text-white border border-gray-500 hover:border-transparent",
    danger:
      "bg-transparent hover:bg-red-500 text-red-700 hover:text-white border border-red-500 hover:border-transparent",
  },
};

type Props = Conditional & Base;
const Button = forwardRef<Ref, Props>(
  (
    {
      children,
      onClick,
      variant,
      disabled,
      size,
      type,
      className,
      pill,
      outline,
      ...props
    },
    ref
  ): JSX.Element => {
    return (
      <button
        onClick={onClick}
        ref={ref}
        className={classnames(
          !variant && classes.base,
          variant && !outline && classes.variant[variant],
          classes.size[size] || classes.size.normal,
          pill && classes.pill,
          disabled && classes.disabled,
          variant && outline && classes.outline[variant],
          className
        )}
        disabled={disabled}
        type={type}
        {...props}
      >
        {children}
      </button>
    );
  }
);
Button.defaultProps = {
  children: "",
  type: undefined,
  onClick: undefined,
  variant: undefined,
  disabled: false,
  size: "normal",
  className: "",
  pill: false,
  outline: false,
};
export default Button;
