import "tailwindcss/tailwind.css";
import Layout from "@/components/layout";

import { Provider as ReduxProvider } from "react-redux";
import { SessionProvider } from "next-auth/react";

import { store } from "@/store";

function MyApp({ Component, pageProps }) {
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
