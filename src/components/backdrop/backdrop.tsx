type Props = {
  onClose?: () => void;
};
export default function Backdrop({ onClose }: Props) {
  return (
    <div
      onClick={onClose}
      className="fixed inset-0 z-40 block bg-gray-900 xs:hidden opacity-70"
    ></div>
  );
}
