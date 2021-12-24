import "../styles/globals.css";
import type { AppProps } from "next/app";
import { NativeBaseProvider } from "native-base";
import "react-datepicker/dist/react-datepicker.css";

const config = {
  dependencies: {
    "linear-gradient": require("expo-linear-gradient").LinearGradient,
  },
};

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <NativeBaseProvider config={config}>
      <Component {...pageProps} />
    </NativeBaseProvider>
  );
}

export default MyApp;
