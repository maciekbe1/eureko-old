import React from "react";
import classnames from "classnames";

type Props = {
  children: React.ReactNode;
  className?: string;
  isViewportScrolled: boolean;
  isMobile: boolean;
};

export default function HeaderNavbar({
  children,
  className,
  isViewportScrolled,
  isMobile,
}: Props) {
  return (
    <div
      className={classnames(
        className,
        "shadow-lg ease-in-out overflow-hidden top-0 duration-300 w-full ",
        {
          "bg-white py-2": isViewportScrolled,
          "bg-blue-100 py-3": !isViewportScrolled,
        }
      )}
    >
      <div
        className={classnames("flex items-center xs:px-2 px-4", {
          "container mx-auto xs:px-2 px-4": !isMobile,
        })}
      >
        {children}
      </div>
    </div>
  );
}
