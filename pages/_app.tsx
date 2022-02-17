import "../styles/globals.css";
import type { AppProps } from "next/app";
import { NativeBaseProvider } from "native-base";
import "react-datepicker/dist/react-datepicker.css";
import * as React from "react";

const config = {
  dependencies: {
    "linear-gradient": require("react-native-linear-gradient").default,
  },
};

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <NativeBaseProvider config={config} isSSR>
      <Component {...pageProps} />
    </NativeBaseProvider>
  );
}

export default MyApp;
