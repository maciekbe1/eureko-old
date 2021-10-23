import Icon from "@/components/icon";
import Link from "next/link";
import Typography from "@/components/typography";
type Props = {
  onClose: () => void;
};
export default function HeaderLogin({ onClose }: Props) {
  return (
    <div className="flex justify-center py-6">
      <Link href="/auth/signin">
        <div
          className="flex items-center justify-center w-2/3 p-2 bg-gray-200 rounded-full cursor-pointer hover:bg-navy-300 hover:text-gray-300"
          onClick={onClose}
        >
          <Icon size={0.8} path="mdiLoginVariant" />
          <Typography className="ml-3">Login</Typography>
        </div>
      </Link>
    </div>
  );
}
