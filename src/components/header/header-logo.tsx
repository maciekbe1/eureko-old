import Typography from "@/components/typography";
import classnames from "classnames";
import Link from "next/link";

type Props = {
  isViewportScrolled?: boolean;
};

export default function HeaderLogo({ isViewportScrolled }: Props) {
  return (
    <Typography
      className={classnames("ease-in-out duration-300 cursor-pointer", {
        "text-3xl": !isViewportScrolled,
      })}
    >
      <Link href="/">logo</Link>
    </Typography>
  );
}
