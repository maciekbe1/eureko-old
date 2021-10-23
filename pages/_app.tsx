import "tailwindcss/tailwind.css";
import LayoutIn from "@/components/layout/layout-in";
import LayoutOut from "@/components/layout/layout-out";

import { Provider as ReduxProvider } from "react-redux";
import { SessionProvider } from "next-auth/react";

import { store } from "@/store";
import type { AppProps } from "next/app";
import { NextPage } from "next";

const layouts: any = {
  IN: LayoutIn,
  OUT: LayoutOut,
};
type Page<P = {}> = NextPage<P> & {
  layout?: any;
};

type Props = AppProps & {
  Component: Page;
};

function MyApp({ Component, pageProps }: Props) {
  const Layout =
    layouts[Component.layout || "OUT"] ||
    ((children: React.ReactNode) => <>{children}</>);
  return (
    <SessionProvider session={pageProps.session}>
      <ReduxProvider store={store}>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </ReduxProvider>
    </SessionProvider>
  );
}

export default MyApp;
