import { ReactElement, ReactNode } from "react";
import { QueryClient, QueryClientProvider } from "react-query";
import { NextPage } from "next";
import type { AppProps } from "next/app";

import "antd/dist/antd.css";
import "../styles/globals.scss";

type NextPageWithLayout = NextPage & {
  getLayout?: (page: ReactElement) => ReactNode;
};

type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout;
};

const queryClient = new QueryClient();

function MyApp({ Component, pageProps }: AppPropsWithLayout) {
  const getLayout = Component.getLayout ?? ((page) => page);

  return getLayout(
    <QueryClientProvider client={queryClient}>
      <Component {...pageProps} />
    </QueryClientProvider>
  );
}

export default MyApp;
