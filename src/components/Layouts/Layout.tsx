import Meta from "@/components/Meta";
import Sidebar from "@/components/Sidebar";
import Navbar from "@/components/Navbar";

import { useSession } from "next-auth/react";

type Props = {
  children: JSX.Element;
};

export default function Layout({ children }: Props) {
  const { data: session } = useSession();
  return (
    <>
      <Meta />
      {session ? <Sidebar /> : <Navbar />}
      {children}
    </>
  );
}
