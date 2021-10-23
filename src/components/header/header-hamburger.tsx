import Button from "@/components/button";
import Icon from "@/components/icon";

interface Props {
  onToggle: () => void;
  isViewportScrolled: boolean;
}

export default function HeaderHamburger({
  onToggle,
  isViewportScrolled,
}: Props) {
  return (
    <Button onClick={onToggle}>
      <Icon
        path="mdiMenu"
        size={isViewportScrolled ? 1 : 1.5}
        className="text-gray-200"
      />
    </Button>
  );
}
