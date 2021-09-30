import Meta from "@/components/Meta";
import Navbar from "@/components/Navbar";

type Props = {
  children: JSX.Element;
};

export default function Layout({ children }: Props) {
  return (
    <>
      <Meta />
      <Navbar />
      {children}
    </>
  );
}
