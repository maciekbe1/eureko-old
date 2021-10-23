import Typography from "@/components/typography";
import classnames from "classnames";
import Link from "next/link";

type Props = {
  isViewportScrolled?: boolean;
  isMobile: boolean;
};

export default function HeaderLogo({ isViewportScrolled, isMobile }: Props) {
  return (
    <Typography
      className={classnames(
        "ease-in-out duration-500 cursor-pointer text-gray-200",
        {
          "text-3xl": !isViewportScrolled,
          "absolute left-4": !isMobile,
        }
      )}
    >
      <Link href="/">logo</Link>
    </Typography>
  );
}
