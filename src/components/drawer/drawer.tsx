import classnames from "classnames";
import Backdrop from "../backdrop";

type Props = {
  isVisible: boolean;
  onClose?: () => void;
  children: React.ReactNode;
};
export default function Drawer({ isVisible, onClose, children }: Props) {
  return (
    <div
      className={classnames(
        "fixed inset-0 bg-navy-700 xs:w-full w-60 ease-in-out duration-500",
        isVisible ? "left-0 " : "-left-60 xs:-left-full"
      )}
    >
      <div className="relative inset-0 z-50 flex flex-col h-full">
        {children}
      </div>
      {isVisible && <Backdrop onClose={onClose} />}
    </div>
  );
}
