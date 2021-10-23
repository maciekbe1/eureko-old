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
export default function HeaderDrawerItem({ href, name, icon, onClose }: Props) {
  const router = useRouter();
  return (
    <Link href={href}>
      <div
        className={classnames(
          router.pathname === href && "bg-gray-800 border-l-8 border-navy-400",
          router.pathname !== href && "pl-2",
          "py-2 text-gray-400 hover:text-gray-200 cursor-pointer"
        )}
        onClick={onClose}
      >
        <div className="flex items-center">
          {icon && (
            <div
              className={classnames(
                "p-2 mx-4 rounded-full",
                router.pathname === href && "bg-navy-700"
              )}
            >
              <Icon size={0.7} path={icon} />
            </div>
          )}
          <Typography align="center" className="ml-4 text-sm">
            {name}
          </Typography>
        </div>
      </div>
    </Link>
  );
}
