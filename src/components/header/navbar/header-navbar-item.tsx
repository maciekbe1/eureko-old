import Link from "next/link";
import { useRouter } from "next/router";
import classnames from "classnames";

import Icon from "@/components/icon";
import Typography from "@/components/typography";

type Props = {
  name: string;
  href: string;
  icon?: string;
  onClose: () => void;
};
export default function HeaderNavbarItem({ href, name, icon, onClose }: Props) {
  const router = useRouter();
  return (
    <Link href={href}>
      <div
        className={classnames(
          router.pathname === href && "bg-gray-800 rounded-2xl",
          "text-gray-400 hover:text-gray-200 cursor-pointer first:ml-0 ml-4 hover:underline"
        )}
        onClick={onClose}
      >
        <div className="flex items-center">
          {icon && (
            <div
              className={classnames(
                "p-2 rounded-full",
                router.pathname === href && "bg-navy-700"
              )}
            >
              <Icon size={0.7} path={icon} />
            </div>
          )}
          <Typography align="center" className="pr-4 ml-2 text-sm">
            {name}
          </Typography>
        </div>
      </div>
    </Link>
  );
}
