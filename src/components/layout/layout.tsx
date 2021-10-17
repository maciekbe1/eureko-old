import Meta from "@/components/meta";
import Sidebar from "@/components/sidebar";
import Header from "@/components/header";

import { useSession } from "next-auth/react";

type Props = {
  children: JSX.Element;
};

export default function Layout({ children }: Props) {
  const { data: session } = useSession();
  return (
    <>
      <Meta />
      {session ? <Sidebar /> : <Header />}
      {children}
    </>
  );
}
