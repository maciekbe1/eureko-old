import Drawer from "@/components/drawer";
import HeaderNavbar from "@/components/header/navbar";
import HeaderHamburger from "@/components/header/header-hamburger";
import HeaderLogo from "@/components/header/header-logo";
import HeaderDrawerMenu from "@/components/header/header-menu";
import HeaderDrawerLogin from "@/components/header/drawer/header-drawer-login";
import HeaderDrawerItem from "@/components/header/drawer/header-drawer-item";
import { routes } from "@/constants/header-routes";

type Props = {
  isVisible: boolean;
  isViewportScrolled: boolean;
  onToggle: () => void;
  onClose: () => void;
  isMobile: boolean;
};
export default function HeaderDrawer({
  isVisible,
  isViewportScrolled,
  onToggle,
  isMobile,
  onClose,
}: Props) {
  return isMobile ? (
    <Drawer isVisible={isVisible} onClose={onClose}>
      <HeaderNavbar
        className="relative"
        isViewportScrolled={isViewportScrolled}
        isMobile={isMobile}
      >
        <HeaderHamburger
          onToggle={onToggle}
          isViewportScrolled={isViewportScrolled}
        />
        <HeaderLogo
          isViewportScrolled={isViewportScrolled}
          isMobile={isMobile}
        />
      </HeaderNavbar>
      <HeaderDrawerMenu isMobile={isMobile}>
        {routes.map(
          (item: { name: string; href: string; icon: string }, index) => (
            <HeaderDrawerItem
              name={item.name}
              href={item.href}
              key={index}
              icon={item.icon}
              onClose={onClose}
            />
          )
        )}
      </HeaderDrawerMenu>
      <HeaderDrawerLogin onClose={onClose} />
    </Drawer>
  ) : null;
}
