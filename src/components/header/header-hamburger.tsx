import Icon from "@mdi/react";
import { mdiMenu } from "@mdi/js";
import Button from "@/components/button";
interface Props {
  toggle: () => void;
}
export default function HeaderHamburger({ toggle }: Props) {
  return (
    <div>
      <Button size="normal" onClick={toggle}>
        <Icon path={mdiMenu} size={1} color="#00C2FA" />
      </Button>
    </div>
  );
}
