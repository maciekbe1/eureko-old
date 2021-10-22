import Icon from "@mdi/react";
import * as Mdi from "@mdi/js";

export default function DynamicIcon({ ...props }) {
  const { ...icons }: any = Mdi;
  const TheIcon = icons[props.path];

  return <Icon {...props} path={TheIcon} />;
}
