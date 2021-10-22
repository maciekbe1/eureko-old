import classnames from "classnames";

type Props = {
  isVisible: boolean;
  children: React.ReactNode;
};
export default function Drawer({ isVisible, children }: Props) {
  return (
    <div
      className={classnames(
        "fixed inset-0 bg-gray-600 xs:w-full w-60 ease-in-out duration-300",
        isVisible ? "left-0 " : "-left-60 xs:-left-full"
      )}
    >
      {children}
    </div>
  );
}
