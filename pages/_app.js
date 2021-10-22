import "tailwindcss/tailwind.css";
import LayoutIn from "@/components/layout/layout-in";
import LayoutOut from "@/components/layout/layout-out";

import { Provider as ReduxProvider } from "react-redux";
import { SessionProvider } from "next-auth/react";

import { store } from "@/store";

const layouts = {
  IN: LayoutIn,
  OUT: LayoutOut,
};

function MyApp({ Component, pageProps }) {
  const Layout = layouts[Component.layout] || ((children) => <>{children}</>);
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
