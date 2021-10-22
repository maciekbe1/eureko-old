import Link from "next/link";
import { useRouter } from "next/router";
import classnames from "classnames";

import Icon from "@/components/icon";

type Props = {
  name: string;
  href: string;
  icon?: string;
};
export default function HeaderItem({ href, name, icon }: Props) {
  const router = useRouter();
  return (
    <li
      className={classnames(
        router.pathname === href && "active",
        "first:pt-4 pb-4"
      )}
    >
      <div className="flex">
        {icon && <Icon size={1} path={icon} />}
        <Link href={href}>{name}</Link>
      </div>
    </li>
  );
}
