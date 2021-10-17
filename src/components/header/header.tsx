import React from "react";
import HeaderHamburger from "./header-hamburger";
import HeaderLogo from "./header-logo";
import HeaderMenu from "./header-menu";
import useHeader from "./useHeaderState";
import classnames from "classnames";

export default function Header() {
  const { isVisible, isViewportScrolled, hideMenu, toggle } = useHeader();

  return (
    <header
      className={classnames(
        "fixed top-0 xl:transition-all",
        isViewportScrolled && "bg-gray-600"
      )}
    >
      <HeaderHamburger toggle={toggle} />
      <HeaderLogo />
      <HeaderMenu />
    </header>
  );
}
