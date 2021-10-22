import { forwardRef, SelectHTMLAttributes } from "react";
import { mdiChevronDown } from "@mdi/js";
import Icon from "@mdi/react";

// import css from "./select.module.css";
import classnames from "classnames";

const Select = forwardRef<HTMLSelectElement, SelectProps>((props, ref) => {
  const { className, options, placeholder, ...rest } = props;

  return (
    <div className="relative overflow-hidden">
      <select
        {...rest}
        ref={ref}
        required
        className={classnames(
          // css.select,
          "border-2 w-full font-bold font-mono bg-transparent placeholder-navyBlue-500 transition-colors pl-6 pr-12 py-2.5 hover:border-green-200 rounded-3xl focus:outline-none disabled:border-navyBlue-500 text-navyBlue-200 disabled:font-normal disabled:text-navyBlue-500 border-green-300 disabled:cursor-not-allowed",
          className
        )}
      >
        <Options placeholder={placeholder} options={options} />
      </select>
      <span className="absolute inline-block w-3 -translate-y-1/2 top-1/2 right-6">
        <Icon path={mdiChevronDown} size={1} color="#00C2FA" />
      </span>
    </div>
  );
});

function Options({ options, placeholder }: OptionsProps) {
  return (
    <>
      <option selected disabled hidden value="">
        {placeholder}
      </option>
      {options.map((option) => (
        <option className="font-bold text-navyBlue-200" value={option}>
          {option}
        </option>
      ))}
    </>
  );
}

export interface SelectProps extends SelectHTMLAttributes<HTMLSelectElement> {
  options: string[];
}

type OptionsProps = Pick<SelectProps, "options" | "placeholder">;

export default Select;
