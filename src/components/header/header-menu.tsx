import classnames from "classnames";
type Props = {
  children: React.ReactNode;
  isMobile: boolean;
};
export default function HeaderMenu({ children, isMobile }: Props) {
  return (
    <nav
      className={classnames({
        "flex-grow": isMobile,
        "flex items-center": !isMobile,
      })}
    >
      {children}
    </nav>
  );
}
