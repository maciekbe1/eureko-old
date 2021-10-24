import Button from "@/components/button";
import Icon from "@/components/icon";
import classNames from "classnames";

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
        className={classNames("duration-500 ease-in-out", {
          "text-gray-200": !isViewportScrolled,
          "text-navy-500": isViewportScrolled,
        })}
      />
    </Button>
  );
}
