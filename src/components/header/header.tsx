import HeaderHamburger from "@/components/header/header-hamburger";
import HeaderLogo from "@/components/header/header-logo";
import HeaderNavbar from "@/components/header/navbar";
import HeaderDrawer from "@/components/header/drawer";

import useHeaderState from "@/components/header/useHeaderState";
import useDrawerState from "@/components/drawer/useDrawerState";
import HeaderMenu from "./header-menu";
import HeaderNavbarItem from "./navbar/header-navbar-item";
import { routes } from "@/constants/header-routes";
import HeaderNavbarLogin from "@/components/header/navbar/header-navbar-login";

export default function Header() {
  const { isMobile, isViewportScrolled } = useHeaderState();
  const { onToggle, isVisible, onClose } = useDrawerState();
  return (
    <header>
      <HeaderNavbar
        className="fixed"
        isViewportScrolled={isViewportScrolled}
        isMobile={isMobile}
      >
        {isMobile && (
          <HeaderHamburger
            onToggle={onToggle}
            isViewportScrolled={isViewportScrolled}
          />
        )}
        <HeaderLogo
          isViewportScrolled={isViewportScrolled}
          isMobile={isMobile}
        />
        {!isMobile && (
          <HeaderMenu isMobile={isMobile}>
            {routes.map(
              (item: { name: string; href: string; icon: string }, index) => (
                <HeaderNavbarItem
                  name={item.name}
                  href={item.href}
                  key={index}
                  icon={item.icon}
                  onClose={onClose}
                />
              )
            )}
          </HeaderMenu>
        )}
        <HeaderNavbarLogin />
      </HeaderNavbar>
      <HeaderDrawer
        isVisible={isVisible}
        isMobile={isMobile}
        isViewportScrolled={isViewportScrolled}
        onToggle={onToggle}
        onClose={onClose}
      />
      <div className="mt-20"></div>
    </header>
  );
}
