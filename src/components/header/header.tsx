import HeaderHamburger from "@/components/header/header-hamburger";
import HeaderLogo from "@/components/header/header-logo";
import HeaderNavbar from "./header-navbar";
import HeaderDrawer from "./header-drawer";

import useHeaderState from "@/components/header/useHeaderState";
import useDrawerState from "@/components/drawer/useDrawerState";

export default function Header() {
  const { isMobile, isViewportScrolled } = useHeaderState();
  const { toggle, isVisible } = useDrawerState();
  return (
    <header>
      <HeaderNavbar
        className="fixed"
        isViewportScrolled={isViewportScrolled}
        isMobile={isMobile}
      >
        {isMobile && (
          <HeaderHamburger
            toggle={toggle}
            isViewportScrolled={isViewportScrolled}
          />
        )}
        <HeaderLogo isViewportScrolled={isViewportScrolled} />
      </HeaderNavbar>
      <HeaderDrawer
        isVisible={isVisible}
        isMobile={isMobile}
        isViewportScrolled={isViewportScrolled}
        toggle={toggle}
      />
      <div className="mt-16"></div>
    </header>
  );
}
