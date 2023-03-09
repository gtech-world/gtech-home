import classNames from "classnames";
import React, {HTMLAttributes, useEffect, useRef, useState} from "react";
import { Header } from "./header";
import {Footer} from "@components/common/footer";
import {Policy} from "@components/common/policy";
import {TopTips} from "@components/common/topTips";

export function HeaderLayout(p:{headerProps?:object} & HTMLAttributes<HTMLDivElement>) {
  const { className,headerProps, children, ...props } = p;
  const ref = useRef()
  const [tipsVisible,setTipsVisible] = useState(true)
  useEffect(()=>{
    const tips = localStorage.getItem('tips')
    setTipsVisible(!tips)
  },[])
  return (
    <div className="h-full w-full bg-slate-50 relative">
      <Header props={headerProps} />
      <div className={classNames("w-full mx-auto text-lg md:text-sm", className)} {...props}>
        { children }
      </div>
      <Footer />
      {
        !tipsVisible && <Policy />
      }
      <TopTips onClose={()=>setTipsVisible(false)} />
    </div>
  );
}
