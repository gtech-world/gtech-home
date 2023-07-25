import type { AppProps } from "next/app";
import Head from "next/head";
import "../styles/globals.css";
import classNames from "classnames";
import { Open_Sans } from "@next/font/google";
import {setLngConfig} from '../i18n/config'
import {useEffect, useState} from "react";

const os = Open_Sans({
  weight: ["300", "400", "500", "600", "700"],
  display: "auto",
  preload: true,
  variable: "--open-sans",
});
export default function App({ Component, pageProps }: AppProps) {
  const [visible,setVisible] = useState(false)
  useEffect(()=>{
    const lng = localStorage.getItem('lng')
    if(lng){
      setLngConfig(lng)
    }else{
      setLngConfig(window.navigator.language.indexOf('zh')>-1?'zh':'en')
    }
    setVisible(true)
  },[])
  if(!visible) return null
  return (
    <div className={classNames('font-OpenSans',os.variable)}>
      <Head>
        <title>GTech</title>
        多少啊
        <meta name="description" content="GTech" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="referrer" content="never" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      {<Component {...pageProps} />}
    </div>
  );
}
