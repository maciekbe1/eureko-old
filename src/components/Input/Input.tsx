import { forwardRef, InputHTMLAttributes } from "react";
import { cls } from "@/util/cls";

interface Props extends InputHTMLAttributes<HTMLInputElement> {
  placeholder?: string;
  className?: string;
  name: string;
  error?: boolean;
  onChange?: React.ChangeEventHandler<HTMLInputElement>;
}
const classes = {
  base:
    "block w-full px-4 py-3 mb-3 leading-tight text-gray-700 bg-gray-200 border rounded appearance-none focus:outline-none focus:bg-white",
  error: "border-red-500",
};
const Input = forwardRef<HTMLInputElement, Props>(
  ({ placeholder, name, onChange, error, className, ...props }, ref) => {
    return (
      <input
        className={cls(`
        ${classes.base}
        ${error ? classes.error : ""}
        ${className}
    `)}
        placeholder={placeholder}
        name={name}
        onChange={onChange}
        {...props}
        ref={ref}
      />
    );
  }
);
Input.defaultProps = {
  className: "",
  error: false,
};
export default Input;
