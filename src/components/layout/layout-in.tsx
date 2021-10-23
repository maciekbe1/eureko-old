import Meta from "@/components/meta";
import Sidebar from "@/components/sidebar";

// import { useSession } from "next-auth/react";

type Props = {
  children: JSX.Element;
};

export default function Layout({ children }: Props) {
  return (
    <>
      <Meta />
      <Sidebar />
      <main className="mx-auto lg:px-4 md:container xs:px-2">{children}</main>
    </>
  );
}
