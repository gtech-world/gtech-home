import type { AppProps } from "next/app";
import Head from "next/head";
import "../styles/globals.css";
import classNames from "classnames";
import { Open_Sans } from "@next/font/google";
import '../i18n/config'

const os = Open_Sans({
  weight: ["300", "400", "500", "600", "700"],
  display: "auto",
  preload: true,
  variable: "--open-sans",
});
export default function App({ Component, pageProps }: AppProps) {
  return (
    <div className={classNames('font-OpenSans',os.variable)}>
      <Head>
        <title>Carbon3</title>
        <meta name="description" content="Carbon3 Home" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      {<Component {...pageProps} />}
    </div>
  );
}
