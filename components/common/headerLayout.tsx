import classNames from "classnames";
import React,{ HTMLAttributes } from "react";
import { Header } from "./header";
import {Footer} from "@components/common/footer";

export function HeaderLayout(p:{headerProps?:object} & HTMLAttributes<HTMLDivElement>) {
  const { className,headerProps, children, ...props } = p;
  return (
    <div className="h-full w-full bg-slate-50 relative">
      <Header props={headerProps} />
      <div className={classNames("w-full mx-auto text-lg md:text-sm", className)} {...props}>
        { children }
      </div>
      <Footer />
    </div>
  );
}
