import Drawer from "@/components/drawer";
import HeaderNavbar from "@/components/header/header-navbar";
import HeaderHamburger from "@/components/header/header-hamburger";
import HeaderLogo from "@/components/header/header-logo";
import HeaderMenu from "@/components/header/header-menu";
type Props = {
  isVisible: boolean;
  isViewportScrolled: boolean;
  toggle: () => void;
  isMobile: boolean;
};
export default function HeaderDrawer({
  isVisible,
  isViewportScrolled,
  toggle,
  isMobile,
}: Props) {
  return isMobile ? (
    <Drawer isVisible={isVisible}>
      <HeaderNavbar
        className="relative"
        isViewportScrolled={isViewportScrolled}
        isMobile={isMobile}
      >
        <HeaderHamburger
          toggle={toggle}
          isViewportScrolled={isViewportScrolled}
        />
        <HeaderLogo isViewportScrolled={isViewportScrolled} />
      </HeaderNavbar>
      <HeaderMenu />
    </Drawer>
  ) : null;
}
