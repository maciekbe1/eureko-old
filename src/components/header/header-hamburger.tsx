import Button from "@/components/button";
import Icon from "@/components/icon";

interface Props {
  toggle: () => void;
  isViewportScrolled: boolean;
}

export default function HeaderHamburger({ toggle, isViewportScrolled }: Props) {
  return (
    <Button onClick={toggle}>
      <Icon
        path="mdiMenu"
        size={isViewportScrolled ? 1 : 1.5}
        color="#00C2FA"
      />
    </Button>
  );
}
