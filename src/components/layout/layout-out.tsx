import Meta from "@/components/meta";
import Header from "@/components/header";

// import { useSession } from "next-auth/react";

type Props = {
  children: JSX.Element;
};

export default function Layout({ children }: Props) {
  return (
    <>
      <Meta />
      <Header />
      <main className="px-4 mx-auto md:container xs:px-2">{children}</main>
    </>
  );
}
